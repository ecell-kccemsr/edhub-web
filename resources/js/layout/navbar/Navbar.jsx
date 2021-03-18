import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    Input,
    NavbarText,
    Row,
    Col
} from "reactstrap";

const NavbarComponent = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="top-navbar">
                <div className="top-navbar-ul">
                    <Row className="w-100 align-items-center">
                        <Col className="top-navbar-col " xs="4" md="2">
                            <Link to="/" className="top-navbar-brand">
                                Eduhub
                            </Link>
                        </Col>
                        <Col className="top-navbar-col" xs="8" md="6">
                            <Input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search"
                            />
                        </Col>
                        <Col className="top-navbar-col mob-none" xs="6" md="1">
                            <Link to="/" className="navbar-navlink">
                                <img
                                    src="https://i.ibb.co/hRbkfvr/Group-102.png"
                                    alt=""
                                />
                            </Link>
                        </Col>
                        <Col
                            className="top-navbar-col text-center mob-none pb-0 text-lg-right"
                            xs="6"
                            md="3"
                        >
                            <Link to="/login" className="top-navbar-signin ">
                                Sign in
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
            <Navbar expand="md" className="main-navbar">
                <NavbarToggler onClick={toggle}>
                    <i className="fas fa-bars" style={{ color: "#fff" }}></i>
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="navbar-ul">
                        <NavItem>
                            <Link to="/news" className="navbar-navlink">
                                News
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to="/govermentjobs"
                                className="navbar-navlink"
                            >
                                Govt. Jobs
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to="/exam/calendar"
                                className="navbar-navlink"
                            >
                                Exam Calendar
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to="/questionpaper"
                                className="navbar-navlink"
                            >
                                Question Papers
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
