import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
//Components
import CourseFooterSubscribe from "./Footer/CourseFooterSubscribe";
import CourseFooter from "./Footer/CourseFooter";
import CourseNavbar from "./Navbar/CourseNavbar";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";

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
    return (
        <>
            <CourseNavbar />
            {children}
            <Link to={`/compare`} className="compare-btn">
                COMPARE
            </Link>
            <CourseFooter />
            <CourseFooterSubscribe />
        </>
    );
}

export default CourseLayoutRoutes;
