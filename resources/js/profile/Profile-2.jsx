import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, FormGroup, Input,  Card,  CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from "reactstrap";
import cardimg from "../Images/compare/cardheader.png"
import courseCompany from "../Images/courseDetail/courseDetailCompany.png"
function Profile2() {
     
    return (
        <div className="profile-outer-part">
            
        <div className="outermost-section">
            <Row className="profile-section">
                <Col xs="10" md="5" lg="8" >
                <h3 className="profile-title">My Courses</h3>
                    <div className="profile-section-1">
                    <CardDeck>
                    <Card className="Card">
        <CardImg top width="100%" src={cardimg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"> <img src={courseCompany} alt="img"/> <span>
            <b>FREE</b>
        </span>
        <span>
            $ <strike>250</strike>
        </span>
        </CardTitle>
        <CardText> <h4> UI/UX Design | How to design with professional.</h4> </CardText>
          <button className="button1">Add to cart</button> <br/>
 <button> Buy Now</button>
        </CardBody>
      </Card>
      <Card className="Card">
        <CardImg top width="100%" src={cardimg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"> <img src={courseCompany} alt="img"/> <span>
            <b>FREE</b>
        </span>
        <span>
            $ <strike>250</strike>
        </span>
        </CardTitle>
        <CardText> <h4> UI/UX Design | How to design with professional.</h4> </CardText>
          <button className="button1">Add to cart</button> <br/>
 <button> Buy Now</button>
        </CardBody>
      </Card>
      <Card className="Card">
        <CardImg top width="100%" src={cardimg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"> <img src={courseCompany} alt="img"/> <span>
            <b>FREE</b>
        </span>
        <span>
            $ <strike>250</strike>
        </span>
        </CardTitle>
        <CardText> <h4> UI/UX Design | How to design with professional.</h4> </CardText>
          <button className="button1">Add to cart</button> <br/>
 <button> Buy Now</button>
        </CardBody>
      </Card>
    </CardDeck>
    <CardDeck className="CardDeck">
    <Card className="Card">
        <CardImg top width="100%" src={cardimg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"> <img src={courseCompany} alt="img"/> <span>
            <b>FREE</b>
        </span>
        <span>
            $ <strike>250</strike>
        </span>
        </CardTitle>
        <CardText> <h4> UI/UX Design | How to design with professional.</h4> </CardText>
          <button className="button1">Add to cart</button> <br/>
 <button> Buy Now</button>
        </CardBody>
      </Card>
      <Card className="Card">
        <CardImg top width="100%" src={cardimg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"> <img src={courseCompany} alt="img"/> <span>
            <b>FREE</b>
        </span>
        <span>
            $ <strike>250</strike>
        </span>
        </CardTitle>
        <CardText> <h4> UI/UX Design | How to design with professional.</h4> </CardText>
          <button className="button1">Add to cart</button> <br/>
 <button> Buy Now</button>
        </CardBody>
      </Card>
      <Card className="Card">
        <CardImg top width="100%" src={cardimg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"> <img src={courseCompany} alt="img"/> <span>
            <b>FREE</b>
        </span>
        <span>
            $ <strike>250</strike>
        </span>
        </CardTitle>
        <CardText> <h4> UI/UX Design | How to design with professional.</h4> </CardText>
          <button className="button1">Add to cart</button> <br/>
 <button> Buy Now</button>
        </CardBody>
      </Card>
    </CardDeck>
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
