import React from "react";
import { Route } from "react-router";
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
    console.log(children);
    return (
        <>
            <CourseNavbar />
            {children}
            <CourseFooter />
            <CourseFooterSubscribe />
        </>
    );
}

export default CourseLayoutRoutes;
