import React, { useState, useEffect } from "react";
import { Container, Row, Col, List } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import instructor from "../../Images/degree/instructor.png";
import instructorDot from "../../Images/degree/instructor-dot.png";
import { divide } from "lodash";
const DegreeInstructorSection = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateSize = () => setWindowWidth(window.innerWidth);
    useEffect(() => (window.onresize = updateSize), []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth <= 900 ? 1 : 2,
        slidesToScroll: 2
    };

    const dummyInstructorData = [
        {
            name: "Dr. ytyct vktuv",
            designation:
                "web developer,Digital Marketer, Business Expert and Teacher",
            overview: [
                "4.2 Instructor Rating",
                "5,680 Reviews",
                "73,742 Students",
                "4.2 Instructor Rating",
                "5,680 Reviews",
                "73,742 Students"
            ]
        },
        {
            name: "Dr. ytyct vktuv",
            designation:
                "web developer,Digital Marketer, Business Expert and Teacher",
            overview: [
                "4.2 Instructor Rating",
                "5,680 Reviews",
                "73,742 Students",
                "4.2 Instructor Rating",
                "5,680 Reviews",
                "73,742 Students"
            ]
        },
        {
            name: "Dr. ytyct vktuv",
            designation:
                "web developer,Digital Marketer, Business Expert and Teacher",
            overview: [
                "4.2 Instructor Rating",
                "5,680 Reviews",
                "73,742 Students",
                "4.2 Instructor Rating",
                "5,680 Reviews",
                "73,742 Students"
            ]
        },
        {
            name: "Dr. ytyct vktuv",
            designation:
                "web developer,Digital Marketer, Business Expert and Teacher",
            overview: [
                "4.2 Instructor Rating",
                "5,680 Reviews",
                "73,742 Students",
                "4.2 Instructor Rating",
                "5,680 Reviews",
                "73,742 Students"
            ]
        }
    ];
    return (
        <>
            <Container className="containerClass">
                <Row>
                    <Col sm="12" md="8">
                        <div className="degree-instructor-section">
                            <h6 id="Instructors">Instructors</h6>

                            <>
                                <Slider {...settings}>
                                    {dummyInstructorData &&
                                        dummyInstructorData.map(i => (
                                            <div className="degreecarousel-slider-div">
                                                <div className="degree-instructor-card">
                                                    <div className="d-flex justify-content-center mb-3">
                                                        <img
                                                            src={instructor}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <h5>{i?.name}</h5>
                                                    <span>
                                                        {i?.designation}
                                                    </span>
                                                    <List type="unstyled">
                                                        {i?.overview &&
                                                            i?.overview.map(
                                                                overview => (
                                                                    <li className="degreeinstructor-overview-list">
                                                                        <img
                                                                            src={
                                                                                instructorDot
                                                                            }
                                                                            alt=""
                                                                            className="degree-instructor-dot-img"
                                                                        />
                                                                        <span className="instructor-overview-span">
                                                                            {
                                                                                overview
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}
                                                    </List>
                                                </div>
                                            </div>
                                        ))}
                                </Slider>
                            </>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DegreeInstructorSection;
