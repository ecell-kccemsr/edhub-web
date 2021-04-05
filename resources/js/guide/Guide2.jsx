import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
function Guide2() {
    return (
        <div>
            <div className="guide-outermost-section">
                <form action="">
                    <div className="guide-section">
                        <hr className="hr-start" />
                        <div className="guide-header">Let us guide you!</div>
                        <p className="category-title">
                            Select Category to your requirement
                        </p>
                        <h4 className="pricing">Pricing</h4>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            className="slider"
                            id="myRange"
                        />
                        <div className="d-flex price-slider-content">
                            <b className="free">Free</b>
                            <b className="lac">1.5 Lac</b>
                        </div>
                        <div className="d-flex min-max-section">
                            <div className="min-max-sub-section">
                                <p className="min-max-content">Min</p>
                                <input type="text" className="min-max-input" />
                            </div>
                            <p className="to-header">To</p>
                            <div className="min-max-sub-section">
                                <p className="min-max-content">Max</p>
                                <input type="text" className="min-max-input" />
                            </div>
                        </div>
                        <div className="button-section">
                            <Button className="skip">Skip</Button>{" "}
                            <Button className="next">Next</Button>{" "}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Guide2;
