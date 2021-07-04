import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import {
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import { useHistory } from "react-router";

import { useStoreState } from "easy-peasy";
import http from "../../utils/http";
import Login from "../../auth/login/Login";
import signUp from "../../auth/register/Register";
//Components
import Guide1 from "../../guide/Guide1";
import Guide2 from "../../guide/Guide2";
import Guide3 from "../../guide/Guide3";
import Guide4 from "../../guide/Guide4";
import Guide5 from "../../guide/Guide5";
//dummyData
import { recommendedCourse } from "./navDummyData";
import Auth from "../../auth/Auth";
import GModal from "./Modal";
//images

const SearchbarDropdown = props => {
    const {
        options,
        onInputChange,
        searchText,
        handleSearch,
        setShowMegaMenu
    } = props;
    const ulRef = useRef();
    const inputRef = useRef();
    const history = useHistory();

    useEffect(() => {
        inputRef.current.addEventListener("click", event => {
            event.stopPropagation();
            setShowMegaMenu(false);
            ulRef.current.style.display = "flex";
            onInputChange(event);
        });
        document.addEventListener("click", event => {
            ulRef.current.style.display = "none";
        });
    }, []);
    return (
        <div className="search-bar-dropdown">
            <form onSubmit={handleSearch}>
                <input
                    style={{ width: "19rem" }}
                    id="search-bar"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    ref={inputRef}
                    onChange={onInputChange}
                    autoComplete="off"
                />
            </form>

            <ul id="results" className="list-group" ref={ulRef}>
                {options.map((option, index) => {
                    return (
                        <button
                            type="button"
                            key={index}
                            className="list-group-item list-group-item-action"
                        >
                            <p
                                style={{
                                    textTransform: "uppercase",
                                    marginBottom: 0,
                                    fontWeight: 600
                                }}
                            >
                                {option?.type}
                            </p>
                            <a href={`${option?.url}`}>
                                {option?.title.length > 50
                                    ? option?.title.slice(0, 50)
                                    : option?.title}
                            </a>
                        </button>
                    );
                })}
            </ul>
        </div>
    );
};
const CourseNavbar = props => {
    const [options, setOptions] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const history = useHistory();
    const onInputChange = event => {
        setSearchText(event.target.value);
        axios
            .get(`/api/search?search=${event.target.value}`)
            .then(res => setOptions(res.data))
            .catch(err => console.log(err));
    };

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        if (searchText != "") {
            history.push(`/course-category?q=${searchText}`);
            form.reset();
        }
    };

    const [modal, setModal] = useState(false);
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
        locale: ""
    });

    useEffect(() => {
        http.get("courses/categories?per_page=1000")
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

    // Login modal
    const [modallogin, setModalLogin] = useState(false);
    const toggleLogin = () => setModalLogin(!modallogin);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = () => {
        setModal(false);
        history.push({
            pathname: "/course-category",
            state: { modalValues: modalVals }
        });
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
    return (
        <>
            <GModal
                modal={modal}
                toggle={toggle}
                currentModalForm={currentModalForm}
                step={step}
            />

            <nav className="navbar course-navbar navbar-expand-lg">
                <div style={{ display: "contents" }}>
                    <Link className="navbar-brand" to="/">
                        <img
                            src="/images/landingpage/Edhub-1.png"
                            alt="Eduhub"
                        />
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
                                    className={`nav-link courseNavLink dropdown-toggle megamenu-btn ${
                                        showMegaMenu ? "show" : ""
                                    }`}
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded={`${showMegaMenu}`}
                                >
                                    <span>Courses</span>
                                </a>
                                <ul
                                    className={`dropdown-menu ${
                                        showMegaMenu ? "show" : ""
                                    }`}
                                >
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
                                                        <div
                                                            className="megasubmenu dropdown-menu"
                                                            style={{
                                                                width: "21rem"
                                                            }}
                                                        >
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
                                                                                        {/* <Row>
                                                                                            <Col
                                                                                                sm="12"
                                                                                                md="12"
                                                                                            > */}
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
                                                                                        {/* </Col> */}
                                                                                        {/* <Col
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
                                                                                                                src="/images/landingpage/provider.png"
                                                                                                                alt="provider"
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
                                                                                            </Col> */}
                                                                                        {/* </Row> */}
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
                            <li className="navbar-search-dropdown">
                                <SearchbarDropdown
                                    options={options}
                                    onInputChange={onInputChange}
                                    searchText={searchText}
                                    handleSearch={handleSearch}
                                    setShowMegaMenu={setShowMegaMenu}
                                />
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link courseNavLink"
                                    to="/news"
                                >
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
                                    Guide Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link courseNavLink"
                                    to="/blogs"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link courseNavLink"
                                    to="/profile/wishlist"
                                >
                                    <img
                                        src="/images/landingpage/bookmark.png"
                                        alt="bookmark"
                                    />
                                </Link>
                            </li>

                            <li>
                                {user ? (
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link courseNavLink"
                                            to="/profile/basic"
                                        >
                                            <img
                                                src={user?.avatar}
                                                alt="User"
                                            />
                                        </Link>
                                    </li>
                                ) : (
                                    <div className="login-toggle-form">
                                        <Button
                                            className="login-btn-navbar"
                                            onClick={toggleLogin}
                                        >
                                            login
                                        </Button>
                                        <Modal
                                            isOpen={modallogin}
                                            toggle={toggleLogin}
                                            className="model"
                                        >
                                            <ModalHeader
                                                toggle={toggleLogin}
                                            ></ModalHeader>
                                            <ModalBody>
                                                <Auth />
                                            </ModalBody>
                                        </Modal>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default CourseNavbar;
