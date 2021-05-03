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
import { Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const SingleBlog = props => {
    const user = useStoreState(state => state.user);
    const [singleBlog, setSingleBlog] = useState([]);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
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
            .then(res => {
                console.log("post comment data", res);
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
        axios
            .post(`/api/blogs/${blog_slug}/like/toggle`)
            .then(res => {
                console.log("post like data", res);
            })
            .catch(err => console.log(err));
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
                            <div className="social-container">
                                <img src={insta} alt="Insta" />
                                <img src={ld} alt="Linkedin" />
                                <img src={fb} alt="Facebook" />
                                <img src={tw} alt="Twitter" />
                                <img src={wa} alt="Whatsapp" />
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
                {user ? (
                    <>
                        {" "}
                        <h4 className="comment-titletext">Comments</h4>
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
                        </form>{" "}
                    </>
                ) : (
                    <Link to={"/login"}>Click here to login</Link>
                )}
            </Container>
        </div>
    );
};

export default SingleBlog;
