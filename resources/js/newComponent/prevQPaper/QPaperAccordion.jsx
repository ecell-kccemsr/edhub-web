import React, { useEffect, useState } from "react";
import { List } from "reactstrap";
const QPaperAccordion = ({ data }) => {
    return (
        <>
            <div
                className="accordion qpaper-accordion"
                id="qpaperaccordionparent"
            >
                <>
                    <div className="card" key={`${data?.slug}`}>
                        <div id={`heading-${data?.slug}`}>
                            <h2 className="mb-0">
                                <a
                                    className="btn btn-link qpaper-card-headerlink"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target={`#collapse-${data?.slug}`}
                                    aria-expanded="true"
                                    aria-controls={`collapse-${data?.slug}`}
                                >
                                    {data?.name}
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
                            id={`collapse-${data?.slug}`}
                            className="collapse "
                            aria-labelledby={`heading-${data?.slug}`}
                            data-parent="#qpaperaccordionparent"
                        >
                            {/* <div className="card-body">
                                {d?.children.map(child => (
                                    <List
                                        type="unstyled"
                                        key={child?.id}
                                        className="mb-0"
                                    >
                                        {child?.title}
                                    </List>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </>
            </div>
        </>
    );
};

export default QPaperAccordion;
