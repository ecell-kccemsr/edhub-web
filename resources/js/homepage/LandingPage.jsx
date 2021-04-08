import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "./landingPageComponents/HeroSection";
import PopularChoice from "./landingPageComponents/PopularChoice";
import HelpSection from "./landingPageComponents/HelpSection";
import Promotions from "./landingPageComponents/Promotions";
import Testimonial from "./landingPageComponents/Testimonial";

function LandingPage() {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        axios
            .get("/api/courses")
            .then(res => {
                setCourse(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div className="landing-page-section">
            <HeroSection />

            <HelpSection />

            <PopularChoice title="Popular Choices" />
            {/* <Row className="course-card-landing-page-row">
                {course.map(course => (
                    <Col sm="12" md="3" key={course?.id}>
                        <CourseCard data={course} />
                    </Col>
                ))}
            </Row> */}
            <PopularChoice title="Get Started With Free Courses" />

            {/* <Row className="course-card-landing-page-row">
                {course.map(course => (
                    <Col sm="12" md="3" key={course?.id}>
                        <CourseCard data={course} />
                    </Col>
                ))}
            </Row> */}
            <Promotions />

            <Testimonial />

            <PopularChoice title="Recommended for you" />
        </div>
    );
}

export default LandingPage;
