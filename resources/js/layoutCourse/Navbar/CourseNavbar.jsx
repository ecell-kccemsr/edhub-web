import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Dropdown
} from "reactstrap";
import edhub1 from "../../Images/landingpage/Edhub-1.png";
import user from "../../Images/landingpage/user.png";
import cartNotification from "../../Images/landingpage/cartNotification.png";
import bookmark from "../../Images/landingpage/bookmark.png";
import { Link } from "react-router-dom";
import { navDummyData } from "./navDummyData";

const CourseNavbar = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    // const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="navbar course-navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
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
                                    {navDummyData &&
                                        navDummyData.map(navl => {
                                            let ismegamenu = false;
                                            if (navl.children.length > 0) {
                                                ismegamenu = true;
                                            }
                                            return (
                                                <li
                                                    className={`${
                                                        ismegamenu
                                                            ? "has-megasubmenu"
                                                            : ""
                                                    }`}
                                                >
                                                    <Link
                                                        className="dropdown-item d-flex align-items-center"
                                                        to="#"
                                                    >
                                                        <span className="flex-fill">
                                                            {navl.mainlink}
                                                        </span>
                                                        {ismegamenu ? (
                                                            <i class="fas fa-chevron-right"></i>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </Link>
                                                    {ismegamenu && (
                                                        <div className="megasubmenu dropdown-menu">
                                                            <ul className="list-unstyled">
                                                                {navl.children.map(
                                                                    child => {
                                                                        let ismegamenu2 = false;
                                                                        if (
                                                                            child
                                                                                .subchild
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
                                                                            >
                                                                                <Link
                                                                                    className="dropdown-item d-flex align-items-center"
                                                                                    to="#"
                                                                                >
                                                                                    <span className="flex-fill">
                                                                                        {
                                                                                            child.childlinkname
                                                                                        }
                                                                                    </span>
                                                                                    {ismegamenu2 ? (
                                                                                        <i class="fas fa-chevron-right"></i>
                                                                                    ) : (
                                                                                        ""
                                                                                    )}
                                                                                </Link>
                                                                                {ismegamenu2 && (
                                                                                    <div className="megasubmenu-2 dropdown-menu">
                                                                                        <ul className="list-unstyled">
                                                                                            {child.subchild.map(
                                                                                                subc => {
                                                                                                    return (
                                                                                                        <li>
                                                                                                            <Link
                                                                                                                className="dropdown-item"
                                                                                                                to="#"
                                                                                                            >
                                                                                                                {
                                                                                                                    subc.subchildlinkname
                                                                                                                }
                                                                                                            </Link>
                                                                                                        </li>
                                                                                                    );
                                                                                                }
                                                                                            )}
                                                                                        </ul>
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
                                    {/* Non dynamic code  - dont delete  */}
                                    {/* <li className="has-megasubmenu">
                                        <a className="dropdown-item" href="#">
                                            Dropdown item 4 &raquo;
                                        </a>
                                        <div className="megasubmenu dropdown-menu">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="#"
                                                    >
                                                        Dropdown item 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="#"
                                                    >
                                                        Dropdown item 2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="#"
                                                    >
                                                        Dropdown item 3
                                                    </Link>
                                                </li>
                                                <li className="has-megasubmenu-2">
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Dropdown item 4 &raquo;
                                                    </a>
                                                    <div className="megasubmenu-2 dropdown-menu">
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Dropdown
                                                                    item 1
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Dropdown
                                                                    item 2
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Dropdown
                                                                    item 3
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    */}
                                </ul>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
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
                                    Government Job
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Submenu item 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Submenu item 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link courseNavLink" to="#">
                                    Guide Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link courseNavLink" to="#">
                                    <img src={cartNotification} alt="" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link courseNavLink" to="#">
                                    <img src={bookmark} alt="" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link courseNavLink" to="#">
                                    <img src={user} alt="" />
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
