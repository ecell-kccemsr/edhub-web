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
function NewsCategory(props) {
    console.log(props);
    const { category_id } = props.match.params;
    const [subCategory, setSubCategory] = useState([]);
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {
        axios
            .get(
                `http://localhost:8000/api/news/sub_categories?category_id=${category_id}`
            )
            .then(res => {
                setSubCategory(res.data.data);
            })

            .catch(err => {
                console.log(err);
            });

        axios
            .get(`http://localhost:8000/api/news?category_id=${category_id}`)

            .then(res => {
                setCategoryNews(res.data.data);
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
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            <a href="" className="href-government">
                                BUSINESS
                            </a>
                        </li>
                    </ol>
                </nav>{" "}
                <h4 className="title-bank">News</h4>
                <hr className="news-hr" />
                <Row>
                    <Col sm="12" md="6" lg="9" className="mb-4">
                        <div className="category-left-section">
                            <h6 className="select-by-category-header text-center">
                                Select News By Sub Category
                            </h6>
                            <div className="select-news-by-category-btn-section">
                                <div className="d-flex flex-wrap justify-content-center">
                                    {subCategory && subCategory.length == 0 && (
                                        <h4>No Subcategories</h4>
                                    )}
                                    {subCategory.map(subcategory => (
                                        <Link
                                            to={`/newssubcategory/view/${subcategory?.id}`}
                                            key={subcategory.id}
                                            className="category-btn text-center"
                                        >
                                            {subcategory.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <section className="category-information-section">
                                <div className="category-information-sub-section">
                                    <h4 className="category-header pb-2">
                                        Latest News
                                    </h4>
                                    {categoryNews &&
                                        categoryNews.length == 0 && (
                                            <h4>No Category News</h4>
                                        )}

                                    {categoryNews &&
                                        categoryNews.length > 0 &&
                                        categoryNews.map(categorynews => {
                                            return (
                                                <>
                                                    <div
                                                        className="d-flex"
                                                        key={categorynews.id}
                                                    >
                                                        <div>
                                                            <h6 className="news-title">
                                                                {
                                                                    categorynews.title
                                                                }
                                                            </h6>
                                                            <p className="news-description">
                                                                {categorynews.description.slice(
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
                                            );
                                        })}
                                </div>
                            </section>
                        </div>
                    </Col>
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
                                <Button className="btn-submit-bank">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <br />
                        <div className="trending-section-container">
                            <h4 className="trending-section">Trending</h4>
                            {categoryNews && categoryNews.length == 0 && (
                                <h4>No Trending News</h4>
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
                                                <strong className="news-title">
                                                    {categorynews.title}
                                                </strong>
                                                <p className="news-description">
                                                    {categorynews.description.slice(
                                                        0,
                                                        100
                                                    )}
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

export default NewsCategory;
