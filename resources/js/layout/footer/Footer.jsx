import React, { useState } from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleFooterForm = e => {
        e.preventDefault();
        e.target.reset();
    };

    return (
        <footer className="footer-section pb-5 pt-2">
            <Container style={{ boxShadow: "none" }}>
                <Row className="justify-content-center">
                    <Col sm="12" md="6">
                        {/* Footer-Title */}
                        <h2 className="footer-header">
                            Subscribe to our Newsletter for latest updates
                        </h2>
                        {/* Footer-Form */}
                        <Row className="justify-content-center footer-row">
                            <Col sm="12" md="8">
                                <form onSubmit={handleFooterForm}>
                                    <FormGroup>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            defaultValue={email}
                                            onBlur={e =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="someone@gmail.com"
                                        />
                                    </FormGroup>
                                </form>

                                <small className="footer-smalltext">
                                    By clicking “Primary action” you accepting
                                    ipsum dolor sit amet, sit ea brute
                                    mediocritatem, eu sed aliquam scripserit
                                    dissentiunt.
                                </small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
