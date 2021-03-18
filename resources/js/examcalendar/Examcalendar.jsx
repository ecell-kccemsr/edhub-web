import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card, Row, Col } from "reactstrap";
import axios from "axios";
import image1 from "../Images/calendar-icon.png";
import { Link } from "react-router-dom";

const Examcalendar = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [examName, setExamName] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/examcalendar/categories")
            .then(res => {
                console.log(res.data.data);
                setExamName(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <section className="exam-calendar-section">
                <div className="d-flex">
                    <img
                        className="exam-calendar-icon p-2"
                        src="../Images/calendar-icon.png"
                        alt=""
                    />
                    <h4 className="pt-4">Upcoming Exams 2021</h4>
                </div>
            </section>
            <section className="exam-menu-section">
                <div className="d-flex exam-btn-section  mb-2 justify-content-center">
                    {examName.map(examName => (
                        <Link
                            to={`/newscategory/view/${examName?.id}`}
                            key={examName.id}
                            className="exam-single-btn mt-2"
                        >
                            {examName.name}
                        </Link>
                    ))}
                </div>
            </section>
            <section className="exam-toggle-section">
                <div className="exam-toggle-btn-section text-right">
                    <h5 className="text-left">January 2021</h5>
                    <Button className="exam-toggle-btn" onClick={toggle}>
                        <i
                            class="fa fa-arrow-down icon-arrow"
                            aria-hidden="true"
                        ></i>
                    </Button>
                </div>

                <Collapse isOpen={isOpen} className="">
                    <Row className="justify-content-between w-100 m-0">
                        <Col
                            sm="12"
                            md="6"
                            lg="3"
                            className="exam-toggle-content-section"
                        >
                            <div className="exam-toggle-content-sub-section">
                                <div className="d-flex exam-toggle-content mb-2 align-items-center">
                                    <img
                                        src={image1}
                                        className="exam-toggle-section-icon"
                                    />
                                    <p className=" m-0 exam-toggle-section-date">
                                        4th Feb
                                    </p>
                                    <span className="exam-toggle-section-official">
                                        Hello
                                    </span>
                                </div>
                                <div className="d-flex exam-toggle-content-section-2">
                                    <img
                                        src={image1}
                                        className="exam-toggle-content-section-2-icon"
                                    />
                                    <h6 className="exam-toggle-content-section-header">
                                        Hello
                                    </h6>
                                </div>
                            </div>
                        </Col>
                        <Col
                            sm="12"
                            md="6"
                            lg="3"
                            className="exam-toggle-content-section"
                        >
                            <div className="exam-toggle-content-sub-section">
                                <div className="d-flex exam-toggle-content  mb-2 align-items-center">
                                    <img
                                        src={image1}
                                        className="exam-toggle-section-icon"
                                    />
                                    <p className=" m-0 exam-toggle-section-date">
                                        4th Feb
                                    </p>
                                    <span className="exam-toggle-section-official">
                                        Hello
                                    </span>
                                </div>
                                <div className="d-flex exam-toggle-content-section-2">
                                    <img
                                        src={image1}
                                        className="exam-toggle-content-section-2-icon"
                                    />
                                    <h6 className="exam-toggle-content-section-header">
                                        Hello
                                    </h6>
                                </div>
                            </div>
                        </Col>
                        <Col
                            sm="12"
                            md="6"
                            lg="3"
                            className="exam-toggle-content-section"
                        >
                            <div classNane="exam-toggle-content-sub-section">
                                <div className="d-flex exam-toggle-content mb-2 align-items-center">
                                    <img
                                        src={image1}
                                        className="exam-toggle-section-icon"
                                    />
                                    <p className=" m-0 exam-toggle-section-date">
                                        4th Feb
                                    </p>
                                    <span className="exam-toggle-section-official">
                                        Hello
                                    </span>
                                </div>
                                <div className="d-flex exam-toggle-content-section-2">
                                    <img
                                        src={image1}
                                        className="exam-toggle-content-section-2-icon"
                                    />
                                    <h6 className="exam-toggle-content-section-header">
                                        Hello
                                    </h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Collapse>
            </section>
        </div>
    );
};

export default Examcalendar;
