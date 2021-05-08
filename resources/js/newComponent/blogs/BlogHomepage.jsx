import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import BlogCard from "../../components/blogcard/BlogCard";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogHomepage = () => {
    const [blog, setBlogs] = useState([]);
    const [course, setCourse] = useState([]);
    const [currentBlogPage, setBlogCurrentPage] = useState({
        current_page: 1,
        last_page: null
    });

    useEffect(() => {
            getBlogs()
            axios
            .get("/api/courses")
            .then(res => {
                setCourse(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const getBlogs = (pageNo=1) =>{
        axios
            .get(`/api/blogs?per_page=5&page=${pageNo}`)
            .then(res => {
                setBlogs(res.data.data);
                setBlogCurrentPage({
                    current_page: res.data.meta.current_page,
                    last_page: res.data.meta.last_page
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handlePagination = (pageNo)=>{
            getBlogs(pageNo)
            window.scrollTo(0, 0)
    }
    return (
        <div className="blog-section">
                <Row>
                    <Col sm="1" md={{ size: 6, offset: 1 }} lg="7">
                        {blog &&
                            blog?.length > 0 &&
                            blog?.map((b) => (
                                <BlogCard
                                    tags={false}
                                    data={b}
                                    key={b?.id}
                                    toUrl={`/blog/${b.slug}`}
                                />
                            ))}
                           {
                                blog && blog?.length>0 && (
                                    <>
                                    <button 
                                        className="pg-btn"
                                        disabled={currentBlogPage?.current_page==1}
                                        onClick={()=>{
                                            handlePagination(currentBlogPage?.current_page-1)
                                        }}>PREV</button>
                                    <button 
                                        className="pg-btn"
                                        disabled={currentBlogPage?.current_page==currentBlogPage?.last_page}
                                        onClick={()=>{
                                            handlePagination(currentBlogPage?.current_page+1)
                                        }}>NEXT</button>
                                    </>
                                )
                            }
                    </Col>
                    <Col sm="1" md="4" lg="3">
                        <div className="blog-sidebar">
                        <h6>Recent Posts</h6>
                            {blog.map(b=>(
                                <>
                            <hr />
                            <div className="blog-sidebar-list-el">
                                <div className="sidebar-list-top">
                                    <i className="fas fa-chevron-right"></i>
                                    <Link to={`/blog/${b.slug}`} style={{ color: "black" }}>
                                         <p className="mb-0">{b?.title}</p>
                                         </Link>
                                </div>
                            </div>
                            </>
                            ))}
                            

                           
                            <h6 className="mt-4">Recent Courses</h6>
                            <hr />
                            {course.map((a,key)=>(
                              <div className="blog-sidebar-list-el my-3" key={key}>
                              <div className="sidebar-list-top">
                                  <i className="fas fa-chevron-right"></i>
                                  <Link  to={`/courseDetail/${a?.slug}`}>
                                 <p className="mb-0"> {a?.title}</p> 
                                  </Link>
                              </div>
                              <div className="blog-sidebar-pricesection">
                              <p  className="mb-0">Rs. {a?.discount_price}</p>
                                  <img src={a?.course_provider?.image} alt={a?.course_provider?.name} />
                              </div>
                          </div>
                            ))}
                          

                        </div>
                    </Col>
                </Row>
        </div>
    );
};

export default BlogHomepage;
