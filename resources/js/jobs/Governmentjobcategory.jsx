import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    List,
    FormGroup,
    Label,
    Input,
    Form,
    Button
} from "reactstrap";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";

const Governmentjobcategory = props => {
    const [subCategory, setSubCategory] = useState([]);
    const [categoryslug, setSlug] = useState("");
    const [categoryJobs, setCategoryJobs] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [category, setCategory] = useState([]);
    const [filterjobs, setFilterJobs] = useState([]);

    useEffect(() => {
        let { category_id } = props.match.params;
        if (category_id) {
            axios
                .get(
                    `http://localhost:8000/api/government_jobs/sub_categories?category_id=${category_id}`
                )
                .then(res => {
                    setSubCategory(res.data.data);
                })

                .catch(err => {
                    console.log(err);
                });

            axios
                .get(
                    `http://localhost:8000/api/government_jobs?category_id=${category_id}`
                )

                .then(res => {
                    setCategoryJobs(res.data.data);
                    setFilterJobs(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
            axios
                .get("http://localhost:8000/api/government_jobs/categories")
                .then(res => {
                    setCategory(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);
    const filterJobs = slug => {
        let jobs = [];
        categoryJobs.filter(cjobs => {
            if (cjobs.subcategory.slug == slug) jobs.push(cjobs);
        });
        setFilterJobs(jobs);
    };

    const handleSubmit = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        axios
            .post(
                "http://localhost:8000/api/register_for_free_updates/add",
                data
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="questionpapear-section">
                {/* breadcrumb */}
                <BreadCrumb
                    navData={[
                        {
                            title: "Home",
                            link: "/"
                        },
                        {
                            title: "Jobs",
                            link: "/govermentjobs"
                        },
                        {
                            title: `${categoryslug}`,
                            link: `/governmentjobs/${categoryslug}`,
                            active: true
                        }
                    ]}
                />

                <Row className="align-items-center">
                    <Col sm="12" md="4" lg="2">
                        {categoryslug && (
                            <h5
                                style={{
                                    color: "#4F4F4F",
                                    textTransform: "capitalize"
                                }}
                            >
                                {categoryslug}
                            </h5>
                        )}
                    </Col>
                    {/* Toggle by age */}
                    <Col sm="12" md="4" lg="2">
                        <FormGroup>
                            <Label for="Age" style={{ fontSize: "14px" }}>
                                By Age
                            </Label>
                            <Input type="select" name="select" id="Age">
                                <option>Below 10</option>
                                <option>Below 20</option>
                                <option>Below 30</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    {/* Toggle by Qualification */}
                    <Col sm="12" md="4" lg="2">
                        <FormGroup>
                            <Label
                                for="Qualification"
                                style={{ fontSize: "14px" }}
                            >
                                Qualification
                            </Label>
                            <Input
                                type="select"
                                name="select"
                                id="Qualification"
                            >
                                <option>10th Pass</option>
                                <option>12th Pass</option>
                                <option>Graduate</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                {/* Category */}
                <Row>
                    <Col
                        xs={{ size: 12, order: 1 }}
                        md={{ size: 6, order: 2 }}
                        lg={{ size: 2, order: 1 }}
                        className="questionpaper-filter-section "
                    >
                        <h5 className="questionpaper-filter-header">
                            Categories
                        </h5>
                        <List
                            type="unstyled"
                            className="questionpaper-filter-ul"
                        >
                            {subCategory &&
                                subCategory.map(s => (
                                    <li key={s?.id}>
                                        <h4
                                            className="questionpaper-subcategory"
                                            onClick={() => filterJobs(s?.slug)}
                                        >
                                            {s?.name}
                                        </h4>
                                    </li>
                                ))}
                        </List>
                    </Col>
                    <Col
                        xs={{ size: 12, order: 2 }}
                        md={{ size: 12, order: 1 }}
                        lg={{ size: 7, order: 2 }}
                        className="mb-3"
                    >
                        <div className="questionpaper-main-section">
                            {filterjobs &&
                                filterjobs.map(c => (
                                    <div
                                        className="questionpaper-news-details"
                                        key={c?.id}
                                    >
                                        <h5>
                                            <Link
                                                to={`/govermentjobs/subcategory/${c?.id}`}
                                            >
                                                {c?.title}
                                            </Link>
                                        </h5>
                                        <h6>
                                            {c?.description.slice(0, 300) +
                                                "..."}
                                        </h6>
                                    </div>
                                ))}
                        </div>
                    </Col>
                    {/* REGISTER form */}
                    <Col
                        xs={{ size: 12, order: 3 }}
                        md={{ size: 6, order: 3 }}
                        lg={{ size: 3, order: 3 }}
                    >
                        <div className="registration-section">
                            <h5
                                style={{ padding: "10px", textAlign: "center" }}
                            >
                                REGISTER FOR FREE UPDATES
                            </h5>
                            <form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input
                                        type="name"
                                        name="name"
                                        id="exampleName"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="number"
                                        name="mobile_no"
                                        placeholder="Phone Number"
                                    />
                                </FormGroup>
                                <Button
                                    className="registration-btn"
                                    type="submit"
                                    value="submit"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
                        <div className="select-news-by-category-btn-section-1">
                            <div className="d-flex flex-wrap justify-content-center">
                                {category && category == 0 && (
                                    <div>No Subcategories</div>
                                )}
                                {category &&
                                    category.length > 0 &&
                                    category.map(category => (
                                        <a
                                            href={`/govermentjobs/${category?.id}`}
                                            key={category.id}
                                            className="category-btn-1 text-center"
                                        >
                                            {category.name}
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Governmentjobcategory;
