import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Container,
    Card,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    List,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";

function Newsdetails(props) {
    const [categorynews, setcategorynews] = useState([]);
    const [subcategory, setsubcategory] = useState([]);
    const [newsatglance, setNewsAtGlance] = useState([]);
    useEffect(() => {
        // console.log(props);
        const { category_slug } = props.match.params;
        let id, sub_id;
        axios
            .get(`http://localhost:8000/api/news/${category_slug}`)

            .then(res => {
                setcategorynews(res.data.data);
                // console.log(res);
                id = res.data.data?.category.id;
                sub_id = res.data.data?.subcategory.id;

                axios
                    .get(
                        `http://localhost:8000/api/news/sub_categories?category_id=${id}`
                    )
                    .then(res => {
                        // console.log(res);
                        setsubcategory(res.data.data);
                    });

                axios
                    .get(
                        `http://localhost:8000/api/news?subcategory_id=${sub_id}`
                    )
                    .then(res => {
                        // console.log(res);
                        setNewsAtGlance(res.data.data);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div className="container news-details">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" style={{ marginTop: "30px" }}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item ">
                        <a href="#" className="href-government">
                            HOME
                        </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <a href="" className="href-government">
                            NEWS
                        </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <a href="" className="href-government">
                            BUSINESS
                        </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <a href="" className="href-government">
                            ENTREPRENEURSHIP
                        </a>
                    </li>
                </ol>
            </nav>
            <Row>
                {/* News Hero Section */}
                <Col md="8">
                    <div className="newsdeatils-hero">
                        <div className="newsdetails-title">
                            <h3>
                                <strong>{categorynews.title}</strong>
                            </h3>
                        </div>
                        <img
                            src={categorynews.image}
                            alt="news"
                            className="img-newsdetails"
                        />
                        <div className="newsdetails-detail">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: categorynews.details
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* News at glance */}
                    <div className="newsdeatils-hero">
                        <h5>News at glance</h5>
                        <Row xs="1" md="12">
                            <Col>
                                {newsatglance && newsatglance.length == 0 && (
                                    <h4>No news at glance news</h4>
                                )}

                                {newsatglance &&
                                    newsatglance.length > 0 &&
                                    newsatglance.map(newsatglance => (
                                        <div className="newsdetails-glance">
                                            <img
                                                src={newsatglance.image}
                                                alt="news1"
                                                className="newdetails-glance-image"
                                            />

                                            <h5 style={{ marginLeft: "15px" }}>
                                                <a
                                                    style={{
                                                        color: "black",
                                                        textDecoration: "none"
                                                    }}
                                                    href={`/news/details/view/${newsatglance.slug}`}
                                                >
                                                    {" "}
                                                    {newsatglance.title}
                                                </a>{" "}
                                                <br />{" "}
                                                {newsatglance.description.slice(
                                                    0,
                                                    50
                                                ) + "..."}
                                            </h5>
                                        </div>
                                    ))}
                            </Col>
                        </Row>
                        <div className="view">VIEW ALL</div>
                    </div>
                </Col>
                <Col md="4">
                    {/* REGISTER FORM */}
                    <div className="form-newsdetails">
                        <h5 className="form-title-newsdetail">
                            REGISTER FOR FREE UPDATES
                        </h5>
                        <Form>
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
                                    name="number"
                                    id="exampleNumber"
                                    min="1"
                                    max="10"
                                    placeholder="Phone Number"
                                />
                            </FormGroup>
                            <Button className="registration-btn">Submit</Button>
                        </Form>
                    </div>
                    {/* Trending News */}
                    <div className="trending-section-container mt-4">
                        <h4 className="trending-section">Trending</h4>
                        <div>
                            <div className="">
                                <div>
                                    <h6 className="news-title">
                                        RBI Recruitment 2021 Notification for
                                        Various Non CSG {""}
                                    </h6>
                                    <p className="news-description">
                                        Posts,Online Application begins from 23
                                        Feb Onwards, Salary upto 77208/-
                                    </p>
                                </div>
                                <div>
                                    <h6 className="news-title">
                                        RBI Recruitment 2021 Notification for
                                        Various Non CSG {""}
                                    </h6>
                                    <p className="news-description">
                                        Posts,Online Application begins from 23
                                        Feb Onwards, Salary upto 77208/-
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="text-center">
                            <Button className="trending-section-btn">
                                View All
                            </Button>
                        </div>
                    </div>
                    {/* <div>
                        {subcategory && subcategory == 0 && (
                            <div>No Subcategories</div>
                        )}
                        {subcategory &&
                            subcategory.length > 0 &&
                            subcategory.map(subcategory => (
                                <Link
                                    to={`/news/view/subcategory/${subcategory?.id}`}
                                    key={subcategory.id}
                                    className="category-btn text-center"
                                >
                                    {subcategory.name}
                                </Link>
                            ))}
                    </div> */}
                    <div className="select-news-by-category-btn-section-1">
                        <div className="d-flex flex-wrap justify-content-center">
                            {subcategory && subcategory == 0 && (
                                <div>No Subcategories</div>
                            )}
                            {subcategory &&
                                subcategory.length > 0 &&
                                subcategory.map(subcategory => (
                                    <Link
                                        to={`/news/view/subcategory/${subcategory?.id}`}
                                        key={subcategory.id}
                                        className="category-btn-1 text-center"
                                    >
                                        {subcategory.name}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Newsdetails;
