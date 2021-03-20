import React, { useState } from "react";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const Login = () => {
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember_me, setRememberMe] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        // const data = JSON.stringify({
        //     email,
        //     password,
        //     remember_me
        // });
        axios
            .post("http://localhost:8000/api/auth/login", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if (res.data?.access_token) {
                    history.push("/");
                }
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
                        </form>
                    </Col>
                    <Col
                        sm="12"
                        md={{ size: 6, offset: 2 }}
                        className="auth-img-col"
                    >
                        <img
                            src="https://i.ibb.co/9nsT3dm/Image.png"
                            alt=""
                            className="w-100"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
