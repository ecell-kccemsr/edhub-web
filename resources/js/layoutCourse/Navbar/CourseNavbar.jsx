import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Row, Col, Button, FormGroup, Label, Input, Modal } from "reactstrap";
import { action, useStoreActions, useStoreState } from "easy-peasy";
import http from "../../utils/http";

//Components
import Guide1 from "../../guide/Guide1";
import Guide2 from "../../guide/Guide2";
import Guide3 from "../../guide/Guide3";
import Guide4 from "../../guide/Guide4";
import Guide5 from "../../guide/Guide5";
//dummyData
import { navDummyData, recommendedCourse } from "./navDummyData";
//images
import edhub1 from "../../Images/landingpage/Edhub-1.png";
import user from "../../Images/landingpage/user.png";
import cartNotification from "../../Images/landingpage/cartNotification.png";
import bookmark from "../../Images/landingpage/bookmark.png";
import provider from "../../Images/landingpage/provider.png";

const CourseNavbar = props => {
    const [modal, setModal] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [step, setStep] = useState(1);
    const [categories, setCategory] = useState([]);
    const user = useStoreState(state => state.user);
    const [modalVals, setModalVals] = useState({
        category: "",
        subcategory: "",
        min: "",
        max: "",
        courseType: "",
        difficulty: "",
        language: ""
    });

    useEffect(() => {
        http
            .get("courses/categories")
            .then(res => {
                setCategory(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const toggle = () => {
        setModal(!modal);
        setStep(1);
    };

    const nextStep = () => setStep(prev => prev + 1);

    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = () => {
        setModal(false);
        setRedirect(true);
    };

    const handleChange = () => {
        localStorage.clear();
    };

    const currentModalForm = step => {
        switch (step) {
            case 1:
                return (
                    <>
                        <Guide1
                            nextStep={nextStep}
                            categories={categories}
                            setModalVals={setModalVals}
                            modalVals={modalVals}
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <Guide2
                            nextStep={nextStep}
                            setModalVals={setModalVals}
                            modalVals={modalVals}
                        />
                    </>
                );
            case 3:
                return (
                    <>
                        <Guide3
                            nextStep={nextStep}
                            setModalVals={setModalVals}
                            modalVals={modalVals}
                        />
                    </>
                );
            case 4:
                return (
                    <>
                        <Guide4
                            nextStep={nextStep}
                            setModalVals={setModalVals}
                            modalVals={modalVals}
                        />
                    </>
                );
            case 5:
                return (
                    <>
                        <Guide5
                            handleSubmit={handleSubmit}
                            setModalVals={setModalVals}
                            modalVals={modalVals}
                        />
                    </>
                );
            default:
                console.log("This is a multi-step form built with React.");
        }
    };

    if (redirect == true) {
        return (
            <Redirect
                to={{
                    pathname: "/course-category",
                    state: { modalValues: modalVals }
                }}
            />
        );
    }
    return (
        <>
            <Modal
                isOpen={modal}
                toggle={toggle}
                className="guide-modal-container"
            >
                <button className="close-modal-btn" onClick={toggle}>
                    X
                </button>
                <div className="guide-modal">
                    <hr className="modal-hr" />
                    <Row>
                        <Col sm="12" md="3" className="text-center">
                            <b>
                                Step <br />
                                <span className="guide-modal-step">
                                    {step} of 5
                                </span>
                                <div className="guide-modal-step-dot">
                                    <span
                                        style={{
                                            color: `${
                                                step >= 1
                                                    ? "#1f1f1e"
                                                    : "#808080"
                                            }`
                                        }}
                                    >
                                        &#8226;
                                    </span>
                                    <span
                                        style={{
                                            color: `${
                                                step >= 2
                                                    ? "#1f1f1e"
                                                    : "#808080"
                                            }`
                                        }}
                                    >
                                        &#8226;
                                    </span>
                                    <span
                                        style={{
                                            color: `${
                                                step >= 3
                                                    ? "#1f1f1e"
                                                    : "#808080"
                                            }`
                                        }}
                                    >
                                        &#8226;
                                    </span>
                                    <span
                                        style={{
                                            color: `${
                                                step >= 4
                                                    ? "#1f1f1e"
                                                    : "#808080"
                                            }`
                                        }}
                                    >
                                        &#8226;
                                    </span>
                                    <span
                                        style={{
                                            color: `${
                                                step >= 5
                                                    ? "#1f1f1e"
                                                    : "#808080"
                                            }`
                                        }}
                                    >
                                        &#8226;
                                    </span>
                                </div>
                            </b>
                        </Col>
                        <Col sm="12" md="9">
                            <h4 className="guide-modal-title">
                                Let us guide you !
                            </h4>
                        </Col>
                    </Row>
                    <h5 className="guide-modal-subtitle">
                        Select according to your requirement
                    </h5>
                    {currentModalForm(step)}
                </div>
            </Modal>
            <nav className="navbar course-navbar navbar-expand-lg">
                <div className="container" >
                    <Link className="navbar-brand" to="/landingPage">
                        <img src={edhub1} alt="Eduhub" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#main_nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link courseNavLink dropdown-toggle megamenu-btn"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    Courses
                                </a>
                                <ul className="dropdown-menu">
                                    {categories &&
                                        categories.map(navl => {
                                            let ismegamenu = false;
                                            if (
                                                navl.sub_categories.length > 0
                                            ) {
                                                ismegamenu = true;
                                            }
                                            return (
                                                <li
                                                    className={`${
                                                        ismegamenu
                                                            ? "has-megasubmenu"
                                                            : ""
                                                    }`}
                                                    key={navl?.id}
                                                >
                                                    <Link
                                                        className="dropdown-item d-flex align-items-center"
                                                        to={`/course-category?q=${navl.name}`}
                                                    >
                                                        <span className="flex-fill">
                                                            {navl.name}
                                                        </span>
                                                        {ismegamenu ? (
                                                            <i className="fas fa-chevron-right"></i>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </Link>
                                                    {ismegamenu && (
                                                        <div className="megasubmenu dropdown-menu">
                                                            <ul className="list-unstyled">
                                                                {navl.sub_categories.map(
                                                                    child => {
                                                                        let ismegamenu2 = false;
                                                                        if (
                                                                            child
                                                                                .course_topics
                                                                                .length >
                                                                            0
                                                                        ) {
                                                                            ismegamenu2 = true;
                                                                        }
                                                                        return (
                                                                            <li
                                                                                className={`${
                                                                                    ismegamenu2
                                                                                        ? "has-megasubmenu-2"
                                                                                        : ""
                                                                                }`}
                                                                                key={
                                                                                    child?.id
                                                                                }
                                                                            >
                                                                                <Link
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    to={`/course-category?q=${child.name}`}
                                                                                >
                                                                                    <span className="flex-fill">
                                                                                        {
                                                                                            child.name
                                                                                        }
                                                                                    </span>
                                                                                    {ismegamenu2 ? (
                                                                                        <i className="fas fa-chevron-right"></i>
                                                                                    ) : (
                                                                                        ""
                                                                                    )}
                                                                                </Link>
                                                                                {ismegamenu2 && (
                                                                                    <div className="megasubmenu-2 dropdown-menu">
                                                                                        <Row>
                                                                                            <Col
                                                                                                sm="12"
                                                                                                md="6"
                                                                                            >
                                                                                                <ul className="list-unstyled">
                                                                                                    {child.course_topics.map(
                                                                                                        subc => {
                                                                                                            return (
                                                                                                                <li
                                                                                                                    key={
                                                                                                                        subc?.id
                                                                                                                    }
                                                                                                                >
                                                                                                                    <Link
                                                                                                                        className="dropdown-item"
                                                                                                                        to={`/course-category?q=${subc.name}`}
                                                                                                                    >
                                                                                                                        {
                                                                                                                            subc.name
                                                                                                                        }
                                                                                                                    </Link>
                                                                                                                </li>
                                                                                                            );
                                                                                                        }
                                                                                                    )}
                                                                                                </ul>
                                                                                            </Col>
                                                                                            <Col
                                                                                                sm="12"
                                                                                                md="6"
                                                                                            >
                                                                                                <h6 className="recommened-header">
                                                                                                    Related
                                                                                                    Degrees
                                                                                                </h6>
                                                                                                <hr className="recommened-header-hr" />
                                                                                                {recommendedCourse.map(
                                                                                                    r => (
                                                                                                        <div
                                                                                                            className="recommended-course-navsection"
                                                                                                            key={
                                                                                                                r?.id
                                                                                                            }
                                                                                                        >
                                                                                                            <img
                                                                                                                src={
                                                                                                                    provider
                                                                                                                }
                                                                                                                alt=""
                                                                                                            />
                                                                                                            <div className="text-container">
                                                                                                                <h6>
                                                                                                                    {
                                                                                                                        r.provider
                                                                                                                    }
                                                                                                                </h6>
                                                                                                                <p>
                                                                                                                    {
                                                                                                                        r.name
                                                                                                                    }
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )
                                                                                                )}
                                                                                            </Col>
                                                                                        </Row>
                                                                                    </div>
                                                                                )}
                                                                            </li>
                                                                        );
                                                                    }
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                            );
                                        })}
                                </ul>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto" >
                            <li className="nav-item">
                                <Link className="nav-link courseNavLink" to="#">
                                    News
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link courseNavLink dropdown-toggle"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    Govt. Jobs
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/govermentjobs"
                                        >
                                            Govt Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/questionpaper"
                                        >
                                            Question Paper
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/exam/calendar"
                                        >
                                            Exam Calendar
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link courseNavLink"
                                    to="#"
                                    onClick={toggle}
                                >
                                    Guide 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link courseNavLink" to="#">
                                    Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link courseNavLink-1"
                                    to="/profile/wishlist"
                                >
                                    <img src={bookmark} alt="" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link courseNavLink"
                                    to="/profile/basic"
                                >
                                    <img src={user?.avatar} alt="User" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link courseNavLink" to="/">
                                    <Button
                                        outline
                                        color="danger"
                                        onClick={() => handleChange()}
                                    >
                                        Logout
                                    </Button>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default CourseNavbar;
