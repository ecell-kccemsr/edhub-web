import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide4 = ({ nextStep, modalVals, setModalVals }) => {
    const [difficulty, setDifficulty] = useState("");
    const handleNext = () => {
        setModalVals({
            ...modalVals,
            difficulty: difficulty
        });
        nextStep();
    };
    return (
        <>
            <Row className="guide-modal-mainsection">
                <Col sm="12" md="8" lg="6">
                    <FormGroup className="guideStep3FG">
                        <Label>
                            <b>Level of Difficulty</b>
                        </Label>
                        <Label check className="d-block">
                            <Input
                                type="checkbox"
                                value="expert"
                                onChange={e => setDifficulty(e.target.value)}
                            />
                            Expert
                        </Label>
                        <Label check className="d-block">
                            <Input
                                type="checkbox"
                                value="intermediate"
                                onChange={e => setDifficulty(e.target.value)}
                            />
                            Intermediate
                        </Label>
                        <Label check className="d-block">
                            <Input
                                type="checkbox"
                                value="beginner"
                                onChange={e => setDifficulty(e.target.value)}
                            />
                            Beginner
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <div className="modal-footer-btns">
                <button className="next" onClick={handleNext}>
                    next
                </button>
            </div>
        </>
    );
};

export default Guide4;
