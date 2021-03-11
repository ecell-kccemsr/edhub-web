import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = props => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props?.navData &&
                    props?.navData.map((data, key) => {
                        return (
                            <li className="breadcrumb-item " key={key}>
                                {data?.active && (
                                    <span className="breadcrumb-link">
                                        {data.title}
                                    </span>
                                )}
                                {!data?.active && (
                                    <Link
                                        to={data?.link}
                                        className="breadcrumb-link"
                                        style={{
                                            color: "#6c757d",
                                            textDecoration: "none"
                                        }}
                                    >
                                        {data.title}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
            </ol>
        </nav>
    );
};
//active
export default BreadCrumb;
