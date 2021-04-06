import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide5 = ({ handleSubmit }) => {
    return (
        <>
            <Row className="guide-modal-mainsection">
                <Col sm="12" md="8" lg="6">
                    <FormGroup>
                        <Label>
                            <b>Language</b>
                        </Label>
                        <Input type="select" name="language" className="mb-3">
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Marathi</option>
                            <option>English</option>
                            <option>Hindi</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <div className="modal-footer-btns">
                <button className="next" onClick={handleSubmit}>
                    apply
                </button>
            </div>
        </>
    );
};

export default Guide5;
