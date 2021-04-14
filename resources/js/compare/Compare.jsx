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
                    <tbody>
                        <tr>
                            <td style={{ border: "none" }}>
                                <p className="compare-title">
                                    <b>Compare</b>
                                    <br /> UI/UX Design | How to design with
                                    professional vs Seth Godin's Freelancer
                                    Course vs Others
                                </p>
                            </td>
                            {compares &&
                                compares.map(cmp => {
                                    return (
                                        <td style={{ border: "none" }}>
                                            <div className="compare-card">
                                                <img
                                                    src={
                                                        cmp?.image || cardHeader
                                                    }
                                                    alt=""
                                                    style={{
                                                        maxWidth: "250px"
                                                    }}
                                                />
                                                <h5>{cmp?.title}</h5>
                                                <span>
                                                    <b>FREE</b>
                                                </span>
                                                <span>
                                                    ${" "}
                                                    <strike>
                                                        {cmp?.price}
                                                    </strike>
                                                </span>
                                                <button> Buy Now</button>
                                            </div>
                                        </td>
                                    );
                                })}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">Course Rating</p>
                            </td>
                            {compares.map((compare, key) => {
                                return (
                                    <td key={key}>
                                        <div style={{ display: "flex" }}>
                                            <img
                                                src={star4}
                                                alt=""
                                                style={{ objectFit: "contain" }}
                                            />
                                            <p>{compare.rating}</p>
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">Course By</p>
                            </td>
                            {compares.map((compare, key) => {
                                return (
                                    <td key={key}>
                                        <img
                                            src={compare.course_provider.image}
                                            alt=""
                                            className="compare-course-by-image"
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">
                                    Job Oportunities
                                </p>
                            </td>
                            {compares.map((compare, key) => {
                                if (compare.prerequisites) {
                                    return (
                                        <td key={key}>
                                            <p>{compare.job_opportunities}</p>
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td key={key}>
                                            <p>No Job job opportunities</p>
                                        </td>
                                    );
                                }
                            })}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">
                                    Skills You will gain
                                </p>
                            </td>
                            {compares.map((compare, key) => {
                                if (compare.prerequisites) {
                                    return (
                                        <td key={key}>
                                            <p>{compare.skills}</p>
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td key={key}>
                                            <p>No Skills</p>
                                        </td>
                                    );
                                }
                            })}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">Certification</p>
                            </td>
                            {compares.map((compare, key) => {
                                if (compare.certification == 1) {
                                    return (
                                        <td>
                                            <p>Yes</p>
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td>
                                            <p>No</p>
                                        </td>
                                    );
                                }
                            })}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">Prerequisites</p>
                            </td>
                            {compares.map((compare, key) => {
                                if (compare.prerequisites) {
                                    return (
                                        <td key={key}>
                                            <p>{compare.prerequisites}</p>
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td key={key}>
                                            <p>No Prerequisites</p>
                                        </td>
                                    );
                                }
                            })}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">Instructor</p>
                            </td>
                            {compares.map((compare, key) => (
                                <td key={key}>
                                    {compare.course_instructor.map(
                                        (cinstructor, key) => (
                                            <p key={key}>{cinstructor.name}</p>
                                        )
                                    )}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">Top Review</p>
                            </td>
                            {compares.map((compare, key) => (
                                <td key={key}>
                                    {compare.course_instructor.map(
                                        (cinstructor, key) => (
                                            <p key={key}>{cinstructor.name}</p>
                                        )
                                    )}
                                    <button className="compare-buy-btn">
                                        {" "}
                                        Buy Now
                                    </button>
                                    <button className="compare-addCart-btn">
                                        {" "}
                                        Add To Cart
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Compare;
