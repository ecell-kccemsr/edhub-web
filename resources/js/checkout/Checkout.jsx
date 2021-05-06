import React from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import upi from "../Images/checkout/upi.png";
import phonepay from "../Images/checkout/phonepay.png";
import visa from "../Images/checkout/visa.png";
import paytm from "../Images/checkout/paytm.png";
import paypal from "../Images/checkout/paypal.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const Checkout = () => {
    const handleSubmit = e => {
        e.preventDefault();
        toast.success("SUCCESS !");
    };
    return (
        <>
            <ToastContainer />
            <div className="checkout-section">
                <Container className="containerSection">
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm="12" md="7" lg="8">
                                <h4 className="checkout-header-title">
                                    Checkout
                                </h4>
                                <div>
                                    <h5 className="checkout-header-subtitle">
                                        Billing Address
                                    </h5>
                                    <div className="checkout-select-container">
                                        <FormGroup>
                                            <Label for="country">Country</Label>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="country"
                                            >
                                                <option>India</option>
                                                <option>Iceland</option>
                                                <option>Ireland</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="state">State</Label>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="state"
                                            >
                                                <option>Maharashtra</option>
                                                <option>Karnataka</option>
                                                <option>Goa</option>
                                            </Input>
                                        </FormGroup>
                                    </div>
                                    <FormGroup
                                        tag="fieldset"
                                        className="fieldset"
                                    >
                                        <FormGroup check>
                                            <Label check>
                                                <Row className="w-100">
                                                    <Col sm="12" md="8" lg="4">
                                                        <Input
                                                            type="radio"
                                                            name="payment_method"
                                                        />
                                                        Pay with UPI
                                                    </Col>
                                                    <Col sm="12" md="4" lg="4">
                                                        <img
                                                            src="/Images/checkout/upi.png"
                                                            alt="upi"
                                                            className="ml-2"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Row className="w-100">
                                                    <Col sm="12" md="8" lg="4">
                                                        <Input
                                                            type="radio"
                                                            name="payment_method"
                                                        />
                                                        Pay with Netbanking
                                                    </Col>
                                                </Row>
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Row className="w-100">
                                                    <Col sm="12" md="8" lg="4">
                                                        <Input
                                                            type="radio"
                                                            name="payment_method"
                                                        />
                                                        Credit or Debit card
                                                    </Col>
                                                    <Col sm="12" md="4" lg="4">
                                                        <img
                                                            src="/Images/checkout/visa.png"
                                                            alt="visa"
                                                            className="ml-2"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Row className="w-100">
                                                    <Col sm="12" md="8" lg="4">
                                                        <Input
                                                            type="radio"
                                                            name="payment_method"
                                                        />
                                                        Pay with Paytm
                                                    </Col>
                                                    <Col sm="12" md="4" lg="4">
                                                        <img
                                                            src="/Images/checkout/paytm.png"
                                                            alt="Paytym"
                                                            className="ml-2"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Row className="w-100">
                                                    <Col sm="12" md="8" lg="4">
                                                        <Input
                                                            type="radio"
                                                            name="payment_method"
                                                        />
                                                        Pay with Paypal
                                                    </Col>
                                                    <Col sm="12" md="4" lg="4">
                                                        <img
                                                            src="/Images/checkout/paypal.png"
                                                            alt="paypal"
                                                            className="ml-2"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Row className="w-100">
                                                    <Col sm="12" md="8" lg="4">
                                                        <Input
                                                            type="radio"
                                                            name="payment_method"
                                                        />
                                                        Pay with Phonepe
                                                    </Col>
                                                    <Col sm="12" md="4" lg="4">
                                                        <img
                                                            src="/Images/checkout/phonepay.png"
                                                            alt="phonepay"
                                                            className="ml-2"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Row className="w-100">
                                                    <Col sm="12" md="8" lg="4">
                                                        <Input
                                                            type="radio"
                                                            name="payment_method"
                                                        />
                                                        Pay with wallet
                                                    </Col>
                                                </Row>
                                            </Label>
                                        </FormGroup>
                                    </FormGroup>
                                </div>
                            </Col>
                            <Col sm="12" md="5" lg="4">
                                <div className="checkout-card">
                                    <h4 className="checkout-title">Summary</h4>
                                    <Row style={{ maxWidth: "100%" }}>
                                        <Col sm="12" md="9">
                                            <p>Original price</p>
                                        </Col>
                                        <Col sm="12" md="3">
                                            <p>$123.123</p>
                                        </Col>
                                        <Col sm="12" md="9">
                                            <p>Discount</p>
                                        </Col>
                                        <Col sm="12" md="3">
                                            <p className="discount">-$13</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ maxWidth: "100%" }}>
                                        <Col sm="12" md="9">
                                            <p>Total Price</p>
                                        </Col>
                                        <Col sm="12" md="3">
                                            <p>$110.123</p>
                                        </Col>
                                    </Row>
                                    <small>
                                        Edhub is required by law to collect
                                        applicable transaction taxes for
                                        purchases made in certain tax
                                        jurisdictions.
                                        <br />
                                        By completing your purchase you agree to
                                        these <b>Terms of Service</b>.
                                    </small>
                                    <button
                                        type="submit"
                                        className="checkout-btn"
                                    >
                                        Complete Payment
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </>
    );
};

export default Checkout;
