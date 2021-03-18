import React, { useState } from "react";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [gender, setGender] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        const data = JSON.stringify({
            name,
            email, 
            password,
            gender
        });
        axios
            .post("http://localhost:8000/api/auth/signup", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
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
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </FormGroup>
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
                        <FormGroup>
                            <Input
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                placeholder="Confirm Password"
                                className="auth-input"
                                value={cpassword}
                                onChange={e => setCPassword(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="gender"
                                        value={gender}
                                        onChange={e =>
                                            setGender(e.target.value)
                                        }
                                    />{" "}
                                    Male
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="gender"
                                        value={gender}
                                        onChange={e =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    Female
                                </Label>
                            </FormGroup>
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
