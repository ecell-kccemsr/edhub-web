import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseCard from "../components/course-card/CourseCard";
import ProfileLayout from "./ProfileLayout";
function ProfileWishlist() {
    const [courseCategory, setCourseCategory] = useState([]);
    const [loadingCourses, setLoadingCourses] = useState(true);
    useEffect(() => {
        axios
            .get("/api/courses")
            .then(res => {
                setCourseCategory(res.data.data);
                setLoadingCourses(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <ProfileLayout>
            <h3 className="profile-title">Wishlist</h3>
            <div className="profile-section-1">
                <Row>
                    {loadingCourses && (
                        <Col sm="12" className="wishlist-profile-loading-col">
                            <h4>Loading Your Wishlist...</h4>
                        </Col>
                    )}
                    {!loadingCourses && (
                        <Col sm="12" className="wishlist-profile-loading-col">
                            <h4>You don't have any courses in wishlist !</h4>
                            <Link className="add-course-wishlist-btn" to="#">
                                Add Course
                            </Link>
                        </Col>
                    )}
                    {courseCategory &&
                        courseCategory.length > 0 &&
                        courseCategory.map(course => (
                            <Col sm="12" md="4" key={course?.id}>
                                <CourseCard data={course} />
                            </Col>
                        ))}
                </Row>
            </div>
        </ProfileLayout>
    );
}

export default ProfileWishlist;
