import React from "react";
import { Row, Col, Container } from "reactstrap";
import icon1 from "../../Images/landingpage/icon1.png";
import icon2 from "../../Images/landingpage/icon2.png";
import icon3 from "../../Images/landingpage/icon3.png";
import arrow1 from "../../Images/landingpage/Arrow1.png";
import arrow2 from "../../Images/landingpage/Arrow2.png";

const HelpSection = () => {
    return (
        <div className="landing-page-help-section">
            <h1 className="landing-page-help-section-header">
                How Edhub helps you choose the best course
            </h1>

            <Container>
                <Row className="landingpage-help-section-row">
                    <Col
                        sm="12"
                        md="4"
                        lg="2"
                        className="image-container image-one"
                    >
                        <img
                            src={icon1}
                            alt=""
                            className="help-section-main-img "
                        />
                        <div className="text-container">
                            <h4>BROWSE</h4>
                            <p>
                                Find your perfect course among thousands of
                                others.
                            </p>
                        </div>
                    </Col>
                    <Col
                        sm="12"
                        md="4"
                        lg="2"
                        className="landingpage-help-section-arrow-image"
                    >
                        <img src={arrow1} alt="" />
                    </Col>
                    <Col
                        sm="12"
                        md="4"
                        lg="2"
                        className="image-container image-two"
                    >
                        <img
                            src={icon2}
                            alt=""
                            className="help-section-main-img "
                        />
                        <div className="text-container">
                            <h4>ANALYZE AND COMPARE</h4>
                            <p>
                                After finding your perfect course get enrolled
                                in it.
                            </p>
                        </div>
                    </Col>
                    <Col
                        sm="12"
                        md="4"
                        lg="2"
                        className="landingpage-help-section-arrow-image"
                    >
                        <img src={arrow2} alt="" />
                    </Col>
                    <Col
                        sm="12"
                        md="4"
                        lg="2"
                        className="image-container image-three"
                    >
                        <img
                            src={icon3}
                            alt=""
                            className="help-section-main-img "
                        />
                        <div className="text-container">
                            <h4>UPSKILL</h4>
                            <p>Get a Shareable certificate for your course.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HelpSection;
