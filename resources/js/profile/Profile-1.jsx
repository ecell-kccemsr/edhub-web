import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, FormGroup, Input } from "reactstrap";
function Profile1() {
    const profileDummyData = [
        {
            id: 1,
            title: "The Complete Android R + Java Developer Course™ : 2021",
            description:
                "Course by:  Dr. makn vjyvhj",
            src: "https://randomuser.me/api/portraits/men/62.jpg"
        },
        {
            id: 2,
            title: "The Complete Android R + Java Developer Course™ : 2021",
            description:
                "Course by:  Dr. makn vjyvhj",
            src: "https://randomuser.me/api/portraits/women/21.jpg"
        },
        {
            id: 3,
            title: "The Complete Android R + Java Developer Course™ : 2021",
            description:
                "Course by:  Dr. makn vjyvhj",
            src: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            id: 4,
            title: "The Complete Android R + Java Developer Course™ : 2021",
            description:
                "Course by:  Dr. makn vjyvhj",
            src: "https://randomuser.me/api/portraits/women/11.jpg"
        }
    ];
    return (
        <div className="profile-outer-part">
            
        <div className="outermost-section">
            <Row className="profile-section">
                <Col xs="10" md="5" lg="8" >
                <h3 className="profile-title">My Courses</h3>
                    <div className="profile-section-1">
                    {profileDummyData &&
                        profileDummyData.map(category => (
                            <>
                                <div className="profile-information">
                                    <img
                                        src={category.src}
                                        alt="image"
                                        className="profile-img"
                                    />
                                    <div className="profile-data">
                                        <h5 className="profile-title-1">
                                            {category.title}
                                        </h5>
                                        <p className="profile-time">
                                            {category.description}
                                        </p>
                                        
                                    </div>
                                </div>
                            </>
                        ))}
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

export default Profile1;
