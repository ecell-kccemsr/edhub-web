import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card } from "reactstrap";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import LinkCard from "../components/link-card/LinkCard";

function Govermentjob() {
    const [categories, setCategory] = useState([]);

    const [jobs, setJobs] = useState([]);
    const [results, setExamResults] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/government_jobs/categories")
            .then(res => setCategory(res.data.data))
            .catch(err => console.log(err));
        axios
            .get("http://localhost:8000/api/government_jobs")
            .then(res => {
                setJobs(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("http://localhost:8000/api/examresults")
            .then(res => {
                setExamResults(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="government-section">
                {/* Breadcrumb  */}
                <BreadCrumb
                    navData={[
                        {
                            title: "Home",
                            link: "/"
                        },
                        {
                            title: "Jobs",
                            link: "/govermentjobs",
                            active: true
                        }
                    ]}
                />
                {/* title */}
                <h3 className="government-top-card-header mb-3">
                    Goverment Jobs 2021
                </h3>

                {/* Hero section */}
                <div className="government-top-card ">
                    <Row style={{ justifyContent: "space-evenly" }}>
                        {categories &&
                            categories.map(category => (
                                <Col xs="6" sm="2" md="2">
                                    <div className="category-button">
                                        <img
                                            src={category.image}
                                            alt="category"
                                            className="category-button-img mb-3"
                                        />

                                        <h6>
                                            <Link
                                                to={`/govermentjobs/${category.slug}`}
                                                key={category?.id}
                                                className="category-btn-link"
                                            >
                                                {category?.name}
                                            </Link>
                                        </h6>
                                    </div>
                                </Col>
                            ))}
                    </Row>
                </div>

 {/* Latest Notifications */}
            {jobs && jobs.length > 0 && (
                <LinkCard
                    title="Latest Notifications"
                    data={jobs}
                    background={true}

                    />
            )}
            
            {/* Exam Results */}
            {results && results.length > 0 && (
                <LinkCard
                    title="Exam Results"
                    data={results}
                    background={true}
                />
            )}
            </div>

           
        </>
    );
}

export default Govermentjob;
