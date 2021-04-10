import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="landing-page-div">
            <div className="landing-page-hero-section">
                <Row>
                    <Col sm="12" md="8" lg="6">
                        <div className="landing-page-hero-section-top">
                            <span className="top-button">New</span>
                            <span className="top-text">
                                Avail latest discounts on courses
                            </span>
                        </div>
                        <h4 className="hero-section-main-text">
                            Let’s Grow Your Education Level up with Edhub.
                        </h4>
                        <p className="hero-section-sub-text">
                            Learn anytime anywhere with experts.
                        </p>
                        <div className="hero-section-input-box">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Search your course"
                            />
                            <Link
                        to={`/course-category`}
                        >
                              <button>
                                <i class="fas fa-search"></i>
                            </button>
                            </Link>
                          
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HeroSection;
