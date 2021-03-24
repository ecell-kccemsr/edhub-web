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
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function NewsCategory(props) {
    const [categoryslug, setCategoryslug] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [categoryNews, setCategoryNews] = useState([]);
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        const { category_slug } = props.match.params;
        setCategoryslug(category_slug);
        axios.get("/api/news/categories").then(res => {
            const cats = res.data.data.filter(c => c.slug == category_slug);
            if (cats.length > 0) {
                axios
                    .get(`/api/news/sub_categories?category_id=${cats[0].id}`)
                    .then(res => {
                        setSubCategory(res.data.data);
                    })

                    .catch(err => {
                        console.log(err);
                    });

                axios
                    .get(`/api/news?category_id=${cats[0].id}`)

                    .then(res => {
                        setCategoryNews(res.data.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        });

        axios
            .get("/api/news/trending")
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
            .post("/api/register_for_free_updates/add", data)
            .then(res => {
                toast.success("You have registered successfully !");
                form.reset()
            })
            .catch(err =>  toast.error(err.response.data.message));
    };

    return (
        <div>
            <ToastContainer />
            <section className="select-news-by-category">
                {/* Breadcrumb */}
                <BreadCrumb
                    navData={[
                        {
                            title: "Home",
                            link: "/"
                        },
                        {
                            title: "News",
                            link: "/news"
                        },
                        {
                            title: `${categoryslug}`,
                            link: `/news/${categoryslug}`,
                            active: true
                        }
                    ]}
                />
{" "}
                <h4 className="title-bank">News</h4>
                <hr className="news-hr" />
                <Row>
                    {/* Sub Category News */}
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
                                            to={`/news/${subcategory.category.slug}/${subcategory?.slug}`}
                                            key={subcategory.id}
                                            className="category-btn text-center"
                                        >
                                            {subcategory.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Latest News */}
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
                                                            <Link
                                                                className="news-title"
                                                                to={`/news/${categorynews.category.slug}/${categorynews.subcategory.slug}/${categorynews.slug}`}
                                                            >
                                                                {
                                                                    categorynews.title
                                                                }
                                                            </Link>
                                                            <p className="news-description">
                                                                {categorynews.description.length>300?(categorynews.description.slice(
                                                                    0,
                                                                    300
                                                                ) + "..."):(categorynews.description)}
                                                            </p>
                                                        </div>
                                                        <img
                                                            src={
                                                                categorynews.image
                                                            }
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
                        {/* REGISTER FORM */}
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
                                        name="mobile_no"
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
                        {/* Trending News */}
                        <div className="trending-section-container">
                            <h4 className="trending-section">Trending</h4>
                            {trending && trending.length == 0 && (
                                <p>No Trending News</p>
                            )}
                            {trending &&
                                trending.length > 0 &&
                                trending.map(news => (
                                    <div>
                                        <div className="d-flex" key={news.id}>
                                            <div>
                                                <strong className="news-title">
                                                    {news.title}
                                                </strong>
                                                <p className="news-description">
                                                {news.description.length>100?(news.description.slice(
                                                        0,
                                                        100
                                                    ) + "..."):(news.description)}
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
