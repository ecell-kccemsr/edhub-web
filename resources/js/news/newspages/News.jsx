import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, InputGroup, Input } from "reactstrap";
function News() {
    const [categories, setCategory] = useState([]);
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/news/categories")
            .then(res => {
                setCategory(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("http://localhost:8000/api/news")
            .then(res => {
                setNews(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <section className="select-news-by-category">
                <div className="news-title">NEWS</div>
                <hr className="news-hr" />
                <Row>
                    <Col sm="12" md="6" lg="8" className="mb-4">
                        <div className="category-left-section">
                            <h6 className="select-by-category-header text-center">
                                Select News By Category
                            </h6>
                            <div className="select-news-by-category-btn-section">
                                <div className="d-flex flex-wrap justify-content-center">
                                    {categories.map(category => (
                                        <Link
                                            to={`/newscategory/view/${category?.id}`}
                                            key={category.id}
                                            className="category-btn text-center"
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <section className="category-information-section">
                                <div className="category-information-sub-section">
                                    <h4 className="category-header pb-2">
                                        {categories[0]?.name}
                                    </h4>

                                    {news.map(news => (
                                        <>
                                            <div
                                                className="d-flex"
                                                key={news.id}
                                            >
                                                <div>
                                                    <h5 className="news-title">
                                                        {news.title}

                                                        <br />
                                                    </h5>

                                                    <p className="news-description">
                                                        {news.description.slice(
                                                            0,
                                                            300
                                                        )}
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
                            {news.map(news => (
                                <div>
                                    <div className="d-flex" key={news.id}>
                                        <div>
                                            <strong className="news-title">
                                                {news.title}
                                            </strong>
                                            <br />

                                            <p className="news-description">
                                                {news.description.slice(0, 100)}
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

export default News;
