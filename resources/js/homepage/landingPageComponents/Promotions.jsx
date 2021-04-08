import React from "react";
import circleicon from "../../Images/landingpage/circle icon.png";
import duke from "../../Images/landingpage/duke.png";
import google from "../../Images/landingpage/google.png";
import ibm from "../../Images/landingpage/ibm.png";
import guardian from "../../Images/landingpage/guardian.png";
import hd from "../../Images/landingpage/hd.png";
import hindustan from "../../Images/landingpage/hindustan.png";
import toi from "../../Images/landingpage/toi.png";
const Promotions = () => {
    return (
        <div className="promotions-section">
            <div className="community-divison">
                <div className="community-divison-content">
                    <p className="community-divison-content-maintext">
                        <img
                            src={circleicon}
                            alt=""
                            className="community-divison-image"
                        />
                        Join the community
                    </p>
                    <p className="community-divison-content-subtext">
                        of more than <span>100,000</span> students
                    </p>
                </div>
                <p className="colab-content">
                    We collaborate with 200+ leading universities and companies
                </p>
                <div className="brand-section">
                    <img src={google} alt="" className="brand-image" />
                    <img src={ibm} alt="" className="brand-image" />
                    <img src={duke} alt="" className="brand-image" />
                </div>
                <p className="feature-in-header">Featured In</p>
                <div className="newspaper-images">
                    <img src={hindustan} alt="" />
                    <img src={toi} alt="" />
                    <img src={hd} alt="" />
                    <img src={guardian} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Promotions;
