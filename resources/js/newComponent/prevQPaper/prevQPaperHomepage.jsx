import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import PopularChoice from "../../homepage/landingPageComponents/PopularChoice";
import LinkCard from "../../components/link-card/LinkCard";
import axios from "axios";
import {Helmet} from "react-helmet";

const prevQPaperHomepage = () => {
    const [jobs, setJobs] = useState([]);
    const [subQuespapercategory, setSubQuespapercategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [subCategoryFilter, setsubCategoryFilter] = useState([]);
    const [course, setCourse] = useState([]);

    useEffect(() => {
        axios
            .get("/api/government_jobs")
            .then(res => {
                setJobs(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });

        axios
            .get("/api/questionpapers/categories")
            .then(res => {
                setSubQuespapercategory(res.data.data);
                axios
                    .get("/api/questionpapers/sub_categories")
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
                `/api/questionpapers/sub_categories?${
                    id === "all" ? "" : `category_id=${id}`
                }`
            )
            .then(res => setsubCategoryFilter(res.data.data));
    };

    return (
        <>
             <Helmet>
                   <title>Question Paper Page</title>
                    <meta name="description" content="Question paper page where all question papers are added" />
                    <meta name='copyright' content='Edhub' />
                    <meta name='language' content='ES' />
             </Helmet>
        <div className="governmentjob">
            <div className="job-page">
                <h4 className="text-center">Previous Question papers</h4>
                <div className="job-tabs-section">
                    <h5 className="job-tab-header-text">Select Your Exam</h5>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {subQuespapercategory.map(d => {
                            let isActive = d.id == subQuespapercategory[0].id;
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
                                        onClick={() => handleTabFilter(d?.id)}
                                    >
                                        {d?.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="job-tab-content" id="myTabContent">
                         <Row>
                        {subCategoryFilter.map(d => {
                            let isActive = d.id == subCategoryFilter[0].id;
                            return (
                                <Col sm="12" md="4" lg="3">
                                <div
                                    className={`tab-pane fade show ${
                                        isActive ? "active" : ""
                                    }`}
                                    id={`${d?.category?.slug}`}
                                    role="tabpanel"
                                    aria-labelledby={`${d?.category?.slug}-tab`}
                                >
                                   
                                            <div className="job-tab-el my-2">
                                            <Link to={`/questionpaper/${d?.category?.slug}/${d?.slug}`}>
                                                     <img src={d?.image} alt="sub-image" />
                                                    <p>{d?.name}</p>
                                                    </Link>
                                               
                                            </div>
                                </div>
                                </Col>
                            );
                        })}
                         </Row>
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
                
            </div>

            {course && (
                <PopularChoice data={course} title="Banking Exams Courses" />
            )}
            {course && (
                <PopularChoice data={course} title="Defence Exams Courses" />
            )}
        </div>
        </>
    );
};

export default prevQPaperHomepage;
