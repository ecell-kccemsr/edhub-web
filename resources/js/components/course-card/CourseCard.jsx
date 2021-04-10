import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cardHeader from "../../Images/courseCategory/cardHeader.png";
import cardHeaderCompany from "../../Images/courseCategory/card-header-company.png";
import play from "../../Images/courseCategory/play.png";
import guide from "../../Images/courseCategory/guide.png";
import star from "../../Images/courseCategory/star.png";
import reviewArrow from "../../Images/courseCategory/reviewArrow.png";
import addtoCompare from "../../Images/courseCategory/addcompare.png";
const CourseCard = ({ data }) => {
    const [reviews, setReviews] = useState([]);
    if (data) {
        useEffect(() => {
            axios
                .get(`/api/courses/${data.id}/reviews`)
                .then(res => {
                    console.log(res);
                    setReviews(res.data.data[0]);
                })
                .catch(err => {
                    console.log(err);
                });
        }, []);
    }

    return (
        <>
            <div className="coursecard-section h-100">
                <img
                    src={data?.image}
                    className="card-header-img"
                    alt="card header image"
                />
                <div className="card-header-top">
                    <div>
                        <img
                            src={data?.course_provider.image}
                            alt=""
                            style={{ height: "25px" }}
                        />
                    </div>

                    <h5>Free</h5>
                    <h5 style={{ fontWeight: "400" }}>
                        $ <strike>{data?.price}</strike>
                    </h5>
                </div>
                <div>
                    <h4 className="card-title">{data?.title}</h4>
                    <div className="card-overview">
                        <div>
                            <img src={play} alt="" />
                            <p>20 Lessons</p>
                        </div>
                        <div>
                            <img src={guide} alt="" />
                            <p>Guided Course</p>
                        </div>
                    </div>
                    <div className="compare-section">
                        <img src={addtoCompare} alt="" />
                        <h5>Add to compare</h5>
                    </div>
                    <hr />
                </div>

                <div className="coursecard-footer">
                    <div>
                        <img src={star} alt="" />
                        <p>{reviews?.rating} Reviews</p>
                    </div>
                    <Link 
                    to={`/courseDetail/${data?.slug}`}
                    >
                     <img src={reviewArrow} alt="" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CourseCard;
