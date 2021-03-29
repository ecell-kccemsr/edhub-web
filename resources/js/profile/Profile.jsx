import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, FormGroup, Input } from "reactstrap";
function Profile() {
    return (
        <div className="profile-outer-part">
            
        <div className="outermost-section">
            <Row className="profile-section">
                <Col xs="10" md="5" lg="8" >
                <h3 className="profile-title">BASIC</h3>
                    <div className="profile-section-1">
                        <form onSubmit="#">
                            <FormGroup>
                                <p className="input-headers">First Name</p>
                                <Input
                                    type="name"
                                    name="name"
                                    id="exampleName"
                                    placeholder="Mona"
                                    className="input-group"
                                />
                            </FormGroup>
                            <FormGroup>
                                <p className="input-headers">Last Name</p>
                                <Input
                                    type="name"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="Singh"
                                    className="input-group"
                                />
                            </FormGroup>
                            <FormGroup>
                                <p className="input-headers">Email</p>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="abc@gmail.com"
                                    className="input-group"
                                />
                            </FormGroup>
                            <FormGroup>
                                <p className="input-headers">Mobile No</p>
                                <Input
                                    type="number"
                                    name="mobile_no"
                                    placeholder="9837282813"
                                    className="input-group"
                                />
                            </FormGroup>
                        </form>
                    </div>
                </Col>
                <Col sm={{ size: 'auto', offset: 1}} className="profile-section-2">
                    <div>
                        <div>
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt="profile-pic"
                                className="profile-section-profile-image"
                            />
                        </div>
                        <div className="update-btn-section">
                            <Button
                                className="update-btn"
                                type="submit"
                                value="submit"
                            >
                                Update Profile Image
                            </Button>
                        </div>
                        <hr className="profile-hr" />
                        <Link className="profile-links">Basic</Link>
                        <hr className="profile-hr" />
                        <Link className="profile-links">My courses</Link>
                        <hr className="profile-hr" />
                        <Link className="profile-links">Wishlist</Link>
                        <hr className="profile-hr" />
                        <Link className="profile-links">Signout</Link>
                    </div>
                </Col>
            </Row>
        </div>
        </div>

    );
}

export default Profile;
