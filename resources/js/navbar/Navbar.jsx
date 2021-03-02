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
    NavbarText
} from "reactstrap";

const NavbarComponent = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md" className="navbar">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="navbar-ul">
                        <NavItem>
                            <Link
                                to="https://github.com/reactstrap/reactstrap"
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
        </div>
    );
};

export default NavbarComponent;
