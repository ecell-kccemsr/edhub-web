import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button, Spinner } from "reactstrap";
import Moment from "react-moment";
import axios from "axios";
import { Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import Login from "../../auth/login/Login";
import PopularChoice from "../../homepage/landingPageComponents/PopularChoice";
import { useStoreState } from "easy-peasy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {Helmet} from "react-helmet";

const SingleBlog = props => {
    const user = useStoreState(state => state.user);
    const [singleBlog, setSingleBlog] = useState(null);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [showComments, setshowComments] = useState(false);
    const [course, setCourse] = useState([]);

     // Login modal 
     const [modallogin, setModalLogin] = useState(false);
     const toggleLogin = () => setModalLogin(!modallogin);

    const [commentPage, setCommentPage] = useState({
        current_page: 1,
        last_page: null
    });
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { blog_slug } = props.match.params;
    useEffect(() => {
        if (blog_slug) {
            axios
                .get(`/api/blogs/${blog_slug}`)
                .then(res => {
                    setSingleBlog(res.data.data);
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false)
                    setError(true)
                });
            getComment(blog_slug);
        }
        axios
        .get("/api/courses")
        .then(res => {
            setCourse(res.data.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    const handleComment = e => {
        e.preventDefault();
        if(comment!=""){
            let form = e.nativeEvent.target;
            let data = JSON.stringify({ comment });
            axios
            .post(`/api/blogs/${blog_slug}/comments`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                toast.success("Comment Added Successfully !");
                setComment("")
                form.reset();
            })
            .catch(err =>  toast.error("Something went wrong while adding comment!"));
        }else{
            toast.error("Comment cannot be empty !")
        }
    };

    const getComment = (blog_slug, pageNumber = 1) => {
        axios
            .get(`/api/blogs/${blog_slug}/comments?page=${pageNumber}`)
            .then(res => {
                let combinedArr = [...comments,...res.data.data]
                setComments(combinedArr);
                setCommentPage({
                    current_page: res.data.meta.current_page,
                    last_page: res.data.meta.last_page
                });
            })
            .catch(err => console.log(err));
    };

    const handleLike = e => {
        e.preventDefault();
        if (user) {
            axios
                .post(`/api/blogs/${blog_slug}/like/toggle`)
                .then(res => {
                    setSingleBlog({
                        ...singleBlog,
                        total_likes: res.data.data.total_likes
                    });
                })
                .catch(err => console.log(err));
        }
    };
    const viewAll = () => {
        setVisible(data.length);
    };

    const viewLess = () => {
        setVisible(initialPosts);
    };

    if(loading){
        return (
            <>
            <div className="single-blog-section">
                <Container>
                    <h4 className="text-center">Loading Blog...
                    <Spinner color="danger" />
                    </h4>
                </Container>
            </div>
            </>
        )
    }

    return (
        <>
         <Helmet>
                      <meta name='keywords' content='edhub, blogs, india, trending, details' />
                    <meta name="description" content="Detail of blogs in this page" />
                    <meta name='copyright' content='Edhub' />
                    <meta name='language' content='ES' />
             </Helmet>
        <ToastContainer />
        {!loading && error && (
             <>
             <div className="single-blog-section">
                 <Container>
                     <h4 className="text-center">Something went wrong 🙁</h4>
                 </Container>
             </div>
             </>
        )}
        {
            !loading && !error && (
                <div className="single-blog-section">
            <Container>
                <h3>{singleBlog?.title}</h3>
                <h6>
                    {singleBlog?.read_time} read |{" "}
                    <Moment format="MMM D, YYYY" withTitle>
                        {singleBlog?.published_at}
                    </Moment>
                </h6>
                <img src={singleBlog?.image} alt="Single Blog Top Image" />
                <div className="singleblog-like-section">
                    <div className="interaction-container">
                        <img
                            src="/images/blogs/like.png"
                            alt="Like"
                            onClick={handleLike}
                        />
                        <b>{singleBlog?.total_likes}</b>
                    </div>
                    <div className="interaction-container">
                        <img src="/images/blogs/comment.png" alt="Comments" />
                        <b>{comments.length}</b>
                    </div>
                </div>
                <div className="singleBlog-author-section">
                    <img src={singleBlog?.author_image} alt="Author Image" />
                    <p>
                        {singleBlog?.author_name} |{" "}
                        {singleBlog?.autor_designation}{" "}
                    </p>
                </div>
                <Row>
                    <Col sm="12" md="1">
                        <div className="singleBlog-social">
                            <div className="social-textcontainer">
                                <h4>
                                    <span>
                                        <Moment format="D MMM YYYY" withTitle>
                                            {singleBlog?.published_at}
                                        </Moment>
                                    </span>
                                </h4>
                            </div>
                            <div className="news-interaction-el-1">
                                <img
                                    src="/images/news/share.png"
                                    alt="Share"
                                    onClick={toggle}
                                />
                                <Collapse isOpen={isOpen}>
                                    <div
                                        className="social-container"
                                        style={{ padding: "6px" }}
                                    >
                                           <a
                                                  href={` https://t.me/share/url?url=${window.location.href}`}
                                                  target="_blank"
                                             >
                                                 <i className="fab fa-telegram" style={{color:"#0088CC"}}></i>
                                             </a>
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                                            target="_blank"
                                        >
                                            <i className="fab fa-linkedin" style={{color:"#2867B2"}}></i>
                                        </a>
                                        <a
                                            href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
                                            target="_blank"
                                        >
                                            {" "}
                                            <i className="fab fa-facebook" style={{color:"#3C5A99"}}></i>
                                        </a>
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                                            target="_blank"
                                        >
                                            {" "}
                                            <i className="fab fa-twitter" style={{color:"#1DA1F2"}}></i>
                                        </a>
                                        <a
                                            href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                                            target="_blank"
                                        >
                                            {" "}
                                            <i className="fab fa-whatsapp" style={{color:"#49C858"}}></i>
                                        </a>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="10">
                        <div className="singleBlog-maincontent-section">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: singleBlog?.body
                                }}
                                style={{fontSize:"20px", color:"#333333"}}
                            ></p>
                        </div>
                    </Col>
                </Row>

                <>
                    {" "}
                    <h4 className="comment-titletext">Comments</h4>
                    {user ? (
                        <form onSubmit={handleComment}>
                            <Row>
                                <Col sm="12" md={{ size: 6, offset: 1 }} lg="8">
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="comment"
                                            required
                                            onChange={e =>
                                                setComment(e.target.value)
                                            }
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="4" lg="2">
                                    <button type="submit" className="comment-post-btn">
                                        POST
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    ) : (
                        <div className="text-center">
                            <Button className="login-btn-navbar" onClick={toggleLogin}>login</Button>
                                 <Modal isOpen={modallogin} toggle={toggleLogin} className="model">
                                 <ModalHeader toggle={toggleLogin}>Login</ModalHeader>
                                   <ModalBody>
                                    <Login />                                   
                                   </ModalBody>
                                 </Modal>
                        </div>
                    )}
                </>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                    {comments &&
                            comments.length>0 &&   
                               <div className="user-comment-section">
                 
                    <h4 className="user-comments">User Comments </h4> 

                    <div className="comment-section">
                        {
                            !showComments && <button onClick={()=>setshowComments(true)}>Show {comments.length} comments</button>
                        }
                        {
                            showComments && 
                            <>
                            {comments &&
                            comments.length>0 &&
                            comments.map(c => {
                                return (
                                    <div className="comments">
                                        <img src={c?.user?.avatar} alt="User" />
                                        <div>
                                            <b className="mb-0">{c?.user?.name}</b>
                                            <p className="mb-0">{c?.comment}</p>
                                        </div>
                                    </div>
                                );
                            })}

                        {commentPage?.current_page < commentPage?.last_page && (
                            <button
                                onClick={() =>
                                    getComment(
                                        blog_slug,
                                        commentPage.current_page + 1
                                    )
                                }
                            >
                                Load More Comments
                            </button>
                        )}
                            </>
                        }
                    </div>
                </div>
                }
                    </Col>
                </Row>
                
            </Container>
            {course && (
                    <PopularChoice
                        data={course}
                        title="Banking Exams Courses"
                    />
                )}
        </div>
            )
        }
        </>
    );
};

export default SingleBlog;
