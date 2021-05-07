import axios from "axios";
import React, { useState, useEffect } from "react";
import {
    Col,
    Container,
    Row,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import GovernmentjobAccordion from "./GovernmentjobAccordation";
import PopularChoice from "../homepage/landingPageComponents/PopularChoice";
import { Link } from "react-router-dom";
function Governmentjobsubcategory(props) {
    const [categories, setCategory] = useState([]);
    const [course, setCourse] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    useEffect(() => {
        const { slug } = props.match.params;
        if (slug) {
            axios.get(`/api/government_jobs/${slug}`).then(res => {
                setSubCategory(res.data.data);
            });
        }

        axios
            .get("/api/government_jobs/categories")
            .then(res => setCategory(res.data.data))
            .catch(err => console.log(err));
        axios
            .get("/api/government_jobs")
            .then(res => setJobs(res.data.data))
            .catch(err => console.log(err));
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
            <div className="governmentjob">
                <div className="government-section">
                    <Row>
                        <Col sm="12" lg="3">
                            <div className="left-sidebar">
                                <h4>JOBS</h4>

                                <GovernmentjobAccordion data={categories} />
                            </div>
                        </Col>
                        <Col sm="12" lg="6">
                            <div className="government-job-subcategory-details">
                                <h3 className="title-bank-last">
                                    {subcategory.title}
                                </h3>
                                <Container className="containerClass">
                                    <Nav>
                                        <NavItem>
                                            <NavLink
                                                className="govrnment-job-detail"
                                                href="#Overview"
                                            >
                                                Description
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className="govrnment-job-detail"
                                                href="#one"
                                            >
                                                Salary and <br /> Job positions
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className="govrnment-job-detail"
                                                href="#two"
                                            >
                                                {" "}
                                                Eligibility
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className="govrnment-job-detail"
                                                href="#three"
                                            >
                                                {" "}
                                                Apply Online
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className="govrnment-job-detail"
                                                href="#four"
                                            >
                                                {" "}
                                                Admit card{" "}
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className="govrnment-job-detail"
                                                href="#five"
                                            >
                                                {" "}
                                                Syllabus
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className="govrnment-job-detail"
                                                href="#six"
                                            >
                                                {" "}
                                                Pattern
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className="govrnment-job-detail"
                                                href="#seven"
                                            >
                                                {" "}
                                                Cutoff
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Container>
                                <div className="content-bankjoblast">
                                    <img
                                        src={subcategory.image}
                                        className="subcategory-image"
                                        style={{
                                            maxWidth: "100%",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            display: "block"
                                        }}
                                        alt="sub-image"
                                    />
                                    <div className="government-job-subcategory-content">
                                        <h5
                                            className="government-job-subcategory-information"
                                            id="Overview"
                                        >
                                            Description
                                        </h5>
                                        <h5 className="government-job-subcategory-information-para">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        subcategory.description
                                                }}
                                            ></div>
                                        </h5>

                                        <h5
                                            className="government-job-subcategory-information"
                                            id="one"
                                        >
                                            Salary and Job Position
                                        </h5>
                                        <h5 className="government-job-subcategory-information-para">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        subcategory.salary_and_job_positions
                                                }}
                                            ></div>
                                        </h5>
                                        <h5
                                            className="government-job-subcategory-information"
                                            id="two"
                                        >
                                            Eligibility Criteria
                                        </h5>
                                        <h5 className="government-job-subcategory-information-para">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        subcategory.eligibility_criteria
                                                }}
                                            ></div>
                                        </h5>
                                        <h5
                                            className="government-job-subcategory-information"
                                            id="three"
                                        >
                                            Apply Online
                                        </h5>
                                        <h5 className="government-job-subcategory-information-para">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        subcategory.apply_online
                                                }}
                                            ></div>
                                        </h5>
                                        <h5
                                            className="government-job-subcategory-information"
                                            id="four"
                                        >
                                            Admit Card
                                        </h5>
                                        <h5 className="government-job-subcategory-information-para">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        subcategory.admit_card
                                                }}
                                            ></div>
                                        </h5>
                                        <h5
                                            className="government-job-subcategory-information"
                                            id="five"
                                        >
                                            Syllabus
                                        </h5>
                                        <h5 className="government-job-subcategory-information-para">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: subcategory.syllabus
                                                }}
                                            ></div>
                                        </h5>
                                        <h5
                                            className="government-job-subcategory-information"
                                            id="six"
                                        >
                                            Exam Pattern
                                        </h5>
                                        <h5 className="government-job-subcategory-information-para">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        subcategory.exam_pattern
                                                }}
                                            ></div>
                                        </h5>
                                        <h5
                                            className="government-job-subcategory-information"
                                            id="seven"
                                        >
                                            Cutoff
                                        </h5>
                                        <h5 className="government-job-subcategory-information-para">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: subcategory.cutoff
                                                }}
                                            ></div>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm="12" lg="3">
                            {course.map(a => (
                                <div className="job-course-sidebar">
                                    <h6>Related Courses</h6>

                                    <div className="job-course-sidebar-list-el">
                                        <div className="sidebar-list-top">
                                            <i className="fas fa-chevron-right"></i>
                                            <Link
                                                to={`/courseDetail/${a?.slug}`}
                                            >
                                                <p> {a?.title}</p>
                                            </Link>
                                        </div>
                                        <div className="job-course-sidebar-pricesection">
                                            <p>Rs. {a?.discount_price}</p>
                                            <img
                                                src={a?.course_provider.image}
                                                alt="Udemy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div
                                className="job-course-sidebar"
                                style={{ marginTop: "100px" }}
                            >
                                <h6>Notifications</h6>
                                {jobs.map(b => (
                                    <div className="job-course-sidebar-list-el">
                                        <div className="sidebar-list-top">
                                            <i className="fas fa-chevron-right"></i>
                                            <Link
                                                to={`/govermentjobs/${b?.category?.slug}/${b?.subcategory?.slug}/${b?.slug}`}
                                                target="_blank"
                                            >
                                                <p> {b?.title}</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
                {course && (
                    <PopularChoice
                        data={course}
                        title="Banking Exams Courses"
                    />
                )}
            </div>
        </>
    );
}

export default Governmentjobsubcategory;
