import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, List, Progress, Button, Nav, NavItem, NavLink  } from "reactstrap";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import stat1 from "../Images/courseDetail/stat1.png";
import stat2 from "../Images/courseDetail/stat2.png";
import playbutton from "../Images/courseDetail/playbutton.png";
import prereq from "../Images/courseDetail/prereq.png";
import author from "../Images/courseDetail/author.png";
import star5 from "../Images/courseDetail/5star.png";
import star4 from "../Images/courseDetail/4star.png";
import star3 from "../Images/courseDetail/3star.png";
import star2 from "../Images/courseDetail/2star.png";
import star1 from "../Images/courseDetail/1star.png";
import user1 from "../Images/courseDetail/user1.png";
import user2 from "../Images/courseDetail/user2.png";
import courseDetailCompany from "../Images/courseDetail/courseDetailCompany.png";
import CourseCard from "../components/course-card/CourseCard";
import star from "../Images/courseCategory/star.png";
import ellipse from "../Images/courseDetail/Ellipse.png";
import PopularChoice from "../homepage/landingPageComponents/PopularChoice";
import { useStoreActions, useStoreState } from "easy-peasy";
import { CopyToClipboard } from 'react-copy-to-clipboard'

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

function CourseDetail(props) {
    // const CourseDetail = ({ data } , props) => {
    const [courseslug, setCourseSlug] = useState("");
    const [Course, setCourse] = useState([]);
    const [CourseRev, setCourseRev] = useState([]);
    const [categories, setCategory] = useState([]);
    const [singleCourse, setSingleCourse] = useState([]);
    const [courseCurr, setCourseCurr] = useState([]);
    useEffect(() => {
        const { course_slug } = props.match.params;
        setCourseSlug(course_slug);
       
       
        axios
            .get(`/api/courses/${course_slug}`)
            .then(res => {
                setSingleCourse(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get(`/api/courses/${course_slug}/curriculum?per_page=10000`)
            .then(res => {
                setCourseCurr(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("/api/courses")
            .then(res => {
                setCourse(res.data.data.filter(c => c?.slug !== course_slug));
            })
            .catch(err => {
                console.log(err);
            });
            axios
            .get(`/api/courses/${course_slug}/reviews`)
            .then(res => {
                setCourseRev(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const compares = useStoreState(state => state.compares);
    const addToCompare = useStoreActions(actions => actions.addToCompare);

    const isAlreadyInCompares =
        compares.findIndex(course => course.id === singleCourse.id) !== -1;
    const handleCompare = singleCourse => {
        if (compares.length > 2) {
            alert("Cant add more");
            return;
        } else {
            addToCompare(singleCourse);
        }
    };

    let totalrating =
        singleCourse?.rating_distribution &&
        singleCourse?.rating_distribution.reduce(
            (previousScore, currentScore, index) =>
                previousScore + currentScore.count,
            0
        );
        const url = window.location.href

    return (
        <>
            <div className="course-detail-section">
                <div className="course-detail-hero-section">
                    <Container className="containerClass">
                        <Row>
                            <Col sm="1" md="8">
                                <>
                                    {singleCourse?.course_provider?.image && (
                                        <img
                                            src={
                                                singleCourse?.course_provider
                                                    ?.image
                                            }
                                            style={{
                                                borderRadius: "8px",
                                                maxWidth: "100px",
                                                background: "#fff",
                                                padding: "4px",
                                                objectFit: "contain"
                                            }}
                                            alt="course_provider"
                                        />
                                    )}
                                    <h2>{singleCourse?.title}</h2>
                                    {singleCourse.course_instructor &&
                                        singleCourse.course_instructor.length >
                                            0 &&
                                        singleCourse.course_instructor.map(
                                            courseinstructor => (
                                                <h4>
                                                    {courseinstructor?.name}
                                                </h4>
                                            )
                                        )}

                                    {singleCourse?.captions && (
                                        <>
                                            <h5>Subtitles</h5>
                                            <h6>
                                                {singleCourse?.captions &&
                                                    singleCourse?.captions
                                                        .map(c => c)
                                                        .join(",")}
                                            </h6>
                                        </>
                                    )}
                                    <CopyToClipboard text={url}>
                                <button className="share-btn">Share</button>
                                    </CopyToClipboard>
                                    <button
                                        className="compare-btn-1"
                                        onClick={() =>
                                            handleCompare(singleCourse)
                                        }
                                    >
                                        {isAlreadyInCompares === false ? (
                                            <h5>Add to compare</h5>
                                        ) : (
                                            <h5>Remove from compare</h5>
                                        )}
                                    </button> 
                                    <button className="share-btn-1">
                                       <a
                                            href={singleCourse?.url}
                                            target="_blank"
                                            
                                        >
                                            Buy Now
                                        </a> 
                                    </button>
                                    
                                </>
                            </Col>
                            <Col sm="1" md="4" >
                                <div className="add-to-cart-section-details">
                                    <img
                                        style={{ marginBottom: "5px" }}
                                        src={singleCourse?.image}
                                        className="card-header-image-details"
                                        alt="singleCourse"
                                    />

                                    <div className="card-section-details-content">
                                        <div className="card-section-details-content-price">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginBottom: "-10px"
                                                }}
                                            >
                                                {singleCourse?.discount_price && (
                                                    <h5>
                                                        ₹
                                                        {
                                                            singleCourse?.discount_price
                                                        }
                                                        /-
                                                    </h5>
                                                )}
                                                {singleCourse?.price && (
                                                    <p
                                                        style={{
                                                            color: "#7B7B7B",
                                                            padding: "17px"
                                                        }}
                                                    >
                                                        <strike>
                                                            ₹
                                                            {
                                                                singleCourse?.price
                                                            }
                                                        </strike>
                                                    </p>
                                                )}
                                                {singleCourse?.discount_price &&
                                                    singleCourse?.price && (
                                                        <p
                                                            style={{
                                                                color:
                                                                    "#7B7B7B",
                                                                padding: "17px"
                                                            }}
                                                        >
                                                            {`${Math.round(
                                                                100 -
                                                                    (singleCourse?.discount_price *
                                                                        100) /
                                                                        singleCourse?.price
                                                            )} % off`}
                                                        </p>
                                                    )}
                                            </div>
                                        </div>
                                        <div className="card-section-details-content-price">
                                            <p>
                                                Get&nbsp;
                                                <strong>
                                                    5% extra cashback
                                                </strong>
                                                if you buy through us
                                            </p>
                                        </div>
                                        <div style={{ marginTop: "-10px" }}>
                                            <img src="/Images/courseCategory/star.png" alt="star" />
                                        </div>
                                        <div className="card-section-details-content-price">
                                            <div style={{ marginTop: "-20px" }}>
                                                {singleCourse.course_instructor &&
                                                    singleCourse
                                                        .course_instructor
                                                        .length > 0 &&
                                                    singleCourse.course_instructor.map(
                                                        courseinstructor => (
                                                            <h5>
                                                                {
                                                                    courseinstructor?.name
                                                                }
                                                            </h5>
                                                        )
                                                    )}
                                                <p style={{ color: "#818181" }}>
                                                    Course provided by:
                                                </p>
                                                {singleCourse?.course_provider
                                                    ?.image && (
                                                    <div className="course-provider">
                                                        <img
                                                            src={
                                                                singleCourse
                                                                    ?.course_provider
                                                                    ?.image
                                                            }
                                                            alt="course_provider"
                                                            style={{
                                                                height: "30px",
                                                                padding: "1px",
                                                                width: "100px"
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="card-section-details-content-price">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginBottom: "-10px"
                                                }}
                                            >
                                                <img
                                                    src="/Images/courseDetail/Ellipse.png"
                                                    alt="ellipse"
                                                    style={{
                                                        margin:
                                                            "5px 11px 23px 0px"
                                                    }}
                                                />
                                                <h6>Full time access</h6>
                                            </div>
                                        </div>
                                        <div className="card-section-details-content-price">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginBottom: "-10px"
                                                }}
                                            >
                                                <img
                                                    src="/Images/courseDetail/Ellipse.png"
                                                    alt="ellipse"
                                                    style={{
                                                        margin:
                                                            "5px 11px 23px 0px"
                                                    }}
                                                />
                                                <h6>Mentored Course</h6>
                                            </div>
                                        </div>
                                        <div className="card-section-details-content-price">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginBottom: "-10px"
                                                }}
                                            >
                                                <img
                                                    src="/Images/courseDetail/Ellipse.png"
                                                    alt="ellipse"
                                                    style={{
                                                        margin:
                                                            "5px 11px 23px 0px"
                                                    }}
                                                />
                                                <h6>22.5 hrs Total</h6>
                                            </div>
                                        </div>
                                        <div className="card-section-details-content-price">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginBottom: "-10px"
                                                }}
                                            >
                                                <img
                                                    src="/Images/courseDetail/Ellipse.png"
                                                    alt="ellipse"
                                                    style={{
                                                        margin:
                                                            "5px 11px 23px 0px"
                                                    }}
                                                />
                                                <h6>24/7 Support</h6>
                                            </div>
                                        </div>
                                        <div className="card-section-details-content-price">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    marginBottom: "-10px"
                                                }}
                                            >
                                                <img
                                                    src="/Images/courseDetail/Ellipse.png"
                                                    alt="ellipse"
                                                    style={{
                                                        margin:
                                                            "5px 11px 23px 0px"
                                                    }}
                                                />
                                                <h6>
                                                    Watch on desktop, laptop
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            href={singleCourse?.url}
                                            target="_blank"
                                            className="card-section-details-buy-btn"
                                        >
                                            Buy Now
                                        </a>
                                        {/* <button className="card-section-details-addCart-btn">
                                            Add To Cart
                                        </button> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* <Link to={`/compare`}>
                        <button className="compare-btn-detail">Compare</button>
                    </Link> */}
                </div>
                <Container className="containerClass">
            <Nav>
        <NavItem>
          <NavLink className="navlink-course-detail" href="#Overview">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-course-detail" href="#Content">Course Content</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-course-detail" href="#Prerequisites"> Prerequisites</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-course-detail" href="#Instructor"> Instructor</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-course-detail" href="#Reviews"> Reviews </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-course-detail" href="#FAQs"> FAQs</NavLink>
        </NavItem>
      </Nav>
</Container>
                <Container className="containerClass">
                    <Row>
                        <Col sm="12" md="8">
                            <div className="course-overview-card">
                                <h5 className="course-overview-card-title">
                                    Learner's career outcome
                                </h5>
                                {singleCourse?.outcome &&
                                        singleCourse?.outcome.map(p => (
                                            <>
                                <div className="course-overview-card-descriptionbox">
                                     <p>{p}</p>
                                </div>
                                </>
                                        ))}
                                <h5 className="course-overview-card-title">
                                    Job opportunities
                                </h5>
                                <div className="course-overview-card-stats">
                                    <div className="stat-container">
                                        <img src="/Images/courseDetail/stat1.png" alt="stat1" />
                                        <p>Upto 50 % Promotions</p>
                                    </div>
                                    <div className="stat-container">
                                        <img src="/Images/courseDetail/stat2.png" alt="stat2" />
                                        <p>Upto 12 % New career</p>
                                    </div>
                                </div>
                                <h5 className="course-overview-card-title">
                                    Skills you'll gain
                                </h5>
                                <div className="course-overview-card-descriptionbox">
                                <p>{singleCourse?.title}</p>
                                </div>
                              
                            </div>
                            <div className="course-overview-card">
                                <h5 className="course-overview-card-title" id="Overview">
                                    DESCRIPTION
                                </h5>
                                <p
                                    className="course-description"
                                    dangerouslySetInnerHTML={{
                                        __html: singleCourse.description
                                    }}
                                ></p>
                                {/* <p className="course-description-readmore">
                                    Read more
                                    <i className="fas fa-chevron-down ml-2"></i>
                                </p> */}
                            </div>

                            <h5 className="course-content-top-header" id="Content">
                                Course Content
                            </h5>
                            {/* <div className="course-content-top-overview">
                                <span>41 sections •</span>
                                <span>692 lectures •</span>
                                <span>173h 31m total length</span>
                            </div> */}
                            <div
                                className="accordion course-content-accordion"
                                id="courseContentParent"
                            >
                                {courseCurr &&
                                    courseCurr.map(detail => (
                                        <div className="card" key={detail?.id}>
                                            <div id={`heading${detail?.id}`}>
                                                <h2 className="mb-0">
                                                    <a
                                                        className="btn btn-link course-content-card-headerlink"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target={`#collapse${detail?.id}`}
                                                        aria-expanded="true"
                                                        aria-controls={`collapse${detail?.id}`}
                                                    >
                                                        <i
                                                            className="fas fa-chevron-down mr-2"
                                                            style={{
                                                                color: "#F05454"
                                                            }}
                                                        ></i>
                                                        {detail?.title}
                                                    </a>
                                                </h2>
                                            </div>

                                            <div
                                                id={`collapse${detail?.id}`}
                                                className="collapse"
                                                aria-labelledby={`heading${detail?.id}`}
                                                data-parent="#courseContentParent"
                                            >
                                                <div className="card-body">
                                                    <List
                                                        type="unstyled"
                                                        className="mb-0"
                                                    >
                                                        {detail?.lectures &&
                                                            detail?.lectures.map(
                                                                c => (
                                                                    <li
                                                                        className="courseContent-list"
                                                                        key={
                                                                            c?.title
                                                                        }
                                                                    >
                                                                        <img
                                                                            src="/Images/courseDetail/playbutton.png"
                                                                            alt="playbutton"
                                                                            className="mr-2"
                                                                        />
                                                                        {
                                                                            c?.title
                                                                        }
                                                                        <span className="duration ml-2">
                                                                            time
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
                            <div className="course-prereq-section">
                                <h5 className="course-content-top-header" id="Prerequisites">
                                    Prerequisites
                                </h5>
                                <List type="unstyled" className="mb-0">
                                    {singleCourse?.prerequisites &&
                                        singleCourse?.prerequisites.map(p => (
                                            <li key={p} className="my-2">
                                                <img
                                                    src="/Images/courseDetail/prereq.png"
                                                    className="mr-2"
                                                    alt="prereq"
                                                />
                                                <span className="course-prereq-title">
                                                    {p}
                                                </span>
                                            </li>
                                        ))}
                                </List>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div style={{ background: "#F6F7F8", padding: "30px 0" }}>
                    <Container className="containerClass">
                        <Row>
                            <Col sm="12" md="8">
                                <h5 className="course-content-top-header" id="Instructor"> 
                                    Instructor
                                </h5>
                                {singleCourse.course_instructor &&
                                    singleCourse.course_instructor.length > 0 &&
                                    singleCourse.course_instructor.map(
                                        courseinstructor => (
                                            <>
                                                <h5 className="course-content-top-header">
                                                    {courseinstructor?.name}
                                                </h5>
                                                <h6 className="course-author-designations">
                                                    {
                                                        courseinstructor?.designation
                                                    }
                                                </h6>
                                                <div className="author-overview">
                                                    <img
                                                        src={
                                                            courseinstructor?.image
                                                        }
                                                        alt="courseinstructor"
                                                        className="author-img"
                                                    />
                                                    <div className="author-overview-list">
                                                        <List
                                                            type="unstyled"
                                                            className="mb-0"
                                                        >
                                                            {authorOverview &&
                                                                authorOverview.map(
                                                                    a => (
                                                                        <li
                                                                            key={
                                                                                a
                                                                            }
                                                                            className="my-2"
                                                                        >
                                                                            <img
                                                                                src="/Images/courseDetail/prereq.png"
                                                                                className="mr-2 author-overview-list-img"
                                                                                alt="prereq"
                                                                            />
                                                                            <span className="author-overview-title">
                                                                                {
                                                                                    a
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    )
                                                                )}
                                                        </List>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    )}

                               
                                <h5 className="course-content-top-header" id="Reviews">
                                    Reviews
                                </h5>
                                <div className="course-detail-review-section">
                                    <Row>
                                        <Col
                                            sm="12"
                                            md="2"
                                            className="rating-container"
                                        >
                                            <h4>
                                            {
                                                  Math.round(parseFloat
                                                     (
                                                        singleCourse?.rating 
                                                     )
                                                        )

                                                 }
                                            </h4>
                                            <img src="/Images/courseDetail/4star.png" alt="Star" />
                                            <p>course rating</p>
                                        </Col>
                                        <Col
                                            sm="12"
                                            md="10"
                                            className="progress-container"
                                        >
                                            {singleCourse?.rating_distribution &&
                                                singleCourse?.rating_distribution.map(
                                                    r => {
                                                        let percentage =
                                                            totalrating &&
                                                            Math.round(
                                                                (r?.count *
                                                                    100) /
                                                                    totalrating
                                                            );
                                                        let star =
                                                            r?.rating == 1
                                                                ? "/Images/courseDetail/1star.png"
                                                                : r?.rating == 2
                                                                ? "/Images/courseDetail/2star.png"
                                                                : r?.rating == 3
                                                                ? "/Images/courseDetail/3star.png"
                                                                : r?.rating == 4
                                                                ? "/Images/courseDetail/4star.png"
                                                                : "/Images/courseDetail/5star.png";

                                                        return (
                                                            <div className="indi-progress">
                                                                <Progress
                                                                    value={
                                                                        percentage
                                                                    }
                                                                />
                                                                <img
                                                                    src={star}
                                                                    alt="Star"
                                                                />
                                                                <span>{`${percentage} %`}</span>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row className="course-detail-testimonial-section">
                            <Col sm="12" md="8">
                                <Row className="justify-content-center">
                                    {CourseRev &&
                                        CourseRev.map(u => (
                                            <Col
                                                sm="12"
                                                md="6"
                                                key={u?.name}
                                                className="my-4"
                                            >
                                                <div className="course-detail-testimonial-cards">
                                                    <img src={u?.user_image} alt="user_image" />
                                                    <h6>{u?.user_name}</h6>
                                                    <p>{u?.content}</p>
                                                </div>
                                            </Col>
                                        ))}
                                </Row>
                            
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="containerClass">
                    <Row>
                        <Col sm="12" md="8">
                            <h5 className="course-content-top-header text-center pt-2" id="FAQs">
                                FAQs
                            </h5>
                            <div
                                className="accordion course-content-accordion"
                                id="courseFAQParent"
                            >
                                {singleCourse?.faq &&
                                    singleCourse?.faq.map(faqIndividual => {
                                        let id = uuidv4();
                                        return (
                                            <div className="card" key={id}>
                                                <div id={`heading${id}`}>
                                                    <h2 className="mb-0">
                                                        <a
                                                            className="btn btn-link course-content-card-headerlink"
                                                            type="button"
                                                            data-toggle="collapse"
                                                            data-target={`#collapse${id}`}
                                                            aria-expanded="true"
                                                            aria-controls={`collapse${id}`}
                                                        >
                                                            <i
                                                                className="fas fa-chevron-down mr-2"
                                                                style={{
                                                                    color:
                                                                        "#F05454"
                                                                }}
                                                            ></i>
                                                            {
                                                                faqIndividual?.question
                                                            }
                                                        </a>
                                                    </h2>
                                                </div>

                                                <div
                                                    id={`collapse${id}`}
                                                    className="collapse"
                                                    aria-labelledby={`heading${id}`}
                                                    data-parent="#courseFAQParent"
                                                >
                                                    <div className="card-body">
                                                        <List
                                                            type="unstyled"
                                                            className="mb-0"
                                                        >
                                                            {
                                                                faqIndividual?.answer
                                                            }
                                                        </List>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="popular-choice-section-course-details">
                    <Row className="course-card-landing-page-row">
                        {Course && (
                            <PopularChoice
                                data={Course}
                                title="Recommended for you"
                            />
                        )}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default CourseDetail;
