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
        console.log("landing");
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

            {course && <PopularChoice data={course} title="Popular Choices" />}
            {/* <Row className="course-card-landing-page-row">
                {course.map(course => (
                    <Col sm="12" md="3" key={course?.id}>
                        <CourseCard data={course} />
                    </Col>
                ))}
            </Row> */}
            {course && (
                <PopularChoice
                    data={course}
                    title="Get Started With Free Courses"
                />
            )}

            {/* <Row className="course-card-landing-page-row">
                {course.map(course => (
                    <Col sm="12" md="3" key={course?.id}>
                        <CourseCard data={course} />
                    </Col>
                ))}
            </Row> */}
            <Promotions />

            <Testimonial />

            {course && (
                <PopularChoice data={course} title="Recommended for you" />
            )}
        </div>
    );
}

export default LandingPage;
