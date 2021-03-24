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
import { toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
function Questionpaper2(props) {
    const [quespaper, setQuespaper] = useState([]);
    const [quespapervar, setQuespaperVar] = useState([]);
    const [loading,setLoading] = useState({
        quespaper:true
    })
    useEffect(() => {
        const { category_slug } = props.match.params;
        axios.get("/api/questionpapers/categories").then(res => {
            const cats = res.data.data.filter(c => c.slug == category_slug);
            if (cats.length > 0) {
                axios
                    .get(`/api/questionpapers?category_id=${cats[0].id}`)
                    .then(res => {
                        setQuespaper(res.data.data);
                        setQuespaperVar(res.data.data);
                        setLoading({...loading,quespaper:false})
                    })

                    .catch(err => {
                        console.log(err);
                    });
            }
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
                form.reset()
            })
            .catch(err =>  toast.error(err.response.data.message));
    };
    const filterQuestionPaper = year => {
        let questionpaper = [];
        quespaper.filter(quesp => {
            if (quesp.year == year) questionpaper.push(quesp);
        });
        setQuespaperVar(questionpaper);
    };

    return (
        <>
          <ToastContainer />
            <div className="questionpapear-section">
                <Row>
                    {/* Category by year */}
                    <Col
                        xs={{ size: 12, order: 1 }}
                        md={{ size: 6, order: 2 }}
                        lg={{ size: 2, order: 1 }}
                        className="questionpaper-filter-section "
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
                                <h4 className="questionpaper-subcategory">
                                    2017
                                </h4>
                            </li>
                            <li>
                                <h4 className="questionpaper-subcategory">
                                    2016
                                </h4>
                            </li>
                            <li>
                                <h4 className="questionpaper-subcategory">
                                    2015
                                </h4>
                            </li>
                        </List>
                    </Col>
                    {/* Question Papers News */}
                    <Col
                        xs={{ size: 12, order: 2 }}
                        md={{ size: 12, order: 1 }}
                        lg={{ size: 7, order: 2 }}
                        className="mb-3"
                    >
                        <div className="questionpaper-main-section">
                            <h5 className="questionpaper-main-header">
                                Question Papers
                            </h5>
                            {quespapervar && quespapervar.length==0 && loading.quespaper==false && <h4 className="text-center py-3">No Question Papers Found</h4> }
                            {quespapervar && quespapervar.length==0 && loading.quespaper==true && <h4 className="text-center py-3">Loading Question Papers</h4> }
                            {quespapervar &&
                                quespapervar.map(ques => {
                                    return (
                                        <div
                                            className="questionpaper-news-details"
                                            style={{ color: "blue" }}
                                            key={ques.id}
                                        >
                                            <h5>
                                                <a
                                                    href={ques?.url}
                                                    target="_blank"
                                                    style={{ color: "blue" }}
                                                    download
                                                >
                                                    {ques?.title}
                                                    <h6>{ques?.description.length>200?(ques?.description.slice(0,200)+"..."):(ques?.description)}</h6>
                                                </a>
                                            </h5>
                                        </div>
                                    );
                                })}
                        </div>
                    </Col>

                    <Col
                        xs={{ size: 12, order: 3 }}
                        md={{ size: 6, order: 3 }}
                        lg={{ size: 3, order: 3 }}
                    >
                        {/* REGISTER FORM */}
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
                                        id="number"
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

export default Questionpaper2;
