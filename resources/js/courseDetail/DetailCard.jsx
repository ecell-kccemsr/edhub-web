import React from "react";

const DetailCard = ({ singleCourse }) => {
    return (
        <div className="add-to-cart-section-details">
            {!singleCourse?.image && (
                <img
                    style={{ marginBottom: "5px", objectFit: "contain" }}
                    src="https://i.stack.imgur.com/h6viz.gif"
                    className="card-header-image-details"
                    alt="d"
                />
            )}
            {singleCourse?.image && (
                <img
                    style={{ marginBottom: "5px" }}
                    src={singleCourse?.image}
                    className="card-header-image-details"
                    alt={singleCourse?.title}
                />
            )}
            <div className="card-section-details-content">
                <div className="card-section-details-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        {/* {singleCourse?.discount_price!=singleCourse?.price
                       && (
                           <>
                            {singleCourse?.discount_price && (
                                    <h5>₹{singleCourse?.discount_price}/-</h5>
                                )}
                                {singleCourse?.price && (
                                    <p style={{color: "#7B7B7B",padding: "17px"}}>
                                        <strike>₹{singleCourse?.price}</strike>
                                    </p>
                                )}
                                {singleCourse?.discount_price &&
                                    singleCourse?.price && (
                                    <p style={{color:"#7B7B7B",padding: "17px"}}>
                                            {`${Math.round(100 -(singleCourse?.discount_price *100) /singleCourse?.price)} % off`}
                                        </p>
                                    )}
                           </>
                       )
                   } */}
                        <h5>₹{singleCourse?.price}/-</h5>
                        {/* {
                       singleCourse?.price==singleCourse?.discount_price && (
                           <>
                            {singleCourse?.discount_price && (
                                    <h5>₹{singleCourse?.discount_price}/-</h5>
                                )}
                           </>
                       )
                   } */}
                    </div>
                </div>
                <div>
                    {singleCourse?.rating <= 0 ? (
                        <img src="/images/star0.png" alt="Star" />
                    ) : singleCourse?.rating <= 1 ? (
                        <img src="/images/star1.png" alt="Star" />
                    ) : singleCourse?.rating <= 2 ? (
                        <img src="/images/star2.png" alt="Star" />
                    ) : singleCourse?.rating <= 3 ? (
                        <img src="/images/star3.png" alt="Star" />
                    ) : singleCourse?.rating <= 4 ? (
                        <img src="/images/star4.png" alt="Star" />
                    ) : (
                        <img src="/images/star5.png" alt="Star" />
                    )}
                </div>
                <div className="card-section-details-content-price">
                    <div>
                        {singleCourse.course_instructor &&
                            singleCourse.course_instructor.length > 0 &&
                            singleCourse.course_instructor.map(
                                courseinstructor => (
                                    <h5>{courseinstructor?.name}</h5>
                                )
                            )}
                        <p style={{ color: "#818181" }}>Course provided by:</p>
                        {singleCourse?.course_provider?.image && (
                            <div className="course-provider">
                                <img
                                    src={singleCourse?.course_provider?.image}
                                    alt="course_provider"
                                    style={{
                                        height: "30px",
                                        padding: "1px",
                                        width: "100px"
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="card-section-details-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        <img
                            src="/images/courseDetail/Ellipse.png"
                            alt="ellipse"
                            style={{
                                margin: "5px 11px 23px 0px"
                            }}
                        />
                        <h6>Full time access</h6>
                    </div>
                </div>
                <div className="card-section-details-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        <img
                            src="/images/courseDetail/Ellipse.png"
                            alt="ellipse"
                            style={{
                                margin: "5px 11px 23px 0px"
                            }}
                        />
                        <h6>Mentored Course</h6>
                    </div>
                </div>
                <div className="card-section-details-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        <img
                            src="/images/courseDetail/Ellipse.png"
                            alt="ellipse"
                            style={{
                                margin: "5px 11px 23px 0px"
                            }}
                        />
                        <h6>22.5 hrs Total</h6>
                    </div>
                </div>
                <div className="card-section-details-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        <img
                            src="/images/courseDetail/Ellipse.png"
                            alt="ellipse"
                            style={{
                                margin: "5px 11px 23px 0px"
                            }}
                        />
                        <h6>24/7 Support</h6>
                    </div>
                </div>
                <div className="card-section-details-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        <img
                            src="/images/courseDetail/Ellipse.png"
                            alt="ellipse"
                            style={{
                                margin: "5px 11px 23px 0px"
                            }}
                        />
                        <h6>Watch on desktop, laptop</h6>
                    </div>
                </div>
            </div>
            <div>
                <a
                    href={singleCourse?.url}
                    target="_blank"
                    className="card-section-details-buy-btn"
                >
                    Go To Class
                </a>
            </div>
        </div>
    );
};

export default DetailCard;
