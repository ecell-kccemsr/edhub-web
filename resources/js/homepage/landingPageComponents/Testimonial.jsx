import React, { useState, useEffect } from "react";
import axios from "axios";

import Slider from "react-slick";
import star5 from "../../Images/landingpage/star5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateSize = () => setWindowWidth(window.innerWidth);
    useEffect(() => (window.onresize = updateSize), []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth <= 1200 ? 1 : 2,
        slidesToScroll: 1
    };
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        axios
            .get("/api/testimonies")
            .then(res => {
                setTestimonial(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div className="landing-page-testimonial-section ">
            <p className="header-testimonials">
                Testimonials from our happy customers
            </p>
            <Slider {...settings}>
                {testimonial &&
                    testimonial.map(testimonials => (
                        <div className="carousel-slider-div">
                            <div className="course-detail-testimonial-cards-outer">
                                <>
                                    <img
                                        src={star5}
                                        alt=""
                                        className="review-stars"
                                    />
                                    <div className="course-detail-testimonial-cards-inner">
                                        <img src={testimonials.image} alt="" />
                                        <h6>{testimonials.name}</h6>
                                        <p>“{testimonials.review}”</p>
                                    </div>
                                </>
                            </div>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
