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
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        const { subcategory_slug } = props.match.params;
        axios.get("/api/news/sub_categories").then(res => {
            const cats = res.data.data.filter(c => c.slug == subcategory_slug);
            if (cats.length > 0) {
                axios
                    .get(
                        `http://localhost:8000/api/news/?subcategory_id=${cats[0].id}`
                    )

                    .then(res => {
                        setCategoryNews(res.data.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        });

        axios
            .get("http://localhost:8000/api/news/trending")
            .then(res => {
                setTrending(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const handleSubmit = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        axios
            .post(
                "http://localhost:8000/api/register_for_free_updates/add",
                data
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

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
                                                            to={`/news/${categorynews.category.slug}/${categorynews.subcategory.slug}/${categorynews.slug}`}
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
                            <form onSubmit={handleSubmit}>
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
                                <Button
                                    className="registration-btn"
                                    type="submit"
                                    value="submit"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
                        <br />
                        {/* Trending NEWS */}
                        <div className="trending-section-container">
                            <h4 className="trending-section">Trending</h4>
                            {trending && trending.length == 0 && (
                                <h4>No Trending news</h4>
                            )}
                            {trending &&
                                trending.length > 0 &&
                                trending.map(news => (
                                    <div>
                                        <div className="d-flex" key={news.id}>
                                            <div>
                                                <h6 className="news-title">
                                                    {news.title}
                                                </h6>
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

export default NewsSubCategory;
