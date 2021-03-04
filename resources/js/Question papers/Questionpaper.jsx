import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, List, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../../sass/questionpaper.scss";
const Questionpaper = () => {
    return ( 
        <>
    <div className="questionpaper">
       <div className="title-questionpaper">
<h3> Select Exams by Category</h3>  
    </div>
 
        
        <div className="hero-questionpaper">
           <Row xs="1" sm="1" md="4" >
        <Col md="2" sm="3"  className="questionpaper-category" >
          <div style={{padding:"10px"}}>
           <h5>Search by year</h5> 
          </div>
          <List type="unstyled">
      <li>
        <h4 className="questionpaper-subcategory">
          2021
        </h4>
      </li>
      <li>
      <h4 className="questionpaper-subcategory">
          2020
        </h4>
      </li>
      <li>
      <h4 className="questionpaper-subcategory">
          2019
        </h4>
      </li>
      <li>
      <h4 className="questionpaper-subcategory">
          2018
        </h4>
      </li>
      <li>
      <h4 className="questionpaper-subcategory">
          2017
        </h4>
      </li>
      <li>
      <h4 className="questionpaper-subcategory">
          2016
        </h4>
      </li>
      <li>
      <h4 className="questionpaper-subcategory-last">
         2015
        </h4>
      </li>
 
    </List>
        </Col>
        <Col sm="6" md={{ size: 7, offset: 0 }} >
            <h5 style={{padding:"10px"}}>Question Papers</h5>
<div className="questionpaper-topics">
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <Button className="questionpaper-category-btn mt-2">
                                        Goverment Exams
                                    </Button>
                                    <Button className="questionpaper-category-btn mt-2">
                                        MBA Exams
                                    </Button>
                                    <Button className="questionpaper-category-btn mt-2">
                                        Bank Exams
                                    </Button>
                                    <Button className="questionpaper-category-btn mt-2">
                                        10th Exams
                                    </Button>
                                </div>
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <Button className="questionpaper-category-btn mt-2">
                                        Medical Exams
                                    </Button>
                                    <Button className="questionpaper-category-btn mt-2">
                                        12th Exams
                                    </Button>
                                    <Button className="questionpaper-category-btn mt-2">
                                        Defence Exams 
                                    </Button>
                                    <Button className="questionpaper-category-btn mt-2">
                                        Arts Exams
                                    </Button>
                                </div>
</div>

          <div className="questionpaper-news-details">
              <h5><strong>RBI Recruitment 2021 Notification for Various Non CSG</strong></h5>
              <h5>Posts,Online Application begins from 23 Feb Onwards, Salary upto 77208/- </h5>        
          </div>
          <div className="questionpaper-news-details">
          <h5><strong>55 min agoRBI Recruitment 2021 Notification for </strong>various Non CSG Post Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Criteria and other details here</h5>      
          </div>
          <div className="questionpaper-news-details">
          <h5><strong>RBI Grade B 2021: Notification Out for 322 Vacancies,</strong><br/>Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cutoff, Eligibility</h5>    
          </div>
          <div className="questionpaper-news-details">
              <h5><strong>RBI Recruitment 2021 Notification for Various Non CSG</strong></h5>
              <h5>Posts,Online Application begins from 23 Feb Onwards, Salary upto 77208/- </h5>        
          </div>
          <div className="questionpaper-news-details">
          <h5><strong>55 min agoRBI Recruitment 2021 Notification for </strong>various Non CSG Post Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Criteria and other details here</h5>      
   
          </div>
          <div className="questionpaper-news-details">
          <h5><strong>RBI Grade B 2021: Notification Out for 322 Vacancies,</strong><br/>Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cutoff, Eligibility</h5>    
          </div>
          <div className="questionpaper-news-details">
              <h5><strong>RBI Recruitment 2021 Notification for Various Non CSG</strong></h5>
              <h5>Posts,Online Application begins from 23 Feb Onwards, Salary upto 77208/- </h5>        
          </div>
          <div className="questionpaper-news-details">
          <h5><strong>RBI Grade B 2021: Notification Out for 322 Vacancies,</strong><br/>Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cutoff, Eligibility</h5>    
          </div>
        </Col>
        <Col className="questionpaper-register" sm="3" md="3">
          <h5 style={{padding:"10px"}}>REGISTER FOR FREE UPDATES</h5>
          <Form>
      <FormGroup>
        <Input type="name" name="name" id="exampleName" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="number" name="number" id="exampleNumber"  min="1" max="10" placeholder="Phone Number" />
      </FormGroup>
      <Button className="btn-submit-questionpaper">Submit</Button>
    </Form>
    <div className="questionpaper-trending">
        <h4 style={{padding:"10px", textAlign:"start", borderBottom:"2px solid #000"  }}>Trending </h4>
        <div className="questionpaper-news-trending">
              <h6><strong>RBI Recruitment 2021 Notification for Various Non CSG</strong></h6>
              <h6>Posts,Online Application begins from 23 Feb Onwards, Salary upto 77208/- </h6>        
          </div>
          <div className="questionpaper-news-trending">
          <h6><strong>55 min agoRBI Recruitment 2021 Notification for </strong>various Non CSG Post Released @rbi.org.in. Check RBI Recruitment 2021 Application Process, RBI 2021 Eligibility, RBI 2021 Salary, RBI 2021 Criteria and other details here</h6>      
          </div>
          <div className="questionpaper-news-trending" >
          <h6><strong>RBI Grade B 2021: Notification Out for 322 Vacancies,</strong><br/>Exam Date, Admit Card, Vacancy, Exam Pattern, Syllabus, Cutoff, Eligibility</h6>    
          </div>
          <div className="view">View all</div>

    </div>
        </Col>
      </Row>
        </div>
       
    </div>
   

      </>   
          );
}
 
export default Questionpaper;