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
            .get(`/api/courses?&sugessted=1`)
            .then(res => {
                setCourse(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (searchText != "") {
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
            {/* <SliderHomepage
                title="Development"
                description="Learn top-rated courses like AI, ML, Programming, data analysis, DevOps from experts."
                course_category_id={1}
            /> */}
            <SliderHomepage
                title="Business"
                description="Learn top-rated courses like Entrepreneurship, Project Management, Business analytics & Intelligence from experts."
                course_category_id={2}
            />
            {/* <SliderHomepage title="Finance and Accounting" course_category_id={3} /> */}
            <SliderHomepage
                title="IT & Software"
                description="Learn top-rated courses like Network & Security, Operating Systems, AWS, Hardware from experts."
                course_category_id={4}
            />
            <SliderHomepage
                title="Office Productivity"
                description="Learn top-rated Office Productivity courses in Apple, Microsoft, Google, SAP, Oracle from experts"
                course_category_id={5}
            />
            {/* <SliderHomepage title="Personal Development" description="Learn top-rated courses like Web Design, Game Design, 3D & Animation, Fashion Design from experts." course_category_id={6} /> */}
            {/* <SliderHomepage title="Design" description="Learn top-rated courses like Web Design, Game Design, 3D & Animation, Fashion Design from experts." course_category_id={7} /> */}
            <SliderHomepage
                title="Marketing"
                description="Learn top-rated courses like Digital Marketing, SEO, Branding, SMM, Affiliate Marketing  from experts."
                course_category_id={8}
            />

            {/* {course && (
                <PopularChoice
                    data={course}
                    title="Get Started With Free Courses"
                />
            )} */}

            <Promotions />

            <Testimonial />

            {course && (
                <PopularChoice
                    data={course}
                    title="Popular Choices"
                    description="Explore what most students have enrolled for. "
                />
            )}
        </div>
    );
}

export default LandingPage;
