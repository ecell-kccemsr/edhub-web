import React from "react";
import Footer from "./footer/Footer";
import NavbarComponent from "./navbar/Navbar";
import { Route } from "react-router";

const JobLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
};
const Layout = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            {children}
            <Footer />
        </>
    );
};

export default JobLayoutRoute;
