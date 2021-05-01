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
    console.log(data);
    return (
        <div className="blog-main-card mb-2">
            <div className="blog-card-top-section">
                <Row>
                    <Col sm="12" md="6" lg="9">
                        <div className="blog-card-top-text-section">
                            <h6>#MARKETING</h6>
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
            {/* {data?.description && (
                <>
                <p>
                    {data?.description.length > 180
                        ? data?.description.slice(0, 180) + "..." 
                        : data?.description}
                </p>
              
               
                </>
               
            )} */}
            {data?.body && (
                <>
                
                     <p
                    dangerouslySetInnerHTML={{
                        __html:
                            data?.body.length > 300
                                ? data.body.slice(0, 300) + "..." 
                                : data?.body
                    }}
                > 
                
                 </p>
                 <p style={{marginBottom:"10px"}}> 
                    <Link  to={toUrl || "#"} style={{ color: "#ff0000",fontSize:"21px"}}>
                    Read more
                    </Link>
                    </p> 
                  
               
                </>
            )}

            <div className="blog-card-footer-section">
                {tags && (
                    <div className="tag">
                        <img src={data?.author_image} alt="Tag Image" />
                        <p>{data?.author_name} | {data?.autor_designation}</p>
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
