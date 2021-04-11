import React from "react";
import { Col, Container, Row } from "reactstrap";
import courseDetailCompany from "../../Images/degree/courseDetailCompany.png";
import coursedegreecompany from "../../Images/degree/coursedegreecompany.png";
const DegreeHeroSection = () => {
    return (
        <div className="degree-page-hero-section">
            <Container className="containerClass">
                <Row>
                    <Col sm="12" md="8">
                        <div className="course-degree-company-div">
                            <img
                                src={coursedegreecompany}
                                className="companyimg"
                                alt="companyimg"
                            />
                            <span>University of Michigan</span>
                        </div>
                        <h2>Master of Science in Computer Science</h2>
                        <p>
                            Learn in-demand skills and grow your Software
                            Development career with a Master's in Computer
                            Science from Liverpool John Moores University, a
                            globally recognized university. Start your journey
                            today by paying Rs.13,095/- per month.
                        </p>
                        <Row>
                            <Col sm="12" md="3">
                                <button className="compare-btn">
                                    Add to compare
                                </button>
                            </Col>
                            <Col sm="12" md="3">
                                <button className="share-btn">Share</button>
                            </Col>
                        </Row>
                        <Row className="degree-hero-footer">
                            <Col sm="12" md="3">
                                <h5>Subtitles</h5>
                                <h6>English , Hindi , Espanol</h6>
                            </Col>
                            <Col sm="12" md="3">
                                <h6>Provided By</h6>
                                <img src={courseDetailCompany} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DegreeHeroSection;
