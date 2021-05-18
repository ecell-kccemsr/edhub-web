import React, { useState, useEffect } from "react";
import { Row, Col, Container, Spinner } from "reactstrap";
import BlogCard from "../../components/blogcard/BlogCard";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogHomepage = () => {
    const [blog, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState([]);
    const [currentBlogPage, setBlogCurrentPage] = useState({
        current_page: 1,
        last_page: null
    });

    useEffect(() => {
            getBlogs()
            axios
            .get("/api/courses?per_page=5")
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
                setLoading(false)
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

    if(loading){
       return(
        <div className="blog-section">
        <Container>
            <h4 className="text-center">Loading Blogs...
            <Spinner color="danger" />
            </h4>
        </Container>
    </div>
       )
    }
    
    return (
        <div className="blog-section">
                <Row>
                    <Col sm="1" md={{ size: 6, offset: 1 }} lg="7">
                        { !loading && blog.length==0 && (
                             <div className="blog-section">
                             <Container>
                                    <h4  className="text-center">No Blogs Found !</h4>
                                </Container>
                            </div>)
                        }
                        {!loading && blog &&
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
                        { !loading && blog.length==0 && (
                             <Container>
                             <p >No Blogs Found !</p>
                         </Container>)
                        }
                            {!loading && blog &&
                            blog?.length > 0 && blog.map(b=>(
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
                        </div>
                            

                        <div className="blog-sidebar">
                           
                            <h6 className="mt-0">Recent Courses</h6>
                            <hr />
                            {
                                course && course.length==0 && (
                                    <p  className="mb-0">No Recent Courses Found!</p>
                                )
                            }
                            {course?.length>0 && course.map((a,key)=>(
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
