import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, InputGroup, Input } from "reactstrap";
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
                <div className="">News</div>
                <hr />
                <Row>
                    <Col sm="12" md="6" lg="8" className="mb-4">
                        <div className="category-left-section">
                            <h6 className="select-by-category-header text-center">
                                Select News By Sub Category
                            </h6>
                            <div className="select-news-by-category-btn-section">
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    {subCategory && subCategory.length == 0 && (
                                        <h4>No Subcategories</h4>
                                    )}
                                    {subCategory.map(subcategory => (
                                        <Link
                                            to={`/newssubcategory/view/${subcategory?.id}`}
                                            key={subcategory.id}
                                            className="category-btn mt-2"
                                        >
                                            {subcategory.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <section className="category-information-section">
                                <div className="category-information-sub-section">
                                    <h4 className="category-header">
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
                                                            <h6 className="">
                                                                {
                                                                    categorynews.title
                                                                }
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
                                            );
                                        })}
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
                                <h4>No Trending News on category</h4>
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

export default NewsCategory;
