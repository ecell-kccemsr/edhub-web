import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import LinkCard from "../../components/link-card/LinkCard";
import PopularChoice from "../../homepage/landingPageComponents/PopularChoice";
import GovernmentjobAccordation from "../../jobs/GovernmentjobAccordation";

const prevQPaperSingleDataPage = ({match}) => {
    const [categories, setCategory] = useState([]);
    const [paper, setPaper] = useState(null);
    const [course, setCourse] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category_slug,subcategory_slug} = match.params
    useEffect(() => {
        if(subcategory_slug){
               axios
            .get(`/api/questionpapers?subcategory_slug=${subcategory_slug}`)
            .then(res => {
                setPaper(res.data.data);
                setLoading(false)
            })
            .catch(err => console.log(err));   
        }

        axios
            .get("/api/government_jobs/categories")
            .then(res => {
                setCategory(res.data.data);
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
        axios
            .get("/api/government_jobs")
            .then(res => {
                setJobs(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    if(loading){
        return(
            <>
                <h4 className="text-center">Loading...</h4>
            </>
        )
    }

    return (
        <div className="prev-qpaper-singledata-section">
            <div>
                <Row>
                    <Col sm="12" lg="3">
                        <div className="left-sidebar">
                            <h4>JOBS</h4>

                            <GovernmentjobAccordation data={categories} />
                        </div>
                    </Col>
                    <Col sm="12" lg="6">
                        <h5 className="mb-2">Previous Question papers</h5>
                        {paper.map(data => {
                            return (
                                <a href={data?.url} target="_blank">
                                    <p>{data?.title}</p>
                                </a>
                            );
                        })}
                    </Col>
                    <Col sm="12" lg="3">
                        <div className="prevQpaper-sidebar">
                            <h6>Recent Courses</h6>
                            {course.map(a => (
                                <div className="prevQpaper-sidebar-list-el">
                                    <div className="sidebar-list-top">
                                        <i className="fas fa-chevron-right"></i>
                                        <Link to={`/courseDetail/${a?.slug}`}>
                                            <p> {a?.title}</p>
                                        </Link>
                                    </div>
                                    <div className="prevQpaper-sidebar-pricesection">
                                        <p>Rs. {a?.discount_price}</p>
                                        <img
                                            src={a?.course_provider.image}
                                            alt="Udemy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
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
            {/* Courses */}
            {course && <PopularChoice data={course} title="Latest Courses" />}
        </div>
    );
};

export default prevQPaperSingleDataPage;
