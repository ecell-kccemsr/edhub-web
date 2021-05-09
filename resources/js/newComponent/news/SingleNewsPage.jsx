import React, { useEffect, useState } from "react";
import { Container, Row, Col, Input, FormGroup } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Collapse } from "reactstrap";
import { useStoreState } from "easy-peasy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const SingleNewsPage = props => {
    const user = useStoreState(state => state.user);
    const [categorynews, setcategorynews] = useState([]);
    const [relatednews, setRelatedNews] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [commentPage, setCommentPage] = useState({
        current_page: 1,
        last_page: null
    });
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    let id;
    const { news_slug } = props.match.params;
    useEffect(() => {
        if (news_slug) {
            axios
                .get(`/api/news/${news_slug}`)
                .then(res => {
                    setLoading(false)
                    setcategorynews(res.data.data);
                    id = res.data.data?.category.id;
                    axios.get(`/api/news?category_id=${id}`).then(res => {
                        setRelatedNews(res.data.data);
                    });
                })
                .catch(err => {
                    setLoading(false)
                    setError(true)
                });
            getComment(news_slug);
        }
    }, []);

    const handleComment = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = JSON.stringify({ comment });
        axios
            .post(`/api/news/${news_slug}/comments`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>{
                toast.success("Comment Added Successfully !");
                form.reset();
            })
            .catch(err => console.log(err));
    };

    const getComment = (news_slug, pageNumber = 1) => {
        axios
            .get(`/api/news/${news_slug}/comments?page=${pageNumber}`)
            .then(res => {
                let combinedArr = [...comments,...res.data.data]
                setComments(combinedArr);
                setCommentPage({
                    current_page: res.data.meta.current_page,
                    last_page: res.data.meta.last_page
            });
        })
            .catch(err => console.log(err));
    };
    const handleLike = e => {
        e.preventDefault();
        if (user) {
            axios
                .post(`/api/news/${news_slug}/like/toggle`)
                .then(res => {
                    setcategorynews({
                        ...categorynews,
                        total_likes: res.data.data.total_likes
                    });
                })
                .catch(err => console.log(err));
        }
    };

    
    if(loading){
        return (
            <>
            <div className="singlenews-section">
                <Container>
                    <h4 className="text-center">Loading News...</h4>
                </Container>
            </div>
            </>
        )
    }


    return (
        
        <div className="singlenews-section">
        <ToastContainer />
            <Container>
            {!loading && error && (
             <>
             <Container>
                     <h4 className="text-center">Something went wrong 🙁</h4>
                 </Container>
             </>
        )}
         {
            !loading && !error && (
                <Row>
                    <Col sm="12" md="8">
                        <h4 className="singlenewstitle-text">
                            {categorynews?.category?.name}
                        </h4>
                        <div className="singlnews-main-card">
                            {
                              categorynews && (
                                    <img
                                        src={categorynews?.image}
                                        alt="Single News Image"
                                    />
                                )
                            }
                            <div className="news-overview-container">
                                <p className="news-tag">
                                    #{categorynews?.tags}
                                </p>
                                <div className="news-interaction-container">
                                    <div className="news-interaction-el">
                                        <img
                                            src="/images/blogs/like.png"
                                            alt="Like"
                                            onClick={handleLike}
                                        />
                                        <b>{categorynews?.total_likes}</b>
                                    </div>
                                    <div className="news-interaction-el">
                                        <img src="/images/blogs/comment.png" alt="Comments" />
                                        <span>{comments.length}</span>
                                    </div>
                                    <div className="news-interaction-el-1">
                                        <img
                                            src="/images/news/share.png"
                                            alt="Share"
                                            onClick={toggle}
                                        />
                                        <Collapse isOpen={isOpen}>
                                            <div className="social-container">
                                                <a
                                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                                                    target="_blank"
                                                >
                                                    <i className="fab fa-linkedin" style={{color:"#2867B2"}}></i>
                                                </a>
                                                <a
                                                    href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
                                                    target="_blank"
                                                >
                                                    
                                                    <i className="fab fa-facebook" style={{color:"#3C5A99"}}></i>
                                                </a>
                                                <a
                                                    href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                                                    target="_blank"
                                                >
                                                    
                                                    <i className="fab fa-twitter" style={{color:"#1DA1F2"}}></i>
                                                </a>
                                                <a
                                                    href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                                                    target="_blank"
                                                >
                                                    
                                                    <i className="fab fa-whatsapp" style={{color:"#49C858"}}></i>
                                                </a>
                                            </div>
                                        </Collapse>
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
                            <>
                                
                                <h4 className="comment-titletext">Comments</h4>
                                {user ? (
                                    <form onSubmit={handleComment}>
                                        <Row>
                                            <Col
                                                sm="12"
                                                md={{ size: 6, offset: 0 }}
                                                lg="9"
                                            >
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
                                                <button
                                                    type="submit"
                                                    className="comment-post-btn"
                                                >
                                                    POST
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                ) : (
                                    <div className="text-center">
                                        <button>
                                        <Link
                                            to={"/login"}
                                            className="text-white"
                                        >
                                            Login to comment
                                        </Link>
                                        </button>
                                    </div>
                                )}
                            </>
                            {
                                comments &&
                                comments.length>0 && 
                                <div className="user-comment-section-news">
                                    <h4 className="user-comments-news">
                                        User Comments
                                    </h4>

                                    <div className="container comment-section-news">
                                        {comments &&
                                            comments.length>0 &&
                                            comments.map(c => {
                                                return (
                                                    <div className="comments-news">
                                                       <img src={c?.user?.avatar} alt="User" />
                                                        <div>
                                                            <b className="mb-0">{c?.user?.name}</b>
                                                            <p className="mb-0">{c?.comment}</p>
                                                        </div>
                                                    </div>
                                            );
                                            
                                        })}

                            {commentPage?.current_page < commentPage?.last_page && (
                            <button
                                onClick={() =>
                                    getComment(
                                        news_slug,
                                        commentPage.current_page + 1
                                    )
                                }
                            >
                                Load More Comments
                            </button>
                        )}
                                    </div>
                                </div>
                                
                            }
                            
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        {/* <h4 className="singlenewstitle-text">
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
                        <br /> */}
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
                )}
            </Container>
        </div>
    );
};

export default SingleNewsPage;
