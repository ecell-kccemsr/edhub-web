import React from "react";
import { Route } from "react-router";
import FooterCourse from "./Footer/FooterCourse";
import Newfooter from "./Footer/Newfooter";
import Navbar1 from "./Navbar/Navbar1";

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
            <Navbar1 />
            {children}
            <Newfooter />
            <FooterCourse />
        </>
    );
}

export default CourseLayoutRoutes;
