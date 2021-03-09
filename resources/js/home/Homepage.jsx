import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    ButtonToggle,
    UncontrolledCarousel
} from "reactstrap";

import suitcase from "../Images/suitcase (1) 2.png";
import newspaper from "../Images/newspaper 1.png";
import question from "../Images/question 1.png";
import exam from "../Images/exam 1.png";
import bank from "../Images/Group (6).png";
import doctor from "../Images/doctor 1.png";
import architect from "../Images/architect 1.png";
import examPattern from "../Images/ExamPatternandSyllabus.png";
import LinkCard from "../components/link-card/LinkCard";

const NewsDummyData = [
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news(4).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news.png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news (2).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news(3).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news.png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news (2).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news(4).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news.png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news (2).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news(3).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news.png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news (2).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news(4).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news.png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news (2).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news(3).png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news.png"
    },
    {
        title: "Nitin Gadkari launches ‘Go Electric Campaign’",
        link: "www.google.com",
        img: "../Images/news (2).png"
    }
];

// Carousel //
const items = [
    {
        src: "",
        altText: "Slide 1",
        caption: "Slide 1",
        header: "Slide 1 Header",
        key: "1"
    },
    {
        src: "",
        altText: "Slide 2",
        caption: "Slide 2",
        header: "Slide 2 Header",
        key: "2"
    },
    {
        src: "",
        altText: "Slide 3",
        caption: "Slide 3",
        header: "Slide 3 Header",
        key: "3"
    }
];

const dummyLinkData = [
    {
        title: "RBI Recruitment 2021 Notification for Various Non CSG",
        link: "https://www.google.com/",
        description:
            "Posts,Online Application begins from 23 Feb onwards, Salary upto 77208/-"
    },
    {
        title: "RBI Recruitment 2021 Notification for Various Non CSG",
        link: "https://www.google.com/",
        description:
            "Posts,Online Application begins from 23 Feb onwards, Salary upto 77208/-"
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    }
];

let NewsSection = props => {
    const initialPosts = 9;
    const [news, setNews] = useState([]);
    const [visible, setVisible] = useState(initialPosts);

    useEffect(() => {
        if (props?.news) {
            setNews(props?.news);
        }
    }, []);

    const viewAll = () => {
        setVisible(news.length);
    };

    const viewLess = () => {
        setVisible(initialPosts);
    };

    return (
        <div className="news-card-section">
            <h4 className="news-card-section-header">Latest News</h4>
            <Row className=" justify-content-center">
                {news &&
                    news.slice(0, visible).map((n, key) => (
                        <div className="latest-news-card" key={key}>
                            <img className="news-card-img" src={n?.img} />
                            <p className="news-card-para">
                                <a
                                    href={n?.link}
                                    target="_blank"
                                    style={{ color: "#000" }}
                                    rel="noreferrer noopener"
                                >
                                    {n?.title}
                                </a>
                            </p>
                        </div>
                    ))}
            </Row>
            {visible < news.length && (
                <>
                    <hr className="hr" />
                    <div className="text-center pb-0">
                        <ButtonToggle
                            className="news-card-btn"
                            onClick={viewAll}
                        >
                            View All
                        </ButtonToggle>
                    </div>
                </>
            )}
            {visible >= news.length && (
                <>
                    <hr className="hr" />
                    <div className="text-center pb-0">
                        <ButtonToggle
                            className="news-card-btn"
                            onClick={viewLess}
                        >
                            Show Less
                        </ButtonToggle>
                    </div>
                </>
            )}
        </div>
    );
};

let LookingFor = () => {
    return (
        <Row className="justify-content-center align-items-center">
            <Col sm="12" md="4">
                <h3 className="homepage-job-header">I'm looking for</h3>
            </Col>
            <Col sm="12" md="8" lg="6">
                <Row className=" justify-content-center">
                    <Col sm="12" md="6" lg="3" className="text-center">
                        <img className="homepage-job-img" src={newspaper} />
                        <h5>News</h5>
                    </Col>
                    <Col sm="12" md="6" lg="3" className="text-center">
                        <img className="homepage-job-img" src={suitcase} />
                        <h5>Jobs</h5>
                    </Col>
                    <Col sm="12" md="6" lg="3" className="text-center">
                        <img className="homepage-job-img" src={question} />
                        <h5>Q. papers</h5>
                    </Col>
                    <Col sm="12" md="6" lg="3" className="text-center">
                        <img className="homepage-job-img" src={exam} />
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
                        <img className="jobs-section-circle-img" src={bank} />
                    </div>
                </div>
                <h5 className="text-center">Bank jobs</h5>
                <div className="jobs-section-sub-divison">
                    <div className="d-flex jobs-section-box">
                        <img className="jobs-section-image" src={examPattern} />
                        <div className="jobs-section-content">
                            BSF Recruitment 2020 Notification: 317 SI/HC
                            Vacancies Released
                        </div>
                    </div>
                    <div className="d-flex jobs-section-box">
                        <img className="jobs-section-image" src={examPattern} />
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
                        <img className="jobs-section-image" src={examPattern} />
                        <div className="jobs-section-content">
                            BSF Recruitment 2020 Notification: 317 SI/HC
                            Vacancies Released
                        </div>
                    </div>
                    <div className="d-flex jobs-section-box">
                        <img className="jobs-section-image" src={examPattern} />
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
                        <img className="jobs-section-circle-img" src={doctor} />
                    </div>
                </div>
                <h5 className="text-center">Medical job</h5>
                <div className="jobs-section-sub-divison">
                    <div className="d-flex jobs-section-box">
                        <img className="jobs-section-image" src={examPattern} />
                        <div className="jobs-section-content">
                            BSF Recruitment 2020 Notification: 317 SI/HC
                            Vacancies Released
                        </div>
                    </div>
                    <div className="d-flex jobs-section-box">
                        <img className="jobs-section-image" src={examPattern} />
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

const Homepage = () => {
    return (
        <>
            <div>
                <UncontrolledCarousel items={items} />
            </div>
            <div>
                <section className="news-card-body">
                    <NewsSection news={NewsDummyData} />
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

                <LinkCard title="Exam Updates" data={dummyLinkData} />
                <LinkCard title="Question Paper" data={dummyLinkData} />
            </div>
        </>
    );
};

export default Homepage;
