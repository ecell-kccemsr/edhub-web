import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide4 = ({ nextStep }) => {
    return (
        <>
            <Row className="guide-modal-mainsection">
                <Col sm="12" md="8" lg="6">
                    <FormGroup className="guideStep3FG">
                        <Label>
                            <b>Level of Difficulty</b>
                        </Label>
                        <Label check className="d-block">
                            <Input type="checkbox" />
                            Expert
                        </Label>
                        <Label check className="d-block">
                            <Input type="checkbox" />
                            Intermediate
                        </Label>
                        <Label check className="d-block">
                            <Input type="checkbox" />
                            Beginner
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <div className="modal-footer-btns">
                <button className="next" onClick={nextStep}>
                    next
                </button>
            </div>
        </>
    );
};

export default Guide4;
