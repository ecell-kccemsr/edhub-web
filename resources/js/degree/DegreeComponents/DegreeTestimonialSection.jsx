import React from "react";
import { Row, Col, Container, Progress } from "reactstrap";
const DegreeTestimonialSection = ({ userTestimonials }) => {
    return (
        <div style={{ background: "#F6F7F8", padding: "30px 0" }}>
            <Container className="containerClass">
                <Row>
                    <Col sm="12" md="8">
                        <h5 className="course-content-top-header" id="Reviews">Reviews</h5>
                        <div className="degree-page-review-section">
                            <Row>
                                <Col
                                    sm="12"
                                    md="2"
                                    className="rating-container"
                                >
                                    <h4>4.5</h4>
                                    <img src="/images/courseDetail/4star.png" alt="Star" />
                                    <p>course rating</p>
                                </Col>
                                <Col
                                    sm="12"
                                    md="10"
                                    className="progress-container"
                                >
                                    <div className="indi-progress">
                                        <Progress value="65" />
                                        <img src="/images/courseDetail/5star.png" alt="Star" />
                                        <span>65%</span>
                                    </div>
                                    <div className="indi-progress">
                                        <Progress value="35" />
                                        <img src="/images/courseDetail/4star.png" alt="Star" />
                                        <span>35%</span>
                                    </div>
                                    <div className="indi-progress">
                                        <Progress value="15" />
                                        <img src="/images/courseDetail/3star.png" alt="Star" />
                                        <span>15%</span>
                                    </div>
                                    <div className="indi-progress">
                                        <Progress value="10" />
                                        <img src="/images/courseDetail/2star.png" alt="Star" />
                                        <span>10%</span>
                                    </div>
                                    <div className="indi-progress">
                                        <Progress value="5" />
                                        <img src="/images/courseDetail/1star.png" alt="Star" />
                                        <span>5%</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="degree-page-testimonial-section">
                    <Col sm="12" md="8">
                        <Row className="justify-content-center">
                            {userTestimonials &&
                                userTestimonials.map(u => (
                                    <Col
                                        sm="12"
                                        md="6"
                                        key={u?.id}
                                        className="my-4"
                                    >
                                        <div className="degree-page-testimonial-cards">
                                            <img src="/images/courseDetail/user1.png" alt="User" />
                                            <h6>{u?.name}</h6>
                                            <p>{u?.review}</p>
                                        </div>
                                    </Col>
                                ))}
                        </Row>
                        <p className="course-testimonial-readmore">
                            Read more
                            <i className="fas fa-chevron-down ml-2"></i>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DegreeTestimonialSection;
