import React, { useState, useRef } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide2 = ({ nextStep, setModalVals, modalVals }) => {
    const [sliderVal, setSliderVal] = useState(150000);
    const minValue = useRef(null);
    const maxValue = useRef(null);
    const sliderValue = useRef(null);
    const [priceFilter, setPriceFilter] = useState({
        min: 0,
        max: 150000
    });
    const onSliderChange = value => {
        setPriceFilter({
            ...priceFilter,
            max: isNaN(parseInt(value)) ? 0 : parseInt(value)
        });
        setSliderVal(value);
    };
    const onPriceChange = (name, value) => {
        if (name == "min") {
            setPriceFilter({
                ...priceFilter,
                min: isNaN(parseInt(value)) ? 0 : parseInt(value)
            });
        } else {
            setPriceFilter({
                ...priceFilter,
                max: isNaN(parseInt(value)) ? 0 : parseInt(value)
            });
            setSliderVal(isNaN(parseInt(value)) ? 0 : parseInt(value));
        }
    };
    const handleNext = () => {
        setModalVals({
            ...modalVals,
            min: priceFilter.min,
            max: priceFilter.max
        });
        nextStep();
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
                                className="course-pricing-slider"
                                value={sliderVal}
                                step={10000}
                                onChange={e => onSliderChange(e.target.value)}
                                ref={sliderValue}
                            ></input>
                        </div>
                        <div className="pricing-slider-div">
                            <span>Free</span>
                            <span>1.5 Lakh</span>
                        </div>
                        <div className="pricing-input-div">
                            <div className="pricing-div">
                                <label htmlFor="from">Min</label>
                                <input
                                    type="text"
                                    id="from"
                                    value={priceFilter.min}
                                    ref={minValue}
                                    onChange={e =>
                                        onPriceChange("min", e.target.value)
                                    }
                                />
                            </div>
                            <p>To</p>
                            <div className="pricing-div">
                                <label htmlFor="to">Max</label>
                                <input
                                    type="text"
                                    id="to"
                                    value={priceFilter.max}
                                    ref={maxValue}
                                    onChange={e =>
                                        onPriceChange("max", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </FormGroup>
                </Col>
            </Row>
            <div className="modal-footer-btns">
                <button className="skip" onClick={handleNext}>
                    skip
                </button>
                <button className="next" onClick={handleNext}>
                    next
                </button>
            </div>
        </>
    );
};

export default Guide2;
