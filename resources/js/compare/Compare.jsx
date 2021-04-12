import React from "react";
import star4 from "../Images/courseDetail/4star.png";
import courseDetailCompany from "../Images/courseDetail/courseDetailCompany.png";
import cardHeader from "../Images/compare/cardheader.png";
import { useStoreActions, useStoreState } from "easy-peasy";
const Compare = () => {
    const compares = useStoreState(state => state.compares);
    const addToCompare = useStoreActions(actions => actions.addToCompare);
    console.log("compares", compares);
    return (
        <>
            <div className="compare-section">
                <table>
                    <tr>
                        <td style={{ border: "none" }}>
                            <p className="compare-title">
                                <b>Compare</b>
                                <br /> UI/UX Design | How to design with
                                professional vs Seth Godin's Freelancer Course
                                vs Others
                            </p>
                        </td>
                        <td style={{ border: "none" }}>
                            <div className="compare-card">
                                <img src={cardHeader} alt="" />
                                <h5>
                                    UI/UX Design | How to design with
                                    professional
                                </h5>
                                <span>
                                    <b>FREE</b>
                                </span>
                                <span>
                                    $ <strike>250</strike>
                                </span>
                                <button> Buy Now</button>
                            </div>
                        </td>
                        <td style={{ border: "none" }}>
                            <div className="compare-card">
                                <img src={cardHeader} alt="" />
                                <h5>
                                    UI/UX Design | How to design with
                                    professional
                                </h5>
                                <span>
                                    <b>FREE</b>
                                </span>
                                <span>
                                    $ <strike>250</strike>
                                </span>
                                <button> Buy Now</button>
                            </div>
                        </td>
                        <td style={{ border: "none" }}>
                            <div className="compare-card">
                                <img src={cardHeader} alt="" />
                                <h5>
                                    UI/UX Design | How to design with
                                    professional
                                </h5>
                                <span>
                                    <b>FREE</b>
                                </span>
                                <span>
                                    $ <strike>250</strike>
                                </span>
                                <button> Buy Now</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="compare-title">Course Rating</p>
                        </td>
                        <td>
                            <div style={{ display: "flex" }}>
                                <img src={star4} alt="" />
                                <p>5.0</p>
                            </div>
                        </td>
                        <td>
                            <div style={{ display: "flex" }}>
                                <img src={star4} alt="" />
                                <p>5.0</p>
                            </div>
                        </td>
                        <td>
                            <div style={{ display: "flex" }}>
                                <img src={star4} alt="" />
                                <p>5.0</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="compare-title">Course By</p>
                        </td>
                        <td>
                            <img src={courseDetailCompany} alt="" />
                        </td>
                        <td>
                            <img src={courseDetailCompany} alt="" />
                        </td>
                        <td>
                            <img src={courseDetailCompany} alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="compare-title">Job Oportunities</p>
                        </td>
                        <td>
                            <p>Web Developer</p>
                        </td>
                        <td>
                            <p>Web Developer</p>
                        </td>
                        <td>
                            <p>Web Developer</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="compare-title">
                                Skills You will gain
                            </p>
                        </td>
                        <td>
                            <p>Figma Adobe XD</p>
                        </td>
                        <td>
                            <p>Figma Adobe XD</p>
                        </td>
                        <td>
                            <p>Figma Adobe XD</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="compare-title">Certification</p>
                        </td>
                        <td>
                            <p>Yes</p>
                        </td>
                        <td>
                            <p>Yes</p>
                        </td>
                        <td>
                            <p>Yes</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="compare-title">Prerequisites</p>
                        </td>
                        <td>
                            <p>Install figma and Adobe XD</p>
                        </td>
                        <td>
                            <p>Install figma and Adobe XD</p>
                        </td>
                        <td>
                            <p>Install figma and Adobe XD</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="compare-title">Instructor</p>
                        </td>
                        <td>
                            <p>Raj Sharma </p>
                        </td>
                        <td>
                            <p>Raj Sharma </p>
                        </td>
                        <td>
                            <p>Raj Sharma </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="compare-title">Top Review</p>
                        </td>
                        <td>
                            <p>Raj Sharma </p>
                            <button className="compare-buy-btn">
                                {" "}
                                Buy Now
                            </button>
                            <button className="compare-addCart-btn">
                                {" "}
                                Add To Cart
                            </button>
                        </td>
                        <td>
                            <p>Raj Sharma </p>
                            <button className="compare-buy-btn">
                                {" "}
                                Buy Now
                            </button>
                            <button className="compare-addCart-btn">
                                {" "}
                                Add To Cart
                            </button>
                        </td>
                        <td>
                            <p>Raj Sharma </p>
                            <button className="compare-buy-btn">
                                {" "}
                                Buy Now
                            </button>
                            <button className="compare-addCart-btn">
                                {" "}
                                Add To Cart
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default Compare;
