import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card } from "reactstrap";
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
    }, []);
    return (
        <>
            <div className="government">
                <div className="titles">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item ">
                            <a href="#" className="href-government">HOME</a>
                                                        </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                <a href="" className="href-government">JOBS</a>
                            </li>
                        </ol>
                    </nav>
                    <h3 className="title-government">
                         Goverment Jobs 2021 
                    </h3>
                </div>
                <div className="container-fluid">
                <div class="jumbotron-government">
                        <Row> 
                        <Col className="col-sm-3 col-md-12 col-xs-2">
                                <div className="select-government-by-category-btn-section">
                                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                                        {categories.map(category => (
                                            <Link
                                                to={`/govermentjobs/view/${category?.id}`}
                                                key={category.id}
                                                className="category-btn"
                                            >
                                                {/* <a href={category.name} > 
                                            <img src="../Images/bank.png" alt=""/>
                                            </a> */}
                                            <div>
                                                <Col col-sm-3 col-md-12 col-xs-2>
                                             <img src="../Images/bank-job.jpg" alt="bank" className="government-job-category-img" />
 <h6>{category.name} 
                                              </h6> 
                                            </Col>
                                           
                                            </div>
                                          
                                             </Link>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            {/* <Col>
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
                            </Col> */}
                        </Row>

                        <Row xs="1" sm="2" md="5">
                            {/* <Col>
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
                            </Col> */}
                        </Row>
                    </div>
                    <div className="container hero-govermentjobs">

                        <Row xs="1" sm="2" md="2">
                            <h2 className="title-notify">
                            <strong> Latest Notifications</strong>
                            </h2>
                            {/* <h4 className="category-header">
                                        {categories[0]?.name}
                                    </h4> */}

                            {jobs.map(jobs => (
                                <>
                                    <Col>
                                    <div className="government-job-description" key={jobs.id}>
                                            <div>
                                                <h5 className="">
                                                    <strong>
                                                        {jobs.title}
                                                    </strong>
                                                </h5>
                                                <h5 className="">
                                                    {jobs.description}
                                                </h5>
                                            </div>
                                            {/* <img
                                                    src="https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome2x.png"
                                                    alt=""
                                                    className="category-information-image"
                                                /> */}
                                        </div>
                                        <hr />
                                    </Col>
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
                            <Card className="card-govermentjobs" style={{backgroundColor:"#BCFFB1"}}> <strong> 10TH</strong></Card>
                            </Col>
                            <Col>
                            <Card className="card-govermentjobs" style={{backgroundColor:"#FBB3A5"}}> <strong>12TH</strong></Card>
                            </Col>
                            <Col>
                            <Card className="card-govermentjobs" style={{backgroundColor:"#F1E189"}}> <strong> UNDER<br/>GRADUATE</strong></Card>

                            </Col>
                            <Col>
                            <Card className="card-govermentjobs" style={{backgroundColor:"#87BDFF"}}> <strong>GRADUATE</strong> </Card>

                            </Col>
                            <Col>
                            <Card className="card-govermentjobs" style={{backgroundColor:"#FFB579"}}> <strong>POST<br/>GRADUATE </strong> </Card>

                            </Col>
                            <Col>
                            <Card className="card-govermentjobs" style={{backgroundColor:"#87E1FE"}}> <strong>DOCTORATE </strong> </Card>
                            </Col>
                        </Row>
                    </div>

                    <div className="container hero-govermentjobs">

                        <Row xs="1" sm="2" md="2">
                        <h2 className="title-notify">
                                <strong> Exam Results</strong>
                            </h2>
                                 {/* <h4 className="category-header">
                                        {categories[0]?.name}
                                    </h4> */}

{jobs.map(jobs => (
                                <>
                                    <Col>
                                        <div className="government-job-description" key={jobs.id}>
                                            <div>
                                                <h5 className="">
                                                    <strong>
                                                        {jobs.title}
                                                    </strong>
                                                </h5>
                                                <h5 className="">
                                                    {jobs.description}
                                                </h5>
                                            </div>
                                            {/* <img
                                                    src="https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome2x.png"
                                                    alt=""
                                                    className="category-information-image"
                                                /> */}
                                        </div>
                                        <hr />
                                    </Col>
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
                </div>
            </div>
        </>
    );
}

export default Govermentjob;
