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
function News() {
    const [categories, setCategory] = useState([]);
    const [news, setNews] = useState([]);
    const [trending, setTrending] = useState([]);
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
        axios
            .get("http://localhost:8000/api/news/trending")
            .then(res => {
                setTrending(res.data.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
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
                    </ol>
                </nav>{" "}
                {/* Title */}
                <div className="news-title">
                    <h5>NEWS</h5>
                </div>
                <hr className="news-hr" />
                {/* News Category */}
                <Row>
                    <Col sm="6" md={{ size: 8, offset: 0 }} lg="9">
                        <div className="category-left-section">
                            <h6 className="select-by-category-header text-center">
                                Select News By Category
                            </h6>
                            <div className="select-news-by-category-btn-section">
                                <div className="d-flex flex-wrap justify-content-center">
                                    {categories.map(category => (
                                        <Link
                                            to={`/news/view/${category.id}`}
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

                                    {news &&
                                        news.map(news => (
                                            <>
                                                <div
                                                    className="d-flex"
                                                    key={news.id}
                                                >
                                                    <div>
                                                        <h5 className="news-title">
                                                            {news.title}
                                                        </h5>

                                                        <p className="news-description">
                                                            {news.description.slice(
                                                                0,
                                                                300
                                                            ) + "..."}
                                                        </p>
                                                    </div>
                                                    <img
                                                        src={news.image}
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
                    {/* REGISTER Form */}
                    <Col className="" sm="3" md="4" lg="3">
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
                        {/* Trending News */}
                        <div className="trending-section-container">
                            <h4 className="trending-section">Trending</h4>
                            {trending && trending.length == 0 && (
                                <p>No Trending News</p>
                            )}
                            {trending &&
                                trending.map(news => (
                                    <div>
                                        <div key={news.id}>
                                            <div>
                                                <strong className="news-title">
                                                    {news.title}
                                                </strong>
                                                <br />

                                                <p className="news-description">
                                                    {news.description.slice(
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

export default News;
