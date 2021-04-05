import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";

function Guide4() {
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
                                    Expert
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                className="p-1"
                                style={{ marginLeft: "44px" }}
                            >
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        className="courses"
                                    />{" "}
                                    Intermediate
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                className="p-1"
                                style={{ marginLeft: "18px" }}
                            >
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        className="courses"
                                    />{" "}
                                    Beginner
                                </Label>
                            </FormGroup>
                        </form>
                    </div>

                    <div className="button-section">
                        <Button className="next">Next</Button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide4;
