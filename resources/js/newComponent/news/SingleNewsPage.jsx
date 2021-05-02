import React, { useEffect, useState } from "react";
import { Container, Row, Col, Input, FormGroup } from "reactstrap";
import singleNewsImg from "../../Images/news/singleNews.png";
import tw from "../../Images/news/twitter.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { useStoreState } from "easy-peasy";
const SingleNewsPage = props => {
    const user = useStoreState(state => state.user);
    const [categorynews, setcategorynews] = useState([]);
    const [relatednews, setRelatedNews] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    let id;
    const { news_slug } = props.match.params;
    useEffect(() => {
        if (news_slug) {
            axios
                .get(`/api/news/${news_slug}`)
                .then(res => {
                    setcategorynews(res.data.data);
                    id = res.data.data?.category.id;
                    axios.get(`/api/news?category_id=${id}`).then(res => {
                        setRelatedNews(res.data.data);
                    });
                })
                .catch(err => {
                    console.log(err);
                });
            getComment(news_slug);
        }
    }, []);

    const handleComment = e => {
        e.preventDefault();
        let data = JSON.stringify({ comment });
        axios
            .post(`/api/blogs/${news_slug}/comments`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    const getComment = blog_slug => {
        axios
            .get(`/api/blogs/${blog_slug}/comments`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className="singlenews-section">
            <Container>
                <Row>
                    <Col sm="12" md="8">
                        <h4 className="singlenewstitle-text">
                            {categorynews?.category?.name}
                        </h4>
                        <div className="singlnews-main-card">
                            <img
                                src={categorynews?.image}
                                alt="Single News Image"
                            />
                            <div className="news-overview-container">
                                <p className="news-tag">
                                    #{categorynews?.tags}
                                </p>
                                <div className="news-interaction-container">
                                    <div className="news-interaction-el">
                                        <i className="far fa-eye"></i>
                                        <span>1.2K</span>
                                    </div>
                                    <div className="news-interaction-el">
                                        <i className="far fa-comment-alt"></i>
                                        <span>1.2K</span>
                                    </div>
                                    <div className="news-interaction-el">
                                        <i className="fas fa-share-alt"></i>
                                        <span>500</span>
                                    </div>
                                </div>
                            </div>
                            <h5>{categorynews?.title}</h5>
                            <h6 className="news-author">
                                By {categorynews?.published_by}
                            </h6>
                            <h6 className="news-published-date">
                                <Moment format="D MMM YYYY" withTitle>
                                    {categorynews?.published_at}
                                </Moment>
                            </h6>
                            <p className="news-content">
                                {categorynews.description}
                            </p>
                            {user ? (
                                <>
                                    {" "}
                                    <h4 className="comment-titletext">
                                        Comments
                                    </h4>
                                    <form onSubmit={handleComment}>
                                        <Row>
                                            <Col sm="12" md="8" lg="9">
                                                <FormGroup>
                                                    <Input
                                                        type="text"
                                                        name="comment"
                                                        onChange={e =>
                                                            setComment(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12" md="4" lg="3">
                                                <button type="submit">
                                                    POST
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>{" "}
                                </>
                            ) : (
                                <Link to={"/login"}>Click here to login</Link>
                            )}
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
                                    {relatednews &&
                                        relatednews.length > 0 &&
                                        relatednews.map(r => (
                                            <>
                                                <p className="tag">
                                                    #{r?.tags}
                                                </p>
                                                <a href={`/news/${r?.slug}`}>
                                                    <h4>{r?.title}</h4>
                                                </a>
                                                <p
                                                    className="author"
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            r?.details.length >
                                                            100
                                                                ? r?.details.slice(
                                                                      0,
                                                                      100
                                                                  ) + "..."
                                                                : r?.details
                                                    }}
                                                ></p>
                                            </>
                                        ))}
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
