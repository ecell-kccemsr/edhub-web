import React from "react";
import FooterCourse from "./Footer/FooterCourse";
import Newfooter from "./Footer/Newfooter";
import Navbar1 from "./Navbar/Navbar1";
function LayoutCourse(props) {
    console.log(props.children);
    return (
        <>
            <Navbar1 />
            {props.children}
            <Newfooter />
            <FooterCourse />
        </>
    );
}

export default LayoutCourse;
