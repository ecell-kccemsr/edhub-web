import React, {useState, useEffect} from "react";
import axios from "axios";
import { Col, Container, Row, List, Progress,Button } from "reactstrap";
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

const courseContent = [
    {
        id: "9198ce8a-772a-425d-8cd8-86ade1d1f0c8",
        title: "Welcome to Android R",
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

const preqreq = [
    "No Programming Experience is Required",
    "No Programming Experience is Required",
    "No Programming Experience is Required"
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

function CourseDetail ()  {
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
            <div className="course-detail-section">
                <div className="course-detail-hero-section">
                    <Container className="containerClass">
                        <Row>
                            <Col sm="12" md="8">
                                <img src={courseDetailCompany} alt="" />
                                <h2>
                                    The Complete Android R + Java Developer
                                    Course™ : 2021
                                </h2>
                                <h4>Course by: Dr. makn vjyvhj</h4>
                                <h5>Subtitiles</h5>
                                <h6>English , Hindi , Espanol</h6>
                                <button className="share-btn">Share</button>
                                <button className="compare-btn">
                                    Add to compare
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="containerClass">
                    <Row>
                        <Col sm="12" md="8">
                            <div className="course-overview-card">
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
                                <h5 className="course-overview-card-title">
                                    Skills you'll gain
                                </h5>
                                <div className="course-overview-card-descriptionbox">
                                    <p>Web development</p>
                                    <p>Web development</p>
                                </div>
                            </div>
                            <div className="course-overview-card">
                                <h5 className="course-overview-card-title">
                                    DESCRIPTION
                                </h5>
                                <p className="course-description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quasi, maiores eius natus
                                    provident magni adipisci hic eligendi cum
                                    sit asperiores! Rem vitae minus, ducimus
                                    repellendus architecto consequuntur illo
                                    officiis nihil nemo quis! Officia
                                    repudiandae, distinctio at expedita repellat
                                    obcaecati. Dolore, incidunt. Libero
                                    delectus, sit saepe similique, laboriosam a
                                    voluptates officia accusantium dolorum,
                                    praesentium corporis reprehenderit?
                                    Accusantium magni suscipit doloribus velit
                                    unde harum quis officiis dolor eos, eum
                                    architecto officia repudiandae omnis ad vel
                                    quia tenetur provident dolore adipisci
                                    libero voluptatem magnam modi voluptatum.
                                    Minima laboriosam rerum, at facilis neque
                                    explicabo ad saepe expedita adipisci.
                                    Corporis sequi cumque neque modi temporibus?
                                </p>
                                <p className="course-description-readmore">
                                    Read more
                                    <i class="fas fa-chevron-down ml-2"></i>
                                </p>
                            </div>

                            <h5 className="course-content-top-header">
                                Course Content
                            </h5>
                            <div className="course-content-top-overview">
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
                            <div className="course-prereq-section">
                                <h5 className="course-content-top-header">
                                    Prerequisites
                                </h5>
                                <List type="unstyled" className="mb-0">
                                    {preqreq &&
                                        preqreq.map(p => (
                                            <li key={p} className="my-2">
                                                <img
                                                    src={prereq}
                                                    className="mr-2"
                                                    alt=""
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
                                <h5 className="course-content-top-header">
                                    Instructor
                                </h5>
                                <h5 className="course-content-top-header">
                                    Dr. ytyct vktuv
                                </h5>
                                <h6 className="course-author-designations">
                                    Web developer, Digital Marketer, Business
                                    Expert and Teacher
                                </h6>
                                <div className="author-overview">
                                    <img
                                        src={author}
                                        alt=""
                                        className="author-img"
                                    />
                                    <div className="author-overview-list">
                                        <List type="unstyled" className="mb-0">
                                            {authorOverview &&
                                                authorOverview.map(a => (
                                                    <li
                                                        key={a}
                                                        className="my-2"
                                                    >
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
                                <p className="course-author-designations mb-0">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Eveniet reprehenderit,
                                    temporibus aut dicta rerum natus provident
                                    cumque necessitatibus alias nam numquam a
                                    tempore minus perspiciatis praesentium
                                    magnam neque? Reiciendis tempore et ratione
                                    facilis nesciunt provident corrupti facere
                                    dolore voluptas alias optio
                                </p>
                                <p className="course-author-designations mb-1">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Eveniet reprehenderit,
                                    temporibus aut dicta rerum natus provident
                                    cumque necessitatibus alias nam numquam a
                                    tempore minus perspiciatis praesentium
                                    magnam neque? Reiciendis tempore et ratione
                                    facilis nesciunt provident corrupti facere
                                    dolore voluptas alias optio
                                </p>
                                <h5 className="course-content-top-header">
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
        </>
    );
};

export default CourseDetail;
