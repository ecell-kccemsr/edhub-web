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

function Questionpaper(props) {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("SUBMITTED");
    };
    console.log(props);
    const [subQuespapercategory, setSubQuespapercategory] = useState([]);
    const [quespaper, setQuespaper] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/questionpapers")
            .then(res => {
                setQuespaper(res.data.data);
            })

            .catch(err => {
                console.log(err);
            });

        axios
            .get("http://localhost:8000/api/questionpapers/categories")

            .then(res => {
                console.log(res);
                setSubQuespapercategory(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="questionpapear-section">
                <h3 className="questionpapaer-section-header text-center">
                    Select Exams by Category
                </h3>
                <Row>
                    <Col
                        xs={{ size: 12, order: 1 }}
                        md={{ size: 6, order: 2 }}
                        lg={{ size: 2, order: 1 }}
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
                    <Col
                        xs={{ size: 12, order: 2 }}
                        md={{ size: 12, order: 1 }}
                        lg={{ size: 7, order: 2 }}
                    >
                        <div className="questionpaper-main-section">
                            <h5 className="questionpaper-main-header">
                                Question Papers
                            </h5>
                            <div className="questionpaper-topics">
                                <div className="d-flex align-items-center justify-content-center flex-wrap questionpaper-topic-container">
                                    {subQuespapercategory &&
                                        subQuespapercategory.map((q, key) => (
                                            <Button
                                                className="questionpaper-category-btn mt-2"
                                                key={key}
                                            >
                                                <Link
                                                    to={`/questionpaper/${q?.slug}`}
                                                >
                                                    {q?.name}
                                                </Link>
                                            </Button>
                                        ))}
                                </div>
                            </div>

                            {quespaper &&
                                quespaper.map((q, key) => (
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
                            {quespaper &&
                                quespaper.map((q, key) => (
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
}

export default Questionpaper;
