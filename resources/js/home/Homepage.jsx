import React from "react";
import { Container, Row, Col, ButtonToggle, UncontrolledCarousel } from "reactstrap";
import news4 from "../Images/news(4).png";
import news1 from "../Images/news.png";
import news2 from "../Images/news (2).png";
import news3 from "../Images/news(3).png";

import suitcase from "../Images/suitcase (1) 2.png";
import newspaper from "../Images/newspaper 1.png";
import question from "../Images/question 1.png";
import exam from "../Images/exam 1.png";
import bank from "../Images/Group (6).png";
import doctor from "../Images/doctor 1.png";
import architect from "../Images/architect 1.png";
import examPattern from "../Images/ExamPatternandSyllabus.png";
let NewsSection = () => {
    return (

        <div className="news-card-section">
            <h4 className="news-card-section-header">Latest News</h4>
            <Row className=" justify-content-center">
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src={news4}
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>     
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src={news1}
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>    
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src={news2}
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>    
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src={news3}
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>    
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src={news4}
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>    
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src={news1}
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>    
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src={news3}
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>    
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src={news2}
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>    
                        <div className="latest-news-card">
                            <img
                                className="news-card-img"
                                src={news4}
                            />
                            <p className="news-card-para">
                                Nitin Gadkari launches ‘Go Electric Campaign’
                            </p>
                        </div>              
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
                <h3 className="homepage-job-header">I'm looking for</h3>
            </Col>
            <Col sm="12" md="8"  lg="6">
                <Row className=" justify-content-center">
                            <Col sm="12" md="6" lg="3" className="text-center">
                                <img
                                    className="homepage-job-img"
                                    src={newspaper}
                                />
                                <h5>News</h5>
                            </Col>
                            <Col sm="12" md="6" lg="3" className="text-center">
                                <img
                                    className="homepage-job-img"
                                    src={suitcase}
                                />
                                <h5>Jobs</h5>
                            </Col>
                            <Col sm="12" md="6" lg="3" className="text-center">
                                <img
                                    className="homepage-job-img"
                                    src={question}
                                />
                                <h5>Q. papers</h5>
                            </Col>
                            <Col sm="12" md="6" lg="3" className="text-center">
                                <img
                                    className="homepage-job-img"
                                    src={exam}
                                />
                                <h5>Exam</h5>
                            </Col>

                        
                    
                </Row>
            </Col>
        </Row>
    );
};
const Jobs = () => {
    return (
        <Row>
                    <Col sm="12" md="6" lg="4">
                        <div className="text-center d-flex align-items-center justify-content-center ">
                            <div className="jobs-section-circle ">
                                <img
                                    className="jobs-section-circle-img"
                                    src={bank}
                                />
                            </div>
                        </div>
                        <h5 className="text-center">Bank jobs</h5>
                        <div className="jobs-section-sub-divison">
                            <div className="d-flex jobs-section-box">
                                <img
                                    className="jobs-section-image"
                                    src={examPattern}
                                />
                                <div className="jobs-section-content">
                                    BSF Recruitment 2020 Notification: 317 SI/HC
                                    Vacancies Released
                                </div>
                            </div>
                            <div className="d-flex jobs-section-box">
                                <img
                                    className="jobs-section-image"
                                    src={examPattern}
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
                    <Col sm="12" md="6" lg="4">
                        <div className="text-center d-flex align-items-center justify-content-center ">
                            <div className="jobs-section-circle ">
                                <img
                                    className="jobs-section-circle-img"
                                    src={architect}
                                />
                            </div>
                        </div>
                        <h5 className="text-center">Engineering jobs</h5>
                        <div className="jobs-section-sub-divison">
                            <div className="d-flex jobs-section-box">
                                <img
                                    className="jobs-section-image"
                                    src={examPattern}
                                />
                                <div className="jobs-section-content">
                                    BSF Recruitment 2020 Notification: 317 SI/HC
                                    Vacancies Released
                                </div>
                            </div>
                            <div className="d-flex jobs-section-box">
                                <img
                                    className="jobs-section-image"
                                    src={examPattern}
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
                    <Col sm="12" md="6" lg="4">
                        <div className="text-center d-flex align-items-center justify-content-center ">
                            <div className="jobs-section-circle ">
                                <img
                                    className="jobs-section-circle-img"
                                    src={doctor}
                                />
                            </div>
                        </div>
                        <h5 className="text-center">Medical job</h5>
                        <div className="jobs-section-sub-divison">
                            <div className="d-flex jobs-section-box">
                                <img
                                    className="jobs-section-image"
                                    src={examPattern}
                                />
                                <div className="jobs-section-content">
                                    BSF Recruitment 2020 Notification: 317 SI/HC
                                    Vacancies Released
                                </div>
                            </div>
                            <div className="d-flex jobs-section-box">
                                <img
                                    className="jobs-section-image"
                                    src={examPattern}
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
                
        </Row>
    );
};

