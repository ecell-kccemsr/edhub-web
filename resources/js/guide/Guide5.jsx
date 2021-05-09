import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide5 = ({ handleSubmit, modalVals, setModalVals }) => {
    const [language, setLanguage] = useState("");
    const handleNext = () => {
        setModalVals({
            ...modalVals,
            locale: language
        });
        handleSubmit();
    };
    return (
        <>
            <Row className="guide-modal-mainsection">
                <Col sm="12" md="8" lg="6">
                    <FormGroup>
                        <Label>
                            <b>Language</b>
                        </Label>
                        <Input
                            type="select"
                            name="language"
                            className="mb-3"
                            onChange={e => setLanguage(e.target.value)}
                        >
                            <option value="none" selected disabled hidden>
                                Select Language
                            </option>
                            <option value="English (US)">English(US)</option>
                            <option value="English (UK)">English(UK)</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Marathi">Marathi</option>
                            <option value="Hindi">Hindi</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <div className="modal-footer-btns">
                <button className="next" onClick={handleNext}>
                    apply
                </button>
            </div>
        </>
    );
};

export default Guide5;
