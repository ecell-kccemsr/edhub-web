import React from "react";
import { List } from "reactstrap";
const QPaperAccordion = ({ data }) => {
    console.log(data);
    return (
        <>
            <div
                className="accordion qpaper-accordion"
                id="qpaperaccordionparent"
            >
                {data.map(d => (
                    <>
                        <div className="card" key={`${d?.slug}`}>
                            <div id={`heading-${d?.slug}`}>
                                <h2 className="mb-0">
                                    <a
                                        className="btn btn-link qpaper-card-headerlink"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target={`#collapse-${d?.slug}`}
                                        aria-expanded="true"
                                        aria-controls={`collapse-${d?.slug}`}
                                    >
                                        {d?.title}
                                        <i
                                            className="fas fa-chevron-down ml-2"
                                            style={{
                                                color: "#000"
                                            }}
                                        ></i>
                                    </a>
                                </h2>
                            </div>

                            <div
                                id={`collapse-${d?.slug}`}
                                className="collapse "
                                aria-labelledby={`heading-${d?.slug}`}
                                data-parent="#qpaperaccordionparent"
                            >
                                <div className="card-body">
                                    {d?.children.map(child => (
                                        <List
                                            type="unstyled"
                                            key={child?.id}
                                            className="mb-0"
                                        >
                                            {child?.title}
                                        </List>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default QPaperAccordion;
