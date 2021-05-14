import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "../../components/course-card/CourseCard";
import TooltipComponent from "./TooltipComponent";

const PopularChoice = ({ title, data }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateSize = () => setWindowWidth(window.innerWidth);
    useEffect(() => (window.onresize = updateSize), []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth <= 1200 ? (windowWidth < 800 ? 1 : 2) : 4,
        slidesToScroll: 1
    };

    if(data.length==0){
        return <></>
    }
    
    return (
        <>
            <div className="popular-choice-section">
                <h3 className="popular-choice-header">{title}</h3>
                <Row className=" popular-choice-sub-section">
                    <Col sm="12" md="6" lg="5">
                        <p className="popular-choice-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Habitant volutpat elementum facilisi mattis
                            et. At
                        </p>
                    </Col>
                    <Col
                        sm="12"
                        md="6"
                        lg="5"
                        className="popular-choice-btn-container"
                    >
                        <Link to={`/course-category`}>
                            <Button className="popular-choice-btn">
                                View all
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
            <div className="landingpage-popular-card-carousel">
                <Slider {...settings}>
                    {data.map(course => (
                        <div className="carousel-slider-div" key={course?.id}>
                            <a data-tip data-for={course?.id.toString()}>
                                <CourseCard data={course} />
                            </a>

                            <TooltipComponent data={course} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default PopularChoice;
