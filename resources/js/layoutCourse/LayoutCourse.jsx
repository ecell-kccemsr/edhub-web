import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
//Components
import CourseFooterSubscribe from "./Footer/CourseFooterSubscribe";
import CourseFooter from "./Footer/CourseFooter";
import CourseNavbar from "./Navbar/CourseNavbar";

const CourseLayoutRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                <LayoutCourse>
                    <Component {...props} />
                </LayoutCourse>
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
