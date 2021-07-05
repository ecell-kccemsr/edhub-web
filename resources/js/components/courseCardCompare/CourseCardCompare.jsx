import React from "react";
import { Link } from "react-router-dom";

import { useStoreActions, useStoreState } from "easy-peasy";
// import { Button } from "bootstrap";
const CourseCardCompare = ({ data }) => {
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
        if (isAlreadyInCompares === false && compares?.length > 2) {
            alert("Can't add more than 3 courses");
            return;
        } else {
            addToCompare(data);
        }
    };
    return (
        <>
            <div className="coursecard-section h-100">
                <Link to={`/courseDetail/${data?.slug}`}>
                    <img
                        src={data?.image}
                        className="card-header-img"
                        alt={data?.title}
                    />
                </Link>

                <div className="card-header-top">
                    {data?.discount_price == data?.price && (
                        <h5 style={{ fontWeight: "400" }}>
                            ₹ {data?.discount_price}
                        </h5>
                    )}
                </div>
                <div>
                    <Link to={`/courseDetail/${data?.slug}`}>
                        <h4 className="card-title">
                            {data?.title?.length > 40
                                ? data?.title.slice(0, 40) + "..."
                                : data?.title}
                        </h4>
                    </Link>

                    <div
                        className="compare-section"
                        onClick={() => handleCompare(data)}
                    >
                        <img
                            src="/images/courseCategory/addcompare.png"
                            alt="addcompare"
                        />
                        {isAlreadyInCompares === false ? (
                            <h5>Add to compare</h5>
                        ) : (
                            <h5>Remove from compare</h5>
                        )}
                    </div>

                    <hr />
                </div>
            </div>
        </>
    );
};

export default CourseCardCompare;
