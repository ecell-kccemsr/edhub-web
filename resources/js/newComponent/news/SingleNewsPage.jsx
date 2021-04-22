import React from "react";
import { Container, Row, Col, Input, FormGroup } from "reactstrap";
import singleNewsImg from "../../Images/news/singleNews.png";
import tw from "../../Images/news/twitter.png";
const SingleNewsPage = () => {
    return (
        <div className="singlenews-section">
            <Container>
                <Row>
                    <Col sm="12" md="8">
                        <h4 className="singlenewstitle-text">Politics</h4>
                        <div className="singlnews-main-card">
                            <img src={singleNewsImg} alt="Single News Image" />
                            <div className="news-overview-container">
                                <p className="news-tag">#BILLS2020</p>
                                <div className="news-interaction-container">
                                    <div className="news-interaction-el">
                                        <i class="far fa-eye"></i>
                                        <span>1.2K</span>
                                    </div>
                                    <div className="news-interaction-el">
                                        <i class="far fa-comment-alt"></i>
                                        <span>1.2K</span>
                                    </div>
                                    <div className="news-interaction-el">
                                        <i class="fas fa-share-alt"></i>
                                        <span>500</span>
                                    </div>
                                </div>
                            </div>
                            <h5>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Non lectus porta urna venenatis
                                tempus. Adipiscing s
                            </h5>
                            <h6 className="news-author">By unnat bhatnagar</h6>
                            <h6 className="news-published-date">
                                12:00 pm IST
                            </h6>
                            <p className="news-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. A a dolor netus urna ut mus
                                donec enim. In netus massa libero, eget.
                                Facilisi metus curabitur facilisis amet, dolor
                                mollis duis proin. Tempus enim lobortis erat
                                pellentesque id ac dignissim.Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. A a dolor
                                netus urna ut mus donec enim. In netus massa
                                libero, eget. Facilisi metus curabitur facilisis
                                amet, dolor mollis duis proin. Tempus enim
                                lobortis erat pellentesque id ac dignissim.Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. A a dolor netus urna ut mus donec enim. In
                                netus massa libero, eget. Facilisi metus
                                curabitur facilisis amet, dolor mollis duis
                                proin. Tempus enim lobortis erat pellentesque id
                                ac dignissim.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. A a dolor netus
                                urna ut mus donec enim. In netus massa libero,
                                eget. Facilisi metus curabitur facilisis amet,
                                dolor mollis duis proin. Tempus enim lobortis
                                erat pellentesque id ac dignissim.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. A a
                                dolor netus urna ut mus donec enim. In netus
                                massa libero, eget. Facilisi metus curabitur
                                facilisis amet, dolor mollis duis proin. Tempus
                                enim lobortis erat pellentesque id ac
                                dignissim.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. A a dolor netus
                                urna ut mus donec enim. In netus massa libero,
                                eget. Facilisi metus curabitur facilisis amet,
                                dolor mollis du
                            </p>
                            <h4 className="comment-titletext">Comments</h4>
                            <Row>
                                <Col sm="12" md="8" lg="9">
                                    <FormGroup>
                                        <Input type="text" name="comment" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="4" lg="3">
                                    <button type="submit">POST</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <h4 className="singlenewstitle-text">
                            Ideas and opinion
                        </h4>
                        <div className="singlenews-sidebar-container-top">
                            <div className="top-container-el">
                                <img src={tw} alt="Twitter" />
                                <div className="text-container">
                                    <p className="tag">#BILLS2020</p>
                                    <h4>
                                        JPMorgan CEO Jamie Dimon shares his
                                        thoughts on remote work
                                    </h4>
                                    <p className="author">
                                        Hemant lamba on <span>twitter</span>
                                    </p>
                                </div>
                            </div>
                            <div className="top-container-el">
                                <img src={tw} alt="Twitter" />
                                <div className="text-container">
                                    <p className="tag">#BILLS2020</p>
                                    <h4>
                                        JPMorgan CEO Jamie Dimon shares his
                                        thoughts on remote work
                                    </h4>
                                    <p className="author">
                                        Hemant lamba on <span>twitter</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <h4 className="singlenewstitle-text">Related News</h4>
                        <div className="singlenews-sidebar-container-top">
                            <div className="top-container-el">
                                <div className="text-container">
                                    <p className="tag">#BILLS2020</p>
                                    <h4>
                                        JPMorgan CEO Jamie Dimon shares his
                                        thoughts on remote work
                                    </h4>
                                    <p className="author">
                                        Hemant lamba on <span>twitter</span>
                                    </p>
                                </div>
                            </div>
                            <div className="top-container-el">
                                <div className="text-container">
                                    <p className="tag">#BILLS2020</p>
                                    <h4>
                                        JPMorgan CEO Jamie Dimon shares his
                                        thoughts on remote work
                                    </h4>
                                    <p className="author">
                                        Hemant lamba on <span>twitter</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleNewsPage;
