import React from "react";
import Footer from "./footer/Footer";
import NavbarComponent from "./navbar/Navbar";

function Layout(props) {
    return (
        <>
            <NavbarComponent />
            {props.children}
            <Footer />
        </>
    );
}

export default Layout;
