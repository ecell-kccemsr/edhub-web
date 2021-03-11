import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card } from "reactstrap";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import LinkCard from "../components/link-card/LinkCard";

function Govermentjob() {
    const [categories, setCategory] = useState([]);

    const [jobs, setJobs] = useState([]);

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
    }, []);

    const eduWiseJobsDummyData = [
        "10TH",
        "12TH",
        "UNDERGRADUATE",
        "GRADUATE",
        "POST GRADUATE",
        "DOCTORATE"
    ];
    return (
        <>
            <div className="government-section">
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

                <h3 className="government-top-card-header mb-3">
                    Goverment Jobs 2021
                </h3>

                <div class="government-top-card">
                    <Row style={{ justifyContent: "space-evenly" }}>
                        {categories &&
                            categories.map(category => (
                                <Col xs="6" md="4" lg="2">
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
            </div>

            {jobs && jobs.length > 0 && (
                <LinkCard
                    title="Latest Notifications"
                    data={jobs}
                    background={true}
                />
            )}

            <div className="eduwise-section">
                <h4 className="eduwise-header mb-4">Education wise Jobs</h4>
                <Row>
                    {eduWiseJobsDummyData &&
                        eduWiseJobsDummyData.map((e, key) => (
                            <Col
                                sm="6"
                                md="3"
                                lg="2"
                                className="eduwise-col"
                                key={key}
                            >
                                <div className="eduwise-cards">
                                    <h6>
                                        <Link to="#">{e}</Link>
                                    </h6>
                                </div>
                            </Col>
                        ))}
                </Row>
            </div>

            {jobs && jobs.length > 0 && (
                <LinkCard title="Exam Results" data={jobs} background={true} />
            )}
        </>
    );
}

export default Govermentjob;
