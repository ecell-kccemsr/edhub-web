import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Button,
    FormGroup,
    Input} from "reactstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ReactPaginate from "react-paginate";
function News() {
    const [categories, setCategory] = useState([]);
    const [news, setNews] = useState([news?.slice(0, 50)]);
    const [trending, setTrending] = useState([]);
    
    useEffect(() => {
        axios
            .get("/api/news/categories")
            .then(res => {
                setCategory(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("/api/news")
            .then(res => {
                setNews(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("/api/news/trending")
            .then(res => {
                setTrending(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
    const handleSubmit = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        axios
            .post("/api/register_for_free_updates/add", data)
            .then(res => {
                toast.success("You have registered successfully !");
                form.reset();
            })
            .catch(err => toast.error(err.response.data.message));
    };
//pagination
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10;
    const pagesVisited = pageNumber * newsPerPage;
  
    const displayNews = news
      .slice(pagesVisited, pagesVisited + newsPerPage)
                                {news && news.map(news => {
                                    return (
                                        <>
                <div
                    className="d-flex justify-content-between"
                    key={news.id}
                >
                    <div>
                        <Link
                            className="news-title"
                            to={`/news/${news.category.slug}/${news.subcategory.slug}/${news.slug}`}
                        >
                            {news.title}
                        </Link>

                        <p className="news-description">
                            {news?.description
                                .length > 300
                                ? news?.description.slice(
                                      0,
                                      300
                                  ) + "..."
                                : news?.description}
                        </p>
                    </div>
                    <img
                        src={news.image}
                        alt=""
                        className="category-information-image"
                    />
                </div>
                <hr className="news-hr" />
            </>
                                    );
            
                                })}   
                                const pageCount = Math.ceil(news.length / newsPerPage);

                                const changePage = ({ selected }) => {
                                  setPageNumber(selected);
                                };   

    return (
        <div>
            <ToastContainer />
            <section className="select-news-by-category">
                {/* Breadcrumb */}
                <BreadCrumb
                    navData={[
                        {
                            title: "Home",
                            link: "/"
                        },
                        {
                            title: "News",
                            link: "/news",
                            active: true
                        }
                    ]}
                />{" "}
                {/* Title */}
                <div className="news-title">
                    <h5>NEWS</h5>
                </div>
                <hr className="news-hr" />
                {/* News Category */}
                <Row>
                    <Col sm="6" md={{ size: 8, offset: 0 }} lg="9">
                        <div className="category-left-section">
                            <h6 className="select-by-category-header text-center">
                                Select News By Category
                            </h6>
                            <div className="select-news-by-category-btn-section">
                                <div className="d-flex flex-wrap justify-content-center">
                                    {categories.map(category => (
                                        <Link
                                            to={`/news/${category.slug}`}
                                            key={category.id}
                                            className="category-btn text-center"
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <section className="category-information-section">
                                <div className="category-information-sub-section">
                                {displayNews}
                                 <ReactPaginate
                                  previousLabel={"Previous"}
                                   nextLabel={"Next"}
                                   pageCount={pageCount}
                                   onPageChange={changePage}
                                   containerClassName={"paginationBttns"}
                                   previousLinkClassName={"previousBttn"}
                                   nextLinkClassName={"nextBttn"}
                                   disabledClassName={"paginationDisabled"}
                                   activeClassName={"paginationActive"}
                                 />
                                 
                                </div>
                            </section>
                        </div>
                    </Col>
                    {/* REGISTER Form */}
                    <Col className="" sm="3" md="4" lg="3">
                        <div className="registration-section">
                            <h5
                                style={{ padding: "10px", textAlign: "center" }}
                            >
                                REGISTER FOR FREE UPDATES
                            </h5>
                            <form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input
                                        type="name"
                                        name="name"
                                        id="exampleName"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="number"
                                        name="mobile_no"
                                        placeholder="Phone Number"
                                    />
                                </FormGroup>
                                <Button
                                    className="registration-btn"
                                    type="submit"
                                    value="submit"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
                        <br />
                        {/* Trending News */}
                        <div className="trending-section-container">
                            <h4 className="trending-section">Trending</h4>
                            {trending && trending.length == 0 && (
                                <p>No Trending News</p>
                            )}
                            {trending &&
                                trending.map(news => (
                                    <div>
                                        <div key={news.id}>
                                            <div>
                                                <Link
                                                    to={`/news/${news.category.slug}/${news.subcategory.slug}/${news.slug}`}
                                                    className="news-title"
                                                >
                                                    {news.title}
                                                </Link>
                                                <br />

                                                <p className="news-description">
                                                    {news.description.length >
                                                    100
                                                        ? news.description.slice(
                                                              0,
                                                              100
                                                          ) + "..."
                                                        : news.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
