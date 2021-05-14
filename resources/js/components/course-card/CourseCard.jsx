import React, {  } from "react";
import { Link } from "react-router-dom";

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
                    <img src="/images/landingpage/bookmark.png" alt="bookmark" />
                ) : (
                    <img
                        src="/images/landingpage/bookmark2.png"
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
                            <img src="/images/courseCategory/play.png" alt="play" />
                            <p>20 Lessons</p>
                        </div>
                        <div>
                            <img src="/images/courseCategory/guide.png" alt="guide" />
                            <p>Guided Course</p>
                        </div>
                    </div>
                    <div
                        className="compare-section"
                        onClick={() => handleCompare(data)}
                    >
                        <img src="/images/courseCategory/addcompare.png" alt="addcompare" />
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
                    {
                        data?.rating <= 1
                        ?  <img
                            src="/images/courseDetail/1star.png"
                            alt="Star"
                        />
                        : data?.rating <= 2
                        ? <img
                            src="/images/courseDetail/2star.png"
                            alt="Star"
                        />
                        : data?.rating <= 3
                        ?  <img
                            src="/images/courseDetail/3star.png"
                            alt="Star"
                        />
                        : data?.rating <= 4
                        ?  <img
                            src="/images/courseDetail/4star.png"
                            alt="Star"
                        />
                        : <img
                            src="/images/courseDetail/5star.png"
                            alt="Star"
                        />
                }
                        <p>
                        <b style={{color:"#EAD628"}}>{Math.ceil(data?.rating)}</b>
                         </p>
                    </div>
                    <Link to={`/courseDetail/${data?.slug}`}>
                        <img src="/images/courseCategory/reviewArrow.png" alt="reviewArrow" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CourseCard;
