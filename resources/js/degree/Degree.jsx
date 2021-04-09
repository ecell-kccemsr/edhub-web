import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Col,
    Container,
    Row,
    List,
    Progress,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import harvard from "../Images/footer/harvard.png";
import author from "../Images/courseDetail/author.png";
import stat1 from "../Images/courseDetail/stat1.png";
import stat2 from "../Images/courseDetail/stat2.png";
import star5 from "../Images/courseDetail/5star.png";
import star4 from "../Images/courseDetail/4star.png";
import star3 from "../Images/courseDetail/3star.png";
import star2 from "../Images/courseDetail/2star.png";
import star1 from "../Images/courseDetail/1star.png";
import playbutton from "../Images/courseDetail/playbutton.png";
import courseDetailCompany from "../Images/courseDetail/courseDetailCompany.png";
import prereq from "../Images/courseDetail/prereq.png";
import user1 from "../Images/courseDetail/user1.png";

import vector1 from "../Images/degree/CompleteOnline.png";
import vector2 from "../Images/degree/Group.png";
import vector3 from "../Images/degree/Group 470.png";
import star from "../Images/courseCategory/star.png";
const courseContent = [
    {
        id: "9198ce8a-772a-425d-8cd8-86ade1d1f0c8",
        title: "Welcome to Android R",
        duration: "02:11",
        content: [
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            },
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            }
        ]
    },
    {
        id: "fc793560-73a8-4cb1-9237-e803c925aaad",
        title: "Welcome to Android R",
        duration: "02:11",
        content: [
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            },
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            }
        ]
    },
    {
        id: "5871eb25-dc78-4df5-854b-8e6f7e9e5d1a",
        title: "Welcome to Android R",
        duration: "02:11",
        content: [
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            },
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            }
        ]
    }
];
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
const authorOverview = [
    "4.2 Instructor Rating",
    "5,680 Reviews",
    "73,742 Students"
];

