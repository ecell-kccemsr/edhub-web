import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import cardTopImg from "../../Images/blogs/maincard-top-img.png";
import cardAuthor from "../../Images/blogs/card-author.png";
import insta from "../../Images/blogs/instagram.png";
import fb from "../../Images/blogs/facebook.png";
import tw from "../../Images/blogs/twitter.png";
import ld from "../../Images/blogs/linkedin.png";
import wa from "../../Images/blogs/whatsapp.png";
import tag from "../../Images/news/tag.png";
import { Link } from "react-router-dom";
const BlogCard = ({ tags, data, toUrl }) => {
    return (
        <div className="blog-main-card mb-2">
            <div className="blog-card-top-section">
                <Row>
                    <Col sm="12" md="6" lg="9">
                        <div className="blog-card-top-text-section">
                            <h6>#{data?.tags}</h6>
                            <Link to={toUrl || "#"} style={{ color: "black" }}>
                                <h4>{data?.title}</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col sm="12" md="6" lg="3">
                        <img src={data.image} alt="Card Image" />
                    </Col>
                </Row>
            </div>

            {data?.body && (
                <>
                    <p
                        style={{ color: "#585858", fontSize: "21px" }}
                        dangerouslySetInnerHTML={{
                            __html:
                                data?.body.length > 500
                                    ? data.body.slice(0, 500) + "..."
                                    : data?.body
                        }}
                    ></p>
                    <p style={{ marginBottom: "10px" }}>
                        <Link
                            to={toUrl || "#"}
                            style={{ color: "#ff0000", fontSize: "21px" }}
                        >
                            Read more
                        </Link>
                    </p>
                </>
            )}

            <div className="blog-card-footer-section">
                {tags && (
                    <div className="tag">
                        <img src={data?.author_image} alt="Tag Image" />
                        <h5>
                            {data?.author_name} | {data?.autor_designation}
                        </h5>
                    </div>
                )}

                <div className="blog-footer-social">
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}${toUrl}`}
                        target="_blank"
                    >
                        <img src={ld} alt="Linkedin" />
                    </a>
                    <a
                        href={`https://www.facebook.com/sharer.php?u=${window.location.href}${toUrl}`}
                        target="_blank"
                    >
                        {" "}
                        <img src={fb} alt="Facebook" />
                    </a>
                    <a
                        href={`https://twitter.com/intent/tweet?url=${window.location.href}${toUrl}`}
                        target="_blank"
                    >
                        {" "}
                        <img src={tw} alt="Twitter" />
                    </a>
                    <a
                        href={`https://api.whatsapp.com/send?text=${window.location.href}${toUrl}`}
                        target="_blank"
                    >
                        {" "}
                        <img src={wa} alt="Whatsapp" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
