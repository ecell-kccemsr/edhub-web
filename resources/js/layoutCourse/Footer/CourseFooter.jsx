import React from "react";
import { Col, Row, Container } from "reactstrap";
import Vector from "../../Images/footer/Vector.png";
import microsoft from "../../Images/footer/microsoft-icon 1.png";
import harvard from "../../Images/footer/harvard.png";
import udemy from "../../Images/footer/udemy-icon 1.png";
import amazon from "../../Images/footer/amazon-icon 1.png";
function CourseFooter() {
    return (
        <div className="footer-section-new">
            <div className="footer-header-content">
                <b>
                    Discover various online courses from top universities,
                    <br />
                    providers, and institutions
                </b>
            </div>
            <Container>
                <Row className="footer-section-row">
                    <Col
                        xs="12"
                        md="4"
                        lg="6"
                        className="footer-section-column"
                    >
                        <div className="column-headings">
                            <b> ~100+ Universities</b>
                        </div>
                        <Row>
                            <Col sm="12" lg="6">
                                <div className=" footer-section-one">
                                    <img
                                        src={harvard}
                                        alt=""
                                        className="footer-icons"
                                    />
                                    <p className="footer-header-name ml-2 mb-0">
                                        Harvard university
                                    </p>
                                </div>
                            </Col>
                            <Col sm="12" lg="6">
                                <div className=" footer-section-one">
                                    <img
                                        src={harvard}
                                        alt=""
                                        className="footer-icons"
                                    />
                                    <p className="footer-header-name ml-2 mb-0">
                                        Harvard university
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        xs="12"
                        md="4"
                        lg="3"
                        className="footer-section-column footer-col-2"
                    >
                        <div className="column-headings">
                            <b>50+ Providers</b>
                        </div>
                        <div className=" footer-section-one">
                            <img src={Vector} alt="" />
                            <p className="provider-name ml-2 mb-0">Coursera</p>
                        </div>
                        <div className=" footer-section-one">
                            <img src={udemy} alt="" className="footer-icons" />
                            <p className="provider-name ml-2 mb-0">Udemy</p>
                        </div>
                    </Col>
                    <Col
                        xs="12"
                        md="4"
                        lg="3"
                        className="footer-section-column"
                    >
                        <div className="column-headings">
                            <b>40+ Institutions</b>
                        </div>
                        <div className=" footer-section-one">
                            <img
                                src={microsoft}
                                alt=""
                                className="footer-icons"
                            />
                            <p className="footer-header-name ml-2 mb-0">
                                Microsoft
                            </p>
                        </div>
                        <div className=" footer-section-one">
                            <img src={amazon} alt="" className="footer-icons" />
                            <p className="footer-header-name ml-2 mb-0">
                                Amazon
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CourseFooter;
