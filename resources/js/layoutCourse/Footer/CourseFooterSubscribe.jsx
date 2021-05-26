import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, FormGroup, Input, Button } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const CourseFooterSubscribe = () => {
    const [email, setEmail] = useState("");

    // const handleFooterForm = e => {
    //     e.preventDefault();
    //     e.target.reset();
    // };
    const handleFooterForm = e => {
                e.preventDefault();
                let form = e.nativeEvent.target;
                let data = new FormData(form);
                axios
                    .post("/api/register_for_free_updates/add", data)
                    .then(res => {
                        toast.success("You have subscribed successfully !");
                        form.reset();
                    })
                    .catch(err => toast.error(err.response.data.message));
            };

    return (
        <>
        <ToastContainer />
        <footer className="footer-course-section pb-5 pt-2">
            <Container style={{ boxShadow: "none" }}>
                <Row className="justify-content-center">
                    <Col sm="12" md="8" lg="6">
                        {/* Footer-Title */}
                        <h2 className="footer-course-header">
                            Sign up to our Newsletter
                        </h2>
                        <p className="footer-course-paragraph">
                        Free Ebooks  -  Free courses  - Free Articles
                        </p>
                        {/* Footer-Form */}
                        <Row className=" footer-course-row">
                            <Col sm="12" md="12">
                            <form onSubmit={handleFooterForm}>
                                <FormGroup>
                                    <Input
                                     className="footer-course-email-input"
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="someone@gmail.com"
                                    />
                                <Button
                                  className="footer-course-btn"
                                    type="submit"
                                    value="submit"
                                > 
                                    Submit
                                </Button>
                                </FormGroup>
                            </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    );
};

export default CourseFooterSubscribe;
