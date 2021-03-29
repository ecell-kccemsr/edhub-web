import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, FormGroup, Input } from "reactstrap";
function Profile2() {
    
    return (
        <div className="profile-outer-part">
            
        <div className="outermost-section">
            <Row className="profile-section">
                <Col xs="10" md="5" lg="8" >
                <h3 className="profile-title">My Courses</h3>
                    <div className="profile-section-1">
                <h1>Happy Holi</h1>
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

export default Profile2;
