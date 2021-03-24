import React, { useState, useEffect } from "react";
import { Row, Col, ButtonToggle } from "reactstrap";
import { Link } from "react-router-dom";
const LinkCard = props => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props?.data) {
            setData(props?.data);
        }
    }, []);

    return (
        <section
            className="link-card-section"
            style={{
                padding: `${
                    props.customPadding ? props.customPadding : " 0px 0px"
                }`,
                margin: `${
                    props.customMargin
                        ? props.customMargin
                        : "50px 0px 50px 0px"
                }`
            }}
        >
            <div
                className="link-card-container"
                style={{
                    background: `${props.background ? "#F8F8F8" : "#fff"}`
                }}
            >
                <h4 className="link-card-section-header">{props?.title}</h4>
                <Row>
                    {data &&
                        data.length > 0 &&
                        data.slice(0, props?.limit || 6).map((d, key) => {
                            let link = "#";
                            if (props?.governmentJobURL) {
                                link = `/govermentjobs/${d?.category?.slug}/${d?.subcategory?.slug}`;
                            }
                            if (props?.questionPaperURL) {
                                link = `/questionpaper/${d?.category?.slug}`;
                            }
                            return (
                                <Col
                                    xs="12"
                                    md="6"
                                    className="link-card-col"
                                    key={key}
                                >
                                    <h5 className="link-card-colheader">
                                        <a
                                            classsName="link-card-anchor"
                                            style={{ color: "#000" }}
                                            href={link}
                                            rel="noreferrer noopener"
                                        >
                                            {d?.title}
                                        </a>
                                    </h5>
                                    <p>
                                        {d?.description.length > 180
                                            ? d?.description.slice(0, 180) +
                                              "..."
                                            : d?.description}
                                    </p>
                                </Col>
                            );
                        })}
                </Row>
                <hr />

                <div className="text-center pb-0">
                    <Link
                        to={props?.toLink || "#"}
                        className="link-card-section-btn "
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LinkCard;
