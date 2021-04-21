import React from "react";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../../components/blogcard/BlogCard";
import udemy from "../../Images/blogs/udemy.png";

const BlogHomepage = () => {
    return (
        <div className="blog-section">
            <Container>
                <Row>
                    <Col sm="12" md="8" lg="9">
                        <BlogCard tags={false} />
                    </Col>
                    <Col sm="12" md="4" lg="3">
                        <div className="blog-sidebar">
                            <h6>Recent Posts</h6>
                            <hr />
                            <div className="blog-sidebar-list-el">
                                <div className="sidebar-list-top">
                                    <i className="fas fa-chevron-right"></i>
                                    <p>
                                        JPMorgan CEO Jamie Dimon shares his
                                        thoughts on remote work
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <h6>Recent Courses</h6>

                            <div className="blog-sidebar-list-el">
                                <div className="sidebar-list-top">
                                    <i className="fas fa-chevron-right"></i>
                                    <p>
                                        JPMorgan CEO Jamie Dimon shares his
                                        thoughts on remote work
                                    </p>
                                </div>
                                <div className="blog-sidebar-pricesection">
                                    <p>
                                        <b>$250</b>
                                    </p>
                                    <img src={udemy} alt="Udemy" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogHomepage;
