import React, { useState, useEffect } from "react";
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
    return (
        <div className="landing-page-testimonial-section ">
            <p className="header-testimonials">
                Testimonials from our happy customers
            </p>
            <Slider {...settings}>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-slider-div">
                    <div className="course-detail-testimonial-cards-outer">
                        <img src={star5} alt="" className="review-stars" />
                        <div className="course-detail-testimonial-cards-inner">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt=""
                            />
                            <h6>Devika Olkar</h6>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A fusce lacus non in tortor,
                                libero do”
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Testimonial;
