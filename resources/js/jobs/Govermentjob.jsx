import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import LinkCard from "../components/link-card/LinkCard";
import heroBg1 from "../Images/Jobs/heroBg1.png";
import sbi from "../Images/qpaper/sbi.png";

import PopularChoice from "../homepage/landingPageComponents/PopularChoice";
function Govermentjob() {
    const [categories, setCategory] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [course, setCourse] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [subCategoryFilter, setsubCategoryFilter] = useState([]);
    useEffect(() => {
        axios
            .get("/api/government_jobs/categories")
            .then(res => {
                setCategory(res.data.data);
                axios
                    .get("/api/government_jobs/sub_categories")
                    .then(response => {
                        setSubCategory(response.data.data);
                        setsubCategoryFilter(
                            response.data.data.filter(
                                resp => resp.category.id == res.data.data[0].id
                            )
                        );
                    })
                    .catch(err => console.log(err));
            })
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

    const handleTabFilter = slug => {
        // console.log("slug", slug);
        if (slug == "all") {
            setsubCategoryFilter(subCategory);
        } else {
            let values = subCategory.filter(sc => sc.category.slug == slug);
            // console.log("values", values);
            setsubCategoryFilter(values);
        }
    };

    return (
        <>
            <div className="job-page">
                <div className="job-hero-section">
                    <Row>
                        <Col xs="6">
                            <div className="job-hero-section-top">
                                <span className="job-top-button">New</span>
                                <span className="job-top-text">
                                    Avail latest discounts on courses
                                </span>
                            </div>

                            <h4 className="job-hero-section-main-text">
                                Government Exams in India
                            </h4>
                            <p className="job-hero-section-sub-text">
                                Start your prepararion by buying courses from
                                our platform at an additional discount.
                            </p>
                            <div className="job-hero-section-input-box">
                                <form>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Search your Exam"
                                    />
                                    <button type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </Col>
                        <Col xs="6">
                            <img className="heroBg-img" src={heroBg1} alt="" />
                        </Col>
                    </Row>
                </div>
                <div className="job-tabs-section">
                    <h5 className="job-tab-header-text">Select Your Exam</h5>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {categories.map(d => {
                            let isActive = d.id == categories[0].id;
                            return (
                                <li className="nav-item" role="presentation">
                                    <a
                                        className={`nav-link ${
                                            isActive ? "active" : ""
                                        }`}
                                        id={`${d?.slug}-tab`}
                                        data-toggle="tab"
                                        href={`#${d?.slug}`}
                                        role="tab"
                                        aria-controls={`${d?.slug}`}
                                        aria-selected="true"
                                        onClick={() => handleTabFilter(d?.slug)}
                                    >
                                        {d?.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="job-tab-content" id="myTabContent">
                        {subCategoryFilter.map(d => {
                            let isActive = d.id == subCategoryFilter[0].id;
                            return (
                                <div
                                    className={`tab-pane fade show ${
                                        isActive ? "active" : ""
                                    }`}
                                    id={`${d?.category?.slug}`}
                                    role="tabpanel"
                                    aria-labelledby={`${d?.category?.slug}-tab`}
                                >
                                    <Row>
                                        <Col sm="12" md="4" lg="3">
                                            <div className="job-tab-el my-2">
                                                <img src={d?.image} alt="" />{" "}
                                                <p>{d?.name}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Latest Notifications */}
                {jobs && jobs.length > 0 && (
                    <LinkCard
                        title="Latest Notifications"
                        data={jobs}
                        background={true}
                        governmentJobURL={true}
                        toggleTrue={true}
                    />
                )}

                {course && (
                    <PopularChoice
                        data={course}
                        title="Banking Exams Courses"
                    />
                )}
                {course && (
                    <PopularChoice
                        data={course}
                        title="Defence Exams Courses"
                    />
                )}
            </div>
        </>
    );
}

export default Govermentjob;
