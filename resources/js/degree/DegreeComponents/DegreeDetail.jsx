import React, {  } from "react";
import { Col, Container, Row, List } from "reactstrap";

const courseContent = [
    {
        id: "9198ce8a-772a-425d-8cd8-86ade1d1f0c8",
        title: "Welcome to Android R",
        content: [
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            },
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            }
        ]
    },
    {
        id: "fc793560-73a8-4cb1-9237-e803c925aaad",
        title: "Welcome to Android R",
        content: [
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            },
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            }
        ]
    },
    {
        id: "5871eb25-dc78-4df5-854b-8e6f7e9e5d1a",
        title: "Welcome to Android R",
        content: [
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            },
            {
                title:
                    "How to use these amazing tutorials and how to learn android app development",
                duration: "02:11"
            }
        ]
    }
];
const DegreeDetail = () => {
  
    return (
        <div
            style={{
                background: "linear-gradient(to right, #28A2E8 , #90CEDB)"
            }}
        >
            <Container className="containerClass">
                <Row>
                    <Col sm="12" md="8">
                        <div className="course-overview-card">
                            <h5 className="course-overview-card-title" id="ProgramCurriculum">
                                Program Details
                            </h5>
                            <p className="course-description text-white">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quasi, maiores eius natus
                                provident magni adipisci hic eligendi cum sit
                                asperiores! Rem vitae minus, ducimus repellendus
                                architecto consequuntur illo officiis nihil nemo
                                quis! Officia repudiandae, distinctio at
                                expedita repellat obcaecati. Dolore, incidunt.
                                Libero delectus, sit saepe similique, laboriosam
                                a voluptates officia accusantium dolorum,
                                praesentium corporis reprehenderit? Accusantium
                                magni suscipit doloribus velit unde harum quis
                                officiis dolor eos, eum architecto officia
                                repudiandae omnis ad vel quia tenetur provident
                                dolore adipisci libero voluptatem magnam modi
                                voluptatum. Minima laboriosam rerum, at facilis
                                neque explicabo ad saepe expedita adipisci.
                                Corporis sequi cumque neque modi temporibus?
                            </p>
                        </div>

                        <h5 className="course-content-top-header">
                            Course Content
                        </h5>
                        <div className="course-content-top-overview">
                            <span className=" text-white">41 sections •</span>
                            <span className=" text-white">692 lectures •</span>
                            <span className=" text-white">
                                173h 31m total length
                            </span>
                        </div>
                        <div
                            className="accordion course-content-accordion"
                            id="courseContentParent"
                        >
                            {courseContent &&
                                courseContent.map(detail => (
                                    <div className="card" key={detail?.id}>
                                        <div id={`heading${detail?.id}`}>
                                            <h2 className="mb-0">
                                                <a
                                                    className="btn btn-link course-content-card-headerlink"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target={`#collapse${detail?.id}`}
                                                    aria-expanded="true"
                                                    aria-controls={`collapse${detail?.id}`}
                                                >
                                                    <i
                                                        className="fas fa-chevron-down mr-2"
                                                        style={{
                                                            color: "#F05454"
                                                        }}
                                                    ></i>
                                                    {detail?.title}
                                                </a>
                                            </h2>
                                        </div>

                                        <div
                                            id={`collapse${detail?.id}`}
                                            className="collapse"
                                            aria-labelledby={`heading${detail?.id}`}
                                            data-parent="#courseContentParent"
                                        >
                                            <div className="card-body">
                                                <List
                                                    type="unstyled"
                                                    className="mb-0"
                                                >
                                                    {detail?.content &&
                                                        detail?.content.map(
                                                            c => (
                                                                <li
                                                                    className="courseContent-list"
                                                                    key={
                                                                        c?.title
                                                                    }
                                                                >
                                                                    <img
                                                                        src="/Images/degree/playbutton.png"
                                                                        alt="playbutton"
                                                                        className="mr-2"
                                                                    />
                                                                    {c?.title}
                                                                    <span className="duration ml-2">
                                                                        {
                                                                            c?.duration
                                                                        }
                                                                    </span>
                                                                </li>
                                                            )
                                                        )}
                                                </List>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DegreeDetail;
