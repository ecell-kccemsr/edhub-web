import React from "react";
import { Container, Row, Col } from "reactstrap";
import cardTopImg from "../../Images/blogs/maincard-top-img.png";
import cardAuthor from "../../Images/blogs/card-author.png";
import insta from "../../Images/blogs/instagram.png";
import fb from "../../Images/blogs/facebook.png";
import tw from "../../Images/blogs/twitter.png";
import ld from "../../Images/blogs/linkedin.png";
import wa from "../../Images/blogs/whatsapp.png";
import tag from "../../Images/news/tag.png";

const BlogCard = ({ tags }) => {
    return (
        <div className="blog-main-card">
            <div className="blog-card-top-section">
                <Row>
                    <Col sm="12" md="6" lg="9">
                        <div className="blog-card-top-text-section">
                            <h6>#MARKETING</h6>
                            <h4>
                                Organic Marketing And Modern Marketing, What’s
                                The Relation?
                            </h4>
                        </div>
                    </Col>
                    <Col sm="12" md="6" lg="3">
                        <img src={cardTopImg} alt="Card Image" />
                    </Col>
                </Row>
            </div>
            <p>
                Amid the rising coronavirus COVID-19 cases in Mumbai and other
                parts of Maharashtra, state Health Minister Rajesh Tope on
                Sunday said that Chief Minister Uddhav Thackeray is likely to
                take a final decision on reimposing lockdown after a cabinet
                meeting on April 14.
            </p>
            <div className="blog-card-footer-section">
                {tags && (
                    <div className="tag">
                        <img src={tag} alt="Tag Image" />
                        <span>#MUMBAI</span>
                    </div>
                )}
                {!tags && (
                    <div className="blog-footer-author-section">
                        <img src={cardAuthor} alt="Card Author" />
                        <p>mkhuhbkjb| Marketing manager </p>
                    </div>
                )}
                <div className="blog-footer-social">
                    <img src={insta} alt="Insta" />
                    <img src={ld} alt="Linkedin" />
                    <img src={fb} alt="Facebook" />
                    <img src={tw} alt="Twitter" />
                    <img src={wa} alt="Whatsapp" />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
