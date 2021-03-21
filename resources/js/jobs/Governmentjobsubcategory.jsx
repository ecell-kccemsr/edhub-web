import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    List,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Table
} from "reactstrap";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import LinkCard from "../components/link-card/LinkCard";

function Governmentjobsubcategory(props) {
    const [categoryJobs, setCategoryJobs] = useState([]);
    const [categoryslug, setSlug] = useState("");
    const [subcategoryslug, setSubSlug] = useState("");
    useEffect(() => {
        console.log(props);
        const { category_slug } = props.match.params;
        const { subcategory_slug } = props.match.params;
        const { subcategory_id } = props.match.params;

        if (subcategory_id) {
            setSlug(category_slug);
            setSubSlug(subcategoryslug);
            axios
                .get(
                    `http://localhost:8000/api/government_jobs?subcategory_id=${subcategory_id}`
                )

                .then(res => {
                    setCategoryJobs(res.data.data[0]);
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);
    return (
        <>
            <div className="government-section">
                {/* BreadCrumb */}
                <BreadCrumb
                    navData={[
                        {
                            title: "Home",
                            link: "/"
                        },
                        {
                            title: "Jobs",
                            link: "/govermentjobs"
                        },
                        {
                            title: `${categoryslug}`,
                            link: `/govermentjobs/${categoryslug}`
                        },
                        {
                            title: `${subcategoryslug}`,
                            link: `/govermentjobs/${categoryslug}/${subcategoryslug}`,
                            active: true
                        }
                    ]}
                />
                {categoryslug && (
                    <h5
                        style={{
                            color: "#4F4F4F",
                            textTransform: "capitalize"
                        }}
                    >
                        {categoryJobs.title}
                        {categoryslug}
                    </h5>
                )}
                <div className="government-job-subcategory-details">
                    <h3 className="title-bank-last">
                        RBI Grade B 2021: Notification Out for 322 Vacancies
                    </h3>
                    <section className="government-job-subcategory-section">
                        <div className="d-flex exam-btn-section  mb-2 justify-content-center">
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#two" style={{ color: "white" }}>
                                        Salary & <br /> job positions
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#two" style={{ color: "white" }}>
                                        Salary & <br /> job positions
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#two" style={{ color: "white" }}>
                                        Salary & <br /> job positions
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#two" style={{ color: "white" }}>
                                        Salary & <br /> job positions
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#two" style={{ color: "white" }}>
                                        Salary & <br /> job positions
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#two" style={{ color: "white" }}>
                                        Salary & <br /> job positions
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#two" style={{ color: "white" }}>
                                        Salary & <br /> job positions
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#two" style={{ color: "white" }}>
                                        Salary & <br /> job positions
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="content-bankjoblast">
                        <img
                            className="government-job-subcategory"
                            src="https://i.ibb.co/BfNN8Lc/Group-207.png"
                            alt="bank"
                        />
                        <div className="government-job-subcategory-content">
                            <h5
                                className="government-job-subcategory-information"
                                id="two"
                            >
                                Salary and Job Position <br />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: categoryJobs.salary_and_job_positions
                                    }}
                                ></div>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="three"
                            >
                                Eligibility Criteria <br />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            categoryJobs.eligibility_criteria
                                    }}
                                ></div>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="four"
                            >
                                Syllabus <br />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: categoryJobs.syllabus
                                    }}
                                ></div>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="five"
                            >
                                Exam Pattern <br />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: categoryJobs.exam_pattern
                                    }}
                                ></div>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="six"
                            >
                                Cutoff <br />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: categoryJobs.cutoff
                                    }}
                                ></div>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="seven"
                            >
                                Apply Online <br />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: categoryJobs.apply_online
                                    }}
                                ></div>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="eight"
                            >
                                Admit Card <br />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: categoryJobs.admit_card
                                    }}
                                ></div>
                            </h5>
                            <h5 className="government-job-subcategory-information">
                                Previous Year Question papers
                            </h5>
                            <h5>
                                <a href="#">Previous Year Question papers </a>{" "}
                                <br />
                                <a href="#">
                                    Previous Year Question papers{" "}
                                </a>{" "}
                                <br />
                                <a href="#">
                                    Previous Year Question papers{" "}
                                </a>{" "}
                                <br />
                                <a href="#">
                                    Previous Year Question papers{" "}
                                </a>{" "}
                                <br />
                                <a href="#">
                                    Previous Year Question papers{" "}
                                </a>{" "}
                                <br />
                                <a href="#">
                                    Previous Year Question papers{" "}
                                </a>{" "}
                                <br />
                                <a href="#">Previous Year Question papers </a>
                            </h5>
                        </div>
                    </div>
                    {/* <LinkCard
                        title="Related Notifications and jobs for you"
                        data={dummyLinkData}
                    /> */}
                </div>
            </div>
        </>
    );
}

export default Governmentjobsubcategory;
