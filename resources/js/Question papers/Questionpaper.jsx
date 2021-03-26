import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    List,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function Questionpaper(props) {
    const [subQuespapercategory, setSubQuespapercategory] = useState([]);
    const [quespaper, setQuespaper] = useState([]);
    const [quespapervar, setQuespaperVar] = useState([]);
    const [loading, setLoading] = useState({
        quespaper: true
    });
    useEffect(() => {
        axios
            .get("/api/questionpapers")
            .then(res => {
                setQuespaper(res.data.data);
                setQuespaperVar(res.data.data);
                setLoading({ ...loading, quespaper: false });
            })

            .catch(err => {
                console.log(err);
            });

        axios
            .get("/api/questionpapers/categories")
            .then(res => {
                setSubQuespapercategory(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const filterQuestionPaper = year => {
        axios.get(`/api/questionpapers?year=${year}`).then(res => {
            setQuespaperVar(res.data.data);
        });
    };

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
    return (
        <>
            <ToastContainer />
            <div className="questionpapear-section">
                {/* Title */}
                <h3 className="questionpapaer-section-header text-center">
                    Select Exams by Category
                </h3>
                <Row>
                    {/* Category by year */}
                    <Col
                        xs={{ size: 12, order: 1 }}
                        md={{ size: 6, order: 2 }}
                        lg={{ size: 2, order: 1 }}
                        className="questionpaper-filter-section"
                    >
                        <h5 className="questionpaper-filter-header">
                            Search by year
                        </h5>
                        <List
                            type="unstyled"
                            className="questionpaper-filter-ul"
                        >
                            <li>
                                <h4
                                    className="questionpaper-subcategory"
                                    onClick={() => filterQuestionPaper(2021)}
                                >
                                    2021
                                </h4>
                            </li>
                            <li>
                                <h4
                                    className="questionpaper-subcategory"
                                    onClick={() => filterQuestionPaper(2020)}
                                >
                                    2020
                                </h4>
                            </li>
                            <li>
                                <h4
                                    className="questionpaper-subcategory"
                                    onClick={() => filterQuestionPaper(2019)}
                                >
                                    2019
                                </h4>
                            </li>
                            <li>
                                <h4
                                    className="questionpaper-subcategory"
                                    onClick={() => filterQuestionPaper(2018)}
                                >
                                    2018
                                </h4>
                            </li>
                            <li>
                                <h4
                                    className="questionpaper-subcategory"
                                    onClick={() => filterQuestionPaper(2017)}
                                >
                                    2017
                                </h4>
                            </li>
                            <li>
                                <h4
                                    className="questionpaper-subcategory"
                                    onClick={() => filterQuestionPaper(2016)}
                                >
                                    2016
                                </h4>
                            </li>
                            <li>
                                <h4
                                    className="questionpaper-subcategory"
                                    onClick={() => filterQuestionPaper(2015)}
                                >
                                    2015
                                </h4>
                            </li>
                        </List>
                    </Col>
                    {/* Question Papers Category */}
                    <Col
                        xs={{ size: 12, order: 2 }}
                        md={{ size: 12, order: 1 }}
                        lg={{ size: 7, order: 2 }}
                    >
                        <div className="questionpaper-main-section">
                            <h5 className="questionpaper-main-header">
                                Question Papers
                            </h5>
                            <div className="questionpaper-topics">
                                <div className="d-flex align-items-center justify-content-center flex-wrap questionpaper-topic-container">
                                    {subQuespapercategory &&
                                        subQuespapercategory.map((q, key) => (
                                            <Button
                                                className="questionpaper-category-btn mt-2"
                                                key={key}
                                            >
                                                <Link
                                                    to={`/questionpaper/${q?.slug}`}
                                                >
                                                    {q?.name}
                                                </Link>
                                            </Button>
                                        ))}
                                </div>
                            </div>
                            {quespapervar &&
                                quespapervar.length == 0 &&
                                loading.quespaper == false && (
                                    <h4 className="text-center py-3">
                                        No Question Papers Found
                                    </h4>
                                )}
                            {quespapervar &&
                                quespapervar.length == 0 &&
                                loading.quespaper == true && (
                                    <h4 className="text-center py-3">
                                        Loading Question Papers
                                    </h4>
                                )}
                            {quespapervar &&
                                quespapervar.map((q, key) => (
                                    <div className="questionpaper-news-details">
                                        <h5>
                                            <Link to={q?.link}>{q?.title}</Link>
                                        </h5>
                                        <h6>
                                            {q?.description.slice(0, 200) +
                                                "..."}
                                        </h6>
                                    </div>
                                ))}
                        </div>
                    </Col>
                    {/* REGISTER FORM */}
                    <Col
                        xs={{ size: 12, order: 3 }}
                        md={{ size: 6, order: 3 }}
                        lg={{ size: 3, order: 3 }}
                    >
                        <div className="questionpaper-register-form-section">
                            <h5>REGISTER FOR FREE UPDATES</h5>
                            <form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
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
                                <button
                                    className="btn-submit-questionpaper"
                                    type="submit"
                                    value="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Questionpaper;
