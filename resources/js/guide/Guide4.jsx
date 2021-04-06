import React, { useState } from "react";
import { Button, Modal, Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide4 = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
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
                                <span className="guide-modal-step">4 of 5</span>
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
                        <button className="skip">skip</button>
                        <button className="next">next</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Guide4;
