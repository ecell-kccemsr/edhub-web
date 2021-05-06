import React from "react";
import circleicon from "../../Images/landingpage/circle icon.png";
import duke from "../../Images/landingpage/duke.png";
import google from "../../Images/landingpage/google.png";
import ibm from "../../Images/landingpage/ibm.png";
import guardian from "../../Images/landingpage/guardian.png";
import hd from "../../Images/landingpage/hd.png";
import hindustan from "../../Images/landingpage/hindustan.png";
import toi from "../../Images/landingpage/toi.png";
import CountUp from 'react-countup';

const Promotions = () => {
    return (
        <div className="promotions-section">
            <div className="community-divison">
                <div className="community-divison-content">
                    <p className="community-divison-content-maintext">
                        <img
                            src="/Images/landingpage/circle icon.png"
                            alt="circle"
                            className="community-divison-image"
                        />
                        Join the community
                    </p>
                    <p className="community-divison-content-subtext">
                        of more than <span><CountUp start={0}
  delay={2}
  end={100000}
  duration={5} /></span> students
                    </p>
                </div>
                <p className="colab-content">
                    We collaborate with 200+ leading universities and companies
                </p>
                <div className="brand-section">
                    <img src="/Images/landingpage/google.png" alt="" className="brand-image" />
                    <img src="/Images/landingpage/ibm.png" alt="" className="brand-image" />
                    <img src="/Images/landingpage/duke.png" alt="" className="brand-image" />
                </div>
                <p className="feature-in-header">Featured In</p>
                <div className="newspaper-images">
                    <img src="/Images/landingpage/hindustan.png" alt="hindustan" />
                    <img src="/Images/landingpage/toi.png" alt="toi" />
                    <img src="/Images/landingpage/hd.png" alt="hd" />
                    <img src="/Images/landingpage/guardian.png" alt="guardian" />
                </div>
            </div>
        </div>
    );
};

export default Promotions;
