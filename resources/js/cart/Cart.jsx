import React from "react";
import { Container, Row, Col } from "reactstrap";
import cart1 from "../Images/cart/cart1.png";
import cart2 from "../Images/cart/cart2.png";
const Cart = () => {
    return (
        <>
            <div className="cart-section">
                <Container className="containerSection">
                    <Row>
                        <Col sm="12" md="7" lg="8">
                            <div className="my-cart-card-section">
                                <h4 className="my-cart-card-section-title">
                                    My Cart
                                </h4>
                                <div className="cart-content-list">
                                    <Row>
                                        <Col sm="6" md="6" lg="2">
                                            <img src={cart1} alt="" />
                                        </Col>
                                        <Col sm="6" md="6" lg="7">
                                            <div className="cart-content-list-text">
                                                <h5>
                                                    The Complete Android R +
                                                    Java Developer Course™ :
                                                    2021
                                                </h5>
                                                <p>
                                                    Course by: Dr. makn vjyvhj
                                                </p>
                                            </div>
                                        </Col>
                                        <Col
                                            sm="12"
                                            md="12"
                                            lg="3"
                                            className="btn-container"
                                        >
                                            <button className="remove-btn">
                                                Remove
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="cart-content-list">
                                    <Row>
                                        <Col sm="6" md="6" lg="2">
                                            <img src={cart2} alt="" />
                                        </Col>
                                        <Col sm="6" md="6" lg="7">
                                            <div className="cart-content-list-text">
                                                <h5>
                                                    The Complete Android R +
                                                    Java Developer Course™ :
                                                    2021
                                                </h5>
                                                <p>
                                                    Course by: Dr. makn vjyvhj
                                                </p>
                                            </div>
                                        </Col>
                                        <Col
                                            sm="12"
                                            md="12"
                                            lg="3"
                                            className="btn-container"
                                        >
                                            <button className="remove-btn">
                                                Remove
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="my-cart-card-section">
                                <h4 className="my-cart-card-section-title">
                                    People also bought together
                                </h4>
                                <div className="cart-content-list">
                                    <Row>
                                        <Col sm="6" md="6" lg="2">
                                            <img src={cart1} alt="" />
                                        </Col>
                                        <Col sm="6" md="6" lg="7">
                                            <div className="cart-content-list-text">
                                                <h5>
                                                    The Complete Android R +
                                                    Java Developer Course™ :
                                                    2021
                                                </h5>
                                                <p>
                                                    Course by: Dr. makn vjyvhj
                                                </p>
                                            </div>
                                        </Col>
                                        <Col
                                            sm="12"
                                            md="12"
                                            lg="3"
                                            className="btn-container"
                                        >
                                            <button className="add-btn">
                                                Add to Cart
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="cart-content-list">
                                    <Row>
                                        <Col sm="6" md="6" lg="2">
                                            <img src={cart2} alt="" />
                                        </Col>
                                        <Col sm="6" md="6" lg="7">
                                            <div className="cart-content-list-text">
                                                <h5>
                                                    The Complete Android R +
                                                    Java Developer Course™ :
                                                    2021
                                                </h5>
                                                <p>
                                                    Course by: Dr. makn vjyvhj
                                                </p>
                                            </div>
                                        </Col>
                                        <Col
                                            sm="12"
                                            md="12"
                                            lg="3"
                                            className="btn-container"
                                        >
                                            <button className="add-btn">
                                                Add to Cart
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md="5" lg="4">
                            <div className="cart-card">
                                <h4 className="cart-title">Summary</h4>
                                <Row style={{ maxWidth: "100%" }}>
                                    <Col sm="12" md="9">
                                        <p>Price (2 Items)</p>
                                    </Col>
                                    <Col sm="12" md="3">
                                        <p>$1500.00</p>
                                    </Col>
                                    <Col sm="12" md="9">
                                        <p>Discount</p>
                                    </Col>
                                    <Col sm="12" md="3">
                                        <p className="discount">-$1500</p>
                                    </Col>
                                    <Col sm="12" md="9">
                                        <p>Tax and Charges</p>
                                    </Col>
                                    <Col sm="12" md="3">
                                        <p className="discount">-$00</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row style={{ maxWidth: "100%" }}>
                                    <Col sm="12" md="9">
                                        <p>Total Price</p>
                                    </Col>
                                    <Col sm="12" md="3">
                                        <p>$00.00</p>
                                    </Col>
                                </Row>
                                <button type="submit" className="cart-btn">
                                    Checkout
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Cart;
