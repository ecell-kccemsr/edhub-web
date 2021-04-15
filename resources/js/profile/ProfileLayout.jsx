import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
const ProfileLayout = ({ children }) => {
    const handleChange = ()=>{
        localStorage.clear();
    };
    return (
        <div className="profile-outer-part">
            <div className="outermost-section">
                <Row className="profile-section m-0">
                    <Col xs="12" md="8" lg="9">
                        {children}
                    </Col>
                    <Col
                        xs="12"
                        md="4"
                        lg="3"
                        className="profile-section-2 p-0 pb-4"
                    >
                        <div>
                            <div className="img-container">
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
                            <Link
                                className="profile-links"
                                style={{
                                    color: `${
                                        window.location.pathname.includes(
                                            "basic"
                                        )
                                            ? "#F05454"
                                            : "#808080"
                                    }`
                                }}
                                to="/profile/basic"
                            >
                                Basic
                            </Link>
                            <hr className="profile-hr" />
                            <Link
                                className="profile-links"
                                style={{
                                    color: `${
                                        window.location.pathname.includes(
                                            "courses"
                                        )
                                            ? "#F05454"
                                            : "#808080"
                                    }`
                                }}
                                to="/profile/my-courses"

                            >
                                My courses
                            </Link>
                            <hr className="profile-hr" />
                            <Link
                                className="profile-links"
                                style={{
                                    color: `${
                                        window.location.pathname.includes(
                                            "wishlist"
                                        )
                                            ? "#F05454"
                                            : "#808080"
                                    }`
                                }}
                                to="/profile/wishlist"

                            >
                                Wishlist
                            </Link>
                            <hr className="profile-hr" />
                            <Link
                                className="profile-links"
                                onClick={()=>handleChange()}
                                to="/"
                                >
                                Signout
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ProfileLayout;
