import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, InputGroup, Input } from "reactstrap";

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
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <div>
            <section className="select-news-by-category">
            <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                            <a href="#" className="href-government">HOME</a>
                                                        </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                <a href="" className="href-government">NEWS</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                <a href="" className="href-government">BUSINESS</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                <a href="" className="href-government">ENTREPRENEURSHIP</a>
                            </li>
                         
                        </ol>
                    </nav>{" "}
                    <h4 className="title-bank">
                       News  
                         </h4>         
                       <hr className="news-hr" />
                <Row>
                    <Col sm="12" md="6" lg="8" className="mb-4">
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
                                                        <h5 className="news-title">
                                                            {categorynews.title}
                                                        </h5>
                                                        <p className="news-description">
                                                            {
                                                                categorynews.description
                                                            }
                                                        </p>
                                                    </div>
                                                    <img
                                                        src="https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome2x.png"
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
                    <Col sm="12" md="6" lg="4">
                        <div className="registration-section">
                            <div className="pb-3 ml-2 register">
                                <h4>REGISTER FOR FREE UPDATES</h4>
                            </div>
                            <InputGroup>
                                <Input
                                    placeholder="Name"
                                    type="text"
                                    className="input-fields"
                                />
                            </InputGroup>

                            <InputGroup>
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    className="input-fields"
                                />
                            </InputGroup>

                            <InputGroup>
                                <Input
                                    placeholder="Phone Number"
                                    type="number"
                                    className="input-fields"
                                />
                            </InputGroup>
                            <div className="text-center">
                                <Button className="registration-btn">
                                    SUBMIT
                                </Button>
                            </div>
                        </div>
                        <br />
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
                                                    )}
                                                </p>
                                            </div>
                                            <img
                                                src="https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome2x.png"
                                                alt=""
                                                className="category-information-image"
                                            />
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
