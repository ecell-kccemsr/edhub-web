import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
function Guide() {
    return (
        // 1 guide page
        <div>
            <div className="guide-outermost-section">
                <form action="">
                    <div className="guide-section">
                        <hr className="hr-start" />
                        <div className="guide-header">Let us guide you!</div>
                        <p className="category-title">
                            Select Category to your requirement
                        </p>
                        <div className="category">Category</div>
                        <FormGroup className="dropdown-category">
                            <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                                className="dropdown-border"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="dropdown-category">
                            <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                                className="dropdown-border"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <div className="button-section">
                            <Button className="skip">Skip</Button>{" "}
                            <Button className="next">Next</Button>{" "}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Guide;
