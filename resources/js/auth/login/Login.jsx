import React, { useState } from "react";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import loginBackground from "../../Images/loginBackground.png";
import http from "../../utils/http";
import signInGoogle from "../../Images/signInGoogle.png";
import facebookLogo from "../../Images/FacebookLogo.png";
const Login = () => {
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember_me, setRememberMe] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        http.post("auth/login", data)
            .then(res => {
                const accessToken = res.data.access_token;
                localStorage.setItem("accessToken", accessToken);
                window.location.href = "/landingPage";
            })
            .catch(err => console.log(err));
    };
    return (
        <>
            <h3 className="auth-brand">
                edu<span>hub</span>
            </h3>
            <Container style={{ boxShadow: "none" }} className="auth">
                <Row className="align-items-center">
                    <Col sm="12" md="4">
                        <h4 className="auth-header ">
                            Welcome to edu<span>hub</span>
                        </h4>
                        <h2 className="auth-subheader">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="auth-input"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="auth-input"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </FormGroup>
                            <Row className="justify-content-between auth-row">
                                <Col sm="12" md="6">
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="remember_me"
                                                checked={remember_me}
                                                onChange={e =>
                                                    setRememberMe(!remember_me)
                                                }
                                            />
                                            Remember Me
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="5">
                                    <Link to="/forgot">Forgot Password</Link>
                                </Col>
                            </Row>
                            <button className="auth-btn" type="submit">
                                submit
                            </button>

                            <p className="register-login-link mt-3">
                                Don't have an account?{" "}
                                <Link to="/register">Get Started</Link>
                            </p>
                            <p className="register-login-link">
                                {" "}
                                Login With Your Social Account
                            </p>
                            <div style={{ marginLeft: "40%" }}>
                                <a
                                    href="/login/Facebook/redirect"
                                    target="_blank"
                                >
                                    <img
                                        className="social-sign-in"
                                        src={facebookLogo}
                                        alt="signInFacebook"
                                    />
                                </a>
                                <a
                                    href="/login/google/redirect"
                                    target="_blank"
                                >
                                    <img
                                        className="social-sign-in"
                                        src={signInGoogle}
                                        alt="signInGoogle"
                                    />
                                </a>
                            </div>
                        </form>
                    </Col>
                    <Col
                        sm="12"
                        md={{ size: 6, offset: 2 }}
                        className="auth-img-col"
                    >
                        <img src={loginBackground} alt="" className="w-100" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
