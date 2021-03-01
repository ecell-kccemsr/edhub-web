import React from "react";
import NavbarComponent from "../navbar/Navbar";

function Layout(props) {
    return (
        <>
            <NavbarComponent />
            {props.children}
            <h1
                style={{
                    background: "#333",
                    color: "#fff",
                    textAlign: "center",
                    padding: "10px 5px"
                }}
            >
                footer
            </h1>
        </>
    );
}

export default Layout;