function Degree() {
    const [Course, setCourse] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("/api/courses")
            .then(res => {
                setCourse(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        if (data) {
            axios
                .get(`/api/courses/${data.id}`)
                .then(res => {
                    console.log(res);
                    setData(res.data.data[0]);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);
    return (
        <div className="course-detail-section">
            <div className="course-detail-hero-section">
                <Container className="containerClass">
                    <Row>
                        <Col sm="12" md="8" lg="9">
                            <div className="d-flex university-btn-section">
                                <img
                                    src="https://www.wemu.org/sites/wemu/files/202004/U-M-logo-preview.jpg"
                                    alt=""
                                    style={{ height: "30px", width: "50px" }}
                                />
                                <button className="university-btn-degree">
                                    University of Michigan
                                </button>
                            </div>

                            <h2>Master of Science in Computer Science</h2>
                            <p className="header-content-degree">
                                Learn in-demand skills and grow your Software
                                Development career with a Master's in Computer
                                Science from Liverpool John Moores University, a
                                globally recognized university. Start your
                                journey today by paying Rs.13,095/- per month.
                            </p>
                            <button className="add-to-compare-btn-degree">
                                Add to compare
                            </button>
                            <button className="share-btn-degree">Share</button>
                            <div
                                className="d-flex"
                                style={{
                                    justifyContent: "space-between",
                                    margin: "0px 0px 40px"
                                }}
                            >
                                <div>
                                    <h5 style={{ marginTop: "30px" }}>
                                        Subtitiles
                                    </h5>
                                    <h6>English , Hindi , Espanol</h6>
                                </div>
                                <div>
                                    <h5 style={{ marginTop: "30px" }}>
                                        Provided By
                                    </h5>
                                    <img src={courseDetailCompany} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" lg="3">
                            <div className="add-to-cart-section-degree">
                                <img
                                    src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
                                    className="card-header-image-degree"
                                />
                                <div>
                                    <div>
                                        <img src={star} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <h5 style={{ fontWeight: "400" }}>$400</h5>
                                    <h6>EMI Available*</h6>
                                    <p>
                                        Get 5% extra cashback if you buy through
                                        us
                                    </p>

                                    <h5>April,5</h5>
                                    <p>Start Date</p>

                                    <h5>8 Months*</h5>
                                    <p>programme Duration</p>

                                    <h5>Online Bootcamp</h5>
                                    <p>Learning format</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="d-flex degree-subsection">
                <div className="degree-subsection-indv-div">
                    <div className="d-flex">
                        <img
                            src={vector2}
                            alt=""
                            style={{
                                padding: "2px 5px 5px 3px",
                                marginTop: "-5px"
                            }}
                        />
                        <p className="red-header">$25,000 USD</p>
                    </div>
                    <p className="grey-header-degree">
                        for full degree | Each credit hour $667 USD
                    </p>
                    <p className="black-header-degree">
                        *EMI and other options available
                    </p>
                </div>
                <div className="degree-subsection-indv-div">
                    <div className="d-flex">
                        <img
                            src={vector3}
                            alt=""
                            style={{
                                padding: "2px 5px 5px 3px",
                                marginTop: "-5px"
                            }}
                        />
                        <p className="red-header">8 Months</p>
                    </div>
                    <p className="grey-header-degree">
                        for full degree | Each credit hour $667 USD
                    </p>
                    <p className="grey-header-degree">
                        *EMI and other options available
                    </p>
                </div>
                <div className="degree-subsection-indv-div">
                    <div className="d-flex">
                        <img
                            src={vector1}
                            alt=""
                            style={{
                                padding: "2px 5px 5px 3px",
                                marginTop: "-5px"
                            }}
                        />
                        <p className="red-header">Completly Online</p>
                    </div>
                </div>
            </div>
            <Container className="containerClass">
                <Nav>
                    <NavItem>
                        <NavLink className="navlink-degree" href="#Overview">
                            Overview
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="navlink-degree"
                            href="#ProgramCurriculum"
                        >
                            Program curriculum
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink-degree" href="#Instructors">
                            {" "}
                            Instructors
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink-degree" href="#Benefits">
                            {" "}
                            Benefits
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink-degree" href="#fees">
                            {" "}
                            fees{" "}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink-degree" href="#Reviews">
                            {" "}
                            Reviews
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink-degree" href="#FAQs">
                            {" "}
                            FAQs
                        </NavLink>
                    </NavItem>
                </Nav>
            </Container>
            <Container className="containerClass">
                <Row>
                    <Col sm="12" md="8">
                        <div
                            className="course-overview-card"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <h5
                                className="course-overview-card-title"
                                id="Overview"
                            >
                                Skills you'll gain
                            </h5>
                            <div className="course-overview-card-descriptionbox">
                                <p>Web development</p>
                                <p>Web development</p>
                            </div>

                            <h5 className="course-overview-card-title">
                                Learner's career outcome
                            </h5>
                            <div className="course-overview-card-descriptionbox">
                                <p>Web development</p>
                                <p>Web development</p>
                                <p>Web development</p>
                            </div>
                            <h5 className="course-overview-card-title">
                                Job opportunities
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
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="program-details-section">
                <Row>
                    <Col sm="12" md="8" lg="9">
                        <Container className="containerClass">
                            <h5
                                className="program-details-header"
                                id="ProgramCurriculum"
                            >
                                Program Details
                            </h5>
                            <p className="program-details-para">
                                orem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero donec id a. Elit tortor leo, eu tortor
                                sociis a erat potenti. Euismod eget morbi
                                aliquet interdum diam lobortis massa. Tellus a
                                mauris pulvinar consectetur praesent convallis
                                hendrerit a dolor. Ut viverra massa aliquet elit
                                sit proin. Est mauris mattis arcu, a ullamcorper
                                elit amet montes. Odio quis cursus enim magna.
                                Vitae ipsum curabitur bibendum ut. Amet, duis
                                proin lorem{" "}
                            </p>
                            <h5 className="program-details-header">
                                Course Content
                            </h5>
                            <div
                                className="course-content-top-overview-degree"
                                style={{ color: "#fff" }}
                            >
                                <span>41 sections •</span>
                                <span>692 lectures •</span>
                                <span>173h 31m total length</span>
                            </div>
                            <div
                                class="accordion course-content-accordion"
                                id="courseContentParent"
                            >
                                {courseContent &&
                                    courseContent.map(detail => (
                                        <div class="card" key={detail?.id}>
                                            <div id={`heading${detail?.id}`}>
                                                <h2 class="mb-0">
                                                    <a
                                                        class="btn btn-link course-content-card-headerlink"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target={`#collapse${detail?.id}`}
                                                        aria-expanded="true"
                                                        aria-controls={`collapse${detail?.id}`}
                                                    >
                                                        <i
                                                            class="fas fa-chevron-down mr-2"
                                                            style={{
                                                                color: "#F05454"
                                                            }}
                                                        ></i>

                                                        {detail?.title}
                                                        <span
                                                            className="duration ml-2"
                                                            style={{
                                                                color: "red"
                                                            }}
                                                        >
                                                            {detail?.duration}
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>

                                            <div
                                                id={`collapse${detail?.id}`}
                                                class="collapse"
                                                aria-labelledby={`heading${detail?.id}`}
                                                data-parent="#courseContentParent"
                                            >
                                                <div class="card-body">
                                                    <List
                                                        type="unstyled"
                                                        className="mb-0"
                                                    >
                                                        {detail?.content &&
                                                            detail?.content.map(
                                                                c => (
                                                                    <li
                                                                        className="courseContent-list"
                                                                        key={
                                                                            c?.title
                                                                        }
                                                                    >
                                                                        <img
                                                                            src={
                                                                                playbutton
                                                                            }
                                                                            alt=""
                                                                            className="mr-2"
                                                                        />
                                                                        {
                                                                            c?.title
                                                                        }
                                                                        <span className="duration ml-2">
                                                                            {
                                                                                c?.duration
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </Container>
                    </Col>
                </Row>
            </div>
            <h5
                className="course-content-top-header container"
                style={{ marginTop: "30px", marginBottom: "0px" }}
                id="Instructors"
            >
                Instructors
            </h5>
            <div className="d-flex" style={{ marginLeft: "280px" }}>
                <div className="instructor-section ">
                    <img
                        src="https://qph.fs.quoracdn.net/main-qimg-6291c3a117fc230c82785148baef7eed"
                        alt=""
                        className="instructor-profile-image"
                    />
                    <h5 className="instructor-profile-name">Dr. ytyct vktuv</h5>
                    <p className="instructor-profile-content">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </p>
                    <div className="author-overview">
                        <div className="author-overview-list">
                            <List type="unstyled" className="mb-0">
                                {authorOverview &&
                                    authorOverview.map(a => (
                                        <li key={a} className="my-2">
                                            <img
                                                src={prereq}
                                                className="mr-2 author-overview-list-img"
                                                alt=""
                                            />
                                            <span className="author-overview-title">
                                                {a}
                                            </span>
                                        </li>
                                    ))}
                            </List>
                        </div>
                    </div>
                </div>
                <div className="instructor-section">
                    <img
                        src="https://qph.fs.quoracdn.net/main-qimg-6291c3a117fc230c82785148baef7eed"
                        alt=""
                        className="instructor-profile-image"
                    />
                    <h5 className="instructor-profile-name">Dr. ytyct vktuv</h5>
                    <p className="instructor-profile-content">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </p>
                    <div className="author-overview">
                        <div className="author-overview-list">
                            <List type="unstyled" className="mb-0">
                                {authorOverview &&
                                    authorOverview.map(a => (
                                        <li key={a} className="my-2">
                                            <img
                                                src={prereq}
                                                className="mr-2 author-overview-list-img"
                                                alt=""
                                            />
                                            <span className="author-overview-title">
                                                {a}
                                            </span>
                                        </li>
                                    ))}
                            </List>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    background: "#fff",
                    padding: "30px 0",
                    margin: "40px 0px 40px 0px"
                }}
            >
                <Container className="containerClass">
                    <Row>
                        <Col sm="12" md="8">
                            <h5
                                className="course-content-top-header"
                                id="Benefits"
                            >
                                Benefits
                            </h5>
                            <div className="author-overview">
                                <div className="author-overview-list">
                                    <List type="unstyled" className="mb-0">
                                        {authorOverview &&
                                            authorOverview.map(a => (
                                                <li key={a} className="my-2">
                                                    <img
                                                        src={prereq}
                                                        className="mr-2 author-overview-list-img"
                                                        alt=""
                                                    />
                                                    <span className="author-overview-title">
                                                        {a}
                                                    </span>
                                                </li>
                                            ))}
                                    </List>
                                </div>
                            </div>
                            <h5 id="fees">Fees and Financing</h5>
                            <p className="course-author-designations mb-0">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eveniet reprehenderit,
                                temporibus aut dicta rerum natus provident
                                cumque necessitatibus alias nam numquam a
                                tempore minus perspiciatis praesentium magnam
                                neque? Reiciendis tempore et ratione facilis
                                nesciunt provident corrupti facere dolore
                                voluptas alias optio
                            </p>
                            <p className="course-author-designations mb-1">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eveniet reprehenderit,
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div
                style={{
                    background: "#fff",
                    padding: "30px 0",
                    margin: "40px 0px 40px 0px"
                }}
            >
                <Container className="containerClass">
                    <Row>
                        <Col sm="12" md="8">
                            <h5
                                className="course-content-top-header"
                                id="Reviews"
                            >
                                Reviews
                            </h5>
                            <div className="course-detail-review-section">
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
                    <Row className="course-detail-testimonial-section">
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
                                            <div className="course-detail-testimonial-cards">
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
                        <h5
                            className="course-content-top-header text-center pt-2"
                            id="FAQs"
                        >
                            FAQs
                        </h5>
                        <div
                            class="accordion course-content-accordion"
                            id="courseFAQParent"
                        >
                            {faq &&
                                faq.map(faqIndividual => (
                                    <div class="card" key={faqIndividual?.id}>
                                        <div id={`heading${faqIndividual?.id}`}>
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
                                                    {faqIndividual?.question}
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
                {/* <Row className="course-card-landing-page-row">
                    {Course.map(course => (
                        <Col sm="12" md="3" key={course?.id}>
                            <CourseCard data={course} />
                        </Col>
                    ))}
                </Row> */}
            </div>
        </div>
    );
}

export default Degree;
