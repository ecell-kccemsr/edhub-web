import React, { useState } from "react";
import { Container, Row, Col, FormGroup, Input, Button } from "reactstrap";

const CourseFooterSubscribe = () => {
    const [email, setEmail] = useState("");

    const handleFooterForm = e => {
        e.preventDefault();
        e.target.reset();
    };

    return (
        <footer className="footer-course-section pb-5 pt-2">
            <Container style={{ boxShadow: "none" }}>
                <Row className="justify-content-center">
                    <Col sm="12" md="8" lg="6">
                        {/* Footer-Title */}
                        <h2 className="footer-course-header">
                            Sign up to our Newsletter
                        </h2>
                        <p className="footer-course-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Habitant volutpat elementum facilisi mattis
                            et. At
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
                                            id="email"
                                            defaultValue={email}
                                            onBlur={e =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="someone@gmail.com"
                                        />
                                        <Button className="footer-course-btn">
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
    );
};

export default CourseFooterSubscribe;
