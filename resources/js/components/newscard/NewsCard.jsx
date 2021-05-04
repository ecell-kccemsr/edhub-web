import React from "react";
import { Row, Col } from "reactstrap";
import fb from "../../Images/blogs/facebook.png";
import tw from "../../Images/blogs/twitter.png";
import ld from "../../Images/blogs/linkedin.png";
import wa from "../../Images/blogs/whatsapp.png";
import { Link } from "react-router-dom";
const NewsCard = ({ tags, data, toUrl }) => {
    return (
        <div className="blog-main-card mb-2">
            <div className="blog-card-top-section">
                <Row>
                    <Col sm="12" md="6" lg="9">
                        <div className="blog-card-top-text-section">
                            <h6>#{data?.category?.name}</h6>
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
            {data?.description && (
                <>
                    <p>
                        {data?.description.length > 180
                            ? data?.description.slice(0, 180) + "..."
                            : data?.description}
                    </p>
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
            {data?.body && (
                <>
                    <p
                        dangerouslySetInnerHTML={{
                            __html:
                                data?.body.length > 300
                                    ? data.body.slice(0, 300) + "..."
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
                {data && (
                    <div className="tag">
                        <p>#{data?.tags}</p>
                    </div>
                )}

                <div className="blog-footer-social">
                <div className="social-container">
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
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