// Carousel //
const items = [
    {
      src: '',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header',
      key: '1'
    },
    {
      src: '',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src: '',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3'
      
    }
  ];
const Homepage = () => {
    return (
        <>
        <div>
           <UncontrolledCarousel items={items} />
        </div>
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
                    <h4 className="exam-update-section-header"> <strong>Exam Updates </strong> </h4>
                    <Row>
                        <Col xs="12" md="6" className="exam-update-col">
                            <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong> <br/>
                               Posts,Online Application begins from 23 Feb
                                onwards, Salary upto 77208/-
                            </h5>
                        </Col>
                        <Col xs="12" md="6" className="exam-update-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong><br/>
                               Posts,Online Application begins from 23 Feb
                                onwards, Salary upto 77208/-
                            </h5>
                        </Col>
                        <Col xs="12" md="6" className="exam-update-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong><br/>
                                Non CSG Posts Released @rbi.org.in. Check RBI
                                Recruitment 2021 Application Process, RBI 2021
                                Eligibility, RBI 2021 Salary, RBI 2021 Selection
                                Criteria and other details here.
                            </h5>
                        </Col>
                        <Col xs="12" md="6" className="exam-update-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong><br/>
                                Non CSG Posts Released @rbi.org.in. Check RBI
                                Recruitment 2021 Application Process, RBI 2021
                                Eligibility, RBI 2021 Salary, RBI 2021 Selection
                                Criteria and other details here.
                            </h5>
                        </Col>

                        <Col xs="12" md="6" className="exam-update-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong><br/>
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cut Off, Eligibility
                            </h5>
                        </Col>
                        <Col xs="12" md="6" className="exam-update-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong><br/>
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cut Off, Eligibility
                            </h5>
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
                    <h4 className="" style={{paddingBottom:"13px"}}><strong> Question Paper </strong></h4>
                    <Row>
                        <Col xs="12" md="6" className="question-paper-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong> <br/>
                               Posts,Online Application begins from 23 Feb
                                onwards, Salary upto 77208/-
                            </h5>
                        </Col>
                        <Col xs="12" md="6" className="question-paper-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong> <br/>
                               Posts,Online Application begins from 23 Feb
                                onwards, Salary upto 77208/-
                            </h5>
                        </Col>
                        <Col xs="12" md="6" className="question-paper-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong><br/>
                                Non CSG Posts Released @rbi.org.in. Check RBI
                                Recruitment 2021 Application Process, RBI 2021
                                Eligibility, RBI 2021 Salary, RBI 2021 Selection
                                Criteria and other details here.
                            </h5>
                        </Col>
                        <Col xs="12" md="6" className="question-paper-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong><br/>
                                Non CSG Posts Released @rbi.org.in. Check RBI
                                Recruitment 2021 Application Process, RBI 2021
                                Eligibility, RBI 2021 Salary, RBI 2021 Selection
                                Criteria and other details here.
                            </h5>
                        </Col>

                        <Col xs="12" md="6" className="question-paper-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong><br/>
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cut Off, Eligibility
                            </h5>
                        </Col>
                        <Col xs="12" md="6" className="question-paper-col">
                        <h5><strong> RBI Recruitment 2021 Notification for Various
                                Non CSG</strong><br/>
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cut Off, Eligibility
                            </h5>
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
        </>
    );
};

export default Homepage;
