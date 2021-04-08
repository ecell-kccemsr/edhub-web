import React from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import star5 from "../../Images/landingpage/star5.png";

import "pure-react-carousel/dist/react-carousel.es.css";
const Testimonial = () => {
    return (
        <div className="landing-page-testimonial-section ">
            <p className="header-testimonials">
                Testimonials from our happy customers
            </p>
            <CarouselProvider
                naturalSlideWidth={80}
                naturalSlideHeight={30}
                totalSlides={4}
                visibleSlides={2}
                infinite={true}
            >
                <Slider>
                    <Slide index={0}>
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
                                    adipiscing elit. A fusce lacus non in
                                    tortor, libero do”
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={1}>
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
                                    adipiscing elit. A fusce lacus non in
                                    tortor, libero do”
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={2}>
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
                                    adipiscing elit. A fusce lacus non in
                                    tortor, libero do”
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={3}>
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
                                    adipiscing elit. A fusce lacus non in
                                    tortor, libero do”
                                </p>
                            </div>
                        </div>
                    </Slide>
                </Slider>
            </CarouselProvider>
        </div>
    );
};

export default Testimonial;
