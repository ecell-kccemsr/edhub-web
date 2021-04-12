import React from "react";
import { Col, Row, Button } from "reactstrap";
import CourseCard from "../../components/course-card/CourseCard";
const DegreeRecommendedSection = ({ course }) => {
    return (
        <div className="popular-choice-section-course-details">
            <h3 className="popular-choice-header">Recommended for you</h3>
            <Row className=" popular-choice-sub-section">
                <Col sm="12" md="6" lg="5">
                    <p className="popular-choice-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Habitant volutpat elementum facilisi mattis et. At
                    </p>
                </Col>
                <Col
                    sm="12"
                    md="6"
                    lg="5"
                    className="popular-choice-btn-container"
                >
                    <Button className="popular-choice-btn">View all</Button>
                </Col>
            </Row>
            <Row className="course-card-landing-page-row">
                {course &&
                    course.length > 0 &&
                    course.map(c => (
                        <Col sm="12" md="3" key={c?.id}>
                            <CourseCard data={c} />
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

export default DegreeRecommendedSection;
