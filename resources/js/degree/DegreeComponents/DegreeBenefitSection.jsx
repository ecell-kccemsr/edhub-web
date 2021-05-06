import React from "react";
import { Container, Row, Col, List } from "reactstrap";
import prereq from "../../Images/degree/prereq.png";

const benefits = [
    "No Programming Experience is Required",
    "No Programming Experience is Required",
    "No Programming Experience is Required"
];

const DegreeBenefitSection = () => {
    return (
        <div style={{ background: "#fff", padding: "30px 0 20px" }}>
            <Container className="containerClass">
                <Row>
                    <Col sm="12" md="8">
                        <div className="course-prereq-section">
                            <h5 className="course-content-top-header" id="Benefits">
                                Benfits
                            </h5>
                            <List type="unstyled" className="mb-0">
                                {benefits &&
                                    benefits.map(p => (
                                        <li key={p} className="my-2">
                                            <img
                                                src="/Images/degree/prereq.png"
                                                className="mr-2"
                                                alt="Prereq"
                                            />
                                            <span className="course-prereq-title">
                                                {p}
                                            </span>
                                        </li>
                                    ))}
                            </List>
                        </div>
                        <div className="course-prereq-section">
                            <h5 className="course-content-top-header" id="fees"> 
                                Fees and Financing
                            </h5>
                            <p className="course-prereq-title">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. In enim justo, rhoncus ut, imperdiet
                                a, venenatis vitae, justo.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DegreeBenefitSection;
