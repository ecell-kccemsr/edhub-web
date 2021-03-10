import React from "react";
import { Row, Col, Container, Card,  ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    List,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText } from "reactstrap";
import newsdetails from "../../../../public/images/Newsdetails.png"; 
import news from "../../Images/news(3).png";

const Newsdetails = () => {
    return ( 
<div className="container news-details">
<nav aria-label="breadcrumb" style={{marginTop:"30px"}}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item ">
                                <a href="#" className="href-government">HOME</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page" 
                            >
                                <a href="" className="href-government">NEWS</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                <a href="" className="href-government">BUSINESS</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                <a href="" className="href-government">ENTREPRENEURSHIP</a>
                            </li>
                        </ol>
                    </nav>
                    <Row>
        <Col md="8">
            <div className="newsdeatils-hero">
                <div className="newsdetails-title">
                    <h3><strong>Spectrum Sale: Government gets bid for over Rs 71,000 crore</strong></h3>
                </div>
                <img src={newsdetails} alt="news" className="img-newsdetails"/>
                <div className="newsdetails-detail">
                    <h5>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quasi labore, hic dignissimos sequi repudiandae provident dolore veniam asperiores reiciendis at cupiditate consectetur ipsa dolor veritatis maxime esse doloribus quos.
                    <br/> <br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolorem explicabo culpa eveniet accusamus perspiciatis, illo maiores vero possimus odit minima rerum minus soluta, ut deserunt facilis impedit numquam quam?
                    <br/> <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita libero quod nulla neque accusamus ipsam consequuntur, veniam repellat molestias, perspiciatis dignissimos voluptate. Expedita quas saepe in reiciendis possimus provident?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptatibus ea nisi eligendi alias, debitis quisquam, vitae perferendis maxime blanditiis assumenda porro architecto corporis labore! Quo perferendis facere et impedit!
                    <br/> <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, asperiores est distinctio porro officia a doloribus vitae molestiae sunt reiciendis earum dolorem explicabo natus voluptate libero sequi deleniti dolor nihil?
                    </h5>
                </div>
            </div>
            <div className="newsdeatils-hero">
                <h5>News at glance</h5>
                <Row xs="1" md="2">
        <Col>
        <div className="newsdetails-glance">
                    <img src={news} alt="news1"/>
                    <h5 style={{marginLeft:"15px"}}>Nitin Gadkari <br/> launches <br/> ‘Go Electric <br/> Campaign’</h5>
        </div>
        </Col>
        <Col>
        <div className="newsdetails-glance">
                    <img src={news} alt="news1"/>
                    <h5 style={{marginLeft:"15px"}}>Nitin Gadkari <br/> launches <br/> ‘Go Electric <br/> Campaign’</h5>
        </div>
        </Col>
        <Col>
        <div className="newsdetails-glance">
                    <img src={news} alt="news1"/>
                    <h5 style={{marginLeft:"15px"}}>Nitin Gadkari <br/> launches <br/> ‘Go Electric <br/> Campaign’</h5>
        </div>
        </Col>
        <Col>
        <div className="newsdetails-glance">
                    <img src={news} alt="news1"/>
                    <h5 style={{marginLeft:"15px"}}>Nitin Gadkari <br/> launches <br/> ‘Go Electric <br/> Campaign’</h5>
        </div>
        </Col>
      </Row>
      <div className="view">View all</div>

            </div>
        </Col>
        <Col md="4" >
<div className="form-newsdetails">
    <h5 className="form-title-newsdetail">
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
</div>
<div className="trending-newsdetails">
<h4 style={{marginBottom:"20px"}}>Trending</h4>
<h6 style={{marginBottom:"20px"}}>
         <strong>
              RBI Recruitment 2021 Notification for
                 Various Non CSG {""}
        </strong>
        Posts,Online Application begins from 23 Feb
        Onwards, Salary upto 77208/-
</h6>
<h6 style={{marginBottom:"20px"}}>
         <strong>
              RBI Recruitment 2021 Notification for
                 Various Non CSG {""}
        </strong>
        Posts,Online Application begins from 23 Feb
        Onwards, Salary upto 77208/-
</h6>
<h6 style={{marginBottom:"20px"}}>
         <strong>
              RBI Recruitment 2021 Notification for
                 Various Non CSG {""}
        </strong>
        Posts,Online Application begins from 23 Feb
        Onwards, Salary upto 77208/-
</h6>
<div className="view">View all</div>

</div>

        
        </Col>
      </Row>
</div>     );
}
 
export default Newsdetails;