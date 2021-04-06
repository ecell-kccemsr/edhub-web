import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide2 = ({ nextStep }) => {
    const [sliderVal, setSliderVal] = useState(5000);
    const onSliderChange = e => {
        const newVal = parseInt(e.target.value);
        setSliderVal(newVal);
    };
    return (
        <>
            <Row className="guide-modal-mainsection">
                <Col sm="12" md="8" lg="8">
                    <FormGroup>
                        <div style={{ padding: "5px 20px" }}>
                            <Label>
                                <b>Pricing</b>
                            </Label>
                            <input
                                type="range"
                                min="0"
                                max="150000"
                                step="100"
                                className="course-pricing-slider"
                                value={sliderVal}
                                onChange={onSliderChange}
                            ></input>
                        </div>
                        <div className="pricing-slider-div">
                            <span>Free</span>
                            <span>1.5 Lakh</span>
                        </div>
                        <div className="pricing-input-div">
                            <div className="pricing-div">
                                <label htmlFor="from">Min</label>
                                <input type="text" id="from" />
                            </div>
                            <p>To</p>
                            <div className="pricing-div">
                                <label htmlFor="to">Max</label>
                                <input type="text" id="to" />
                            </div>
                        </div>
                    </FormGroup>
                </Col>
            </Row>
            <div className="modal-footer-btns">
                <button className="skip" onClick={nextStep}>
                    skip
                </button>
                <button className="next" onClick={nextStep}>
                    next
                </button>
            </div>
        </>
    );
};

export default Guide2;
