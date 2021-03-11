import React, { useState, useEffect } from "react";
import { Row, Col, ButtonToggle } from "reactstrap";
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

    console.log(props);
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
                        data.slice(0, visible).map((d, key) => {
                            console.log(d);
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
                {visible < data.length && (
                    <>
                        <hr />

                        <div className="text-center pb-0">
                            <ButtonToggle
                                className="link-card-section-btn "
                                onClick={viewAll}
                            >
                                View All
                            </ButtonToggle>
                        </div>
                    </>
                )}
                {visible >= data.length && (
                    <>
                        <hr />

                        <div className="text-center pb-0">
                            <ButtonToggle
                                className="link-card-section-btn "
                                onClick={viewLess}
                            >
                                Show Less
                            </ButtonToggle>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default LinkCard;
