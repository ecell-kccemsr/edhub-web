import React, { useState } from "react";
import { Button, Modal, Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide3 = () => {
    const [modal, setModal] = useState(false);
    const [moreData, setMoreData] = useState(false);
    const toggle = () => setModal(!modal);
    const toggleMoreData = () => setMoreData(!moreData);
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
                                <span className="guide-modal-step">3 of 5</span>
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
                                    <b>Type of course</b>
                                </Label>
                                <Label check>
                                    <Input type="checkbox" />
                                    Guided Course
                                </Label>
                                <Label check>
                                    <Input type="checkbox" />
                                    Mentored Course
                                </Label>
                                <Label check>
                                    <Input type="checkbox" />
                                    Tutored Course
                                </Label>
                                {!moreData && (
                                    <span
                                        className="knowMoreBtn"
                                        onClick={toggleMoreData}
                                    >
                                        Know More
                                    </span>
                                )}
                                {moreData && (
                                    <span
                                        className="knowMoreBtn"
                                        onClick={toggleMoreData}
                                    >
                                        Know Less
                                    </span>
                                )}
                            </FormGroup>
                        </Col>
                        <Col sm="12" md="10">
                            {moreData && (
                                <div className="moreDataContainer">
                                    <ul>
                                        <li>
                                            <b>Guided Course</b>- Guided Study
                                            courses allow independent learning
                                            in a structured 12-week format. In
                                            Guided Study courses,
                                        </li>
                                        <li>
                                            <b>Mentored Course</b>
                                            -Being mentored by the instructor –
                                            The phrase 'instructor-mentored'
                                            means students are being monitored
                                            and guided through these activities
                                        </li>
                                        <li>
                                            <b>Tutored Course</b>- A tutorial is
                                            a teaching session given to one
                                            student or a small group of
                                            students. ... Teachers lead classes,
                                            but tutors are educators who also
                                            help students, usually one-on-one.
                                            Tutors don't give grades
                                        </li>
                                    </ul>
                                </div>
                            )}
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

export default Guide3;
