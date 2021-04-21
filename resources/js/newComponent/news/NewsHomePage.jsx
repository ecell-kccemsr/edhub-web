import React from "react";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../../components/blogcard/BlogCard";
import SidebarElTopImg from "../../Images/news/sidebar-card-top.png";
const NewsHomePage = () => {
    return (
        <div className="news-section-container">
            <Container>
                <Row>
                    <Col sm="12" md="8" lg="9">
                        <BlogCard tags={true} />
                    </Col>
                    <Col sm="12" md="4" lg="3">
                        <div className="news-sidebar">
                            <h4>Trending</h4>
                            <div className="news-sidebar-el">
                                <img
                                    src={SidebarElTopImg}
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
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Non lectus porta urna
                                    venenatis tempus. Adipiscing s
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsHomePage;
