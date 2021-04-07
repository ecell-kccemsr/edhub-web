import React, {useState, useEffect} from "react";
import axios from "axios";
import landingpage from "../Images/landingpage/landingpage.png";
import { Link } from "react-router-dom";
import icon1 from "../Images/landingpage/icon1.png";
import icon2 from "../Images/landingpage/icon2.png";
import icon3 from "../Images/landingpage/icon3.png";
import cardimg from "../Images/compare/cardheader.png";
import Vector from "../Images/landingpage/Vector.png";
import star from "../Images/landingpage/star.png";
import star5 from "../Images/landingpage/star5.png";
import circleicon from "../Images/landingpage/circle icon.png";
import duke from "../Images/landingpage/duke.png";
import google from "../Images/landingpage/google.png";
import ibm from "../Images/landingpage/ibm.png";
import guardian from "../Images/landingpage/guardian.png";
import hd from "../Images/landingpage/hd.png";
import hindustan from "../Images/landingpage/hindustan.png";
import toi from "../Images/landingpage/toi.png";
import courseCompany from "../Images/courseDetail/courseDetailCompany.png";
import CourseCard from "../components/course-card/CourseCard";
import arrow1 from "../Images/landingpage/Arrow1.png";
import arrow2 from "../Images/landingpage/Arrow2.png";

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
    Row,
    Col,
    Button,
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody
} from "reactstrap";
function LandingPage ()  {
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
        <div className="landing-page-section">
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
                                <button>
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="landing-page-help-section">
                <Row className="landing-page-help-section-row">
                    <Col sm="12" md="8">
                        <h1 className="landing-page-help-section-header">
                            How Edhub helps you choose the best course
                        </h1>
                    </Col>
                </Row>
                <Row style={{padding:"70px"}}>
                    <Col xs="12" sm="2" lg="5" className="browse-section">
                        <div className="browse-section-1">
                            <div className="browse-section-image-section">
                                <img
                                    src={icon1}
                                    alt="category"
                                    className="browse-section-image"
                                />
                                <div className="browse-section-text">
                                    <p>BROWSE</p>
                                    <p style={{ color: "#868686"}}>
                                        Find your perfect
                                        <br /> course among
                                        <br />
                                        thousands of others
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="arrow-landing-page">
                            <img src={arrow1} alt=""/>
                        </div>
                    </Col>
                    <Col xs="12" sm="2" md="2" lg="5" className="browse-section">
                        <div className="browse-section-1">
                            <div className="browse-section-image-section">
                                <img
                                    src={icon2}
                                    alt="category"
                                    className="browse-section-image"
                                />
                                <div className="browse-section-text">
                                    <p>ANALYZE AND COMPARE</p>
                                    <p style={{ color: "#868686" }}>
                                        Find your perfect
                                        <br /> course among
                                        <br />
                                        thousands of others
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="arrow-landing-page">
                        <img src={arrow2} alt=""/>
                        </div>
                    </Col>
                    <Col xs="12" sm="2" md="2" lg="2" className="browse-section">
                        <div className="browse-section-1">
                            <div className="browse-section-image-section">
                                <img
                                    src={icon3}
                                    alt="category"
                                    className="browse-section-image"
                                />
                                <div className="browse-section-text">
                                    <p>UPSKILL</p>
                                    <p style={{ color: "#868686" }}>
                                        Find your perfect
                                        <br /> course among
                                        <br />
                                        thousands of others
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="popular-choice-section">
                    <h3 className="popular-choice-header">Popular Choices</h3>
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
                </div>
            </div>
            <Row className="course-card-landing-page-row">
                                                
                                                {Course.map(course => (
                                    <Col sm="12" md="3" key={course?.id}>
                                        <CourseCard data={course} />
                                    </Col>
                                ))}
                            </Row>
                            
           
            <div className="popular-choice-section">
                <h3 className="popular-choice-header">Get Started With Free Courses</h3>
                <Row className=" popular-choice-sub-section">
                    <Col sm="12" md="6" lg="5">
                        <p className="popular-choice-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Habitant volutpat elementum facilisi mattis
                            et. At
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
            </div>
            <Row className="course-card-landing-page-row">
                                {Course.map(course => (
                                    <Col sm="12" md="3" key={course?.id}>
                                        <CourseCard data={course} />
                                    </Col>
                                ))}
                            </Row>
            <div className="promotions-section">
                <div className="community-divison">
                    <div className="community-divison-content">
                        <p className="community-divison-content-maintext">
                            <img
                                src={circleicon}
                                alt=""
                                className="community-divison-image"
                            />
                            Join the community
                        </p>
                        <p className="community-divison-content-subtext">
                            of more than <span>100,000</span> students
                        </p>
                    </div>
                    <p className="colab-content">
                        We collaborate with 200+ leading universities and
                        companies
                    </p>
                    <div className="brand-section">
                        <img src={google} alt="" className="brand-image" />
                        <img src={ibm} alt="" className="brand-image" />
                        <img src={duke} alt="" className="brand-image" />
                    </div>
                    <p className="feature-in-header">Featured In</p>
                    <div className="newspaper-images">
                        <img src={hindustan} alt="" />
                        <img src={toi} alt="" />
                        <img src={hd} alt="" />
                        <img src={guardian} alt="" />
                    </div>
                </div>
            </div>
            <div className="landing-page-testimonial-section ">
                <p className="header-testimonials">
                    Testimonials from our happy customers
                </p>
                <CarouselProvider
                    naturalSlideWidth={80}
                    naturalSlideHeight={30}
                    totalSlides={4}
                    visibleSlides={2}
                    infinite={true}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className="course-detail-testimonial-cards-outer">
                                <img
                                    src={star5}
                                    alt=""
                                    className="review-stars"
                                />
                                <div className="course-detail-testimonial-cards-inner">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/81.jpg"
                                        alt=""
                                    />
                                    <h6>Devika Olkar</h6>
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. A fusce lacus non in
                                        tortor, libero do”
                                    </p>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="course-detail-testimonial-cards-outer">
                                <img
                                    src={star5}
                                    alt=""
                                    className="review-stars"
                                />
                                <div className="course-detail-testimonial-cards-inner">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/81.jpg"
                                        alt=""
                                    />
                                    <h6>Devika Olkar</h6>
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. A fusce lacus non in
                                        tortor, libero do”
                                    </p>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="course-detail-testimonial-cards-outer">
                                <img
                                    src={star5}
                                    alt=""
                                    className="review-stars"
                                />
                                <div className="course-detail-testimonial-cards-inner">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/81.jpg"
                                        alt=""
                                    />
                                    <h6>Devika Olkar</h6>
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. A fusce lacus non in
                                        tortor, libero do”
                                    </p>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="course-detail-testimonial-cards-outer">
                                <img
                                    src={star5}
                                    alt=""
                                    className="review-stars"
                                />
                                <div className="course-detail-testimonial-cards-inner">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/81.jpg"
                                        alt=""
                                    />
                                    <h6>Devika Olkar</h6>
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. A fusce lacus non in
                                        tortor, libero do”
                                    </p>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
            <div className="popular-choice-section">
                <h3 className="popular-choice-header">Recommended for you</h3>
                <Row className=" popular-choice-sub-section">
                    <Col sm="12" md="6" lg="5">
                        <p className="popular-choice-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Habitant volutpat elementum facilisi mattis
                            et. At
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
                                {Course.map(course => (
                                    <Col sm="12" md="3" key={course?.id}>
                                        <CourseCard data={course} />
                                    </Col>
                                ))}
                            </Row>
            </div>

        </div>
    );
}

export default LandingPage;
