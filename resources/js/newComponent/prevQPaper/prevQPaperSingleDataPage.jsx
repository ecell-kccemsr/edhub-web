import React from "react";
import { Link } from "react-router-dom";
import { Col, List, Container, Row } from "reactstrap";
import udemy from "../../Images/blogs/udemy.png";
import { v4 as uuidv4 } from "uuid";
import QPaperAccordion from "./QPaperAccordion";

const dummyAccordionData = [
    {
        id: uuidv4(),
        title: "Bank Jobs",
        slug: "bankjobs",
        children: [
            {
                id: uuidv4(),
                title: "HDFC Bank Jobs",
                slug: "hdfc"
            },
            {
                id: uuidv4(),
                title: "SBI Jobs",
                slug: "sbi"
            }
        ]
    },
    {
        id: uuidv4(),
        title: "Judiciary Jobs",
        slug: "judiciaryjobs",
        children: [
            {
                id: uuidv4(),
                title: "HDFC Bank Jobs",
                slug: "hdfc"
            },
            {
                id: uuidv4(),
                title: "SBI Jobs",
                slug: "sbi"
            }
        ]
    }
];

const prevQPaperSingleDataPage = () => {
    return (
        <div className="prev-qpaper-singledata-section">
            <Container>
                <Row>
                    <Col sm="12" lg="3">
                        <div className="left-sidebar">
                            <h4>JOBS</h4>
                            <QPaperAccordion data={dummyAccordionData} />
                        </div>
                    </Col>
                    <Col sm="12" lg="6">
                        <h5 className="mb-2">Previous Question papers</h5>
                        <Link to="#">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Neque malesuada id viverra
                                velit sociis. Purus purus.
                            </p>
                        </Link>
                        <Link to="#">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Neque malesuada id viverra
                                velit sociis. Purus purus.
                            </p>
                        </Link>
                        <Link to="#">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Neque malesuada id viverra
                                velit sociis. Purus purus.
                            </p>
                        </Link>
                    </Col>
                    <Col sm="12" lg="3">
                        <div className="prevQpaper-sidebar">
                            <h6>Recent Courses</h6>

                            <div className="prevQpaper-sidebar-list-el">
                                <div className="sidebar-list-top">
                                    <i className="fas fa-chevron-right"></i>
                                    <p>
                                        JPMorgan CEO Jamie Dimon shares his
                                        thoughts on remote work
                                    </p>
                                </div>
                                <div className="prevQpaper-sidebar-pricesection">
                                    <p>$250</p>
                                    <img src={udemy} alt="Udemy" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default prevQPaperSingleDataPage;
