import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import http from "../../utils/http";
const TwitterNews = () => {
    return (
        <>
            <Container style={{ boxShadow: "none" }} className="auth">
                <div className="twitter">
                    <div className="twitter-header">
                        <img src="https://i.redd.it/6onq25y0sh311.jpg" alt="profile img" />
                        <div>
                            <p>
                                <strong>
                        author_name
                                </strong>
                        </p>
                        <p>
                            author_username
                        </p>
                        </div>
                    </div>
                    <div className="twitter-body">
                        <p className="twitter-body-text">
                            BARCELONA: In Nepal's capital, Kathmandu, green public transport isn't new - women have been driving hundreds of electric three-wheeled, 12-seater buses for the past 25 years.
                        </p>
                        <img src="https://i.redd.it/6onq25y0sh311.jpg" alt="Source Image" />
                    </div>
                    <div className="twitter-date-provider">
                        <p className="twiiter-date">
                            Publish_at 
                        </p>
                        <p className="twitter-provider">
                            tweet_source
                        </p>
                    </div>
                    <div className="twitter-footer">
                        <div className="twitter-footer-like">
                        <i class="far fa-heart"></i>
                            <p>
                             20
                         </p>
                        </div>
                        <div className="twitter-footer-retweet">
                            <i class="fas fa-retweet"></i>
                            <p>
                                20
                            </p>
                        </div>
                        <div className="twitter-footer-comment">
                            <i class="far fa-comment"></i>
                            <p>
                                20
                            </p>
                        </div>
                    </div>
                   
                </div>
            </Container>
        </>
    );
};

export default TwitterNews;


