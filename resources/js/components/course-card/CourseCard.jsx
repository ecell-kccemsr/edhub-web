import React from "react";
import cardHeader from "../../Images/courseCategory/cardHeader.png";
import cardHeaderCompany from "../../Images/courseCategory/card-header-company.png";
import play from "../../Images/courseCategory/play.png";
import guide from "../../Images/courseCategory/guide.png";
import star from "../../Images/courseCategory/star.png";
import reviewArrow from "../../Images/courseCategory/reviewArrow.png";
import addtoCompare from "../../Images/courseCategory/addcompare.png";
const CourseCard = props => {
    return (
        <>
            <div className="coursecard-section">
                <img
                    src={cardHeader}
                    className="card-header-img"
                    alt="card header image"
                />
                <div className="card-header-top">
                    <img src={cardHeaderCompany} alt="" />
                    <h5>Free</h5>
                    <h5 style={{ fontWeight: "400" }}>
                        $ <strike>250</strike>
                    </h5>
                </div>
                <h4 className="card-title">
                    UI/UX Design | How to design with professional
                </h4>
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
                <div className="coursecard-footer">
                    <div>
                        <img src={star} alt="" />
                        <p>32 Reviews</p>
                    </div>
                    <img src={reviewArrow} alt="" />
                </div>
            </div>
        </>
    );
};

export default CourseCard;
