import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import sbi from "../../Images/qpaper/sbi.png";
import { v4 as uuidv4 } from "uuid";
import LinkCard from "../../components/link-card/LinkCard";
import axios from "axios";

const prevQPaperHomepage = () => {
    const [jobs, setJobs] = useState([]);
    const [subQuespapercategory, setSubQuespapercategory] = useState([]);

    useEffect(() => {
        axios
            .get("/api/government_jobs")
            .then(res => {
                console.log(res);
                setJobs(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });

        axios
            .get("/api/questionpapers/categories")
            .then(res => {
                console.log("categories", res);
                setSubQuespapercategory(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="prevQpaper-section">
            <Container>
                <h4 className="text-center">Previous Question papers</h4>
                <div className="tabs-section">
                    <h5 className="tab-header-text">Select Your Exam</h5>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {subQuespapercategory &&
                            subQuespapercategory?.length > 0 &&
                            subQuespapercategory?.map(d => {
                                let isActive =
                                    d.id == subQuespapercategory[0].id;
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
                                        >
                                            {d?.name}
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        {subQuespapercategory &&
                            subQuespapercategory?.length > 0 &&
                            subQuespapercategory.map(d => {
                                let isActive =
                                    d.id == subQuespapercategory[0].id;
                                return (
                                    <div
                                        className={`tab-pane fade show ${
                                            isActive ? "active" : ""
                                        }`}
                                        id={`${d?.slug}`}
                                        role="tabpanel"
                                        aria-labelledby={`${d?.slug}-tab`}
                                        key={d?.id}
                                    >
                                        <Row>
                                            <Col sm="12" md="4" lg="3">
                                                <div className="tab-el">
                                                    <img src={sbi} alt="" />
                                                    <p>IBPS PO</p>
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
            </Container>
        </div>
    );
};

export default prevQPaperHomepage;
