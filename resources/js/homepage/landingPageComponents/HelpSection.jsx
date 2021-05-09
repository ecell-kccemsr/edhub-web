import React from "react";
import { Row, Col, Container } from "reactstrap";

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
                            src="/images/landingpage/icon1.png"
                            alt="Icon"
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
                        <img src="/images/landingpage/Arrow1.png" alt="Arrow" />
                    </Col>
                    <Col
                        sm="12"
                        md="4"
                        lg="2"
                        className="image-container image-two"
                    >
                        <img
                            src="/images/landingpage/icon2.png"
                            alt="Icon"
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
                        <img src="/images/landingpage/Arrow2.png" alt="Arrow" />
                    </Col>
                    <Col
                        sm="12"
                        md="4"
                        lg="2"
                        className="image-container image-three"
                    >
                        <img
                            src="/images/landingpage/icon3.png"
                            alt="Icon"
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
