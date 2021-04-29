import axios from "axios";
import React, { useState, useEffect } from "react";
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
import { v4 as uuidv4 } from "uuid";
import udemy from "../Images/blogs/udemy.png";
import GovernmentjobAccordion from "./GovernmentjobAccordation";
import PopularChoice from "../homepage/landingPageComponents/PopularChoice";
function Governmentjobsubcategory(props) {
    console.log(props);
    const [categories, setCategory] = useState([]);
    const [course, setCourse] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    useEffect(() => {
        const { slug } = props.match.params;
        if (slug) {
            axios.get(`/api/government_jobs/${slug}`).then(res => {
                console.log(res);
                setSubCategory(res.data.data);
            });
        }

        axios
            .get("/api/government_jobs/categories")
            .then(res => setCategory(res.data.data))
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
            <div className="government-section">
                <Row>
                    <Col sm="12" lg="3">
                        <div className="left-sidebar">
                            <h4>JOBS</h4>
                            {categories &&
                                categories?.length > 0 &&
                                categories?.map(c => (
                                    <GovernmentjobAccordion data={c} />
                                ))}
                        </div>
                    </Col>
                    <Col sm="12" lg="6">
                        {/* {categoryslug && (
                            <h5
                                style={{
                                    color: "#4F4F4F",
                                    textTransform: "capitalize"
                                }}
                            >
                                {categoryslug}
                            </h5>
                        )} */}
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
                                            Results
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
                                    alt=""
                                />
                                <div className="government-job-subcategory-content">
                                    <h5
                                        className="government-job-subcategory-information"
                                        id="one"
                                    >
                                        Description <br />
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: subcategory.description
                                            }}
                                        ></div>
                                    </h5>
                                    {course && (
                                        <PopularChoice
                                            data={course}
                                            title="Banking Exams Courses"
                                        />
                                    )}
                                    <h5
                                        className="government-job-subcategory-information"
                                        id="one"
                                    >
                                        Salary and Job Position <br />
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
                                        Eligibility Criteria <br />
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
                                        Syllabus <br />
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: subcategory.syllabus
                                            }}
                                        ></div>
                                    </h5>
                                    <h5
                                        className="government-job-subcategory-information"
                                        id="four"
                                    >
                                        Exam Pattern <br />
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: subcategory.exam_pattern
                                            }}
                                        ></div>
                                    </h5>
                                    <h5
                                        className="government-job-subcategory-information"
                                        id="five"
                                    >
                                        Cutoff <br />
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: subcategory.cutoff
                                            }}
                                        ></div>
                                    </h5>
                                    <h5
                                        className="government-job-subcategory-information"
                                        id="six"
                                    >
                                        Apply Online <br />
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: subcategory.apply_online
                                            }}
                                        ></div>
                                    </h5>
                                    <h5
                                        className="government-job-subcategory-information"
                                        id="seven"
                                    >
                                        Admit Card <br />
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: subcategory.admit_card
                                            }}
                                        ></div>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" lg="3">
                        <div className="job-course-sidebar">
                            <h6>Recent Courses</h6>

                            <div className="job-course-sidebar-list-el">
                                <div className="sidebar-list-top">
                                    <i className="fas fa-chevron-right"></i>
                                    <p>
                                        JPMorgan CEO Jamie Dimon shares his
                                        thoughts on remote work
                                    </p>
                                </div>
                                <div className="job-course-sidebar-pricesection">
                                    <p>$250</p>
                                    <img src={udemy} alt="Udemy" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Governmentjobsubcategory;
