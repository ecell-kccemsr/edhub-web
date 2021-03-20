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
    FormText,
    Table
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
                    setCategoryJobs(res.data.data[0]);
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);
    return (
        <>
            <div className="government-section">
                {/* BreadCrumb */}
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
                        {categoryJobs.title}
                        {/* {categoryslug} */}
                    </h5>
                )}
          <div className="government-job-subcategory-details">
           <h3 className="title-bank-last">RBI Grade B 2021: Notification Out for 322 Vacancies</h3>
               <section className="government-job-subcategory-section" >
                <div className="d-flex exam-btn-section  mb-2 justify-content-center">
               <div className="job-single-btn">
                    <p style={{ fontSize: "18px" }}>
                                <a href="#two" style={{ color: "white" }}>
                                    Salary & <br/> job positions
                                </a>
                            </p>
               </div>
               <div className="job-single-btn">
                    <p style={{ fontSize: "18px" }}>
                                <a href="#two" style={{ color: "white" }}>
                                    Salary & <br/> job positions
                                </a>
                            </p>
               </div>
               <div className="job-single-btn">
                    <p style={{ fontSize: "18px" }}>
                                <a href="#two" style={{ color: "white" }}>
                                    Salary & <br/> job positions
                                </a>
                            </p>
               </div>
               <div className="job-single-btn">
                    <p style={{ fontSize: "18px" }}>
                                <a href="#two" style={{ color: "white" }}>
                                    Salary & <br/> job positions
                                </a>
                            </p>
               </div>
               <div className="job-single-btn">
                    <p style={{ fontSize: "18px" }}>
                                <a href="#two" style={{ color: "white" }}>
                                    Salary & <br/> job positions
                                </a>
                            </p>
               </div>
               <div className="job-single-btn">
                    <p style={{ fontSize: "18px" }}>
                                <a href="#two" style={{ color: "white" }}>
                                    Salary & <br/> job positions
                                </a>
                            </p>
               </div>
               <div className="job-single-btn">
                    <p style={{ fontSize: "18px" }}>
                                <a href="#two" style={{ color: "white" }}>
                                    Salary & <br/> job positions
                                </a>
                            </p>
               </div>
               <div className="job-single-btn">
                    <p style={{ fontSize: "18px" }}>
                                <a href="#two" style={{ color: "white" }}>
                                    Salary & <br/> job positions
                                </a>
                            </p>
               </div>        
                </div>
            </section>
    <div className="content-bankjoblast">
                    <img
                        className="government-job-subcategory"
                        src="https://i.ibb.co/BfNN8Lc/Group-207.png"
                        alt="bank"
                    />
                     <div className="government-job-subcategory-content">
                      <h5
                                className="government-job-subcategory-information"
                                id="two"
                            >
                                    Salary and Job Position <br />
                                <Table striped bordered hover>
                                     <thead>
                                        <tr>
                                            <th>Job Position</th>
                                            <th>Gross Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="three"
                            >
                                Eligibility Criteria <br />
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Age Limit</th>
                                            <th>Job Position</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="four"
                            >
                                Syllabus <br />
                                <h6 style={{ fontWeight: "300" }}>
                                    {categoryJobs.syllabus}
                                </h6>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="five"
                            >
                                Exam Pattern <br />
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Subjects</th>
                                            <th>Minimum Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                          </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="six"
                            >
                                Cutoff <br />
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Exam Name</th>
                                            <th>Cutoffs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>English</td>
                                            <td>25%</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="seven"
                            >
                                Apply Online <br />
                                <a href="#" style={{ fontWeight: "300" }}>
                                    {categoryJobs.apply_online}
                                </a>
                            </h5>
                            <h5
                                className="government-job-subcategory-information"
                                id="eight"
                            >
                                Admit Card <br />
                                <a href="/images/myw3schoolsimage.jpg" download>
                                    <img
                                        src="/images/myw3schoolsimage.jpg"
                                        alt="W3Schools"
                                        width="104"
                                        height="142"
                                    />
                                </a>
                            </h5>
                            <h5 className="government-job-subcategory-information">
                            Previous Year Question papers
                            </h5>
                            <h5>
                                <a href="#">Previous Year Question papers </a> <br/>
                                <a href="#">Previous Year Question papers </a>  <br/>
                                <a href="#">Previous Year Question papers </a> <br/> 
                                <a href="#">Previous Year Question papers </a> <br/>
                                <a href="#">Previous Year Question papers </a> <br/>
                                <a href="#">Previous Year Question papers </a> <br/>
                                <a href="#">Previous Year Question papers </a>
                            </h5>
           </div>
           </div>
                <LinkCard
                    title="Related Notifications and jobs for you"
                    data={dummyLinkData}
                /> 
        </div>
            </div>
        </>
    );
}

export default Governmentjobsubcategory;
