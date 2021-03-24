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
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // console.log(props);
        const { category_slug } = props.match.params;
        const { subcategory_slug } = props.match.params;
        setSlug(category_slug);
        setSubSlug(subcategory_slug);

        axios.get("/api/government_jobs/sub_categories").then(res => {
            const cats = res.data.data.filter(c => c.slug == subcategory_slug);
            if (cats.length > 0) {
                axios
                    .get(`/api/government_jobs?subcategory_id=${cats[0].id}`)

                    .then(res => {
                        // console.log("res", res);
                        setCategoryJobs(res.data.data[0]);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        });

        axios
            .get("/api/government_jobs")
            .then(res => {
                setJobs(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
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
                    <h3 className="title-bank-last">{categoryJobs.title}</h3>
                    <section className="government-job-subcategory-section">
                        <div className="d-flex  goverment-btn-section mb-2">
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#one" style={{ color: "white" }}>
                                        Salary & <br /> job positions
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#two" style={{ color: "white" }}>
                                        Eligibility <br /> Criteria
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#three" style={{ color: "white" }}>
                                        Syllabus
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#four" style={{ color: "white" }}>
                                        Exam Pattern
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#five" style={{ color: "white" }}>
                                        Cutoff
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#six" style={{ color: "white" }}>
                                        Apply Online
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#seven" style={{ color: "white" }}>
                                        Admit Card
                                    </a>
                                </p>
                            </div>
                            <div className="job-single-btn">
                                <p style={{ fontSize: "18px" }}>
                                    <a href="#eight" style={{ color: "white" }}>
                                        Prev Year <br /> que.papers
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="content-bankjoblast">
                        <img
                            src={categoryJobs.image}
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
                                Salary and Job Position <br />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            categoryJobs.salary_and_job_positions
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
                                            categoryJobs.eligibility_criteria
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
                                        __html: categoryJobs.syllabus
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
                                        __html: categoryJobs.exam_pattern
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
                                        __html: categoryJobs.cutoff
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
                                        __html: categoryJobs.apply_online
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
                                        __html: categoryJobs.admit_card
                                    }}
                                ></div>
                            </h5>
                        </div>
                    </div>
                    {jobs && jobs.length > 0 && (
                        <LinkCard
                            title="Related Notifications and Jobs For you"
                            data={jobs}
                            background={true}
                            customPadding="0px"
                            customMargin="50px 0 0"
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default Governmentjobsubcategory;
