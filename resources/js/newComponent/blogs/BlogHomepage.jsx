import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../../components/blogcard/BlogCard";
import udemy from "../../Images/blogs/udemy.png";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogHomepage = () => {
    const [blog, setBlogs] = useState([]);
    const [course, setCourse] = useState([]);

    useEffect(() => {
        axios
            .get("/api/blogs")
            .then(res => {
                setBlogs(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
            axios
            .get("/api/courses")
            .then(res => {
                setCourse(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div className="blog-section">
                <Row>
                    <Col sm="1" md={{ size: 6, offset: 1 }} lg="7">
                        {blog &&
                            blog?.length > 0 &&
                            blog?.map(b => (
                                <BlogCard
                                    tags={true}
                                    data={b}
                                    toUrl={`/blog/${b.slug}`}
                                />
                            ))}
                    </Col>
                    <Col sm="1" md="4" lg="3">
                        <div className="blog-sidebar">
                            {blog.map(b=>(
                                <>
                                <h6>Recent Posts</h6>
                            <hr />
                            <div className="blog-sidebar-list-el">
                                <div className="sidebar-list-top">
                                    <i className="fas fa-chevron-right"></i>
                                    <Link to={`/blog/${b.slug}`} style={{ color: "black" }}>
                                         <p>{b?.title}</p>
                                         </Link>
                                </div>
                            </div>
                            </>
                            ))}
                            

                            <hr />
                            {course.map(a=>(
                              <>
                             <h6>Recent Courses</h6>
                            <div className="blog-sidebar-list-el">
                                <div className="sidebar-list-top">
                                    <i className="fas fa-chevron-right"></i>
                                    <Link  to={`/courseDetail/${a?.slug}`}>
                                   <p> {a?.title}</p> 
                                    </Link>
                                </div>
                                <div className="blog-sidebar-pricesection">
                                <p>Rs. {a?.discount_price}</p>
                                    <img src={a?.course_provider.image} alt="Udemy" />
                                </div>
                            </div>
                            </>
                            ))}
                          

                        </div>
                    </Col>
                </Row>
        </div>
    );
};

export default BlogHomepage;
