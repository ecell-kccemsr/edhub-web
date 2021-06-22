import React from "react";
import { Row, Col } from "reactstrap";

const HeroSection = ({ handleSubmit, handleChange }) => {
    return (
        <div className="landing-page-div">
            <div className="landing-page-hero-section">
                <Row>
                    <Col sm="12" md="8" lg="6">
                        {/* <div className="landing-page-hero-section-top">
                            <span className="top-button">New</span>
                            <span className="top-text">
                                Avail latest discounts on courses
                            </span>
                        </div> */}
                        <h4 className="hero-section-main-text">
                            Learn. <br />
                            From The World's Best.
                        </h4>
                        <p className="hero-section-sub-text">
                           What do you like to learn?
                        </p>
                        <div className="hero-section-input-box">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    onChange={handleChange}
                                    placeholder="Search your course...."
                                />
                                <button type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HeroSection;
