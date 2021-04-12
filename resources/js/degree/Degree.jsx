import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, List, Button } from "reactstrap";
//Components
import CourseCard from "../components/course-card/CourseCard";
import DegreeHeroSection from "./DegreeComponents/DegreeHeroSection";
import DegreeDetail from "./DegreeComponents/DegreeDetail";
import DegreeBenefitSection from "./DegreeComponents/DegreeBenefitSection";
import DegreeInstructorSection from "./DegreeComponents/DegreeInstructorSection";
import DegreeAboutSection from "./DegreeComponents/DegreeAboutSection";
import DegreeTestimonialSection from "./DegreeComponents/DegreeTestimonialSection";
import DegreeFAQSection from "./DegreeComponents/DegreeFAQSection";
import DegreeRecommendedSection from "./DegreeComponents/DegreeRecommendedSection";

const faq = [
    {
        id: "d95d4514-538a-4b57-85d5-f9072dc80bef",
        question: "When will I have access to my course",
        answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
    },
    {
        id: "15536c59-30ab-430e-b857-d02b416dedc7",
        question: "When will I have access to my course",
        answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
    },
    {
        id: "f56739d4-fbea-46cb-b2db-5511b1d744a2",
        question: "When will I have access to my course",
        answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
    }
];

const userTestimonials = [
    {
        id: "1",
        name: "Abhishek Mogaveera",
        review:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fusce lacus non in tortor, libero do”"
    },
    {
        id: "2",
        name: "Abhishek Mogaveera",
        review:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fusce lacus non in tortor, libero do”"
    }
];

function CourseDetail() {
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
        <>
            <div className="degree-page-section">
                <DegreeHeroSection />

                <DegreeAboutSection />

                <DegreeDetail />

                <DegreeInstructorSection />

                <DegreeBenefitSection />

                <DegreeTestimonialSection userTestimonials={userTestimonials} />

                <DegreeFAQSection faq={faq} />

                <DegreeRecommendedSection course={course} />
            </div>
        </>
    );
}

export default CourseDetail;
