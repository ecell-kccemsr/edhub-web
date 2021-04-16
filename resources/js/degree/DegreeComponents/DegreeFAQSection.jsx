import React from "react";
import { Row, Col, Container, List } from "reactstrap";

const DegreeFAQSection = ({ faq }) => {
    return (
        <Container className="containerClass">
            <Row>
                <Col sm="12" md="8">
                    <h5 className="course-content-top-header text-center pt-2" id="FAQs">
                        FAQs
                    </h5>
                    <div
                        className="accordion course-content-accordion"
                        id="courseFAQParent"
                    >
                        {faq &&
                            faq.map(faqIndividual => (
                                <div className="card" key={faqIndividual?.id}>
                                    <div id={`heading${faqIndividual?.id}`}>
                                        <h2 className="mb-0">
                                            <a
                                                className="btn btn-link course-content-card-headerlink"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target={`#collapse${faqIndividual?.id}`}
                                                aria-expanded="true"
                                                aria-controls={`collapse${faqIndividual?.id}`}
                                            >
                                                <i
                                                    className="fas fa-chevron-down mr-2"
                                                    style={{
                                                        color: "#F05454"
                                                    }}
                                                ></i>
                                                {faqIndividual?.question}
                                            </a>
                                        </h2>
                                    </div>

                                    <div
                                        id={`collapse${faqIndividual?.id}`}
                                        className="collapse"
                                        aria-labelledby={`heading${faqIndividual?.id}`}
                                        data-parent="#courseFAQParent"
                                    >
                                        <div className="card-body">
                                            <List
                                                type="unstyled"
                                                className="mb-0"
                                            >
                                                {faqIndividual?.answer}
                                            </List>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DegreeFAQSection;
