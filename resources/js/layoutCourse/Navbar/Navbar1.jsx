import React, { useState } from 'react';
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
} from 'reactstrap';
import edhub1 from "../../Images/landingpage/Edhub-1.png"
import user from "../../Images/landingpage/user.png";
import cartNotification from "../../Images/landingpage/cartNotification.png";
import bookmark from "../../Images/landingpage/bookmark.png";
const Navbar1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" className="main-navbar1" light expand="md">
        <NavbarBrand href="/landingPage" className="navbar1-logo">
          <img src={edhub1} alt="edhub1" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="navbar1-item">
              <NavLink href="/news" className="navbar1-link" >News</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="navbar1-item">
              <DropdownToggle nav caret className="navbar1-link" >
                Gov Jobs
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavItem>
              <NavLink href="/govermentjobs" className="navbar1-sublink"> Gov Jobs</NavLink>
            </NavItem>
               </DropdownItem>
                <DropdownItem>
                <NavItem>
              <NavLink href="/exam/calendar" className="navbar1-sublink"> Exam calendar</NavLink>
            </NavItem>
                </DropdownItem>
                <DropdownItem>
                <NavItem>
              <NavLink href="/questionpaper" className="navbar1-sublink">Question Paper</NavLink>
            </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="navbar1-item">
              <NavLink href="/"  className="navbar1-link">Guide Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="navbar1-link">
                <img src={bookmark} alt="bookmark"/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="navbar1-link">
                <img src={cartNotification} alt="user"/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="navbar1-link">
                <img src={user} alt="user"/>
              </NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar1;