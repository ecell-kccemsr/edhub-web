import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import singleBlogImg from "../../Images/blogs/singleBlogTop.png";
import singleBlogAuthor from "../../Images/blogs/singleBlogAuthor.png";
import insta from "../../Images/blogs/instagram.png";
import fb from "../../Images/blogs/facebook.png";
import tw from "../../Images/blogs/twitter.png";
import ld from "../../Images/blogs/linkedin.png";
import wa from "../../Images/blogs/whatsapp.png";
import like from "../../Images/blogs/like.png";
import comment from "../../Images/blogs/comment.png";
import axios from "axios";
const SingleBlog = props => {
    const [singleBlog, setSingleBlog] = useState([]);
    console.log(props);

    useEffect(() => {
        const { blog_slug } = props.match.params;
        if (blog_slug) {
            axios
                .get(`/api/blogs/${blog_slug}`)
                .then(res => {
                    setSingleBlog(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);
    return (
        <div className="single-blog-section">
            <Container>
                <h3>{singleBlog?.title}</h3>
                <h6>{singleBlog?.read_time} read | October 30, 2020</h6>
                <img src={singleBlog?.image} alt="Single Blog Top Image" />
                <div className="singleblog-like-section">
                    <div className="interaction-container">
                        <img src={like} alt="Like" />
                        <b>1.2K</b>
                    </div>
                    <div className="interaction-container">
                        <img src={comment} alt="Like" />
                        <b>592</b>
                    </div>
                </div>
                <div className="singleBlog-author-section">
                    <img src={singleBlog?.author_image} alt="Author Image" />
                    <p>
                        {singleBlog?.author_name} | |{" "}
                        {singleBlog?.autor_designation}{" "}
                    </p>
                </div>
                <Row>
                    <Col sm="12" md="1">
                        <div className="singleBlog-social">
                            <div className="social-textcontainer">
                                <h4>
                                    30 <span> OCT 21</span>
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
            </Container>
        </div>
    );
};

export default SingleBlog;
