import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col
} from "reactstrap";
import "../../sass/Govermentjob.scss";
function Govermentjob() {
    const [categories, setCategory] = useState([]);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/government_jobs/categories")
            .then(res => {
                setCategory(res.data.data);
                // console.log(res.data.data);

            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("http://localhost:8000/api/government_jobs")
            .then(res => {
                // console.log(res.data.data);
                setJobs(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);    return (
        <>
            <div className="gov">
                <div className="titles">
                    <h6 className="disabled">Home | Jobs</h6>
                    <h2 className="title-gov">
                        <strong> Goverment Job </strong>
                    </h2>
                </div>
                <div className="container-fluid">
                    <div class="jumbotron">
                        <Row xs="1" sm="2" md="5">
                            <Col>
                                 <img src="../../Images/bank.png" alt="bank" />

                                {categories.map(category => (

                                        <Link
                                            to={`/governmentjobcategory/view/${category?.id}`}
                                            key={category.id}
                                            className="category-btn mt-2"
                                        >

                                            {category.name}
                                        </Link>
                                    ))}
                            </Col>
                            <Col>
                                <img
                                    src="../../Images/judicial.png"
                                    alt="judicial"
                                />
                            </Col>
                            <Col>
                                <img
                                    src="../../Images/police.png"
                                    alt="police"
                                />
                            </Col>
                            <Col>
                                <img
                                    src="../../Images/defence.png"
                                    alt="defence"
                                />
                            </Col>
                            <Col>
                                <img src="../../Images/upsc.png" alt="upsc" />
                            </Col>
                        </Row>
                        <Row xs="1" sm="2" md="5">
                            <Col>
                                <img
                                    src="../../Images/teaching.png"
                                    alt="teaching"
                                />
                            </Col>
                            <Col>
                                <img
                                    src="../../Images/railway.png"
                                    alt="railway"
                                />
                            </Col>
                            <Col>
                                <img
                                    src="../../Images/state psc.png"
                                    alt="state psc"
                                />
                            </Col>
                            <Col>
                                <img src="../../Images/ssc.png" alt="ssc" />
                            </Col>
                            <Col>
                                <img src="../../Images/other.png" alt="other" />
                            </Col>
                        </Row>
                    </div>
                    <div className="container">
                        <Row xs="1" sm="2" md="2">
                            <h2 className="title-notify">
                                <strong> Latest Notification </strong>
                            </h2>
                            {/* <h4 className="category-header">
                                        {categories[0]?.name}
                                    </h4> */}

                                    {jobs.map(jobs => (
                                        <>
                                            <div
                                                className="d-flex"
                                                key={jobs.id}
                                            >
                                                <div>
                                                    <h6 className="">
                                                        {jobs.title}
                                                    </h6>
                                                    <p className="">
                                                        {jobs.description}
                                                    </p>
                                                </div>
                                                <img
                                                    src="https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome2x.png"
                                                    alt=""
                                                    className="category-information-image"
                                                />
                                            </div>
                                            <hr />
                                        </>
                                    ))}
                            {/* <Col>
                                <h5>
                                    <strong>
                                        RBI Recruitment 2021 Notification for
                                        Various Non CSG
                                    </strong>
                                </h5>
                                <h5>
                                    Posts,Online Application begins from 23 Feb
                                    Onwards, Salary upto 77208/-{" "}
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        RBI Recruitment 2021 Notification for
                                        Various Non CSG
                                    </strong>
                                </h5>
                                <h5>
                                    Posts,Online Application begins from 23 Feb
                                    Onwards, Salary upto 77208/-{" "}
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        55 min agoRBI Recruitment 2021
                                        Notification for{" "}
                                    </strong>
                                    various Non CSG Post Released @rbi.org.in.
                                    Check RBI Recruitment 2021 Application
                                    Process, RBI 2021 Eligibility, RBI 2021
                                    Salary, RBI 2021 Criteria and other details
                                    here
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        55 min agoRBI Recruitment 2021
                                        Notification for{" "}
                                    </strong>
                                    various Non CSG Post Released @rbi.org.in.
                                    Check RBI Recruitment 2021 Application
                                    Process, RBI 2021 Eligibility, RBI 2021
                                    Salary, RBI 2021 Criteria and other details
                                    here
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        RBI Grade B 2021: Notification Out for
                                        322 Vacancies,
                                    </strong>
                                    <br />
                                    Exam Date, Admit Card, Vacancy, Exam
                                    Pattern, Syllabus, Cutoff, Eligibility
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        RBI Grade B 2021: Notification Out for
                                        322 Vacancies,
                                    </strong>
                                    <br />
                                    Exam Date, Admit Card, Vacancy, Exam
                                    Pattern, Syllabus, Cutoff, Eligibility
                                </h5>
                            </Col> */}
                        </Row>
                        <div className="view">View all</div>
                    </div>
                    <div className="container-Edu">
                        <h2 className="title-Edu">
                            <strong> Education Wise Jobs </strong>
                        </h2>
                        <Row xs="1" sm="2" md="6">
                            <Col>
                                <img src="../../Images/10.png" alt="10th" />
                            </Col>
                            <Col>
                                <img src="../../Images/12.png" alt="12" />
                            </Col>
                            <Col>
                                <img
                                    src="../../Images/undergraduate.png"
                                    alt="undergraduate"
                                />
                            </Col>
                            <Col>
                                <img
                                    src="../../Images/graduate.png"
                                    alt="graduate"
                                />
                            </Col>
                            <Col>
                                <img
                                    src="../../Images/post graduate.png"
                                    alt="post graduate"
                                />
                            </Col>
                            <Col>
                                <img src="../../Images/doc.png" alt="doc" />
                            </Col>
                        </Row>
                    </div>

                    <div className="container">
                        <Row xs="1" sm="2" md="2">
                            <h2 className="title-Exam">
                                <strong> Exam Results </strong>
                            </h2>
                            <Col>
                                <h5>
                                    <strong>
                                        RBI Recruitment 2021 Notification for
                                        Various Non CSG
                                    </strong>
                                </h5>
                                <h5>
                                    Posts,Online Application begins from 23 Feb
                                    Onwards, Salary upto 77208/-{" "}
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        RBI Recruitment 2021 Notification for
                                        Various Non CSG
                                    </strong>
                                </h5>
                                <h5>
                                    Posts,Online Application begins from 23 Feb
                                    Onwards, Salary upto 77208/-{" "}
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        55 min agoRBI Recruitment 2021
                                        Notification for{" "}
                                    </strong>
                                    various Non CSG Post Released @rbi.org.in.
                                    Check RBI Recruitment 2021 Application
                                    Process, RBI 2021 Eligibility, RBI 2021
                                    Salary, RBI 2021 Criteria and other details
                                    here
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        55 min agoRBI Recruitment 2021
                                        Notification for{" "}
                                    </strong>
                                    various Non CSG Post Released @rbi.org.in.
                                    Check RBI Recruitment 2021 Application
                                    Process, RBI 2021 Eligibility, RBI 2021
                                    Salary, RBI 2021 Criteria and other details
                                    here
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        RBI Grade B 2021: Notification Out for
                                        322 Vacancies,
                                    </strong>
                                    <br />
                                    Exam Date, Admit Card, Vacancy, Exam
                                    Pattern, Syllabus, Cutoff, Eligibility
                                </h5>
                            </Col>
                            <Col>
                                <h5>
                                    <strong>
                                        RBI Grade B 2021: Notification Out for
                                        322 Vacancies,
                                    </strong>
                                    <br />
                                    Exam Date, Admit Card, Vacancy, Exam
                                    Pattern, Syllabus, Cutoff, Eligibility
                                </h5>
                            </Col>
                        </Row>
                        <div className="view">View all</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Govermentjob;
