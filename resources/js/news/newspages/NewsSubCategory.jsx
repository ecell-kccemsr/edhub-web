import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Row,
    Col,
    InputGroup,
    Input,
    Form,
    FormGroup
} from "reactstrap";

function NewsSubCategory(props) {
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {
        const { subcategory_id } = props.match.params;
        if (subcategory_id) {
            axios
                .get(
                    `http://localhost:8000/api/news/?subcategory_id=${subcategory_id}`
                )

                .then(res => {
                    setCategoryNews(res.data.data);
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <div>
            <section className="select-news-by-category">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#" className="href-government">
                                HOME
                            </a>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            <a href="" className="href-government">
                                NEWS
                            </a>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            <a href="" className="href-government">
                                BUSINESS
                            </a>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            <a href="" className="href-government">
                                ENTREPRENEURSHIP
                            </a>
                        </li>
                    </ol>
                </nav>{" "}
                {/* Title */}
                <h4 className="title-bank">News</h4>
                <hr className="news-hr" />
                <Row>
                    {/* subCategory-News */}
                    <Col sm="12" md="6" lg="9" className="mb-4">
                        <div className="category-left-section">
                            <section className="category-information-section p-0">
                                <div className="category-information-sub-section">
                                    {categoryNews &&
                                        categoryNews.length == 0 && (
                                            <h4>No Sub-Category News</h4>
                                        )}
                                    {categoryNews &&
                                        categoryNews.length > 0 &&
                                        categoryNews.map(categorynews => (
                                            <>
                                                <div
                                                    className="d-flex"
                                                    key={categorynews.id}
                                                >
                                                    <div>
                                                        <Link
                                                            className=""
                                                            to={`/news/details/view/${categorynews.slug}`}
                                                        >
                                                            <h5 className="news-title">
                                                                {
                                                                    categorynews.title
                                                                }
                                                            </h5>
                                                        </Link>
                                                        <p className="news-description">
                                                            {categorynews.description.slice(
                                                                0,
                                                                150
                                                            ) + "..."}
                                                        </p>
                                                    </div>
                                                    <img
                                                        src={categorynews.image}
                                                        alt=""
                                                        className="category-information-image"
                                                    />
                                                </div>
                                                <hr className="news-hr" />
                                            </>
                                        ))}
                                </div>
                            </section>
                        </div>
                    </Col>
                    {/* REGISTER FORM */}
                    <Col sm="12" md="6" lg="3">
                        <div className="registration-section">
                            <h5
                                style={{ padding: "10px", textAlign: "center" }}
                            >
                                REGISTER FOR FREE UPDATES
                            </h5>
                            <Form>
                                <FormGroup>
                                    <Input
                                        type="name"
                                        name="name"
                                        id="exampleName"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="number"
                                        name="number"
                                        id="exampleNumber"
                                        min="1"
                                        max="10"
                                        placeholder="Phone Number"
                                    />
                                </FormGroup>
                                <Button className="registration-btn">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <br />
                        {/* Trending NEWS */}
                        <div className="trending-section-container">
                            <h4 className="trending-section">Trending</h4>
                            {categoryNews && categoryNews.length == 0 && (
                                <h4>No Trending news</h4>
                            )}
                            {categoryNews &&
                                categoryNews.length > 0 &&
                                categoryNews.map(categorynews => (
                                    <div>
                                        <div
                                            className="d-flex"
                                            key={categorynews.id}
                                        >
                                            <div>
                                                <h6 className="news-title">
                                                    {categorynews.title}
                                                </h6>
                                                <p className="news-description">
                                                    {categorynews.description.slice(
                                                        0,
                                                        100
                                                    ) + "..."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <hr />
                            <div className="text-center">
                                <Button className="trending-section-btn">
                                    View All
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    );
}

export default NewsSubCategory;
