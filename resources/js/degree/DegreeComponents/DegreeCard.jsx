import React from "react";


const DegreeCard = () => {
    return (
        <div className="degree-main-card-section">
            <button className="degree-bookmark-button">
                <img src="/Images/degree/bookmark1.png" alt="Bookmark" />
            </button>
            <img src="/Images/degree/cardheader.png" className="degreecard-header-image" alt="cardheader" />
            <img src="/Images/degree/star.png" alt="Degree Rating" />
            <div className="card-section-degree-content">
                <div className="degreecard-container">
                    <div className="degreecard-maintitle">
                        <img src="/Images/degree/Ellipse.png" alt="ellipse" />
                        <h5>$25000 /-</h5>
                    </div>

                    <h6 className="degreecard-subtitle">EMI Available*</h6>
                    <p>
                        Get
                        <strong> 5% extra cashback </strong>
                        if you buy through us
                    </p>
                </div>
                <div className="degreecard-container">
                    <div className="degreecard-maintitle">
                        <img
                            src="/Images/degree/Ellipse.png"
                            alt="ellipse"
                            style={{
                                margin: "5px 11px 23px 0px"
                            }}
                        />
                        <h5>April 5, 2021</h5>
                    </div>

                    <h6 className="degreecard-subtitle">Start Date</h6>
                </div>
                <div className="degreecard-container">
                    <div className="degreecard-maintitle">
                        <img src="/Images/degree/Ellipse.png" alt="ellipse" />
                        <h5>8 Months*</h5>
                    </div>

                    <h6 className="degreecard-subtitle">programme Duration</h6>
                </div>
                <div className="degreecard-container">
                    <div className="degreecard-maintitle">
                        <img src="/Images/degree/Ellipse.png" alt="ellipse" />
                        <h5>Online Bootcamp</h5>
                    </div>

                    <h6 className="degreecard-subtitle">Learning format</h6>
                </div>
            </div>
            <div className="card-section-degree-footer">
                <button className="apply-button">Buy Now</button>
                <button className="cart-btn">Add To Cart</button>
            </div>
        </div>
    );
};

export default DegreeCard;
