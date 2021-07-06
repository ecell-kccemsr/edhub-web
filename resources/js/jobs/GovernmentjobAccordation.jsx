import React, { useState, useEffect } from "react";
import { List } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
const GovernmentjobAccordation = ({ data }) => {
    const [subcategory, setSubCategory] = useState([]);
    useEffect(() => {
        axios.get(`/api/government_jobs/sub_categories`).then(res => {
            setSubCategory(res.data.data);
        });
    }, []);
    return (
        <>
            {data &&
                data?.length > 0 &&
                data.map(d => {
                    return (
                        <div
                            className="accordion job-detail-accordion"
                            id="job-detailaccordionparent"
                        >
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
                                                <div
                                                    style={{ display: "flex" }}
                                                >
                                                    <img
                                                        src={d?.image}
                                                        alt="subcategory image"
                                                    />
                                                    <h5>{d?.name}</h5>
                                                </div>
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
                                        <div
                                            className="card-body"
                                            style={{ padding: "10px" }}
                                        >
                                            {subcategory
                                                ?.filter(
                                                    sc =>
                                                        sc?.category?.id ==
                                                        d?.id
                                                )
                                                .map(child => (
                                                    <List
                                                        type="unstyled"
                                                        key={child?.id}
                                                        className="mb-2"
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex"
                                                            }}
                                                        >
                                                            <img
                                                                src={
                                                                    child?.image
                                                                }
                                                                alt="subcategory image"
                                                            />
                                                            <a
                                                                href={`/govermentjobs/${child?.category?.slug}/${child?.slug}`}
                                                            >
                                                                <h5>
                                                                    {
                                                                        child?.name
                                                                    }
                                                                </h5>
                                                            </a>
                                                        </div>
                                                    </List>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    );
                })}
        </>
    );
};

export default GovernmentjobAccordation;
