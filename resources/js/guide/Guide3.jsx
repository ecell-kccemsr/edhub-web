import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide3 = ({ nextStep, setModalVals, modalVals }) => {
    const [moreData, setMoreData] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");
    const toggleMoreData = () => setMoreData(!moreData);
    const handleNext = () => {
        setModalVals({
            ...modalVals,
            courseType: selectedCourse
        });
        nextStep();
    };
    return (
        <>
            <Row className="guide-modal-mainsection">
                <Col sm="12" md="8" lg="6">
                    <FormGroup className="guideStep3FG">
                        <Label>
                            <b>Type of course</b>
                        </Label>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="guided"
                                value="guided"
                                onChange={e =>
                                    setSelectedCourse(e.target.value)
                                }
                            />
                            Guided Course
                        </Label>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="mentored"
                                value="mentored"
                                onChange={e =>
                                    setSelectedCourse(e.target.value)
                                }
                            />
                            Mentored Course
                        </Label>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="tutored"
                                value="tutored"
                                onChange={e =>
                                    setSelectedCourse(e.target.value)
                                }
                            />
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
                                    <b>Guided Course</b>- Guided Study courses
                                    allow independent learning in a structured
                                    12-week format. In Guided Study courses,
                                </li>
                                <li>
                                    <b>Mentored Course</b>
                                    -Being mentored by the instructor – The
                                    phrase 'instructor-mentored' means students
                                    are being monitored and guided through these
                                    activities
                                </li>
                                <li>
                                    <b>Tutored Course</b>- A tutorial is a
                                    teaching session given to one student or a
                                    small group of students. ... Teachers lead
                                    classes, but tutors are educators who also
                                    help students, usually one-on-one. Tutors
                                    don't give grades
                                </li>
                            </ul>
                        </div>
                    )}
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

export default Guide3;
