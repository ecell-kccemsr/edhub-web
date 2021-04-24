import React from "react";
import { List } from "reactstrap";
const GovernmentjobAccordation = ({ data }) => {
    console.log(data);
    return (
        <>
            <div
                className="accordion job-detail-accordion"
                id="job-detailaccordionparent"
            >
                {data.map(d => (
                    <>
                        <div className="card" key={`${d?.slug}`}>
                            <div id={`heading-${d?.slug}`}>
                                <h2 className="mb-0">
                                    <a
                                        className="btn btn-link job-detail-card-headerlink"
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
                                data-parent="#job-detailaccordionparent"
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

export default GovernmentjobAccordation;
