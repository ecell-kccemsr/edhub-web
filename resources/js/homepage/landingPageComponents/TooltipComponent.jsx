import React from "react";
import ReactTooltip from "react-tooltip";
//Image
import prereq from "../../Images/courseDetail/prereq.png";

const TooltipComponent = ({ data }) => {
    return (
        <ReactTooltip
            place="right"
            id={data?.id.toString()}
            aria-haspopup="true"
            effect="solid"
            type="light"
            clickable={true}
        >
            <div className="course-card-tooltip-div">
                <h3>{data?.title}</h3>
                <h6>{data?.subtitle}</h6>
                {data?.prerequisites &&
                    data?.prerequisites.map(p => (
                        <div className="tooltip-outcome">
                            <img src={prereq} alt="Prereq" />
                            <p>{p}</p>
                        </div>
                    ))}
                <button className="buy-now-btn-tooltip">Buy Now</button>
                <button className="add-cart-btn-tooltip">Add to Cart</button>
            </div>
        </ReactTooltip>
    );
};

export default TooltipComponent;
