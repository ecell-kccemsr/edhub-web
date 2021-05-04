import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import sbi from "../../Images/qpaper/sbi.png";
import { Link } from "react-router-dom";
import PopularChoice from "../../homepage/landingPageComponents/PopularChoice";
import { v4 as uuidv4 } from "uuid";
import LinkCard from "../../components/link-card/LinkCard";
import axios from "axios";

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
        .get(`/api/questionpapers/sub_categories?${id === 'all' ? '': `category_id=${id}`  }`)
        .then(res => setsubCategoryFilter(res.data.data))
    };

    return (
        <div className="prevQpaper">
            <div className="prevQpaper-section">
                <h4 className="text-center">Previous Question papers</h4>
                <div className="tabs-section">
                    <h5 className="tab-header-text">Select Your Exam</h5>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {subQuespapercategory.map(d => {
                            let isActive = d.id == subQuespapercategory[0].id;
                                return (
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                        key={d?.id}
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
                                          onClick={() => handleTabFilter(d?.id)}

                                        >
                                            {d?.name}
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                    <div className="tab-content" id="myTabContent">
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
                                                <div className="tab-el" >
                                                    <Link to={`/questionpaper/${d?.slug}`}>
                                                     <img src={d?.image} alt="" />
                                                    <p>{d?.name}</p>
                                                    </Link>
                                                     
                                                  
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <Container >
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
                </Container>
          
        </div>
           {/* Courses */}
           {course && (
                    <PopularChoice
                        data={course}
                        title="Latest Courses"
                    />
                )}
        </div>
        
    );
};

export default prevQPaperHomepage;
