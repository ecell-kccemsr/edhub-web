import React from "react";
import CountUp from "react-countup";

const Promotions = () => {
    return (
        <div className="promotions-section">
            <div className="community-divison">
                <div className="community-divison-content">
                    <p className="community-divison-content-maintext">
                        <img
                            src="/images/landingpage/circle icon.png"
                            alt="circle"
                            className="community-divison-image"
                        />
                        Join the Community
                    </p>
                    <p className="community-divison-content-subtext">
                        of more than{" "}
                        <span>
                            <CountUp
                                start={0}
                                delay={2}
                                end={125000}
                                duration={5}
                            />
                        </span>
                        + Online Courses
                    </p>
                </div>
                <p className="colab-content">
                    We collaborate with 200+ leading universities and companies
                </p>
                <div className="brand-section">
                    <img
                        src="/images/landingpage/google.png"
                        alt=""
                        className="brand-image"
                    />
                    <img
                        src="/images/landingpage/ibm.png"
                        alt=""
                        className="brand-image"
                    />
                    <img
                        src="/images/landingpage/duke.png"
                        alt=""
                        className="brand-image"
                    />
                </div>
                <p className="feature-in-header">Featured In</p>
                <div className="newspaper-images">
                    <img
                        src="/images/landingpage/hindustan.png"
                        alt="hindustan"
                    />
                    <img src="/images/landingpage/toi.png" alt="toi" />
                    <img src="/images/landingpage/hd.png" alt="hd" />
                    <img
                        src="/images/landingpage/guardian.png"
                        alt="guardian"
                    />
                </div>
            </div>
        </div>
    );
};

export default Promotions;
