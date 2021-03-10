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
                <div className="news-title">
                    <h5>NEWS</h5>
                </div>
                <hr className="news-hr" />
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
                                                    </h5>

                                                    <p className="news-description">
                                                        {news.description.slice(
                                                            0,
                                                            300
                                                        )}
                                                    </p>
                                                </div>
                                                <img
                                                    src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-10635,resizemode-1,msid-75494904/tech/hardware/mobile-phone-retailers-set-to-reopen-stores-where-allowed.jpg"
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
                                <Button className="btn-submit-bank">
                                    Submit
                                </Button>
                            </Form>
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
