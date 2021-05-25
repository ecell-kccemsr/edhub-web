import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { Button,Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//Components
import CourseFooterSubscribe from "./Footer/CourseFooterSubscribe";
import CourseFooter from "./Footer/CourseFooter";
import CourseNavbar from "./Navbar/CourseNavbar";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";
import RequestCallBack from "../components/RequestCallBack/RequestCallBack";
const CourseLayoutRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                <ScrollToTop>
                    <LayoutCourse>
                        <Component {...props} />
                    </LayoutCourse>
                </ScrollToTop>
            )}
        />
    );
};

function LayoutCourse({ children }) {
    // Login modal 
    const [modallogin, setModalLogin] = useState(false);
    const toggleLogin = () => setModalLogin(!modallogin);
    return (
        <>
            <CourseNavbar />
            {children}
            <Link to={`/compare`} className="compare-btn">
                COMPARE
            </Link>
            <div className="request-btn">
               <img src="images/request-call.png" alt="request"
               onClick={toggleLogin}
               />
                                 <Modal isOpen={modallogin} toggle={toggleLogin} className="model">
                                 <ModalHeader toggle={toggleLogin}></ModalHeader>
                                   <ModalBody>
                                       <RequestCallBack toggleLogin = {toggleLogin} />
                                   </ModalBody>
                                 </Modal>
            </div>
          
            <CourseFooter />
            <CourseFooterSubscribe />
        </>
    );
}

export default CourseLayoutRoutes;
