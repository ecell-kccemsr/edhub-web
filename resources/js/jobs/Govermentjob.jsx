import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import LinkCard from "../components/link-card/LinkCard";
import { Helmet } from "react-helmet";
import SliderHomepage from "../homepage/landingPageComponents/SliderHomepage";
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

    const handleTabFilter = id => {
        axios
            .get(
                `/api/government_jobs/sub_categories?${
                    id === "all" ? "" : `category_id=${id}`
                }`
            )
            .then(res => setsubCategoryFilter(res.data.data));
    };

    return (
        <>
            <Helmet>
                <meta
                    name="keywords"
                    content="edhub, Government-job, india, trending, exams, jobs"
                />
                <meta
                    name="description"
                    content="Government Job Page where all jobs are added"
                />
                <meta name="copyright" content="Edhub" />
                <meta name="language" content="ES" />
            </Helmet>
            <div className="governmentjob">
                <div className="job-page">
                    <div className="job-hero-section">
                        <Row>
                            <Col md="6">
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
                                    Start your prepararion by buying courses
                                    from our platform at an additional discount.
                                </p>
                            </Col>
                            <Col md="6">
                                <img
                                    className="heroBg-img"
                                    src="/images/Jobs/heroBg1.png"
                                    alt="Hero"
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="job-tabs-section">
                        <h5 className="job-tab-header-text">
                            Select Your Exam
                        </h5>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            {categories.map(d => {
                                let isActive = d.id == categories[0].id;
                                return (
                                    <>
                                        <li
                                            className="nav-item"
                                            role="presentation"
                                        >
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
                                                onClick={() =>
                                                    handleTabFilter(d?.id)
                                                }
                                            >
                                                {d?.name}
                                            </a>
                                        </li>
                                    </>
                                );
                            })}
                        </ul>

                        <div
                            className="job-tab-content d-flex flex-wrap"
                            id="myTabContent"
                        >
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
                                        <div
                                            className="job-tab-el my-0"
                                            style={{ height: "65px" }}
                                        >
                                            <Link
                                                to={`/govermentjobs/${d?.category?.slug}/${d?.slug}`}
                                            >
                                                <img
                                                    src={d?.image}
                                                    alt="Sub-Image"
                                                />{" "}
                                                <p>{d?.name}</p>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Latest Notifications */}
                    {jobs && jobs?.length > 0 && (
                        <LinkCard
                            title="Latest Notifications"
                            data={jobs}
                            background={true}
                            governmentJobURL={true}
                            toggleTrue={true}
                        />
                    )}
                </div>

                <SliderHomepage
                    title="Office Productivity"
                    course_category_id={5}
                />
                <SliderHomepage
                    title="Personal Development"
                    course_category_id={6}
                />
            </div>
        </>
    );
}

export default Govermentjob;
