import React, { useState, useEffect } from "react";
import { Row, Col, ButtonToggle } from "reactstrap";
import { Link } from "react-router-dom";
const LinkCard = props => {
    const initialPosts = 6;
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(initialPosts);
    useEffect(() => {
        if (props?.data) {
            setData(props?.data);
        }
    }, []);

    const viewAll = () => {
        setVisible(data.length);
    };

    const viewLess = () => {
        setVisible(initialPosts);
    };

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
                        data.slice(0, props?.limit || visible).map((d, key) => {
                            let link = "#";
                            if (props?.governmentJobURL) {
                                link = `/govermentjobs/${d?.category?.slug}/${d?.subcategory?.slug}/${d?.slug}`;
                            }
                            if (props?.questionPaperURL) {
                                link = `/questionpaper/${d?.category?.slug}`;
                            }
                            if (props?.examResults) {
                                link = `${d.url}`;
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
                                            {d?.name}
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
                {visible < data.length && props?.toggleTrue && (
                    <div className="text-center">
                        <p
                            className="link-card-section-btn mb-0 pb-0"
                            style={{ cursor: "pointer" }}
                            onClick={viewAll}
                        >
                            View All
                        </p>
                    </div>
                )}

                {visible >= data.length && props?.toggleTrue && (
                    <div className="text-center">
                        <p
                            className="link-card-section-btn mb-0 pb-0"
                            style={{ cursor: "pointer" }}
                            onClick={viewLess}
                        >
                            Show Less
                        </p>
                    </div>
                )}

                {!props?.toggleTrue && (
                    <div className="text-center pb-0">
                        <Link
                            to={props?.toLink || "#"}
                            className="link-card-section-btn "
                        >
                            View All
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LinkCard;
