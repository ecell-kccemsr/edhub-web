import React from "react";
import ReactTooltip from "react-tooltip";
//Image

const TooltipComponent = ({ data }) => {
    return (
        <ReactTooltip
            place="right"
            id={data?.id.toString()}
            aria-haspopup="true"
            effect="solid"
            type="light"
            clickable={true}
            delayUpdate={1000}
            delayHide={200}
        >
            <div className="course-card-tooltip-div">
                <h3>{data?.title}</h3>
                <h6>
                    {data?.description?.length > 80
                        ? data?.description.slice(0, 80) + "..."
                        : data?.description}
                </h6>

                {/* {data?.prerequisites &&
                    data?.prerequisites.map(p => (
                        <div className="tooltip-outcome" key={p}>
                            <img
                                src="/images/courseDetail/prereq.png"
                                alt="Prereq"
                            />
                            <p>{p.length > 40 ? p.slice(0, 40) + "..." : p}</p>
                        </div>
                    ))} */}
                <a href={data?.url} target="_blank">
                    <button className="buy-now-btn-tooltip">Go to class</button>
                </a>
                <a href={`/courseDetail/${data?.slug}`} target="_blank">
                    <button className="add-cart-btn-tooltip">
                        View Details
                    </button>
                </a>
            </div>
        </ReactTooltip>
    );
};

export default TooltipComponent;
