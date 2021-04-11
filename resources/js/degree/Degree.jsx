import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, List, Progress, Button } from "reactstrap";
import stat1 from "../Images/courseDetail/stat1.png";
import stat2 from "../Images/courseDetail/stat2.png";
import author from "../Images/courseDetail/author.png";
import star5 from "../Images/courseDetail/5star.png";
import star4 from "../Images/courseDetail/4star.png";
import star3 from "../Images/courseDetail/3star.png";
import star2 from "../Images/courseDetail/2star.png";
import star1 from "../Images/courseDetail/1star.png";
import user1 from "../Images/courseDetail/user1.png";
import user2 from "../Images/courseDetail/user2.png";
import courseDetailCompany from "../Images/courseDetail/courseDetailCompany.png";
import coursedegreecompany from "../Images/degree/coursedegreecompany.png";
import CourseCard from "../components/course-card/CourseCard";
import DegreeHeroSection from "./DegreeComponents/DegreeHeroSection";
import DegreeDetail from "./DegreeComponents/DegreeDetail";
import DegreeBenefitSection from "./DegreeComponents/DegreeBenefitSection";
import DegreeInstructorSection from "./DegreeComponents/DegreeInstructorSection";

const faq = [
    {
        id: "d95d4514-538a-4b57-85d5-f9072dc80bef",
        question: "When will I have access to my course",
        answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
    },
    {
        id: "15536c59-30ab-430e-b857-d02b416dedc7",
        question: "When will I have access to my course",
        answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
    },
    {
        id: "f56739d4-fbea-46cb-b2db-5511b1d744a2",
        question: "When will I have access to my course",
        answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
    }
];

const authorOverview = [
    "4.2 Instructor Rating",
    "5,680 Reviews",
    "73,742 Students"
];

const userTestimonials = [
    {
        name: "Abhishek Mogaveera",
        review:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fusce lacus non in tortor, libero do”"
    },
    {
        name: "Abhishek Mogaveera",
        review:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fusce lacus non in tortor, libero do”"
    }
];

function CourseDetail() {
    const [Course, setCourse] = useState([]);
    useEffect(() => {
        axios
            .get("/api/courses")
            .then(res => {
                setCourse(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <div className="degree-page-section">
                <DegreeHeroSection />
                <Container className="containerClass">
                    <Row>
                        <Col sm="12" md="8">
                            <div className="course-overview-card">
                                <h5 className="course-overview-card-title">
                                    Skills you'll gain
                                </h5>
                                <div className="course-overview-card-descriptionbox">
                                    <p>Web development</p>
                                    <p>Web development</p>
                                    <p>Web development</p>
                                </div>
                                <h5 className="course-overview-card-title">
                                    Learner's career outcome
                                </h5>
                                <div className="course-overview-card-stats">
                                    <div className="stat-container">
                                        <img src={stat1} alt="" />
                                        <p>50 % Promotions</p>
                                    </div>
                                    <div className="stat-container">
                                        <img src={stat2} alt="" />
                                        <p>12 % New career</p>
                                    </div>
                                </div>
                                <h5 className="course-overview-card-title">
                                    Job opportunities
                                </h5>
                                <div className="course-overview-card-descriptionbox">
                                    <p>Web development</p>
                                    <p>Web development</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <DegreeDetail />

                <DegreeInstructorSection />

                <DegreeBenefitSection />

                <div style={{ background: "#F6F7F8", padding: "30px 0" }}>
                    <Container className="containerClass">
                        <Row>
                            <Col sm="12" md="8">
                                <h5 className="course-content-top-header">
                                    Reviews
                                </h5>
                                <div className="degree-page-review-section">
                                    <Row>
                                        <Col
                                            sm="12"
                                            md="2"
                                            className="rating-container"
                                        >
                                            <h4>4.5</h4>
                                            <img src={star4} alt="" />
                                            <p>course rating</p>
                                        </Col>
                                        <Col
                                            sm="12"
                                            md="10"
                                            className="progress-container"
                                        >
                                            <div className="indi-progress">
                                                <Progress value="65" />
                                                <img src={star5} alt="" />
                                                <span>65%</span>
                                            </div>
                                            <div className="indi-progress">
                                                <Progress value="35" />
                                                <img src={star4} alt="" />
                                                <span>35%</span>
                                            </div>
                                            <div className="indi-progress">
                                                <Progress value="15" />
                                                <img src={star3} alt="" />
                                                <span>15%</span>
                                            </div>
                                            <div className="indi-progress">
                                                <Progress value="10" />
                                                <img src={star2} alt="" />
                                                <span>10%</span>
                                            </div>
                                            <div className="indi-progress">
                                                <Progress value="5" />
                                                <img src={star1} alt="" />
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
                                                key={u?.name}
                                                className="my-4"
                                            >
                                                <div className="degree-page-testimonial-cards">
                                                    <img src={user1} alt="" />
                                                    <h6>{u?.name}</h6>
                                                    <p>{u?.review}</p>
                                                </div>
                                            </Col>
                                        ))}
                                </Row>
                                <p className="course-testimonial-readmore">
                                    Read more
                                    <i class="fas fa-chevron-down ml-2"></i>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="containerClass">
                    <Row>
                        <Col sm="12" md="8">
                            <h5 className="course-content-top-header text-center pt-2">
                                FAQs
                            </h5>
                            <div
                                class="accordion course-content-accordion"
                                id="courseFAQParent"
                            >
                                {faq &&
                                    faq.map(faqIndividual => (
                                        <div
                                            class="card"
                                            key={faqIndividual?.id}
                                        >
                                            <div
                                                id={`heading${faqIndividual?.id}`}
                                            >
                                                <h2 class="mb-0">
                                                    <a
                                                        class="btn btn-link course-content-card-headerlink"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target={`#collapse${faqIndividual?.id}`}
                                                        aria-expanded="true"
                                                        aria-controls={`collapse${faqIndividual?.id}`}
                                                    >
                                                        <i
                                                            class="fas fa-chevron-down mr-2"
                                                            style={{
                                                                color: "#F05454"
                                                            }}
                                                        ></i>
                                                        {
                                                            faqIndividual?.question
                                                        }
                                                    </a>
                                                </h2>
                                            </div>

                                            <div
                                                id={`collapse${faqIndividual?.id}`}
                                                class="collapse"
                                                aria-labelledby={`heading${faqIndividual?.id}`}
                                                data-parent="#courseFAQParent"
                                            >
                                                <div class="card-body">
                                                    <List
                                                        type="unstyled"
                                                        className="mb-0"
                                                    >
                                                        {faqIndividual?.answer}
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="popular-choice-section-course-details">
                    <h3 className="popular-choice-header">
                        Recommended for you
                    </h3>
                    <Row className=" popular-choice-sub-section">
                        <Col sm="12" md="6" lg="5">
                            <p className="popular-choice-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Habitant volutpat elementum
                                facilisi mattis et. At
                            </p>
                        </Col>
                        <Col
                            sm="12"
                            md="6"
                            lg="5"
                            className="popular-choice-btn-container"
                        >
                            <Button className="popular-choice-btn">
                                View all
                            </Button>
                        </Col>
                    </Row>
                    <Row className="course-card-landing-page-row">
                        {Course.map(course => (
                            <Col sm="12" md="3" key={course?.id}>
                                <CourseCard data={course} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default CourseDetail;
