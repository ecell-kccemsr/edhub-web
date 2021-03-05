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
                <div className="">News</div>
                <hr />
                <Row>
                    <Col sm="12" md="6" lg="8" className="mb-4">
                        <div className="category-left-section">
                            <section className="category-information-section">
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
                                                        <h6 className="">
                                                            {categorynews.title}
                                                        </h6>
                                                        <p className="">
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
                                                <hr />
                                            </>
                                        ))}
                                </div>
                            </section>
                        </div>
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <div className="pb-3">Register For free Updates</div>
                        <div className="registration-section">
                            <InputGroup>
                                <Input placeholder="Name" type="text" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Input placeholder="Email" type="email" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Input
                                    placeholder="Phone Number"
                                    type="number"
                                />
                            </InputGroup>
                            <div className="text-center">
                                <Button className="registration-btn">
                                    Submit
                                </Button>
                            </div>
                        </div>
                        <br />
                        <div className="trending-section-container">
                            <h4 className="trending-section">Trending</h4>
                            {categoryNews && categoryNews.length == 0 && (
                                <h4>No Sub-Category News</h4>
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
                                                <h6 className="trending-section-header">
                                                    {categorynews.title}
                                                </h6>
                                                <p className="trending-section-paragraph">
                                                    {categorynews.description}
                                                </p>
                                            </div>
                                            <img
                                                src="https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome2x.png"
                                                alt=""
                                                className="category-information-image"
                                            />
                                        </div>
                                        <hr />
                                    </div>
                                ))}

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
