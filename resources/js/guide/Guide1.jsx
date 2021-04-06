import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide = ({ nextStep }) => {
    return (
        <>
            <Row className="guide-modal-mainsection">
                <Col sm="12" md="8" lg="6">
                    <FormGroup>
                        <Label>
                            <b>Category</b>
                        </Label>
                        <Input
                            type="select"
                            name="development"
                            className="mb-3"
                        >
                            <option>Development</option>
                            <option>Development</option>
                            <option>Development</option>
                            <option>Development</option>
                            <option>Development</option>
                        </Input>
                        <Input type="select" name="frontenddev">
                            <option>Front end Dev</option>
                            <option>Front end Dev</option>
                            <option>Front end Dev</option>
                            <option>Front end Dev</option>
                            <option>Front end Dev</option>
                        </Input>
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

export default Guide;
