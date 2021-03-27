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
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Pagination from "../../components/pagination/Pagination";
function News() {
    const [categories, setCategory] = useState([]);
    const [news, setNews] = useState([]);
    const [trending, setTrending] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        axios
            .get("/api/news/categories")
            .then(res => {
                setCategory(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("/api/news")
            .then(res => {
                setNews(res.data.data);
            })
            .catch(err => {
                console.log(err);
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
                form.reset();
            })
            .catch(err => toast.error(err.response.data.message));
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexOfLastPost - postsPerPage;
    const currentNews = news.slice(indexofFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
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
                            link: "/news",
                            active: true
                        }
                    ]}
                />{" "}
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
                                            to={`/news/${category.slug}`}
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
                                    {currentNews &&
                                        currentNews.map(news => (
                                            <>
                                                <div
                                                    className="d-flex justify-content-between"
                                                    key={news.id}
                                                >
                                                    <div>
                                                        <Link
                                                            className="news-title"
                                                            to={`/news/${news.category.slug}/${news.subcategory.slug}/${news.slug}`}
                                                        >
                                                            {news.title}
                                                        </Link>

                                                        <p className="news-description">
                                                            {news?.description
                                                                .length > 300
                                                                ? news?.description.slice(
                                                                      0,
                                                                      300
                                                                  ) + "..."
                                                                : news?.description}
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
                                    <Pagination
                                        postsPerPage={postsPerPage}
                                        totalPosts={news.length}
                                        paginate={paginate}
                                    />
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
                                trending.map(news => (
                                    <div>
                                        <div key={news.id}>
                                            <div>
                                                <Link
                                                    to={`/news/${news.category.slug}/${news.subcategory.slug}/${news.slug}`}
                                                    className="news-title"
                                                >
                                                    {news.title}
                                                </Link>
                                                <br />

                                                <p className="news-description">
                                                    {news.description.length >
                                                    100
                                                        ? news.description.slice(
                                                              0,
                                                              100
                                                          ) + "..."
                                                        : news.description}
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
