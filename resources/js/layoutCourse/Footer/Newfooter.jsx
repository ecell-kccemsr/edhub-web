import React from "react";
import { Col, Row, Container } from "reactstrap";
import Vector from "../../Images/footer/Vector.png";
import microsoft from "../../Images/footer/microsoft-icon 1.png";
import harvard from "../../Images/footer/harvard.png";
import udemy from "../../Images/footer/udemy-icon 1.png";
import amazon from "../../Images/footer/amazon-icon 1.png";
function Newfooter() {
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
                        sm="4"
                        lg="6"
                        className="footer-section-column"
                    >
                        <div className="column-headings">
                            <b> ~100+ Universities</b>
                        </div>
                        <Row>
                            <Col>
                                <div className="d-flex footer-section-one">
                                    <img
                                        src={harvard}
                                        alt=""
                                        className="footer-icons"
                                    />
                                    <p className="footer-header-name">
                                        {" "}
                                        Harvard university
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex footer-section-one">
                                    <img
                                        src={harvard}
                                        alt=""
                                        className="footer-icons"
                                    />
                                    <p className="footer-header-name">
                                        {" "}
                                        Harvard university
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        xs="12"
                        sm="4"
                        lg="3"
                        className="footer-section-column"
                        style={{ padding: "0px 30px 2px 30px" }}
                    >
                        <div className="column-headings">
                            <b>50+ Providers</b>
                        </div>
                        <div className="d-flex footer-section-one">
                            <img
                                src={Vector}
                                alt=""
                                style={{
                                    height: "40px",
                                    padding: "16px 0px 0px 2px"
                                }}
                            />
                            <p className="provider-name">Coursera</p>
                        </div>
                        <div className="d-flex footer-section-one">
                            <img src={udemy} alt="" className="footer-icons" />
                            <p className="provider-name">Udemy</p>
                        </div>
                    </Col>
                    <Col xs="12" sm="4" lg="3" className="">
                        <div className="column-headings">
                            <b>40+ Institutions</b>
                        </div>
                        <div className="d-flex footer-section-one">
                            <img
                                src={microsoft}
                                alt=""
                                className="footer-icons"
                            />
                            <p className="footer-header-name"> Microsoft</p>
                        </div>
                        <div className="d-flex footer-section-one">
                            <img src={amazon} alt="" className="footer-icons" />
                            <p className="footer-header-name">Amazon</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Newfooter;
