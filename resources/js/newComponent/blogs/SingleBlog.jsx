import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import insta from "../../Images/blogs/instagram.png";
import fb from "../../Images/blogs/facebook.png";
import tw from "../../Images/blogs/twitter.png";
import ld from "../../Images/blogs/linkedin.png";
import wa from "../../Images/blogs/whatsapp.png";
import like from "../../Images/blogs/like.png";
import Scomments from "../../Images/blogs/comment.png";
import Moment from "react-moment";
import axios from "axios";
import Share from "../../Images/news/share.png";
import { Collapse } from 'reactstrap';
import { Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const SingleBlog = props => {
    const user = useStoreState(state => state.user);
    const [singleBlog, setSingleBlog] = useState([]);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { blog_slug } = props.match.params;
    useEffect(() => {
        if (blog_slug) {
            axios
                .get(`/api/blogs/${blog_slug}`)
                .then(res => {
                    setSingleBlog(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
            getComment(blog_slug);
        }
    }, []);
    const handleComment = e => {
        e.preventDefault();
        let data = JSON.stringify({ comment });
        axios
            .post(`/api/blogs/${blog_slug}/comments`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .catch(err => console.log(err));
    };

    const getComment = blog_slug => {
        axios
            .get(`/api/blogs/${blog_slug}/comments`)
            .then(res => {
                setComments(res.data.data);
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

    return (
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
                        <img src={like} alt="Like" onClick={handleLike} />
                        <b>{singleBlog.total_likes}</b>
                    </div>
                    <div className="interaction-container">
                        <img src={Scomments} alt="Comments" />
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
                                    <img src={Share} alt="Share" onClick={toggle} />
                                    <Collapse isOpen={isOpen}>
                                    <div className="social-container" style={{padding:"6px"}}>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                                    target="_blank"
                                >
                                   <i class="fab fa-linkedin"></i>
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
                                    target="_blank"
                                >
                                    {" "}
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                                    target="_blank"
                                >
                                    {" "}
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                                    target="_blank"
                                >
                                    {" "}
                                    <i class="fab fa-whatsapp"></i>
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
                                            onChange={e =>
                                                setComment(e.target.value)
                                            }
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="4" lg="2">
                                    <button type="submit" className="">
                                        POST
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    ) : (
                        <div className="text-center">
                            <Link to={"/login"} className="comment-login-btn">
                                Login to comment
                            </Link>
                        </div>
                    )}
                </>
            </Container>
        </div>
    );
};

export default SingleBlog;
