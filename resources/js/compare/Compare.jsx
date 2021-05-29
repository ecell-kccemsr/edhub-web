import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
const Compare = () => {
    const compares = useStoreState(state => state.compares);
    const addToCompare = useStoreActions(actions => actions.addToCompare);

    if (compares.length == 0) {
        return (
            <div className="no-course-compare-section">
                <h3>No course present to compare</h3>
                <h4>Add course to compare now </h4>
            </div> 
        );
    }
    return (
        <>
            <div className="compare-section">
                <table>
                    <tbody>
                        <tr>
                            <td style={{ border: "none" }}>
                                <p className="compare-title">
                                    <b>Compare</b>
                                    <br />
                                    {compares.map(c => c.title).join(" vs ")}
                                </p>
                            </td>
                            {compares &&
                                compares.map(cmp => {
                                    return (
                                        <td style={{ border: "none"}}>
                                            <div className="compare-card">
                                                <img
                                                    src={
                                                        cmp?.image || "/images/compare/cardheader.png"
                                                    }
                                                    alt="course"
                                                    style={{
                                                        borderRadius: "16px",
                                                        width: "100%",
                                                        height:"9rem"
                                                    }}
                                                />
                                                <h5>{cmp?.title}</h5>
                                                <span>
                                                    <b>₹ {cmp?.price}</b>
                                                </span>
                                                <a 
                                                   href={cmp?.url}
                                                   target="_blank">
                                               <button> Buy Now</button>
                                                </a>
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
                                                src="/images/courseDetail/4star.png"
                                                alt="Star"
                                                style={{ objectFit: "contain" }}
                                            />
                                            <p>
                                            {
                         Math.round(parseFloat
                            (
                                compare?.rating 
                            )
                            )

                       }
                       </p>
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
                                            alt="course_provider"
                                            className="compare-course-by-image"
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">
                                    Language
                                </p>
                            </td>
                            {compares.map((compare, key) => {
                                return(
                                     <td key={key}> 
                                <p>{compare?.locale}</p>
                             </td>
                                )
                            
                            })}
                        </tr>
                        <tr>
                            <td>
                                <p className="compare-title">
                                    Captions
                                </p>
                            </td>
                            {compares.map((compare, key) => {
                                return(
                                     <td key={key}> 
                                <p>{compare?.captions}</p>
                                 </td>
                                )
                            
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
                                <p className="compare-title">Instructor Designation</p>
                            </td>
                            {compares.map((compare, key) => (
                                <td key={key}>
                                    {compare.course_instructor.map(
                                        (cinstructor, key) => (
                                            <p key={key}>{cinstructor.designation}</p>
                                        )
                                    )}
                                    <button className="compare-buy-btn">
                                    <a
                                            href={compare?.url}
                                            target="_blank"
                                            
                                        >
                                            Buy Now
                                        </a> 
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
