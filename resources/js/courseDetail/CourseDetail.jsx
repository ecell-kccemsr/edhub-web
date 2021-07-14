import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Col,
    Container,
    Row,
    List,
    Progress,
    Nav,
    NavItem,
    NavLink,
    Spinner
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopularChoice from "../homepage/landingPageComponents/PopularChoice";
import SliderHomepage from "../homepage/landingPageComponents/SliderHomepage";
import { useStoreActions, useStoreState } from "easy-peasy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DetailCard from "./DetailCard";
const authorOverview = [
    "4.2 Instructor Rating",
    "5,680 Reviews",
    "73,742 Students"
];
function CourseDetail(props) {
    // const CourseDetail = ({ data } , props) => {
    const [courseslug, setCourseSlug] = useState("");
    const [Course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
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
                setLoading(false);
                setSingleCourse(res.data.data);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
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
        if (compares?.length > 2) {
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
    const url = window.location.href;
    const notify = () => toast("Link Copied!");
    if (loading) {
        return (
            <>
                <Container>
                    <h4 className="text-center text-dark py-4 my-4">
                        Loading Course...
                        <Spinner color="danger" />
                    </h4>
                </Container>
            </>
        );
    }
    return (
        <>
            {!loading && error && (
                <>
                    <Container>
                        <h4 className="text-center py-4  my-4">
                            Something went wrong 🙁
                        </h4>
                    </Container>
                </>
            )}
            {!loading && !error && (
                <div className="course-detail-section">
                    <div className="course-detail-hero-section">
                        <Container className="containerClass">
                            <Row>
                                <Col sm="12" md="8">
                                    <>
                                        {singleCourse?.course_provider
                                            ?.image && (
                                            <img
                                                src={
                                                    singleCourse
                                                        ?.course_provider?.image
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
                                            singleCourse.course_instructor
                                                .length > 0 &&
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
                                            <button
                                                className="share-btn"
                                                onClick={notify}
                                            >
                                                Share
                                            </button>
                                        </CopyToClipboard>
                                        <ToastContainer />
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
                                                Go To Class
                                            </a>
                                        </button>
                                    </>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Container className="containerClass">
                        <Row>
                            <Col sm="12" md="6" lg="8">
                                <Nav>
                                    <NavItem>
                                        <NavLink
                                            className="navlink-course-detail"
                                            href="#Overview"
                                        >
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="navlink-course-detail"
                                            href="#Content"
                                        >
                                            Course Content
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="navlink-course-detail">
                                            {" "}
                                            Prerequisites
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="navlink-course-detail"
                                            href="#Instructor"
                                        >
                                            {" "}
                                            Instructor
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="navlink-course-detail"
                                            href="#Reviews"
                                        >
                                            {" "}
                                            Reviews{" "}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="navlink-course-detail"
                                            href="#FAQs"
                                        >
                                            {" "}
                                            FAQs
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Row>
                                    <Col sm="12">
                                        <div className="course-overview-card">
                                            {singleCourse.outcome &&
                                                singleCourse?.outcome?.length !=
                                                    0 && (
                                                    <>
                                                        <h5 className="course-overview-card-title">
                                                            Learner's career
                                                            outcome
                                                        </h5>
                                                        <div className="course-overview-card-descriptionbox">
                                                            {singleCourse?.outcome &&
                                                                singleCourse?.outcome.map(
                                                                    (
                                                                        p,
                                                                        key
                                                                    ) => (
                                                                        <p
                                                                            key={
                                                                                key
                                                                            }
                                                                        >
                                                                            {p}
                                                                        </p>
                                                                    )
                                                                )}
                                                        </div>
                                                    </>
                                                )}
                                            <h5 className="course-overview-card-title">
                                                Job opportunities
                                            </h5>
                                            <div className="course-overview-card-stats">
                                                <div className="stat-container">
                                                    <img
                                                        src="/images/courseDetail/stat1.png"
                                                        alt="stat1"
                                                    />
                                                    <p>Upto 50 % Promotions</p>
                                                </div>
                                                <div className="stat-container">
                                                    <img
                                                        src="/images/courseDetail/stat2.png"
                                                        alt="stat2"
                                                    />
                                                    <p>
                                                        Upto 85% + New career
                                                        opportunities
                                                    </p>
                                                </div>
                                            </div>
                                            <h5 className="course-overview-card-title">
                                                Skills you'll gain
                                            </h5>
                                            {singleCourse?.title && (
                                                <div className="course-overview-card-descriptionbox">
                                                    <p>{singleCourse?.title}</p>
                                                </div>
                                            )}
                                        </div>
                                        {singleCourse.description &&
                                            singleCourse?.description?.length !=
                                                0 && (
                                                <>
                                                    <div className="course-overview-card">
                                                        <h5
                                                            className="course-overview-card-title"
                                                            id="Overview"
                                                        >
                                                            DESCRIPTION
                                                        </h5>
                                                        <p
                                                            className="course-description"
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    singleCourse.description
                                                            }}
                                                        ></p>
                                                        {/* <p className="course-description-readmore">
                                            Read more
                                            <i className="fas fa-chevron-down ml-2"></i>
                                        </p> */}
                                                    </div>
                                                </>
                                            )}
                                        {courseCurr.detail &&
                                            singleCourse?.detail?.length !=
                                                0 && (
                                                <>
                                                    <h5
                                                        className="course-content-top-header"
                                                        id="Content"
                                                    >
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
                                                            courseCurr.map(
                                                                detail => (
                                                                    <div
                                                                        className="card"
                                                                        key={
                                                                            detail?.id
                                                                        }
                                                                    >
                                                                        <div
                                                                            id={`heading${detail?.id}`}
                                                                        >
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
                                                                                            color:
                                                                                                "#F05454"
                                                                                        }}
                                                                                    ></i>
                                                                                    {
                                                                                        detail?.title
                                                                                    }
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
                                                                                                        src="/images/courseDetail/playbutton.png"
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
                                                                )
                                                            )}
                                                    </div>
                                                </>
                                            )}
                                        {singleCourse.prerequisites &&
                                            singleCourse?.prerequisites
                                                ?.length != 0 && (
                                                <>
                                                    <div className="course-prereq-section">
                                                        <h5
                                                            className="course-content-top-header"
                                                            id="Prerequisites"
                                                        >
                                                            Prerequisites
                                                        </h5>
                                                        <List
                                                            type="unstyled"
                                                            className="mb-0"
                                                        >
                                                            {singleCourse?.prerequisites &&
                                                                singleCourse?.prerequisites.map(
                                                                    p => (
                                                                        <li
                                                                            key={
                                                                                p
                                                                            }
                                                                            className="my-2"
                                                                        >
                                                                            <img
                                                                                src="/images/courseDetail/prereq.png"
                                                                                className="mr-2"
                                                                                alt="prereq"
                                                                            />
                                                                            <span className="course-prereq-title">
                                                                                {
                                                                                    p
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    )
                                                                )}
                                                        </List>
                                                    </div>
                                                </>
                                            )}
                                    </Col>
                                </Row>
                                <div
                                    style={{
                                        background: "#F6F7F8",
                                        padding: "15px 30px",
                                        borderRadius: "12px"
                                    }}
                                >
                                    <Row>
                                        <Col sm="12" md="8">
                                            {singleCourse.course_instructor &&
                                                singleCourse?.course_instructor
                                                    ?.length != 0 && (
                                                    <>
                                                        <h5
                                                            className="course-content-top-header"
                                                            id="Instructor"
                                                        >
                                                            Instructor
                                                        </h5>
                                                        {singleCourse.course_instructor &&
                                                            singleCourse
                                                                .course_instructor
                                                                ?.length > 0 &&
                                                            singleCourse.course_instructor.map(
                                                                courseinstructor => (
                                                                    <>
                                                                        <h5 className="course-content-top-header">
                                                                            {
                                                                                courseinstructor?.name
                                                                            }
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
                                                                                                        src="/images/courseDetail/prereq.png"
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
                                                    </>
                                                )}
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
                                                        {/* {singleCourse?.rating && (
                                                            <h4>
                                                                {Math.ceil(
                                                                    parseFloat(
                                                                        singleCourse?.rating
                                                                    )
                                                                )}
                                                            </h4>
                                                        )}
                                                        {singleCourse?.rating <=
                                                        0 ? (
                                                            <img
                                                                src="/images/star0.png"
                                                                alt="Star"
                                                            />
                                                        ) : singleCourse?.rating <=
                                                          1 ? (
                                                            <img
                                                                src="/images/star1.png"
                                                                alt="Star"
                                                            />
                                                        ) : singleCourse?.rating <=
                                                          2 ? (
                                                            <img
                                                                src="/images/star2.png"
                                                                alt="Star"
                                                            />
                                                        ) : singleCourse?.rating <=
                                                          3 ? (
                                                            <img
                                                                src="/images/star3.png"
                                                                alt="Star"
                                                            />
                                                        ) : singleCourse?.rating <=
                                                          4 ? (
                                                            <img
                                                                src="/images/star4.png"
                                                                alt="Star"
                                                            />
                                                        ) : (
                                                            <img
                                                                src="/images/star5.png"
                                                                alt="Star"
                                                            />
                                                        )} */}
                                                        <h4>4.2</h4>
                                                        <img
                                                            src="/images/star4.png"
                                                            alt="Star"
                                                        />
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
                                                                        r?.rating ==
                                                                        1
                                                                            ? "/images/courseDetail/1star.png"
                                                                            : r?.rating ==
                                                                              2
                                                                            ? "/images/courseDetail/2star.png"
                                                                            : r?.rating ==
                                                                              3
                                                                            ? "/images/courseDetail/3star.png"
                                                                            : r?.rating ==
                                                                              4
                                                                            ? "/images/courseDetail/4star.png"
                                                                            : "/images/courseDetail/5star.png";
                                                                    return (
                                                                        <div className="indi-progress">
                                                                            <Progress
                                                                                value={
                                                                                    percentage
                                                                                }
                                                                            />
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
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
                                        <Col sm="12">
                                            <Row className="">
                                                {CourseRev &&
                                                    CourseRev.filter(
                                                        c => c?.content !== ""
                                                    ).map(u => (
                                                        <Col
                                                            sm="12"
                                                            md="6"
                                                            key={u?.name}
                                                            className="my-4"
                                                        >
                                                            <div className="course-detail-testimonial-cards">
                                                                <img
                                                                    src={
                                                                        u?.user_image
                                                                    }
                                                                    alt="user_image"
                                                                />
                                                                <h6>
                                                                    {
                                                                        u?.user_name
                                                                    }
                                                                </h6>
                                                                <p>
                                                                    {u?.content}
                                                                </p>
                                                            </div>
                                                        </Col>
                                                    ))}
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <Col sm="12" md="8">
                                        {singleCourse.faq &&
                                            singleCourse?.faq.length != 0 && (
                                                <>
                                                    <h5
                                                        className="course-content-top-header text-center pt-2"
                                                        id="FAQs"
                                                    >
                                                        FAQs
                                                    </h5>
                                                    <div
                                                        className="accordion course-content-accordion"
                                                        id="courseFAQParent"
                                                    >
                                                        {singleCourse?.faq &&
                                                            singleCourse?.faq.map(
                                                                faqIndividual => {
                                                                    let id = uuidv4();
                                                                    return (
                                                                        <div
                                                                            className="card"
                                                                            key={
                                                                                id
                                                                            }
                                                                        >
                                                                            <div
                                                                                id={`heading${id}`}
                                                                            >
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
                                                                }
                                                            )}
                                                    </div>
                                                </>
                                            )}
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="12" md="6" lg="4">
                                <DetailCard singleCourse={singleCourse} />
                            </Col>
                        </Row>
                    </Container>

                    <div className="popular-choice-section-course-details">
                        <Row className="course-card-landing-page-row">
                            <SliderHomepage
                                title="Recommended Courses for you"
                                description="All top rated courses enrolled by learners"
                                course_category_id={singleCourse?.category?.id}
                            />
                        </Row>
                    </div>
                </div>
            )}
        </>
    );
}
export default CourseDetail;
