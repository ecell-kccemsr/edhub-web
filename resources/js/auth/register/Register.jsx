import React from "react";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
const Register = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("SUBMITTED");
    };
    return (
        <Container
            style={{ boxShadow: "none", marginTop: "20px" }}
            className="auth"
        >
            <h3 className="auth-brand">
                edu<span>hub</span>
            </h3>
            <Row className="align-items-center">
                <Col sm="12" md="5">
                    <h4 className="auth-header">
                        Welcome to edu<span>hub</span>
                    </h4>
                    <h2 className="auth-subheader">Sign Up</h2>
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
                                name="cpassword"
                                id="cpassword"
                                placeholder="Confirm Password"
                                className="auth-input"
                            />
                        </FormGroup>

                        <button className="auth-btn" type="submit">
                            next
                        </button>
                    </form>
                </Col>
                <Col
                    sm="12"
                    md={{ size: 6, offset: 1 }}
                    className="auth-img-col"
                >
                    <img
                        src="https://i.ibb.co/D14BMSg/Image-1.png"
                        alt=""
                        className="w-100"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
