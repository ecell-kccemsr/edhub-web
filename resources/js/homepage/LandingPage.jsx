import React from "react";
import landingpage from "../Images/landingpage/landingpage.png";
import { Link } from "react-router-dom";
import icon1 from "../Images/landingpage/icon1.png";
import icon2 from "../Images/landingpage/icon2.png";
import icon3 from "../Images/landingpage/icon3.png";
import cardimg from "../Images/compare/cardheader.png";
import Vector from "../Images/landingpage/Vector.png";
import star from "../Images/landingpage/star.png";
import circleicon from "../Images/landingpage/circle icon.png";
import duke from "../Images/landingpage/duke.png";
import google from "../Images/landingpage/google.png";
import ibm from "../Images/landingpage/ibm.png";
import guardian from "../Images/landingpage/guardian.png";
import hd from "../Images/landingpage/hd.png";
import hindustan from "../Images/landingpage/hindustan.png";
import toi from "../Images/landingpage/toi.png";
import courseCompany from "../Images/courseDetail/courseDetailCompany.png";
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
function LandingPage() {
    return (
        <div>
            <div className="landing-page-section">
                <img src={landingpage} alt="Snow" style={{ width: "100%" }} />
                <div className="d-flex top-left">
                    <div className="top-left-sub-section-a">New</div>
                    <div className="top-left-sub-section-b">
                        Avail latest discounts on courses
                    </div>
                </div>
                <h4 className="top-left-1">
                    Let’s Grow Your <br /> Education Level up with <br /> Edhub.
                </h4>
                <p className="top-left-2">
                    Learn anytime anywhere with experts.
                </p>
            </div>
            <div className="help-section">
                <p className="help-section-header">
                    How Edhub helps you choose the <br /> best course
                </p>
                <Row>
                    <Col xs="6" sm="2" lg="4" className="browse-section">
                        <div className="browse-section-1">
                            <div className="browse-section-image-section">
                                <img
                                    src={icon1}
                                    alt="category"
                                    className="browse-section-image"
                                />{" "}
                                <div className="browse-section-text">
                                    <p>BROWSE</p>
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
                    <Col xs="6" sm="2" md="2" lg="4" className="browse-section">
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
                    </Col>
                    <Col xs="6" sm="2" md="2" lg="4" className="browse-section">
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
                    <p className="popular-choice-header">Popular Choices</p>
                    <div className="d-flex popular-choice-sub-section">
                        <div className="popular-choice-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                            <br />
                            Habitant volutpat elementum facilisi mattis et. At
                        </div>
                        <div>
                            <Button className="view-all-btnn">View all</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex slider-outmost-section">
                <Card className="slider-section">
                    <CardImg
                        top
                        width="100%"
                        src={cardimg}
                        alt="Card image cap"
                        className="slider-section-image"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {" "}
                            <div className="d-flex course-content">
                                <div className="course-title ">Udemy</div>
                                <b>Free</b>
                                <div>
                                    $ <strike>250</strike>
                                </div>
                            </div>
                        </CardTitle>
                        <CardText>
                            {" "}
                            <p className="description">
                                {" "}
                                UI/UX Design | How to design with professional.
                            </p>{" "}
                        </CardText>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons"> 20 Lessons</div>
                            </div>
                            <div className="d-flex ml-2">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons">
                                    {" "}
                                    Guided Courses
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mt-3">
                                <img src={Vector} alt="" />
                                <div className="ml-3 compare">
                                    {" "}
                                    Add to compare
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div>
                            <div className="d-flex mt-3">
                                <img src={star} alt="" className="" />
                                <div className="ml-3 compare"> 32 Reviews</div>
                                <img
                                    src={Vector}
                                    alt=""
                                    style={{ marginLeft: "30px" }}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="slider-section">
                    <CardImg
                        top
                        width="100%"
                        src={cardimg}
                        alt="Card image cap"
                        className="slider-section-image"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {" "}
                            <div className="d-flex course-content">
                                <div className="course-title ">Udemy</div>
                                <b>Free</b>
                                <div>
                                    $ <strike>250</strike>
                                </div>
                            </div>
                        </CardTitle>
                        <CardText>
                            {" "}
                            <p className="description">
                                {" "}
                                UI/UX Design | How to design with professional.
                            </p>{" "}
                        </CardText>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons"> 20 Lessons</div>
                            </div>
                            <div className="d-flex ml-2">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons">
                                    {" "}
                                    Guided Courses
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mt-3">
                                <img src={Vector} alt="" />
                                <div className="ml-3 compare">
                                    {" "}
                                    Add to compare
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div>
                            <div className="d-flex mt-3">
                                <img src={star} alt="" className="" />
                                <div className="ml-3 compare"> 32 Reviews</div>
                                <img
                                    src={Vector}
                                    alt=""
                                    style={{ marginLeft: "30px" }}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="slider-section">
                    <CardImg
                        top
                        width="100%"
                        src={cardimg}
                        alt="Card image cap"
                        className="slider-section-image"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {" "}
                            <div className="d-flex course-content">
                                <div className="course-title ">Udemy</div>
                                <b>Free</b>
                                <div>
                                    $ <strike>250</strike>
                                </div>
                            </div>
                        </CardTitle>
                        <CardText>
                            {" "}
                            <p className="description">
                                {" "}
                                UI/UX Design | How to design with professional.
                            </p>{" "}
                        </CardText>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons"> 20 Lessons</div>
                            </div>
                            <div className="d-flex ml-2">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons">
                                    {" "}
                                    Guided Courses
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mt-3">
                                <img src={Vector} alt="" />
                                <div className="ml-3 compare">
                                    {" "}
                                    Add to compare
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div>
                            <div className="d-flex mt-3">
                                <img src={star} alt="" className="" />
                                <div className="ml-3 compare"> 32 Reviews</div>
                                <img
                                    src={Vector}
                                    alt=""
                                    style={{ marginLeft: "30px" }}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="slider-section">
                    <CardImg
                        top
                        width="100%"
                        src={cardimg}
                        alt="Card image cap"
                        className="slider-section-image"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {" "}
                            <div className="d-flex course-content">
                                <div className="course-title ">Udemy</div>
                                <b>Free</b>
                                <div>
                                    $ <strike>250</strike>
                                </div>
                            </div>
                        </CardTitle>
                        <CardText>
                            {" "}
                            <p className="description">
                                {" "}
                                UI/UX Design | How to design with professional.
                            </p>{" "}
                        </CardText>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons"> 20 Lessons</div>
                            </div>
                            <div className="d-flex ml-2">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons">
                                    {" "}
                                    Guided Courses
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mt-3">
                                <img src={Vector} alt="" />
                                <div className="ml-3 compare">
                                    {" "}
                                    Add to compare
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div>
                            <div className="d-flex mt-3">
                                <img src={star} alt="" className="" />
                                <div className="ml-3 compare"> 32 Reviews</div>
                                <img
                                    src={Vector}
                                    alt=""
                                    style={{ marginLeft: "30px" }}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <div className="popular-choice-section">
                <p className="popular-choice-header">
                    Get started with free courses
                </p>
                <div className="d-flex popular-choice-sub-section">
                    <div className="popular-choice-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        Habitant volutpat elementum facilisi mattis et. At
                    </div>
                    <div>
                        <Button className="view-all-btnn">View all</Button>
                    </div>
                </div>
            </div>
            <div className="d-flex slider-outmost-section">
                <Card className="slider-section">
                    <CardImg
                        top
                        width="100%"
                        src={cardimg}
                        alt="Card image cap"
                        className="slider-section-image"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {" "}
                            <div className="d-flex course-content">
                                <div className="course-title ">Udemy</div>
                                <b>Free</b>
                                <div>
                                    $ <strike>250</strike>
                                </div>
                            </div>
                        </CardTitle>
                        <CardText>
                            {" "}
                            <p className="description">
                                {" "}
                                UI/UX Design | How to design with professional.
                            </p>{" "}
                        </CardText>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons"> 20 Lessons</div>
                            </div>
                            <div className="d-flex ml-2">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons">
                                    {" "}
                                    Guided Courses
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mt-3">
                                <img src={Vector} alt="" />
                                <div className="ml-3 compare">
                                    {" "}
                                    Add to compare
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div>
                            <div className="d-flex mt-3">
                                <img src={star} alt="" className="" />
                                <div className="ml-3 compare"> 32 Reviews</div>
                                <img
                                    src={Vector}
                                    alt=""
                                    style={{ marginLeft: "30px" }}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="slider-section">
                    <CardImg
                        top
                        width="100%"
                        src={cardimg}
                        alt="Card image cap"
                        className="slider-section-image"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {" "}
                            <div className="d-flex course-content">
                                <div className="course-title ">Udemy</div>
                                <b>Free</b>
                                <div>
                                    $ <strike>250</strike>
                                </div>
                            </div>
                        </CardTitle>
                        <CardText>
                            {" "}
                            <p className="description">
                                {" "}
                                UI/UX Design | How to design with professional.
                            </p>{" "}
                        </CardText>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons"> 20 Lessons</div>
                            </div>
                            <div className="d-flex ml-2">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons">
                                    {" "}
                                    Guided Courses
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mt-3">
                                <img src={Vector} alt="" />
                                <div className="ml-3 compare">
                                    {" "}
                                    Add to compare
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div>
                            <div className="d-flex mt-3">
                                <img src={star} alt="" className="" />
                                <div className="ml-3 compare"> 32 Reviews</div>
                                <img
                                    src={Vector}
                                    alt=""
                                    style={{ marginLeft: "30px" }}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="slider-section">
                    <CardImg
                        top
                        width="100%"
                        src={cardimg}
                        alt="Card image cap"
                        className="slider-section-image"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {" "}
                            <div className="d-flex course-content">
                                <div className="course-title ">Udemy</div>
                                <b>Free</b>
                                <div>
                                    $ <strike>250</strike>
                                </div>
                            </div>
                        </CardTitle>
                        <CardText>
                            {" "}
                            <p className="description">
                                {" "}
                                UI/UX Design | How to design with professional.
                            </p>{" "}
                        </CardText>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons"> 20 Lessons</div>
                            </div>
                            <div className="d-flex ml-2">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons">
                                    {" "}
                                    Guided Courses
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mt-3">
                                <img src={Vector} alt="" />
                                <div className="ml-3 compare">
                                    {" "}
                                    Add to compare
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div>
                            <div className="d-flex mt-3">
                                <img src={star} alt="" className="" />
                                <div className="ml-3 compare"> 32 Reviews</div>
                                <img
                                    src={Vector}
                                    alt=""
                                    style={{ marginLeft: "30px" }}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="slider-section">
                    <CardImg
                        top
                        width="100%"
                        src={cardimg}
                        alt="Card image cap"
                        className="slider-section-image"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {" "}
                            <div className="d-flex course-content">
                                <div className="course-title ">Udemy</div>
                                <b>Free</b>
                                <div>
                                    $ <strike>250</strike>
                                </div>
                            </div>
                        </CardTitle>
                        <CardText>
                            {" "}
                            <p className="description">
                                {" "}
                                UI/UX Design | How to design with professional.
                            </p>{" "}
                        </CardText>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons"> 20 Lessons</div>
                            </div>
                            <div className="d-flex ml-2">
                                <img src={Vector} alt="" />
                                <div className="ml-2 lessons">
                                    {" "}
                                    Guided Courses
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mt-3">
                                <img src={Vector} alt="" />
                                <div className="ml-3 compare">
                                    {" "}
                                    Add to compare
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div>
                            <div className="d-flex mt-3">
                                <img src={star} alt="" className="" />
                                <div className="ml-3 compare"> 32 Reviews</div>
                                <img
                                    src={Vector}
                                    alt=""
                                    style={{ marginLeft: "30px" }}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="promotions-section">
                <div className="d-flex community-divison">
                    <img
                        src={circleicon}
                        alt=""
                        className="community-divison-image"
                    />
                    <div className="community-divison-content">
                        <p className="community-divison-content-1">
                            Join the community
                        </p>
                        <p className="community-divison-content-2">
                            of more than 100,000 students
                        </p>
                    </div>
                </div>
                <p className="colab-content">
                    We collaborate with 200+ leading universities and companies
                </p>
                <div className="d-flex brand-section">
                    <img src={google} alt="" className="brand-image" />
                    <img src={ibm} alt="" className="brand-image" />
                    <img src={duke} alt="" className="brand-image" />
                </div>
                <p className="feature-in-header">Featured In</p>
                <div className="d-flex newspaper-images">
                    <img src={hindustan} alt="" />
                    <img src={toi} alt="" />
                    <img src={hd} alt="" />
                    <img src={guardian} alt="" />
                </div>
            </div>
            <div className="mt-4">
                <p className="header-testimonials">
                    Testimonials from our happy customers{" "}
                </p>
                <div className="d-flex">
                    <div className="d-flex testimonial-section">
                        <div className="testimonial-image-section">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                                className="user-image"
                            />
                        </div>
                        <div className="testimonial-content-section">
                            <p className="testimonial-content">
                                <h6>shubbham singh</h6>
                                <p>20:00 pm 8/02</p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                    <div className="d-flex testimonial-section">
                        <div className="testimonial-image-section">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                                className="user-image"
                            />
                        </div>

                        <div className="testimonial-content-section">
                            <p className="testimonial-content">
                                <h6>shubbham singh</h6>
                                <p>20:00 pm 8/02</p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popular-choice-section">
                <p className="popular-choice-header">Recommended for you</p>
                <div className="d-flex popular-choice-sub-section">
                    <div className="popular-choice-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        Habitant volutpat elementum facilisi mattis et. At
                    </div>
                    <div>
                        <Button className="view-all-btnn">View all</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
