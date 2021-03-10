import React from "react";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
const Login = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("SUBMITTED");
    };
    return (
        <Container style={{ boxShadow: "none" }} className="auth">
            <h3 className="auth-brand">
                edu<span>hub</span>
            </h3>
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
                        <Row className="justify-content-between auth-row">
                            <Col sm="12" md="6">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />
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
    );
};

export default Login;
