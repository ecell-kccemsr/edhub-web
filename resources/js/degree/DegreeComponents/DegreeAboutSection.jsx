import React from "react";
import { Container, Row, Col,  Nav, NavItem, NavLink } from "reactstrap";
import money from "../../Images/degree/Group.png";
import time from "../../Images/degree/Group 470.png";
import stat1 from "../../Images/courseDetail/stat1.png";
import stat2 from "../../Images/courseDetail/stat2.png";
import completeOnline from "../../Images/degree/CompleteOnline.png";

const DegreeAboutSection = () => {
    return (
        <Container className="containerClass">
            <Row>
                <Col sm="12" md="8">
                    <div className="course-overview-card-top">
                        <Row>
                            <Col
                                sm="12"
                                md="4"
                                className="topcard-flex-container"
                            >
                                <img src={money} alt="" />
                                <div className="text-container">
                                    <h5>$25,000 USD</h5>
                                    <p>
                                        for full degree | Each credit hour $667
                                        USD
                                    </p>
                                    <b>*EMI and other options available</b>
                                </div>
                            </Col>
                            <Col
                                sm="12"
                                md="4"
                                className="topcard-flex-container"
                            >
                                <img src={time} alt="" />
                                <div className="text-container">
                                    <h5>$25,000 USD</h5>
                                    <p>
                                        for full degree | Each credit hour $667
                                        USD
                                    </p>
                                </div>
                            </Col>
                            <Col
                                sm="12"
                                md="4"
                                className="topcard-flex-container"
                            >
                                <img src={completeOnline} alt="" />
                                <div className="text-container">
                                    <h5>$25,000 USD</h5>
                                    <p>
                                        for full degree | Each credit hour $667
                                        USD
                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </div>
                    <Nav>
        <NavItem>
          <NavLink className="navlink-degree" href="#Overview">Overview</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-degree" href="#ProgramCurriculum">Program curriculum</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-degree" href="#Instructors"> Instructors</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-degree" href="#Benefits"> Benefits</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-degree" href="#fees"> fees </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-degree" href="#Reviews"> Reviews</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-degree" href="#FAQs"> FAQs</NavLink>
        </NavItem>
      </Nav>       
                   <div className="course-overview-card">
                        <h5 className="course-overview-card-title" id="Overview">
                            Skills you'll gain
                        </h5>
                        <div className="course-overview-card-descriptionbox">
                            <p>Web development</p>
                            <p>Web development</p>
                            <p>Web development</p>
                        </div>
                        <h5 className="course-overview-card-title">
                            Learner's career outcome
                        </h5>
                        <div className="course-overview-card-stats">
                            <div className="stat-container">
                                <img src={stat1} alt="" />
                                <p>50 % Promotions</p>
                            </div>
                            <div className="stat-container">
                                <img src={stat2} alt="" />
                                <p>12 % New career</p>
                            </div>
                        </div>
                        <h5 className="course-overview-card-title">
                            Job opportunities
                        </h5>
                        <div className="course-overview-card-descriptionbox">
                            <p>Web development</p>
                            <p>Web development</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DegreeAboutSection;
