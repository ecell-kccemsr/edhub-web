import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
//Components
import HeroSection from "./landingPageComponents/HeroSection";
import PopularChoice from "./landingPageComponents/PopularChoice";
import HelpSection from "./landingPageComponents/HelpSection";
import Promotions from "./landingPageComponents/Promotions";
import Testimonial from "./landingPageComponents/Testimonial";
import SliderHomepage from "./landingPageComponents/SliderHomepage";
function LandingPage() {
    const [course, setCourse] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [redirectToCourse, setRedirect] = useState(false);
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

    const handleSubmit = e => {
        e.preventDefault();
        if(searchText!=""){
            setRedirect(true);
        }
    };
    const handleChange = e => {
        setSearchText(e.target.value);
    };

    if (redirectToCourse) {
        return <Redirect to={`/course-category?q=${searchText}`} />;
    }
    return (
        <div className="landing-page-section">
            <HeroSection
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <HelpSection />

            {/* {course && <PopularChoice data={course} title="Popular Choices" />} */}
            <SliderHomepage title="Computer Science" course_category_id={1} />
            <SliderHomepage title="Business" course_category_id={2} />
            {/* <SliderHomepage title="Finance and Accounting" course_category_id={3} /> */}
            <SliderHomepage title="IT & Software" course_category_id={4} />
            <SliderHomepage title="Office Productivity" course_category_id={5} />
            <SliderHomepage title="Personal Development" course_category_id={6} />
            <SliderHomepage title="Design" course_category_id={7} />
            <SliderHomepage title="Marketing" course_category_id={8} />


        
            {/* {course && (
                <PopularChoice
                    data={course}
                    title="Get Started With Free Courses"
                />
            )} */}

            <Promotions />

            <Testimonial />

            {course && (
                <PopularChoice data={course} title="Expand your career opportunities with Us" />
            )}
        </div>
    );
}

export default LandingPage;
