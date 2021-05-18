import React, { useState, useEffect } from "react";
import { Collapse, Button, Row, Col, Spinner  } from "reactstrap";
import axios from "axios";

const Examcalendar = props => {
    const [isOpen, setIsOpen] = useState({
        January: false,
        February: false,
        March: false,
        April: false,
        May: false,
        June: false,
        July: false,
        August: false,
        September: false,
        October: false,
        November: false,
        December: false
    });
    const toggle = value => setIsOpen({ [value]: !isOpen[value] });
    const [examName, setExamName] = useState([]);
    const [calendar, setCalendar] = useState([]);
    const [examLoading, setExamLoading] = useState(true);
    const Months = [
        { name: "January", value: "01" },
        { name: "February", value: "02" },
        { name: "March", value: "03" },
        { name: "April", value: "04" },
        { name: "May", value: "05" },
        { name: "June", value: "06" },
        { name: "July", value: "07" },
        { name: "August", value: "08" },
        { name: "September", value: "09" },
        { name: "October", value: "10" },
        { name: "November", value: "11" },
        { name: "December", value: "12" }
    ];
    useEffect(() => {
        axios
            .get("/api/examcalendar/categories")
            .then(res => {
                setExamName(res.data.data);
                setExamLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
        axios.get("/api/examcalendar").then(res => {
            setCalendar(res.data.data);
        });
    }, []);
    const filterExams = category_id => {
        axios.get(`/api/examcalendar?category_id=${category_id}`).then(res => {
            setCalendar(res.data.data);
        });
    };
    return (
        <div>
            <section className="exam-calendar-section">
                {/* Title */}
                <div className="d-flex">
                    <img
                        className="exam-calendar-icon p-2"
                        src="/images/calendar-icon.png"
                       

                        alt="calendar"
                    />
                    <h4 className="pt-4">Upcoming Exams 2021</h4>
                </div>
            </section>
            {/* Exam Categories */}
            <section className="exam-menu-section">
                <div className="d-flex exam-btn-section  mb-2 justify-content-center">
                    {examName &&
                        examName.length == 0 &&
                        examLoading == true && (
                            <h5 className="text-center py-3">
                                Loading Categories... {" "}
                                <Spinner color="danger" />
                            </h5>
                        )}
                    {examName &&
                        examName.length == 0 &&
                        examLoading == false && (
                            <h5 className="text-center py-3">
                                No Categories Found
                            </h5>
                        )}
                    {examName &&
                        examName.map(examName => (
                            <button
                                onClick={() => filterExams(examName.id)}
                                key={examName.id}
                                className="exam-single-btn mt-2"
                            >
                               <img src={examName?.image} alt="Exams" /> 
                                {examName?.name}
                            </button>
                        ))}
                </div>
            </section>
            {/* exam-toggle-section */}
            {Months &&
                Months.map(month => {
                    return (
                        <section
                            className="exam-toggle-section"
                            key={month.value}
                        >
                            <div className="exam-toggle-btn-section text-right">
                                <h5 className="text-left">{month.name}</h5>
                                <Button
                                    className="exam-toggle-btn"
                                    onClick={() => toggle(month.name)}
                                >
                                    <i
                                        className="fa fa-arrow-down icon-arrow"
                                        aria-hidden="true"
                                    ></i>
                                </Button>
                            </div>

                            <Collapse isOpen={isOpen[month.name]} className="">
                                <Row className=" w-100 m-0">
                                    {calendar &&
                                        calendar.length > 0 &&
                                        calendar
                                            .filter(cal => {
                                                return (
                                                    month.value ==
                                                    cal.date.substring(5, 7)
                                                );
                                            })
                                            .map(cal => {
                                                return (
                                                    <Col
                                                        sm="12"
                                                        md="6"
                                                        lg="3"
                                                        className="exam-toggle-content-section m-4"
                                                        key={cal.id}
                                                    >
                                                        <div className="exam-toggle-content-sub-section">
                                                            <div className="d-flex exam-toggle-content mb-2 align-items-center">
                                                                <i className="far fa-calendar-alt"></i>
                                                                <p className=" m-0 exam-toggle-section-date">
                                                                    {cal.date}
                                                                </p>
                                                                <span className="exam-toggle-section-official">
                                                                    {cal.official
                                                                        ? "Official"
                                                                        : ""}
                                                                </span>
                                                            </div>
                                                            <div className="d-flex exam-toggle-content-section-2">
                                                                <img
                                                                    src={
                                                                        cal?.image
                                                                    }
                                                                    className="exam-toggle-content-section-2-icon"
                                                                    alt="Calender"
                                                                />
                                                                <h6 className="exam-toggle-content-section-header">
                                                                    {cal.name}
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                );
                                            })}
                                </Row>
                            </Collapse>
                        </section>
                    );
                })}
        </div>
    );
};

export default Examcalendar;
