import React from "react";
import Footer from "./footer/Footer";
import NavbarComponent from "./navbar/Navbar";
import Navbar1 from "./navbar/Navbar1";
import Newfooter from "./newfooter/Newfooter";

function Layout(props) {
    return (
        <>
            <NavbarComponent />
            {/* <Navbar1 /> */}
            {props.children}
            <Footer />
            {/* <Newfooter /> */}
        </>
    );
}

export default Layout;
