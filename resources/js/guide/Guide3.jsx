import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";
function Guide3() {
    return (
        <div>
            <div className="guide-outermost-section">
                <div className="guide-section">
                    <hr className="hr-start" />
                    <div className="guide-header">Let us guide you!</div>
                    <p className="category-title">
                        Select according to your requirement
                    </p>
                    <div className="type-of-course">Type of course</div>
                    <div className="text-center">
                        <form action="">
                            <FormGroup check className="p-1">
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        className="courses"
                                    />{" "}
                                    Guided Course
                                </Label>
                            </FormGroup>
                            <FormGroup check className="p-1">
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        className="courses"
                                    />{" "}
                                    Guided Course
                                </Label>
                            </FormGroup>
                            <FormGroup check className="p-1">
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        className="courses"
                                    />{" "}
                                    Tutored Course
                                </Label>
                            </FormGroup>
                        </form>
                    </div>
                    <Link to="#" className="know-more">
                        Know More
                    </Link>
                    <div className="button-section">
                        <Button className="skip">Skip</Button>{" "}
                        <Button className="next">Next</Button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide3;
