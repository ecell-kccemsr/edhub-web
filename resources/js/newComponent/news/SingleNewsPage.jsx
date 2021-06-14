import React, { useEffect, useState } from "react";
import { Container, Row, Col, Input, FormGroup, Modal, ModalHeader, ModalBody, Button, Spinner   } from "reactstrap";
import axios from "axios";
import Moment from "react-moment";
import { Collapse } from "reactstrap";
import Login from "../../auth/login/Login";
import PopularChoice from "../../homepage/landingPageComponents/PopularChoice";
import { useStoreState } from "easy-peasy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {Helmet} from "react-helmet";

const SingleNewsPage = props => {
    const user = useStoreState(state => state.user);
    const [categorynews, setcategorynews] = useState([]);
    const [relatednews, setRelatedNews] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [categories, setCategories] = useState([]);
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [course, setCourse] = useState([]);
    const [showComments, setshowComments] = useState(false);
      // Login modal 
      const [modallogin, setModalLogin] = useState(false);
      const toggleLogin = () => setModalLogin(!modallogin);

    const [commentPage, setCommentPage] = useState({
        current_page: 1,
        last_page: null
    });
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    let id;
    let news_id;
    const { news_slug } = props.match.params;
    useEffect(() => {
        if (news_slug) {
            axios
                .get(`/api/news/${news_slug}`)
                .then(res => {
                    setLoading(false)
                    setcategorynews(res.data.data);
                    id = res.data.data?.category.id;
                    news_id = res.data.data?.id;
                    axios.get(`/api/news?category_id=${id}`).then(res => {
                        setRelatedNews(res.data.data);
                    });
                     axios.get(`/api/tweets?news_id=${news_id}`).then(res => {
                        setTweets(res.data.data);
                    });
                })
                .catch(err => {
                    setLoading(false)
                    setError(true)
                });
            getComment(news_slug);
        }
        axios
        .get("/api/news/categories")
        .then(res => {
            setCategories(res.data.data);
        })
        .catch(err => {
            console.log(err);
        });
         
       
    }, []);

    const handleComment = e => {
        if(comment!=""){
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
                setComment("")
            })
            .catch(err => console.log(err));
        }else{
            toast.error("Comment cannot be empty !")
        }
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
                    <h4 className="text-center">Loading News...
                    <Spinner color="danger" />
                    </h4>
                </Container>
            </div>
            </>
        )
    }


    return (
        <>
           <Helmet>
                  <meta name='keywords' content='edhub, news, india, trending, detail' />
                    <meta name="description" content="Detail of blogs in this page" />
                    <meta name='copyright' content='Edhub' />
                    <meta name='language' content='ES' />
             </Helmet>
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
                <>
                <div className=" d-flex justify-content-center flex-wrap mb-3" style={newsNavStyles}>
                  
                  {categories &&
                      categories.length > 0 && (
                          <>
                            <a
                                  className="category-btn-all"
                                  href="/news"
                              >
                                  All
                              </a>
                          {
                              categories.map(c => (
                                  <a 
                                      color="danger"
                                      className="category-buttons-header"
                                         href="/news"
                                  >
                                      {c.name}
                                  </a >
                              ))
                          }
                          </>
                      )    
                  }
              </div>
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
                                                  href={` https://t.me/share/url?url=${window.location.href}`}
                                                  target="_blank"
                                             >
                                                 <i className="fab fa-telegram" style={{color:"#0088CC"}}></i>
                                             </a>
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
                            <p className="news-content"
                            dangerouslySetInnerHTML={{
                                __html: categorynews.details
                            }}
                            >
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
                                                        required
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
                                         <Button className="login-btn-navbar" onClick={toggleLogin}>login</Button>
                                 <Modal isOpen={modallogin} toggle={toggleLogin} className="model">
                                 <ModalHeader toggle={toggleLogin}>Login</ModalHeader>
                                   <ModalBody>
                                    <Login />                                   
                                   </ModalBody>
                                 </Modal>
                                       
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
                                    {!showComments && <button onClick={()=>setshowComments(true)}>Show {comments.length} comments</button>}
                                      {showComments
                                          && <>
                                            {comments &&
                                            comments.length>0 &&
                                            comments.map(c => {
                                                return (
                                                    <>
                                                    <div className="comments-news">
                                                       <img src={c?.user?.avatar} alt="User" />
                                                        <div>
                                                            <b className="mb-0">{c?.user?.name}</b>
                                                            <p className="mb-0">{c?.comment}</p>
                                                        </div>
                                                    </div>
                                                  </>
                                                    
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
                                          </>
                                      }
                                    </div>
                                </div>
                                
                            }
                            
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <h4 className="singlenewstitle-text">
                            Ideas and opinion
                                        </h4>
                                        {tweets.map(data => (
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
                                        ))}
                        
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
                </>
                )}
            </Container>
            {course && (
                    <PopularChoice
                        data={course}
                        title="Banking Exams Courses"
                    />
                )}
        </div>
        </>
    );
};
const newsNavStyles = {
    position:"sticky",
    top:0,
    left:0,
    right:0,
    zIndex:999,
    background:"#FAFAFA"
}

export default SingleNewsPage;
