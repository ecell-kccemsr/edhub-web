import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../../components/blogcard/BlogCard";
import SidebarElTopImg from "../../Images/news/sidebar-card-top.png";
import axios from "axios";
const NewsHomePage = () => {
    const [news, setNews] = useState([]);
    const [trending, setTrending] = useState([]);
    useEffect(() => {
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
                console.log("trending", res);
                setTrending(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="news-section-container">
            <Container>
                <Row>
                    <Col sm="12" md="8" lg="9">
                        {news &&
                            news?.length > 0 &&
                            news?.map(n => <BlogCard tags={true} data={n} />)}
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
                                            <p>#NATURE</p>
                                            <div className="sidebar-el-views-container">
                                                <i className="far fa-eye"></i>
                                                <span>1.2k</span>
                                            </div>
                                        </div>
                                        <p>
                                            {t?.description.length > 100
                                                ? t?.description.slice(0, 100) +
                                                  "..."
                                                : t?.description}
                                        </p>
                                        ;
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
