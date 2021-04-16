import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseCard from "../components/course-card/CourseCard";
import ProfileLayout from "./ProfileLayout";
import { useStoreActions, useStoreState } from "easy-peasy";
function ProfileWishlist() {
    const [courseCategory, setCourseCategory] = useState([]);
    const [loadingCourses, setLoadingCourses] = useState(true);
    const wishlist = useStoreState(state => state.wishlist);
    const addtoWishlist = useStoreActions(actions => actions.addtoWishlist);
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

                    {!loadingCourses && wishlist && wishlist.length == 0 && (
                        <h4>You don't have any courses in wishlist !</h4>
                    )}

                    {!loadingCourses &&
                        wishlist &&
                        wishlist.length > 0 &&
                        wishlist.map(course => (
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
