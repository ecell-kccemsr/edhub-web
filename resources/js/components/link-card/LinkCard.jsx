import React, { useState, useEffect } from "react";
import { Row, Col, ButtonToggle } from "reactstrap";
import {Link} from "react-router-dom"
const LinkCard = props => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props?.data) {
            setData(props?.data);
        }
    }, []);

        return (
        <section className="link-card-section">
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
                        data.slice(0, 6).map((d, key) => {
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
                                            href={d?.link || "#"}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            {d?.title}
                                        </a>
                                    </h5>
                                    <p>
                                        {d?.description.slice(0, 180) + "..."}
                                    </p>
                                </Col>
                            );
                        })}
                </Row>
                <hr />

                        <div className="text-center pb-0">
                            <Link to="#"
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
