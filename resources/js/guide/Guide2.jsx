import React, { useState } from "react";
import { Button, Modal, Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide2 = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [sliderVal, setSliderVal] = useState(5000);
    const onSliderChange = e => {
        const newVal = parseInt(e.target.value);
        setSliderVal(newVal);
    };
    return (
        <>
            <Button color="primary" onClick={toggle}>
                open modal
            </Button>
            <Modal
                isOpen={modal}
                toggle={toggle}
                className="guide-modal-container"
            >
                <button className="close-modal-btn" onClick={toggle}>
                    X
                </button>
                <div className="guide-modal">
                    <hr className="modal-hr" />
                    <Row>
                        <Col sm="12" md="3" className="text-center">
                            <b>
                                Step <br />
                                <span className="guide-modal-step">2 of 5</span>
                            </b>
                        </Col>
                        <Col sm="12" md="9">
                            <h4 className="guide-modal-title">
                                Let us guide you !
                            </h4>
                        </Col>
                    </Row>
                    <h5 className="guide-modal-subtitle">
                        Select according to your requirement
                    </h5>
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
                        <button className="skip">skip</button>
                        <button className="next">next</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Guide2;
