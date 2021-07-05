import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "../../components/course-card/CourseCard";
import TooltipComponent from "./TooltipComponent";

const SliderHomepage = ({ title, course_category_id, description }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateSize = () => setWindowWidth(window.innerWidth);
    useEffect(() => (window.onresize = updateSize), []);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (course_category_id) {
            axios
                .get(
                    `/api/courses?course_category_id=${course_category_id}&sugessted=1`
                )
                .then(res => {
                    setData(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [course_category_id]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth <= 1200 ? (windowWidth < 800 ? 1 : 2) : 4,
        slidesToScroll: 1
    };

    if (data.length == 0) {
        return <></>;
    }

    return (
        <>
            <div className="popular-choice-section">
                <h3 className="popular-choice-header">{title}</h3>
                <Row className=" popular-choice-sub-section">
                    <Col sm="12" md="6" lg="5">
                        <p className="popular-choice-content">{description}</p>
                    </Col>
                    <Col
                        sm="12"
                        md="6"
                        lg="5"
                        className="popular-choice-btn-container"
                    >
                        <Link to={`/course-category?q=${title}`}>
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

export default SliderHomepage;
