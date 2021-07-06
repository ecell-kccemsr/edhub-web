import React, { useState, useEffect } from "react";
import NewsCard from "../../components/newscard/NewsCard";
import { Col, Container, Row, Spinner, ButtonToggle } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NewsHomePage = () => {
    const [news, setNews] = useState([]);
    const [trending, setTrending] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoryId, setCategoryId] = useState("");
    const [currentBlogPage, setBlogCurrentPage] = useState({
        current_page: 1,
        last_page: null
    });

    const handleData = (id = null, pageNo = 1) => {
        let idVal = "";
        if (id) {
            setCategoryId(id);
            idVal = `category_id=${id}`;
        }
        axios
            .get(`/api/news?per_page=8&page=${pageNo}&${idVal}`)
            .then(res => {
                setNews(res.data.data);
                setLoading(false);
                setBlogCurrentPage({
                    current_page: res.data.meta.current_page,
                    last_page: res.data.meta.last_page
                });
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    };

    useEffect(() => {
        handleData();
        axios
            .get("/api/news/trending")
            .then(res => {
                setTrending(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("/api/news/categories")
            .then(res => {
                setCategories(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handlePagination = pageNo => {
        handleData(categoryId, pageNo);
        window.scrollTo(0, 0);
    };

    if (loading) {
        <div className="news-section-container">
            <div className="containerClass">
                <h4 className="text-center">
                    <Spinner color="danger" />
                </h4>
            </div>
        </div>;
    }

    return (
        <>
            <Helmet>
                <meta name="keywords" content="edhub, news, india, trending" />
                <meta
                    name="description"
                    content="News page where all sort of News are added with social share"
                />
                <meta name="copyright" content="Edhub" />
                <meta name="language" content="ES" />
            </Helmet>
            <div className="news-section-container">
                <div className="containerClass">
                    <div
                        className=" d-flex justify-content-center flex-wrap mb-3"
                        style={newsNavStyles}
                    >
                        {categories && categories?.length > 0 && (
                            <>
                                <ButtonToggle
                                    className="category-btn-all"
                                    onClick={() => handleData()}
                                >
                                    All
                                </ButtonToggle>
                                {categories.map(c => (
                                    <ButtonToggle
                                        color="danger"
                                        className="category-buttons-header"
                                        onClick={() => handleData(c?.id)}
                                    >
                                        {c.name}
                                    </ButtonToggle>
                                ))}
                            </>
                        )}
                    </div>
                    {!loading && news && news?.length == 0 && (
                        <h4 className="text-center">No News Found !</h4>
                    )}
                    <Row>
                        <Col sm="12" md="8" lg="9">
                            {!loading &&
                                news &&
                                news?.length > 0 &&
                                news?.map(n => (
                                    <NewsCard
                                        tags={true}
                                        data={n}
                                        toUrl={`/news/${n.slug}`}
                                    />
                                ))}
                            {news && news?.length > 0 && (
                                <>
                                    <button
                                        className="pg-btn"
                                        disabled={
                                            currentBlogPage?.current_page == 1
                                        }
                                        onClick={() => {
                                            handlePagination(
                                                currentBlogPage?.current_page -
                                                    1
                                            );
                                        }}
                                    >
                                        PREV
                                    </button>
                                    <button
                                        className="pg-btn"
                                        disabled={
                                            currentBlogPage?.current_page ==
                                            currentBlogPage?.last_page
                                        }
                                        onClick={() => {
                                            handlePagination(
                                                currentBlogPage?.current_page +
                                                    1
                                            );
                                        }}
                                    >
                                        NEXT
                                    </button>
                                </>
                            )}
                        </Col>
                        {trending?.length > 0 && (
                            <Col sm="12" md="4" lg="3">
                                <div className="news-sidebar">
                                    <h4>Trending</h4>
                                    {trending &&
                                        trending?.length > 0 &&
                                        trending?.map(t => (
                                            <div
                                                className="news-sidebar-el mb-2"
                                                key={t?.id}
                                            >
                                                <img
                                                    src={t?.image}
                                                    alt="News Sidebar Card Image"
                                                />
                                                <div className="sidebar-el-tag-section">
                                                    <p>#{t?.tags}</p>
                                                </div>
                                                <Link
                                                    to={`/news/${t?.slug}`}
                                                    style={{
                                                        color: "#ff0000"
                                                    }}
                                                >
                                                    <p>{t?.title}</p>
                                                </Link>
                                                <p
                                                    style={{
                                                        marginBottom: "10px"
                                                    }}
                                                >
                                                    <Link
                                                        to={`/news/${t?.slug}`}
                                                        style={{
                                                            color: "#ff0000"
                                                        }}
                                                    >
                                                        Read more
                                                    </Link>
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        </>
    );
};

const newsNavStyles = {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    background: "#FAFAFA"
};

export default NewsHomePage;
