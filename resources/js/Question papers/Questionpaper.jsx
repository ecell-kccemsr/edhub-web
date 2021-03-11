import React from "react";
import { Link } from "react-router-dom";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    List,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";

const questionpaperTopicDummyData = [
    {
        title: "Goverment Exams",
        link: "/questionpaper2"
    },
    {
        title: "MBA Exams",
        link: "/questionpaper2"
    },
    {
        title: "Bank Exams",
        link: "/questionpaper2"
    },
    {
        title: "10th Exams",
        link: "/questionpaper2"
    },
    {
        title: "Medical Exams",
        link: "/questionpaper2"
    },
    {
        title: "12th Exams",
        link: "/questionpaper2"
    },
    {
        title: "Defence Exams",
        link: "/questionpaper2"
    },
    {
        title: "Arts Exams",
        link: "/questionpaper2"
    }
];

const questionPaperMainSectionDummyData = [
    {
        title: "RBI Recruitment 2021 Notification for Various Non CSG",
        description:
            "Posts,Online Application begins from 23 Feb onwards, Salary upto 77208/-",
        link: "#"
    },
    {
        title: "55 mins agoRBI Recruitment 2021 Notification",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here.",
        link: "#"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility",
        link: "#"
    },
    {
        title: "9 hrs agoRBI Grade B 2021 Notification released",
        description:
            "@rbi.co.in for recruitment of 322 vacancies of Grade B Officers - GEN/DSIM/DEPR. RBI Grade B Phase 1 Exam will be held on 6th March 2021. Check here RBI Grade B Application Process & Dates, Exam Date, Admit",
        link: "#"
    },
    {
        title: "55 mins agoRBI Recruitment 2021 Notification",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here.",
        link: "#"
    }
];

const questionpaperTrendingDummyData = [
    {
        title: "RBI Recruitment 2021 Notification for Various Non CSG",
        description:
            "Posts,Online Application begins from 23 Feb Onwards, Salary upto 77208/-",
        link: "#"
    },
    {
        title: "55 mins agoRBI Recruitment 2021 Notification",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection",
        link: "#"
    },
    {
        title: "RBI Recruitment 2021 Notification for Various Non CSG",
        description:
            "Posts,Online Application begins from 23 Feb Onwards, Salary upto 77208/-",
        link: "#"
    }
];
const Questionpaper = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("SUBMITTED");
    };
    return (
        <>
            <div className="questionpapear-section">
                <h3 className="questionpapaer-section-header text-center">
                    Select Exams by Category
                </h3>
                <Row>
                    <Col
                        xs="12"
                        md="6"
                        lg="2"
                        className="questionpaper-filter-section"
                    >
                        <h5 className="questionpaper-filter-header">
                            Search by year
                        </h5>
                        <List
                            type="unstyled"
                            className="questionpaper-filter-ul"
                        >
                            <li>
                                <h4 className="questionpaper-subcategory">
                                    2021
                                </h4>
                            </li>
                            <li>
                                <h4 className="questionpaper-subcategory">
                                    2020
                                </h4>
                            </li>
                            <li>
                                <h4 className="questionpaper-subcategory">
                                    2019
                                </h4>
                            </li>
                            <li>
                                <h4 className="questionpaper-subcategory">
                                    2018
                                </h4>
                            </li>
                            <li>
                                <h4 className="questionpaper-subcategory">
                                    2017
                                </h4>
                            </li>
                            <li>
                                <h4 className="questionpaper-subcategory">
                                    2016
                                </h4>
                            </li>
                            <li>
                                <h4 className="questionpaper-subcategory-last">
                                    2015
                                </h4>
                            </li>
                        </List>
                    </Col>
                    <Col xs="12" md="6" lg="7">
                        <div className="questionpaper-main-section">
                            <h5 className="questionpaper-main-header">
                                Question Papers
                            </h5>
                            <div className="questionpaper-topics">
                                <div className="d-flex align-items-center justify-content-center flex-wrap questionpaper-topic-container">
                                    {questionpaperTopicDummyData &&
                                        questionpaperTopicDummyData.map(
                                            (q, key) => (
                                                <Button
                                                    className="questionpaper-category-btn mt-2"
                                                    key={key}
                                                >
                                                    <Link to={q?.link}>
                                                        {q?.title}
                                                    </Link>
                                                </Button>
                                            )
                                        )}
                                </div>
                            </div>

                            {questionPaperMainSectionDummyData &&
                                questionPaperMainSectionDummyData.map(
                                    (q, key) => (
                                        <div className="questionpaper-news-details">
                                            <h5>
                                                <Link to={q?.link}>
                                                    {q?.title}{" "}
                                                </Link>
                                            </h5>
                                            <h6>
                                                {q?.description.slice(0, 200) +
                                                    "..."}
                                            </h6>
                                        </div>
                                    )
                                )}
                        </div>
                    </Col>
                    <Col sm="12" md="12" lg="3">
                        <div className="questionpaper-register-form-section">
                            <h5>REGISTER FOR FREE UPDATES</h5>
                            <form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="number"
                                        name="number"
                                        id="number"
                                        min="1"
                                        max="10"
                                        placeholder="Phone Number"
                                    />
                                </FormGroup>
                                <button
                                    className="btn-submit-questionpaper"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="questionpaper-trending">
                            <h4>Trending</h4>
                            {questionpaperTrendingDummyData &&
                                questionpaperTrendingDummyData.map((q, key) => (
                                    <div className="questionpaper-news-trending">
                                        <h5>
                                            <Link to={q?.link}>{q?.title}</Link>
                                        </h5>
                                        <h6>
                                            {q?.description.slice(0, 150) +
                                                "..."}
                                        </h6>
                                    </div>
                                ))}

                            <div className="view">View all</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Questionpaper;
