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
} from "reactstrap";

const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md" className="navbar">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="navbar-ul">
                        <NavItem>
                            <NavLink
                                href="https://github.com/reactstrap/reactstrap"
                                className="navbar-navlink"
                            >
                                Current Affairs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://github.com/reactstrap/reactstrap"
                                className="navbar-navlink"
                            >
                                Goverment Jobs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://github.com/reactstrap/reactstrap"
                                className="navbar-navlink"
                            >
                                News
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://github.com/reactstrap/reactstrap"
                                className="navbar-navlink"
                            >
                                Exam Calendar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://github.com/reactstrap/reactstrap"
                                className="navbar-navlink"
                            >
                                Question Papers
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
