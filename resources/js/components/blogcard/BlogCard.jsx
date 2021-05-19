import React, {  } from "react";
import { Row, Col } from "reactstrap";
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
                                data?.body.length > 280
                                    ? data.body.slice(0, 280) + "..."
                                    : data?.body
                        }}
                    ></p>
                    <span >
                        <Link
                            to={toUrl || "#"}
                            style={{ color: "#F05454", fontSize: "16px" }}
                        >
                            Read more
                        </Link>
                    </span>
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

                    {!tags && (
                       <div className="blog-footer-author-section">
                        <img src={data?.author_image} alt="Author Image" />
                        <p>
                            {data?.author_name} | {data?.autor_designation}
                        </p>
                    </div>
                )}

                <div className="blog-footer-social">
                <div className="social-container">

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
                                    
                                    <i className="fab fa-facebook" style={{color:"#3C5A99"}}></i>
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                                    target="_blank"
                                >
                                    
                                    <i className="fab fa-twitter" style={{color:"#1DA1F2"}}></i>
                                </a>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                                    target="_blank"
                                >
                                    
                                    <i className="fab fa-whatsapp" style={{color:"#49C858"}}></i>
                                </a>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
