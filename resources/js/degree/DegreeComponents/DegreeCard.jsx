import React from "react";

import star from "../../Images/courseCategory/star.png";
import ellipse from "../../Images/degree/Ellipse.png";
const DegreeCard = () => {
    return (
        <div className="add-to-cart-section-degree">
            <img
                src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
                className="card-header-image-degree"
            />
            <div>
                <div>
                    <img src={star} alt="" />
                </div>
            </div>
            <div className="card-section-degree-content">
                <div className="card-section-degree-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        <img
                            src={ellipse}
                            alt="ellipse"
                            className="ellipse-degree"
                        />
                        <h5>$25000 /-</h5>
                    </div>

                    <h6>EMI Available*</h6>
                    <p>
                        Get
                        <strong> 5% extra cashback</strong>
                        if you buy through us
                    </p>
                </div>
                <div className="card-section-degree-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        <img
                            src={ellipse}
                            alt="ellipse"
                            style={{
                                margin: "5px 11px 23px 0px"
                            }}
                            className="ellipse-degree"
                        />
                        <h5>April 5, 2021</h5>
                    </div>

                    <h6>Start Date</h6>
                </div>
                <div className="card-section-degree-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        <img
                            src={ellipse}
                            alt="ellipse"
                            className="ellipse-degree"
                        />
                        <h5>8 Months*</h5>
                    </div>

                    <h6>programme Duration</h6>
                </div>
                <div className="card-section-degree-content-price">
                    <div
                        style={{
                            display: "flex",
                            marginBottom: "-10px"
                        }}
                    >
                        <img
                            src={ellipse}
                            alt="ellipse"
                            className="ellipse-degree"
                        />
                        <h5>Online Bootcamp</h5>
                    </div>

                    <h6>Learning format</h6>
                </div>
            </div>
            <div>
                <button className="card-section-degree-buy-btn">Buy Now</button>
                <button className="card-section-degree-addCart-btn">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default DegreeCard;
