import React, { useState, useEffect } from "react";
import NewsCard from "../../components/newscard/NewsCard";
import { Col, Container, Row, Nav, NavItem, NavLink } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsHomePage = () => {
    const [news, setNews] = useState([]);
    const [trending, setTrending] = useState([]);
    const [categories, setCategories] = useState([]);

    const handleData = (id = null) => {
        let idVal = "";
        if (id) {
            idVal = `?category_id=${id}`;
        }
        axios
            .get(`/api/news${idVal}`)
            .then(res => {
                setNews(res.data.data);
            })
            .catch(err => {
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

    return (
        <div className="news-section-container">
            <Container className="containerClass">
                <div className=" d-flex justify-content-center flex-wrap mb-3">
                    <button
                        className="category-btn-all"
                        onClick={() => handleData()}
                    >
                        All
                    </button>
                    {categories &&
                        categories.length > 0 &&
                        categories.map(c => (
                            <button
                                className="category-buttons-header"
                                onClick={() => handleData(c?.id)}
                            >
                                {c.name}
                            </button>
                        ))}
                </div>

                <Row>
                    <Col sm="12" md="8" lg="9">
                        {news &&
                            news?.length > 0 &&
                            news?.map(n => (
                                <NewsCard
                                    tags={true}
                                    data={n}
                                    toUrl={`/news/${n.slug}`}
                                />
                            ))}
                    </Col>
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
                                        <p>
                                            {t?.description.length > 100
                                                ? t?.description.slice(0, 100) +
                                                  "..."
                                                : t?.description}
                                        </p>
                                        <p style={{marginBottom:"10px"}}> 
                                          <Link  to={`/news/${t?.slug}`} style={{ color: "#ff0000"}}>
                                             Read more
                                             </Link>
                                             </p> 
                                    </div>
                                ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsHomePage;
