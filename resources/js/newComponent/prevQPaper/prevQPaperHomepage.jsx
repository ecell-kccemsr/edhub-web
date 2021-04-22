import React from "react";
import { Container, Row, Col } from "reactstrap";
import sbi from "../../Images/qpaper/sbi.png";
import { v4 as uuidv4 } from "uuid";

const dummyNewsTabData = [
    {
        id: uuidv4(),
        tabname: "All",
        tabslug: "all"
    },
    {
        id: uuidv4(),
        tabname: "Banking",
        tabslug: "banking"
    },
    {
        id: uuidv4(),
        tabname: "Defence",
        tabslug: "defence"
    },
    {
        id: uuidv4(),
        tabname: "Railways",
        tabslug: "railways"
    }
];

const prevQPaperHomepage = () => {
    return (
        <div className="prevQpaper-section">
            <Container>
                <h4 className="text-center">Previous Question papers</h4>
                <div className="tabs-section">
                    <h5 className="tab-header-text">Select Your Exam</h5>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {dummyNewsTabData.map(d => {
                            let isActive = d.id == dummyNewsTabData[0].id;
                            return (
                                <li className="nav-item" role="presentation">
                                    <a
                                        className={`nav-link ${
                                            isActive ? "active" : ""
                                        }`}
                                        id={`${d.tabslug}-tab`}
                                        data-toggle="tab"
                                        href={`#${d.tabslug}`}
                                        role="tab"
                                        aria-controls={`${d.tabslug}`}
                                        aria-selected="true"
                                    >
                                        {d?.tabname}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        {dummyNewsTabData.map(d => {
                            let isActive = d.id == dummyNewsTabData[0].id;
                            return (
                                <div
                                    className={`tab-pane fade show ${
                                        isActive ? "active" : ""
                                    }`}
                                    id={`${d?.tabslug}`}
                                    role="tabpanel"
                                    aria-labelledby={`${d?.tabslug}-tab`}
                                >
                                    <Row>
                                        <Col sm="12" md="4" lg="3">
                                            <div className="tab-el">
                                                <img src={sbi} alt="" />
                                                <p>IBPS PO</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default prevQPaperHomepage;
