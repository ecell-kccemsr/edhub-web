import React, { useEffect } from "react";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import registerBackground from "../../Images/registerBackground.png";
import signInGoogle from "../../Images/signInGoogle.png";
import facebookLogo from "../../Images/FacebookLogo.png";
import http from "../../utils/http";
const Register = () => {
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        http.post("auth/signup", data)
            .then(res => {
                const accessToken = res.data.access_token;
                localStorage.setItem("accessToken", accessToken);
                window.location.href = "/landingPage";
            })
            .catch(err => console.log(err.response.data.message));
    };

    return (
        <>
            <h3 className="auth-brand">
                edu<span>hub</span>
            </h3>
            <Container
                style={{ boxShadow: "none", marginTop: "0" }}
                className="auth"
            >
                <Row className="align-items-center">
                    <Col sm="12" md="5">
                        <h4 className="auth-header text-center pb-0">
                            Welcome to edu<span>hub</span>
                        </h4>
                        <h2
                            className="auth-subheader  text-center pb-0"
                            style={{ marginBottom: "25px" }}
                        >
                            Sign Up
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="auth-input"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="auth-input"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="auth-input"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="password"
                                    name="confirm_password"
                                    id="confirm_password"
                                    placeholder="Confirm Password"
                                    className="auth-input"
                                />
                            </FormGroup>
                            <FormGroup
                                tag="fieldset"
                                className="register-gender-block"
                            >
                                <Label className="register-gender-label">
                                    Gender
                                </Label>
                                <div className="register-gender-radio">
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="radio"
                                                name="gender"
                                                value="Male"
                                            />
                                            Male
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="radio"
                                                name="gender"
                                                value="Female"
                                            />
                                            Female
                                        </Label>
                                    </FormGroup>
                                </div>
                            </FormGroup>

                            <button className="auth-btn" type="submit">
                                next
                            </button>
                            <p className="register-login-link">
                                Already have an account?{" "}
                                <Link to="/login">Login</Link>
                            </p>
                            <p className="register-login-link">
                                {" "}
                                Register With Your Social Account
                            </p>
                            <div style={{ marginLeft: "40%" }}>
                                <a
                                    href="/login/Facebook/redirect"
                                    target="_blank"
                                >
                                    <img
                                        className="social-sign-in"
                                        src="/Images/FacebookLogo.png"
                                        alt="signInFacebook"
                                    />
                                </a>
                                <a
                                    href="/login/google/redirect"
                                    target="_blank"
                                >
                                    <img
                                        className="social-sign-in"
                                        src="/Images/signInGoogle.png"
                                        alt="signInGoogle"
                                    />
                                </a>
                            </div>
                        </form>
                    </Col>
                    <Col
                        sm="12"
                        md={{ size: 6, offset: 1 }}
                        className="auth-img-col"
                    >
                        <img
                            src="/Images/registerBackground.png"
                            alt="registerBackground"
                            className="w-100"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;
