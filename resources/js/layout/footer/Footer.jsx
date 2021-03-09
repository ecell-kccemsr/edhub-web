import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-section py-5">
            <Container style={{ boxShadow: "none" }}>
                <Row>
                    <Col sm="12" md="6" lg="3">
                        <h5 className="footer-link-header">Company</h5>
                        <small className="d-block mb-3 text-white">
                            © 2017–2021
                        </small>
                    </Col>
                    <Col sm="12" md="6" lg="3">
                        <h5 className="footer-link-header">Features</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Cool stuff
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Random feature
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Team feature
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Stuff for developers
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Another one
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Last time
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm="12" md="6" lg="3">
                        <h5 className="footer-link-header">Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Resource name
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Resource
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Another resource
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Final resource
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm="12" md="6" lg="3">
                        <h5 className="footer-link-header">Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Business
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Education
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Government
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link-secondary footer-link"
                                    href="#"
                                >
                                    Gaming
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
