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

function Questionpaper2(props) {
    const [quespaper, setQuespaper] = useState([]);
    const { ques_slug } = props.match.params;
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/questionpapers/${ques_slug}`)
            .then(res => {
                setQuespaper(res.data.data);
            })

            .catch(err => {
                console.log(err);
            });
    }, []);
    const handleSubmit = e => {
        e.preventDefault();
        console.log("SUBMITTED");
    };
    return (
        <>
            <div className="questionpapear-section">
                <Row>
                    {/* Category by year */}
                    <Col
                        xs={{ size: 12, order: 1 }}
                        md={{ size: 6, order: 2 }}
                        lg={{ size: 2, order: 1 }}
                        className="questionpaper-filter-section "
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
                                <h4 className="questionpaper-subcategory">
                                    2015
                                </h4>
                            </li>
                        </List>
                    </Col>
                    {/* Question Papers News */}
                    <Col
                        xs={{ size: 12, order: 2 }}
                        md={{ size: 12, order: 1 }}
                        lg={{ size: 7, order: 2 }}
                        className="mb-3"
                    >
                        <div className="questionpaper-main-section">
                            <h5 className="questionpaper-main-header">
                                Question Papers
                            </h5>

                            <div
                                className="questionpaper-news-details"
                                style={{ color: "blue" }}
                            >
                                <h5>
                                    <Link
                                        to={quespaper?.link}
                                        style={{ color: "blue" }}
                                    >
                                        {quespaper?.title}
                                        <h6>{quespaper?.description}</h6>
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </Col>

                    <Col
                        xs={{ size: 12, order: 3 }}
                        md={{ size: 6, order: 3 }}
                        lg={{ size: 3, order: 3 }}
                    >
                        {/* REGISTER FORM */}
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
                        {/* Trending */}
                        <div className="questionpaper-trending">
                            <h4>Trending</h4>

                            <div className="questionpaper-news-trending">
                                <strong className="news-title">
                                    {quespaper?.title}
                                </strong>
                                <p className="news-description">
                                    {quespaper?.description}
                                </p>
                            </div>

                            <div className="view">View all</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Questionpaper2;
