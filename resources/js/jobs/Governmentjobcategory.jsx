import axios from "axios";
import React, { useState, useEffect } from "react";
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
import BreadCrumb from "../components/breadcrumb/BreadCrumb";

const questionpaperTopicDummyData = [
    {
        title: "Goverment Exams",
        link: "#"
    },
    {
        title: "MBA Exams",
        link: "#"
    },
    {
        title: "Bank Exams",
        link: "#"
    },
    {
        title: "10th Exams",
        link: "#"
    },
    {
        title: "Medical Exams",
        link: "#"
    },
    {
        title: "12th Exams",
        link: "#"
    },
    {
        title: "Defence Exams",
        link: "#"
    },
    {
        title: "Arts Exams",
        link: "#"
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
const Governmentjobcategory = props => {
    const [subCategory, setSubCategory] = useState([]);
    const [categoryslug, setSlug] = useState("");
    const [categoryJobs, setCategoryJobs] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        let { category_slug } = props.match.params;
        if (category_slug) {
            setSlug(category_slug);
            axios
                .get(
                    `http://localhost:8000/api/government_jobs/sub_categories?category_slug=${category_slug}`
                )
                .then(res => {
                    setSubCategory(res.data.data);
                })

                .catch(err => {
                    console.log(err);
                });

            axios
                .get(
                    `http://localhost:8000/api/government_jobs?category_slug=${category_slug}`
                )

                .then(res => {
                    setCategoryJobs(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("SUBMITTED");
    };

    return (
        <>
            <div className="questionpapear-section">
                <BreadCrumb
                    navData={[
                        {
                            title: "Home",
                            link: "/"
                        },
                        {
                            title: "Jobs",
                            link: "/govermentjobs"
                        },
                        {
                            title: `${categoryslug}`,
                            link: `/governmentjobs/${categoryslug}`,
                            active: true
                        }
                    ]}
                />
                <Row className="align-items-center">
                    <Col sm="12" md="4" lg="2">
                        {categoryslug && (
                            <h5
                                style={{
                                    color: "#4F4F4F",
                                    textTransform: "capitalize"
                                }}
                            >
                                {categoryslug}
                            </h5>
                        )}
                    </Col>

                    <Col sm="12" md="4" lg="2">
                        <FormGroup>
                            <Label for="Age" style={{ fontSize: "14px" }}>
                                By Age
                            </Label>
                            <Input type="select" name="select" id="Age">
                                <option>Above 10</option>
                                <option>Above 20</option>
                                <option>Above 30</option>
                            </Input>
                        </FormGroup>
                    </Col>

                    <Col sm="12" md="4" lg="2">
                        <FormGroup>
                            <Label
                                for="Qualification"
                                style={{ fontSize: "14px" }}
                            >
                                Qualification
                            </Label>
                            <Input
                                type="select"
                                name="select"
                                id="Qualification"
                            >
                                <option>10th Pass</option>
                                <option>12th Pass</option>
                                <option>Graduate</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col
                        xs={{ size: 12, order: 1 }}
                        md={{ size: 6, order: 2 }}
                        lg={{ size: 2, order: 1 }}
                        className="questionpaper-filter-section "
                    >
                        <h5 className="questionpaper-filter-header">
                            Categories
                        </h5>
                        <List
                            type="unstyled"
                            className="questionpaper-filter-ul"
                        >
                            {subCategory &&
                                subCategory.map(s => (
                                    <li key={s?.id}>
                                        <h4 className="questionpaper-subcategory">
                                            <Link
                                                to={`/govermentjobs/${categoryslug}/${s?.slug}/${s?.id}`}
                                            >
                                                {s?.name}
                                            </Link>
                                        </h4>
                                    </li>
                                ))}
                        </List>
                    </Col>
                    <Col
                        xs={{ size: 12, order: 2 }}
                        md={{ size: 12, order: 1 }}
                        lg={{ size: 7, order: 2 }}
                        className="mb-3"
                    >
                        <div className="questionpaper-main-section">
                            {categoryJobs &&
                                categoryJobs.map(c => (
                                    <div
                                        className="questionpaper-news-details"
                                        key={c?.id}
                                    >
                                        <h5>
                                            <Link
                                                to={`/govermentjobs/${categoryslug}/${c?.slug}/${c?.id}`}
                                            >
                                                {c?.title}
                                            </Link>
                                        </h5>
                                        <h6>
                                            {c?.description.slice(0, 300) +
                                                "..."}
                                        </h6>
                                    </div>
                                ))}
                        </div>
                    </Col>

                    <Col
                        xs={{ size: 12, order: 3 }}
                        md={{ size: 6, order: 3 }}
                        lg={{ size: 3, order: 3 }}
                    >
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
                                    <div
                                        className="questionpaper-news-trending"
                                        key={key}
                                    >
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

export default Governmentjobcategory;
