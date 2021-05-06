import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cardHeader from "../../Images/courseCategory/cardHeader.png";
import cardHeaderCompany from "../../Images/courseCategory/card-header-company.png";
import play from "../../Images/courseCategory/play.png";
import guide from "../../Images/courseCategory/guide.png";
import star from "../../Images/courseCategory/star.png";
import reviewArrow from "../../Images/courseCategory/reviewArrow.png";
import bookmark from "../../Images/landingpage/bookmark.png";
import bookmark1 from "../../Images/landingpage/bookmark2.png";
import { Row, Col, Button } from "reactstrap";

import addtoCompare from "../../Images/courseCategory/addcompare.png";
import { useStoreActions, useStoreState } from "easy-peasy";
// import { Button } from "bootstrap";
const CourseCard = ({ data }) => {
    const compares = useStoreState(state => state.compares);
    const addToCompare = useStoreActions(actions => actions.addToCompare);
    const wishlist = useStoreState(state => state.wishlist);
    const addtoWishlist = useStoreActions(actions => actions.addtoWishlist);

    const isAlreadyInCompares =
        compares.findIndex(course => course.id === data.id) !== -1;
    const isAlreadyInWishlist =
        wishlist.findIndex(course => course.id === data.id) !== -1;

    const handleWishlist = data => {
        addtoWishlist(data);
    };

    const handleCompare = data => {
        if (isAlreadyInCompares === false && compares.length > 2) {
            alert("Can't add more than 3 courses");
            return;
        } else {
            addToCompare(data);
        }
    };

    return (
        <>
            <button
                className="wishlist-section"
                onClick={() => handleWishlist(data)}
            >
                {isAlreadyInWishlist === false ? (
                    <img src="/Images/landingpage/bookmark.png" alt="bookmark" />
                ) : (
                    <img
                        src="/Images/landingpage/bookmark2.png"
                        alt="bookmark"
                        className="wishlist-section-bookmark1"
                    />
                )}
            </button>
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
                            alt="course-provider"
                            style={{ height: "25px" }}
                        />
                    </div>

                    <h5 style={{ fontWeight: "400" }}>
                        ₹ {data?.discount_price}
                        &nbsp; ₹ <strike>{data?.price}</strike>
                    </h5>
                </div>
                <div>
                    <h4 className="card-title">
                    {data?.title
                       .length > 40
                       ? data?.title.slice(
                             0,
                             40
                         ) + "..."
                       : data?.title}
                        </h4>
                    <div className="card-overview">
                        <div>
                            <img src="/Images/courseCategory/play.png" alt="play" />
                            <p>20 Lessons</p>
                        </div>
                        <div>
                            <img src="/Images/courseCategory/guide.png" alt="guide" />
                            <p>Guided Course</p>
                        </div>
                    </div>
                    <div
                        className="compare-section"
                        onClick={() => handleCompare(data)}
                    >
                        <img src="/Images/courseCategory/addcompare.png" alt="addcompare" />
                        {isAlreadyInCompares === false ? (
                            <h5>Add to compare</h5>
                        ) : (
                            <h5>Remove from compare</h5>
                        )}
                    </div>

                    <hr />
                </div>

                <div className="coursecard-footer">
                    <div>
                        <img src="/Images/courseCategory/star.png" alt="star" />
                        <p>
                        {
                         Math.round(parseFloat
                            (
                                data?.rating 
                            )
                            )

                       }
                                {" "}
                         Reviews</p>
                    </div>
                    <Link to={`/courseDetail/${data?.slug}`}>
                        <img src="/Images/courseCategory/reviewArrow.png" alt="reviewArrow" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CourseCard;
