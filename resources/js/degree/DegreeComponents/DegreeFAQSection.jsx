import React from "react";
import { Row, Col, Container, List } from "reactstrap";

const DegreeFAQSection = ({ faq }) => {
    return (
        <Container className="containerClass">
            <Row>
                <Col sm="12" md="8">
                    <h5 className="course-content-top-header text-center pt-2">
                        FAQs
                    </h5>
                    <div
                        class="accordion course-content-accordion"
                        id="courseFAQParent"
                    >
                        {faq &&
                            faq.map(faqIndividual => (
                                <div class="card" key={faqIndividual?.id}>
                                    <div id={`heading${faqIndividual?.id}`}>
                                        <h2 class="mb-0">
                                            <a
                                                class="btn btn-link course-content-card-headerlink"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target={`#collapse${faqIndividual?.id}`}
                                                aria-expanded="true"
                                                aria-controls={`collapse${faqIndividual?.id}`}
                                            >
                                                <i
                                                    class="fas fa-chevron-down mr-2"
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
                                        class="collapse"
                                        aria-labelledby={`heading${faqIndividual?.id}`}
                                        data-parent="#courseFAQParent"
                                    >
                                        <div class="card-body">
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
