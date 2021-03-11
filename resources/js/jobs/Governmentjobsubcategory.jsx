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

function Governmentjobsubcategory(props) {
    const [categoryJobs, setCategoryJobs] = useState([]);
    useEffect(() => {
        const { category_slug } = props.match.params;
        if (category_slug) {
            axios
                .get(
                    `http://localhost:8000/api/government_jobs?category_slug=${category_slug}`
                )

                .then(res => {
                    setCategoryJobs(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);
    return (
        <>
            <div className="bankjoblast">
                <div style={{ paddingTop: "20px" }}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item ">
                                <a href="#" className="href-government">
                                    HOME
                                </a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                <a href="" className="href-government">
                                    JOBS
                                </a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                <a href="" className="href-government">
                                    BANK
                                </a>
                            </li>
                        </ol>
                    </nav>{" "}
                </div>
                <h4 className="title-bank">Bank Jobs</h4>
                <h3 className="title-bank-last">{categoryJobs.title}</h3>
                <div class="row-bankjoblast">
                    <div class="column-bankjoblast">
                        <div class="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>
                                Salary & job positions
                            </p>
                        </div>
                    </div>
                    <div class="column-bankjoblast">
                        <div class="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>
                                Eligibility <br /> Category
                            </p>
                        </div>
                    </div>
                    <div class="column-bankjoblast">
                        <div class="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Syllabus</p>
                        </div>
                    </div>
                    <div class="column-bankjoblast">
                        <div class="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Exam Pattern</p>
                        </div>
                    </div>
                    <div class="column-bankjoblast">
                        <div class="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Cutoff</p>
                        </div>
                    </div>
                    <div class="column-bankjoblast">
                        <div class="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Apply Online</p>
                        </div>
                    </div>
                    <div class="column-bankjoblast">
                        <div class="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>Admit Card</p>
                        </div>
                    </div>
                    <div class="column-bankjoblast">
                        <div class="card-bankjoblast">
                            <p style={{ fontSize: "18px" }}>
                                Prev years <br /> que. papers
                            </p>
                        </div>
                    </div>
                </div>

                <div className="content-bankjoblast">
                    <img
                        className="government-job-subcategory"
                        src="https://www.dsij.in/Portals/0/EasyDNNnews/16587/img-what-triggered-the-15-rally-in-bank-stocks-today.jpg"
                        alt="bank"
                    />

                    {categoryJobs && categoryJobs.length == 0 && (
                        <h4>No Sub-Category News</h4>
                    )}
                    {categoryJobs &&
                        categoryJobs.length > 0 &&
                        categoryJobs.map(categoryJobs => (
                            <>
                                <div
                                    className="government-job-subcategory-content"
                                    key={categoryJobs.id}
                                >
                                    <div>
                                        <h5 className="government-job-subcategory-information">
                                            {categoryJobs.description}
                                        </h5>
                                        <h5 className="government-job-subcategory-information">
                                            <strong>
                                                Salary and Job Position
                                            </strong>{" "}
                                            <br />
                                            {categoryJobs.job_positions}
                                        </h5>
                                        <h5 className="government-job-subcategory-information">
                                            <strong>
                                                Eligibility Criteria
                                            </strong>{" "}
                                            <br />
                                            {categoryJobs.eligibility_criteria}
                                        </h5>
                                        <h5 className="government-job-subcategory-information">
                                            <strong>Syllabus</strong> <br />
                                            {categoryJobs.syllabus}
                                        </h5>
                                        <h5 className="government-job-subcategory-information">
                                            <strong>Exam Pattern</strong> <br />
                                            {categoryJobs.exam_pattern}
                                        </h5>
                                        <h5 className="government-job-subcategory-information">
                                            <strong>Cutoff</strong> <br />
                                            {categoryJobs.cutoff}
                                        </h5>
                                        <h5 className="government-job-subcategory-information">
                                            <strong>Apply Online</strong> <br />
                                            {categoryJobs.apply_online}
                                        </h5>
                                        <h5 className="government-job-subcategory-information">
                                            <strong>Admit Card</strong> <br />
                                            {categoryJobs.admit_card}
                                        </h5>
                                    </div>
                                </div>
                                <hr />
                            </>
                        ))}

                    {/* <h4 style={{fontSize:"25px"}}><strong>Overview</strong></h4>
  <br/>
  <p style={{fontSize:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos ipsam nesciunt dolor vitae commodi, laudantium, illo molestias doloribus nemo beatae non atque quisquam dolorum nulla quaerat sapiente et excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut non libero, ducimus sed vitae voluptate, beatae doloribus fuga consequatur odio accusantium repellat possimus quidem saepe dignissimos, rerum similique debitis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt dolores magnam illo quisquam deleniti maxime nihil at dolorum, ipsum molestiae dicta! Dolorum corporis vel voluptate architecto necessitatibus praesentium voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique quaerat. Cum odit commodi quo vel voluptatibus, sapiente voluptas! Architecto, labore illo. Sunt neque, sint delectus saepe maiores culpa voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis pariatur autem, ipsum tenetur quo aliquid doloremque fuga, ut alias debitis laboriosam nisi nihil cupiditate impedit reprehenderit praesentium dolores iusto!</p>
</div>
<div className="content-bankjoblast">
  <h4 style={{fontSize:"25px"}}><strong>Salary & job positions</strong></h4>
  <br/>
  <p style={{fontSize:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos ipsam nesciunt dolor vitae commodi, laudantium, illo molestias doloribus nemo beatae non atque quisquam dolorum nulla quaerat sapiente et excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut non libero, ducimus sed vitae voluptate, beatae doloribus fuga consequatur odio accusantium repellat possimus quidem saepe dignissimos, rerum similique debitis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt dolores magnam illo quisquam deleniti maxime nihil at dolorum, ipsum molestiae dicta! Dolorum corporis vel voluptate architecto necessitatibus praesentium voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique quaerat. Cum odit commodi quo vel voluptatibus, sapiente voluptas! Architecto, labore illo. Sunt neque, sint delectus saepe maiores culpa voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis pariatur autem, ipsum tenetur quo aliquid doloremque fuga, ut alias debitis laboriosam nisi nihil cupiditate impedit reprehenderit praesentium dolores iusto!</p>
</div><div className="content-bankjoblast">
  <h4 style={{fontSize:"25px"}}><strong>Eligibility Category</strong></h4>
  <br/>
  <p style={{fontSize:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos ipsam nesciunt dolor vitae commodi, laudantium, illo molestias doloribus nemo beatae non atque quisquam dolorum nulla quaerat sapiente et excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut non libero, ducimus sed vitae voluptate, beatae doloribus fuga consequatur odio accusantium repellat possimus quidem saepe dignissimos, rerum similique debitis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt dolores magnam illo quisquam deleniti maxime nihil at dolorum, ipsum molestiae dicta! Dolorum corporis vel voluptate architecto necessitatibus praesentium voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique quaerat. Cum odit commodi quo vel voluptatibus, sapiente voluptas! Architecto, labore illo. Sunt neque, sint delectus saepe maiores culpa voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis pariatur autem, ipsum tenetur quo aliquid doloremque fuga, ut alias debitis laboriosam nisi nihil cupiditate impedit reprehenderit praesentium dolores iusto!</p>
</div><div className="content-bankjoblast">
  <h4 style={{fontSize:"25px"}}><strong>Syllabus</strong></h4>
  <br/>
  <p style={{fontSize:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos ipsam nesciunt dolor vitae commodi, laudantium, illo molestias doloribus nemo beatae non atque quisquam dolorum nulla quaerat sapiente et excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut non libero, ducimus sed vitae voluptate, beatae doloribus fuga consequatur odio accusantium repellat possimus quidem saepe dignissimos, rerum similique debitis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt dolores magnam illo quisquam deleniti maxime nihil at dolorum, ipsum molestiae dicta! Dolorum corporis vel voluptate architecto necessitatibus praesentium voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique quaerat. Cum odit commodi quo vel voluptatibus, sapiente voluptas! Architecto, labore illo. Sunt neque, sint delectus saepe maiores culpa voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis pariatur autem, ipsum tenetur quo aliquid doloremque fuga, ut alias debitis laboriosam nisi nihil cupiditate impedit reprehenderit praesentium dolores iusto!</p>
</div><div className="content-bankjoblast">
  <h4 style={{fontSize:"25px"}}><strong>Exam Pattern</strong></h4>
  <br/>
  <p style={{fontSize:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos ipsam nesciunt dolor vitae commodi, laudantium, illo molestias doloribus nemo beatae non atque quisquam dolorum nulla quaerat sapiente et excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut non libero, ducimus sed vitae voluptate, beatae doloribus fuga consequatur odio accusantium repellat possimus quidem saepe dignissimos, rerum similique debitis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt dolores magnam illo quisquam deleniti maxime nihil at dolorum, ipsum molestiae dicta! Dolorum corporis vel voluptate architecto necessitatibus praesentium voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique quaerat. Cum odit commodi quo vel voluptatibus, sapiente voluptas! Architecto, labore illo. Sunt neque, sint delectus saepe maiores culpa voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis pariatur autem, ipsum tenetur quo aliquid doloremque fuga, ut alias debitis laboriosam nisi nihil cupiditate impedit reprehenderit praesentium dolores iusto!</p>
</div><div className="content-bankjoblast">
  <h4 style={{fontSize:"25px"}}><strong>Cutoff</strong></h4>
  <br/>
  <p style={{fontSize:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos ipsam nesciunt dolor vitae commodi, laudantium, illo molestias doloribus nemo beatae non atque quisquam dolorum nulla quaerat sapiente et excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut non libero, ducimus sed vitae voluptate, beatae doloribus fuga consequatur odio accusantium repellat possimus quidem saepe dignissimos, rerum similique debitis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt dolores magnam illo quisquam deleniti maxime nihil at dolorum, ipsum molestiae dicta! Dolorum corporis vel voluptate architecto necessitatibus praesentium voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique quaerat. Cum odit commodi quo vel voluptatibus, sapiente voluptas! Architecto, labore illo. Sunt neque, sint delectus saepe maiores culpa voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis pariatur autem, ipsum tenetur quo aliquid doloremque fuga, ut alias debitis laboriosam nisi nihil cupiditate impedit reprehenderit praesentium dolores iusto!</p>
</div><div className="content-bankjoblast">
  <h4 style={{fontSize:"25px"}}><strong>Apply Online</strong></h4>
  <br/>
  <p style={{fontSize:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos ipsam nesciunt dolor vitae commodi, laudantium, illo molestias doloribus nemo beatae non atque quisquam dolorum nulla quaerat sapiente et excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut non libero, ducimus sed vitae voluptate, beatae doloribus fuga consequatur odio accusantium repellat possimus quidem saepe dignissimos, rerum similique debitis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt dolores magnam illo quisquam deleniti maxime nihil at dolorum, ipsum molestiae dicta! Dolorum corporis vel voluptate architecto necessitatibus praesentium voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique quaerat. Cum odit commodi quo vel voluptatibus, sapiente voluptas! Architecto, labore illo. Sunt neque, sint delectus saepe maiores culpa voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis pariatur autem, ipsum tenetur quo aliquid doloremque fuga, ut alias debitis laboriosam nisi nihil cupiditate impedit reprehenderit praesentium dolores iusto!</p>
</div><div className="content-bankjoblast">
  <h4 style={{fontSize:"25px"}}><strong>Prev years question papers</strong></h4>
  <br/>
  <p style={{fontSize:"20px"}}><a href="#">
    hyperlink for Prev years question papers <br/>
    hyperlink for Prev years question papers <br/> 
    hyperlink for Prev years question papers  <br/> 
    hyperlink for Prev years question papers <br/>
    hyperlink for Prev years question papers <br/>
    hyperlink for Prev years question papers <br/>
    hyperlink for Prev years question papers <br/>
    hyperlink for Prev years question papers <br/>
    hyperlink for Prev years question papers <br/>
    hyperlink for Prev years question papers <br/>
    </a></p> */}
                </div>
                <div className="container-bankjoblast">
                    <Row xs="1" sm="2" md="2">
                        <h2 className="title-notify">
                            <strong> Related Jobs for you </strong>
                        </h2>
                        <Col>
                            <h5>
                                <strong>
                                    RBI Recruitment 2021 Notification for
                                    Various Non CSG
                                </strong>
                            </h5>
                            <h5>
                                Posts,Online Application begins from 23 Feb
                                Onwards, Salary upto 77208/-{" "}
                            </h5>
                        </Col>
                        <Col>
                            <h5>
                                <strong>
                                    RBI Recruitment 2021 Notification for
                                    Various Non CSG
                                </strong>
                            </h5>
                            <h5>
                                Posts,Online Application begins from 23 Feb
                                Onwards, Salary upto 77208/-{" "}
                            </h5>
                        </Col>
                        <Col>
                            <h5>
                                <strong>
                                    55 min agoRBI Recruitment 2021 Notification
                                    for{" "}
                                </strong>
                                various Non CSG Post Released @rbi.org.in. Check
                                RBI Recruitment 2021 Application Process, RBI
                                2021 Eligibility, RBI 2021 Salary, RBI 2021
                                Criteria and other details here
                            </h5>
                        </Col>
                        <Col>
                            <h5>
                                <strong>
                                    55 min agoRBI Recruitment 2021 Notification
                                    for{" "}
                                </strong>
                                various Non CSG Post Released @rbi.org.in. Check
                                RBI Recruitment 2021 Application Process, RBI
                                2021 Eligibility, RBI 2021 Salary, RBI 2021
                                Criteria and other details here
                            </h5>
                        </Col>
                        <Col>
                            <h5>
                                <strong>
                                    RBI Grade B 2021: Notification Out for 322
                                    Vacancies,
                                </strong>
                                <br />
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cutoff, Eligibility
                            </h5>
                        </Col>
                        <Col>
                            <h5>
                                <strong>
                                    RBI Grade B 2021: Notification Out for 322
                                    Vacancies,
                                </strong>
                                <br />
                                Exam Date, Admit Card, Vacancy, Exam Pattern,
                                Syllabus, Cutoff, Eligibility
                            </h5>
                        </Col>
                    </Row>
                    <div className="view">View all</div>
                </div>
            </div>
        </>
    );
}

export default Governmentjobsubcategory;
