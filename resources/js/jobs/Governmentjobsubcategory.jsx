import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    List,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import LinkCard from "../components/link-card/LinkCard";
const dummyLinkData = [
    {
        title: "RBI Recruitment 2021 Notification for Various Non CSG",
        link: "https://www.google.com/",
        description:
            "Posts,Online Application begins from 23 Feb onwards, Salary upto 77208/-"
    },
    {
        title: "RBI Recruitment 2021 Notification for Various Non CSG",
        link: "https://www.google.com/",
        description:
            "Posts,Online Application begins from 23 Feb onwards, Salary upto 77208/-"
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "55 mins ago RBI Recruitment 2021 Notification",
        link: "https://www.google.com/",
        description:
            "Various Non CSG Posts Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Selection Criteria and other details here."
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    },
    {
        title: "RBI Grade B 2021: Notification Out for 322 Vacancies",
        link: "https://www.google.com/",
        description:
            "Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cut Off, Eligibility"
    }
];
function Governmentjobsubcategory(props) {
    const [categoryJobs, setCategoryJobs] = useState([]);
    const [categoryslug, setSlug] = useState("");
    const [subcategoryslug, setSubSlug] = useState("");
    useEffect(() => {
        const { category_slug } = props.match.params;
        const { subcategory_slug } = props.match.params;
        const { subcategory_id } = props.match.params;

        if (category_slug && subcategory_slug && subcategory_id) {
            setSlug(category_slug);
            setSubSlug(subcategoryslug);
            axios
                .get(
                    `http://localhost:8000/api/government_jobs?subcategory_id=${subcategory_id}`
                )

                .then(res => {
                    // setCategoryJobs(res.data.data);
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);
    return (
        <>
            <div className="government-job-subcategory-content">
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
                            link: `/govermentjobs/${categoryslug}`
                        },
                        {
                            title: `${subcategoryslug}`,
                            link: `/govermentjobs/${categoryslug}/${subcategoryslug}`,
                            active: true
                        }
                    ]}
                />
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
                <h3 className="title-bank-last">{categoryJobs.title}</h3>
                <div className="row-bankjoblast">
                    <div className="column-bankjoblast">
                        <div className="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>
                                Salary & job positions
                            </p>
                        </div>
                    </div>
                    <div className="column-bankjoblast">
                        <div className="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>
                                Eligibility <br /> Category
                            </p>
                        </div>
                    </div>
                    <div className="column-bankjoblast">
                        <div className="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Syllabus</p>
                        </div>
                    </div>
                    <div className="column-bankjoblast">
                        <div className="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Exam Pattern</p>
                        </div>
                    </div>
                    <div className="column-bankjoblast">
                        <div className="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Cutoff</p>
                        </div>
                    </div>
                    <div className="column-bankjoblast">
                        <div className="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Apply Online</p>
                        </div>
                    </div>
                    <div className="column-bankjoblast">
                        <div className="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Admit Card</p>
                        </div>
                    </div>
                    <div className="column-bankjoblast">
                        <div className="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>
                                Prev years <br /> que. papers
                            </p>
                        </div>
                    </div>
                </div>

                <div className="content-bankjoblast">
                    <img
                        className="government-job-subcategory"
                        src="https://i.ibb.co/BfNN8Lc/Group-207.png"
                        alt="bank"
                    />

                    {/* {categoryJobs && categoryJobs.length == 0 && (
                        <h4>No Category News</h4>
                    )} */}

                    <>
                        <div className="government-job-subcategory-content">
                            <div>
                                <h5 className="government-job-subcategory-information">
                                    <h6 style={{ fontWeight: "300" }}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta vLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Tincidunt
                                        massa lacinia enim cras. Eu etiam quis
                                        amet cras amet. In faucibus massa varius
                                        et. Arcu sed non eu eu porta vLorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta v
                                    </h6>
                                </h5>
                                <h5 className="government-job-subcategory-information">
                                    Salary and Job Position <br />
                                    <h6 style={{ fontWeight: "300" }}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta vLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Tincidunt
                                        massa lacinia enim cras. Eu etiam quis
                                        amet cras amet. In faucibus massa varius
                                        et. Arcu sed non eu eu porta vLorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta v
                                    </h6>
                                </h5>
                                <h5 className="government-job-subcategory-information">
                                    Eligibility Criteria <br />
                                    <h6 style={{ fontWeight: "300" }}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta vLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Tincidunt
                                        massa lacinia enim cras. Eu etiam quis
                                        amet cras amet. In faucibus massa varius
                                        et. Arcu sed non eu eu porta vLorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta v
                                    </h6>
                                </h5>
                                <h5 className="government-job-subcategory-information">
                                    Syllabus <br />
                                    <h6 style={{ fontWeight: "300" }}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta vLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Tincidunt
                                        massa lacinia enim cras. Eu etiam quis
                                        amet cras amet. In faucibus massa varius
                                        et. Arcu sed non eu eu porta vLorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta v
                                    </h6>
                                </h5>
                                <h5 className="government-job-subcategory-information">
                                    Exam Pattern <br />
                                    <h6 style={{ fontWeight: "300" }}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta vLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Tincidunt
                                        massa lacinia enim cras. Eu etiam quis
                                        amet cras amet. In faucibus massa varius
                                        et. Arcu sed non eu eu porta vLorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta v
                                    </h6>
                                </h5>
                                <h5 className="government-job-subcategory-information">
                                    Cutoff <br />
                                    <h6 style={{ fontWeight: "300" }}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta vLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Tincidunt
                                        massa lacinia enim cras. Eu etiam quis
                                        amet cras amet. In faucibus massa varius
                                        et. Arcu sed non eu eu porta vLorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta v
                                    </h6>
                                </h5>
                                <h5 className="government-job-subcategory-information">
                                    Apply Online <br />
                                    <h6 style={{ fontWeight: "300" }}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta vLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Tincidunt
                                        massa lacinia enim cras. Eu etiam quis
                                        amet cras amet. In faucibus massa varius
                                        et. Arcu sed non eu eu porta vLorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta v
                                    </h6>
                                </h5>
                                <h5 className="government-job-subcategory-information">
                                    Admit Card <br />
                                    <h6 style={{ fontWeight: "300" }}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta vLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Tincidunt
                                        massa lacinia enim cras. Eu etiam quis
                                        amet cras amet. In faucibus massa varius
                                        et. Arcu sed non eu eu porta vLorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. Tincidunt massa lacinia
                                        enim cras. Eu etiam quis amet cras amet.
                                        In faucibus massa varius et. Arcu sed
                                        non eu eu porta vLorem ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Tincidunt massa lacinia enim cras. Eu
                                        etiam quis amet cras amet. In faucibus
                                        massa varius et. Arcu sed non eu eu
                                        porta v
                                    </h6>
                                </h5>
                            </div>
                        </div>
                    </>
                </div>
                <LinkCard
                    title="Related Notifications and jobs for you"
                    data={dummyLinkData}
                />
            </div>
        </>
    );
}

export default Governmentjobsubcategory;
