import React from "react";
import { Container, Row, Col, ButtonToggle } from "reactstrap";

let NewsSection = () => {
    return (
        <div className="news-card-section">
            <h4 className="news-card-section-header">Latest News</h4>
            <Row className=" justify-content-center">
                {Array.from(Array(9), (e, i) => {
                    return (
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src="https://rukminim1.flixcart.com/image/352/352/jxrv4i80/stuffed-toy/2/g/k/3feet-cream-color-special-soft-teddy-bear-92-cm-92-hasya-big-original-imafeqfrhcktabj5.jpeg?q=70"
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>
                    );
                })}
            </Row>
            <hr className="hr" />
            <div className="text-center">
                <ButtonToggle className="news-card-btn">View All</ButtonToggle>
            </div>
        </div>
    );
};

let LookingFor = () => {
    return (
        <Row className="justify-content-center align-items-center">
            <Col sm="12" md="4">
                <h3 className="homepage-job-header">I am looking for</h3>
            </Col>
            <Col sm="12" md="8">
                <Row className=" justify-content-center">
                    {Array.from(Array(4), (e, i) => {
                        return (
                            <Col sm="12" md="6" lg="3" className="text-center">
                                <img
                                    className="homepage-job-img"
                                    src="https://rukminim1.flixcart.com/image/352/352/jxrv4i80/stuffed-toy/2/g/k/3feet-cream-color-special-soft-teddy-bear-92-cm-92-hasya-big-original-imafeqfrhcktabj5.jpeg?q=70"
                                />
                                <h5>News</h5>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
};
const Jobs = () => {
    return (
        <Row>
            {Array.from(Array(3), (e, i) => {
                return (
                    <Col sm="12" md="6" lg="4">
                        <div className="text-center d-flex align-items-center justify-content-center ">
                            <div className="jobs-section-circle ">
                                <img
                                    className="jobs-section-circle-img"
                                    src="https://rukminim1.flixcart.com/image/352/352/jxrv4i80/stuffed-toy/2/g/k/3feet-cream-color-special-soft-teddy-bear-92-cm-92-hasya-big-original-imafeqfrhcktabj5.jpeg?q=70"
                                />
                            </div>
                        </div>
                        <h5 className="text-center">Bank job</h5>
                        <div className="jobs-section-sub-divison">
                            <div className="d-flex jobs-section-box">
                                <img
                                    className="jobs-section-image"
                                    src="https://rukminim1.flixcart.com/image/352/352/jxrv4i80/stuffed-toy/2/g/k/3feet-cream-color-special-soft-teddy-bear-92-cm-92-hasya-big-original-imafeqfrhcktabj5.jpeg?q=70"
                                />
                                <div className="jobs-section-content">
                                    BSF Recruitment 2020 Notification: 317 SI/HC
                                    Vacancies Released
                                </div>
                            </div>
                            <div className="d-flex jobs-section-box">
                                <img
                                    className="jobs-section-image"
                                    src="https://rukminim1.flixcart.com/image/352/352/jxrv4i80/stuffed-toy/2/g/k/3feet-cream-color-special-soft-teddy-bear-92-cm-92-hasya-big-original-imafeqfrhcktabj5.jpeg?q=70"
                                />
                                <div className="jobs-section-content">
                                    BSF Recruitment 2020 Notification: 317 SI/HC
                                    Vacancies Released
                                </div>
                            </div>
                            <div className="text-center">
                                <ButtonToggle className="jobs-section-btn">
                                    View All
                                </ButtonToggle>
                            </div>
                        </div>
                    </Col>
                );
            })}
        </Row>
    );
};
const Homepage = () => {
    return (
        <div>
            <section className="news-card-body">
                <NewsSection />
            </section>

            <section className="homepage-job ">
                <LookingFor />
            </section>

            <section className="jobs-section-container">
                <div className="jobs-section-div">
                    <h3 className="">JOBS</h3>
                    <Jobs />
                </div>
            </section>

            <section className="exam-updates-section">
                <div className="exam-update-container">
                    <h4 className="exam-update-section-header">Exam Updates</h4>
                    <Row>
                        <Col xs="12" md="6" className="exam-update-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Posts,Online Application begins from 23 Feb
                                onwards, Salary upto 77208/-
                            </p>
                        </Col>
                        <Col xs="12" md="6" className="exam-update-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Posts,Online Application begins from 23 Feb
                                onwards, Salary upto 77208/-
                            </p>
                        </Col>
                        <Col xs="12" md="6" className="exam-update-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Non CSG Posts Released @rbi.org.in. Check RBI
                                Recruitment 2021 Application Process, RBI 2021
                                Eligibility, RBI 2021 Salary, RBI 2021 Selection
                                Criteria and other details here.
                            </p>
                        </Col>
                        <Col xs="12" md="6" className="exam-update-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Non CSG Posts Released @rbi.org.in. Check RBI
                                Recruitment 2021 Application Process, RBI 2021
                                Eligibility, RBI 2021 Salary, RBI 2021 Selection
                                Criteria and other details here.
                            </p>
                        </Col>

                        <Col xs="12" md="6" className="exam-update-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cut Off, Eligibility
                            </p>
                        </Col>
                        <Col xs="12" md="6" className="exam-update-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cut Off, Eligibility
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <div className="text-center">
                        <ButtonToggle className="exam-updates-section-btn ">
                            View All
                        </ButtonToggle>
                    </div>
                </div>
            </section>

            <section className="question-paper-section">
                <div className="question-paper-container">
                    <h4 className="">Question Paper</h4>
                    <Row>
                        <Col xs="12" md="6" className="question-paper-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Posts,Online Application begins from 23 Feb
                                onwards, Salary upto 77208/-
                            </p>
                        </Col>
                        <Col xs="12" md="6" className="question-paper-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Posts,Online Application begins from 23 Feb
                                onwards, Salary upto 77208/-
                            </p>
                        </Col>
                        <Col xs="12" md="6" className="question-paper-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Non CSG Posts Released @rbi.org.in. Check RBI
                                Recruitment 2021 Application Process, RBI 2021
                                Eligibility, RBI 2021 Salary, RBI 2021 Selection
                                Criteria and other details here.
                            </p>
                        </Col>
                        <Col xs="12" md="6" className="question-paper-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Non CSG Posts Released @rbi.org.in. Check RBI
                                Recruitment 2021 Application Process, RBI 2021
                                Eligibility, RBI 2021 Salary, RBI 2021 Selection
                                Criteria and other details here.
                            </p>
                        </Col>

                        <Col xs="12" md="6" className="question-paper-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cut Off, Eligibility
                            </p>
                        </Col>
                        <Col xs="12" md="6" className="question-paper-col">
                            <h6>
                                RBI Recruitment 2021 Notification for Various
                                Non CSG
                            </h6>
                            <p>
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cut Off, Eligibility
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <div className="text-center">
                        <ButtonToggle className="question-papers-section-btn ">
                            View All
                        </ButtonToggle>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
