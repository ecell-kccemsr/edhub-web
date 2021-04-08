import React from "react";
import { Row, Col, Button } from "reactstrap";
const PopularChoice = ({ title }) => {
    return (
        <div className="popular-choice-section">
            <h3 className="popular-choice-header">{title}</h3>
            <Row className=" popular-choice-sub-section">
                <Col sm="12" md="6" lg="5">
                    <p className="popular-choice-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Habitant volutpat elementum facilisi mattis et. At
                    </p>
                </Col>
                <Col
                    sm="12"
                    md="6"
                    lg="5"
                    className="popular-choice-btn-container"
                >
                    <Button className="popular-choice-btn">View all</Button>
                </Col>
            </Row>
        </div>
    );
};

export default PopularChoice;
