import React from "react";
import { Button, Row, Col, InputGroup, Input } from "reactstrap";
function News() {
    return (
        <div>
            <section className="select-news-by-category">
                <div className="">News</div>
                <hr />
                <Row>
                    <Col sm="12" md="6" lg="8" className="mb-4">
                        <div className="category-left-section">
                            <h6 className="select-by-category-header text-center">
                                Select By Category
                            </h6>
                            <div className="select-news-by-category-btn-section">
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <Button className="category-btn mt-2">
                                        primary
                                    </Button>
                                    <Button className="category-btn mt-2">
                                        primary
                                    </Button>
                                    <Button className="category-btn mt-2">
                                        primary
                                    </Button>
                                    <Button className="category-btn mt-2">
                                        primary
                                    </Button>
                                </div>
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <Button className="category-btn mt-2">
                                        primary
                                    </Button>
                                    <Button className="category-btn mt-2">
                                        primary
                                    </Button>
                                    <Button className="category-btn mt-2">
                                        primary
                                    </Button>
                                    <Button className="category-btn mt-2">
                                        primary
                                    </Button>
                                </div>
                            </div>
                            <section className="category-information-section">
                                <div className="category-information-sub-section">
                                    <h4 className="category-header">India</h4>
                                    <div className="d-flex">
                                        <div>
                                            <h6 className="">
                                                RBI Recruitment 2021
                                                Notification for Various
                                            </h6>
                                            <p className="">
                                                RBI Recruitment 2021
                                                Notification for Various Non CSG
                                                Posts,Online Application begins
                                                from 23 Feb onwards
                                            </p>
                                        </div>
                                        <img
                                            src="https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome2x.png"
                                            alt=""
                                            className="category-information-image"
                                        />
                                    </div>
                                    <hr />
                                </div>
                            </section>
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                        <div className="pb-3">Register For free Updates</div>
                        <div className="registration-section">
                            <InputGroup>
                                <Input placeholder="Name" type="text" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Input placeholder="Email" type="email" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Input
                                    placeholder="Phone Number"
                                    type="number"
                                />
                            </InputGroup>
                            <div classNam="text-center">
                                <Button className="registration-btn">
                                    Submit
                                </Button>
                            </div>
                        </div>
                        <br />
                        <div className="trending-section-container">
                            <h4 className="trending-section">Trending</h4>
                            <h6 className="trending-section-header">
                                RBI Recruitment 2021 Notification for Various
                            </h6>
                            <p className="trending-section-paragraph">
                                RBI Recruitment 2021 Notification for Various
                                Non CSG Posts,Online Application begins from 23
                                Feb onwards
                            </p>

                            <h6 className="trending-section-header">
                                RBI Recruitment 2021 Notification for Various
                            </h6>
                            <p className="trending-section-paragraph">
                                RBI Recruitment 2021 Notification for Various
                                Non CSG Posts,Online Application begins from 23
                                Feb onwards
                            </p>

                            <h6 className="trending-section-header">
                                RBI Recruitment 2021 Notification for Various
                            </h6>
                            <p className="trending-section-paragraph">
                                RBI Recruitment 2021 Notification for Various
                                Non CSG Posts,Online Application begins from 23
                                Feb onwards
                            </p>
                            <hr />
                            <div className="text-center">
                                <Button className="trending-section-btn">
                                    View All
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    );
}

export default News;
