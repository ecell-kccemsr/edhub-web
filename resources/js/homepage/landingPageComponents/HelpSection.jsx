import React from "react";
import { Row, Col, Container } from "reactstrap";

const HelpSection = () => {
    return (
        <div className="landing-page-help-section">
            <h1 className="landing-page-help-section-header">
                Edhub helps you choose & compare the best course from global
                Ed-tech leaders like Udemy, Coursera, Skillshare, Linkedin
                Learning & many more.
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
                            <p>Search from the world's best courses</p>
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
                                Find your Perfect course among thousands of
                                others
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
                            <p>
                                Get certified & Reward your brain with an extra
                                skill.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HelpSection;
