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
function Governmentjobcategory(props) {
    console.log(props);
    const { category_id } = props.match.params;
    const [subCategory, setSubCategory] = useState([]);
    const [categoryJobs, setCategoryJobs] = useState([]);
    useEffect(() => {
        axios
            .get(
                `http://localhost:8000/api/government_jobs/sub_categories?category_id=${category_id}`
            )
            .then(res => {
                setSubCategory(res.data.data);
                // console.log(res)
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
                // console.log(res)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <>
            <div className="bank">
                <div className="title-bank">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item ">
                                <a href="#">Home</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Jobs
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Bank
                            </li>
                        </ol>
                    </nav>{" "}
                </div>
                <div className="btn-drop">
                    <h5 className="title-bank">
                        <strong> Bank Jobs </strong>
                    </h5>

                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret className="btn-drop-toggle">
                            By age
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem header>Header</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret className="btn-drop-toggle">
                            Qualification
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem header>Header</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>

                <div className="hero">
                    <Row xs="1" sm="1" md="4">
                        <Col md="2" sm="3" className="job-news-1">
                            <div
                                className="title-bank-hero"
                                style={{
                                    padding: "10px",
                                    backgroundColor: "#EE6F57"
                                }}
                            >
                                <h5 style={{ color: "#fff" }}>CATEGORIES</h5>
                            </div>
                            <List type="unstyled">
                                <li className="government-subcategory-title">
                                    {subCategory && subCategory.length == 0 && (
                                        <h4>No Subcategories</h4>
                                    )}
                                    {subCategory.map(subcategory => (
                                        <Link
                                            to={`/govermentjobs/view/sub/category/${subcategory?.id}`}
                                            key={subcategory.id}
                                            className="category-btn-government mt-2"
                                        >
                                            {subcategory.name}
                                        </Link>
                                    ))}
                                </li>
                                {/* <li>
      <h4 className="category-bank">
          IDFC Bank
        </h4>
      </li>
      <li>
      <h4 className="category-bank">
          PNB Bank
        </h4>
      </li>
      <li>
      <h4 className="category-bank">
          SBI Bank
        </h4>
      </li>
      <li>
      <h4 className="category-bank">
          Corporation <br/> Bank
        </h4>
      </li>
      <li>
      <h4 className="category-bank">
          Canara Bank
        </h4>
      </li>
      <li>
      <h4 className="category-bank-last">
         Bank of <br/> Baroda
        </h4>
      </li> */}
                            </List>
                        </Col>
                        <Col sm="6" md={{ size: 7, offset: 0 }}>
                            {categoryJobs && categoryJobs.length == 0 && (
                                <h4>No Category News</h4>
                            )}

                            {categoryJobs &&
                                categoryJobs.length > 0 &&
                                categoryJobs.map(categoryJobs => {
                                    return (
                                        <>
                                            <div
                                                className="d-flex"
                                                key={categoryJobs.id}
                                            >
                                                <div className="job-news-details">
                                                    <Link
                                                        className=""
                                                        to={`/govermentjobs/view/category/${categoryJobs?.id}`}
                                                    >
                                                        <strong>
                                                            {categoryJobs.title}
                                                        </strong>
                                                    </Link>
                                                    <h5 className="">
                                                        {
                                                            categoryJobs.description
                                                        }
                                                    </h5>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    );
                                })}

                            {/* <div className="job-news-details">
              <h5><strong>RBI Recruitment 2021 Notification for Various Non CSG</strong></h5>
              <h5>Posts,Online Application begins from 23 Feb Onwards, Salary upto 77208/- </h5>        
          </div>
          <div className="job-news-details">
          <h5><strong>55 min agoRBI Recruitment 2021 Notification for </strong>various Non CSG Post Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Criteria and other details here</h5>      
          </div>
          <div className="job-news-details">
          <h5><strong>RBI Grade B 2021: Notification Out for 322 Vacancies,</strong><br/>Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cutoff, Eligibility</h5>    
          </div>
          <div className="job-news-details">
              <h5><strong>RBI Recruitment 2021 Notification for Various Non CSG</strong></h5>
              <h5>Posts,Online Application begins from 23 Feb Onwards, Salary upto 77208/- </h5>        
          </div>
          <div className="job-news-details">
          <h5><strong>55 min agoRBI Recruitment 2021 Notification for </strong>various Non CSG Post Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Criteria and other details here</h5>      
   
          </div>
          <div className="job-news-details">
          <h5><strong>RBI Grade B 2021: Notification Out for 322 Vacancies,</strong><br/>Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cutoff, Eligibility</h5>    
          </div>
          <div className="job-news-details">
              <h5><strong>RBI Recruitment 2021 Notification for Various Non CSG</strong></h5>
              <h5>Posts,Online Application begins from 23 Feb Onwards, Salary upto 77208/- </h5>        
          </div>
          <div className="job-news-details">
          <h5><strong>RBI Grade B 2021: Notification Out for 322 Vacancies,</strong><br/>Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cutoff, Eligibility</h5>    
          </div> */}
                        </Col>
                        <Col className="job-news" sm="3" md="3">
                            <h5 style={{ padding: "10px" }}>
                                REGISTER FOR FREE UPDATES
                            </h5>
                            <Form>
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
                                        name="number"
                                        id="exampleNumber"
                                        min="1"
                                        max="10"
                                        placeholder="Phone Number"
                                    />
                                </FormGroup>
                                <Button className="btn-submit-bank">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Governmentjobcategory;
