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
                                Bell icon
                            </Link>
                        </Col>
                        <Col
                            className="top-navbar-col text-center mob-none"
                            xs="6"
                            md="3"
                        >
                            <Link to="/signin" className="top-navbar-signin">
                                Sign in
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
            <Navbar expand="md" className="main-navbar">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="navbar-ul">
                        <NavItem>
                            <Link
                                to="/govermentjobs"
                                className="navbar-navlink"
                            >
                                Goverment Jobs
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/news" className="navbar-navlink">
                                News
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to="https://github.com/reactstrap/reactstrap"
                                className="navbar-navlink"
                            >
                                Exam Calendar
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to="https://github.com/reactstrap/reactstrap"
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
