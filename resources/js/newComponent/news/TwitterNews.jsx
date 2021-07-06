import React from "react";
import { Container } from "reactstrap";
const TwitterNews = ({ data }) => {
    return (
        <>
            <Container style={{ boxShadow: "none" }} className="auth">
                <a
                    href={data?.tweet_url}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                >
                    <div className="twitter">
                        <div className="twitter-header">
                            <img
                                src={data?.author_profile_image}
                                alt="profile img"
                            />
                            <div>
                                <p style={{ color: "#333333" }}>
                                    <strong>{data?.author_name}</strong>
                                </p>
                                <p style={{ color: "#333333" }}>
                                    {data?.author_username}
                                </p>
                            </div>
                        </div>
                        <div className="twitter-body">
                            <p className="twitter-body-text">{data?.body}</p>
                            {/* <img src="https://i.redd.it/6onq25y0sh311.jpg" alt="Source Image" /> */}
                        </div>
                        <div className="twitter-date-provider">
                            <p className="twiiter-date">{data?.published_at}</p>
                            <p
                                className="twitter-provider"
                                style={{ color: "#3d76f4" }}
                            >
                                {data?.tweet_source}
                            </p>
                        </div>
                        <div className="twitter-footer">
                            <div className="twitter-footer-like">
                                <i class="far fa-heart"></i>
                                <p>{data?.like_count}</p>
                            </div>
                            <div className="twitter-footer-retweet">
                                <i class="fas fa-retweet"></i>
                                <p>{data?.retweet_count}</p>
                            </div>
                            <div className="twitter-footer-comment">
                                <i class="far fa-comment"></i>
                                <p>{data?.quote_count}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </Container>
        </>
    );
};

export default TwitterNews;
