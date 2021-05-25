import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import http from "../../utils/http";
const request = ({toggleLogin}) => {
     
    const handleRequestForm = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        axios
            .post("/api/request_call/add", data)
            .then(res => {
                toggleLogin();
                toast.success("We Will Contact You Shortly !");
                form.reset();
            })
            .catch(err => toast.error(err.response.data.message));
    };

    return (
        <>
            {/* <h3 className="auth-brand">
                edu<span>hub</span>
            </h3> */}
            <Container style={{ boxShadow: "none" }} className="auth">
                <Row className="align-items-center">
                    <Col sm="12" md="12">
                        <h2 style={{fontWeight:"700"}}>Request a call back</h2>
                        <p>Let us help you guide towards your career path</p>
                        <form onSubmit={handleRequestForm}>
                            <FormGroup>
                            <Input
                                        type="name"
                                        name="name"
                                        id="exampleName"
                                        placeholder="Name"
                                         className="auth-input"
                                    />
                            </FormGroup>
                            <FormGroup>
                                     <Input
                                        type="number"
                                        name="mobile_no"
                                        placeholder="Mobile Number"
                                    />
                                </FormGroup>
                            <Row className="justify-content-between auth-row">
                                <Col sm="12">
                                    <ul>
                                        <li>
                                            <p>
                                            Non-biased career guidance
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Counselling based on your skills and preference
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            No repetitive calls, only as per convenience
                                            </p>
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>
                                        We will give you a call between 9 AM to 9 PM.
                                        </strong>
                                    </p>
                                </Col>
                            </Row>
                            <button className="auth-btn" type="submit">
                            Request a call back
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default request;


