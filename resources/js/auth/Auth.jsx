import React, { useState } from "react";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import http from "../utils/http";

const Auth = () => {
    let history = useHistory();

    const [type, setType] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember_me, setRememberMe] = useState(false);

    const toggleType = () =>{
        if(type=="login")setType("register")
        else setType("login")
    }

    const handleLogin = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        http.post("auth/login", data)
            .then(res => {
                const accessToken = res.data.access_token;
                localStorage.setItem("accessToken", accessToken);
                window.location.href = "/";
            })
            .catch(err => console.log(err));
    };

    const handleRegister = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        http.post("auth/signup", data)
            .then(res => {
                const accessToken = res.data.access_token;
                localStorage.setItem("accessToken", accessToken);
                window.location.href = "/";
            })
            .catch(err => console.log(err.response.data.message));
    };

    if(type=='login'){
        return(
            <>
            <Container style={{ boxShadow: "none" }} className="auth">
                <Row className="align-items-center">
                    <Col sm="12" md="12">
                        <h4 className="auth-header ">
                            Welcome to edu<span>hub</span>
                        </h4>
                        <h2 className="auth-subheader">Login</h2>
                        <form onSubmit={handleLogin}>
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
                                    <Link to="/forgot-password">Forgot Password</Link>
                                </Col>
                            </Row>
                            <button className="auth-btn" type="submit">
                                submit
                            </button>

                            <p className="register-login-link mt-3">
                                Don't have an account?{" "}
                                <Link onClick={toggleType} to="#">Get Started</Link>
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
                                        src="/images/FacebookLogo.png"
                                        alt="signInFacebook"
                                    />
                                </a>
                                <a
                                    href="/login/google/redirect"
                                    target="_blank"
                                >
                                    <img
                                        className="social-sign-in"
                                        src="/images/signInGoogle.png"
                                        alt="signInGoogle"
                                    />
                                </a>
                            </div>
                        </form>
                    </Col>
                    {/* <Col
                        sm="12"
                        md={{ size: 6, offset: 2 }}
                        className="auth-img-col"
                    >
                        
                        <img src="/images/loginBackground.png" alt="loginBackground" className="w-100" />
                    </Col> */}
                </Row>
            </Container>
        </>
        )
    }
    
    return(
        <>
            <Container
                style={{ boxShadow: "none", marginTop: "0" }}
                className="auth"
            >
                <Row className="align-items-center">
                    <Col sm="12" md="12">
                        <h4 className="auth-header text-center pb-0">
                            Welcome to edu<span>hub</span>
                        </h4>
                        <h2
                            className="auth-subheader  text-center pb-0"
                            style={{ marginBottom: "25px" }}
                        >
                            Sign Up
                        </h2>
                        <form onSubmit={handleRegister}>
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
                                Already have an account?
                                <p style={{cursor:"pointer", color:"#F05454"}} onClick={toggleType}>Login</p>
                            </p>
                            <p className="register-login-link">
                                Register With Your Social Account
                            </p>
                            <div style={{ marginLeft: "40%" }}>
                                <a
                                    href="/login/Facebook/redirect"
                                    target="_blank"
                                >
                                    <img
                                        className="social-sign-in"
                                        src="/images/FacebookLogo.png"
                                        alt="signInFacebook"
                                    />
                                </a>
                                <a
                                    href="/login/google/redirect"
                                    target="_blank"
                                >
                                    <img
                                        className="social-sign-in"
                                        src="/images/signInGoogle.png"
                                        alt="signInGoogle"
                                    />
                                </a>
                            </div>
                        </form>
                    </Col>
                    {/* <Col
                        sm="12"
                        md={{ size: 6, offset: 1 }}
                        className="auth-img-col"
                    >
                        <img
                            src="/images/register-background.png"
                            alt="registerBackground"
                            className="w-100"
                        />
                    </Col> */}
                </Row>
            </Container>
        </>
    )
}

export default Auth
