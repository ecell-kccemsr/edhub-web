import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";

import suitcase from "../Images/suitcase (1) 2.png";
import newspaper from "../Images/newspaper 1.png";
import question from "../Images/question 1.png";
import exam from "../Images/exam 1.png";
import bank from "../Images/Group (6).png";
import doctor from "../Images/doctor 1.png";
import architect from "../Images/architect 1.png";
import examPattern from "../Images/ExamPatternandSyllabus.png";
import LinkCard from "../components/link-card/LinkCard";

function Homepage() {
    const [news, setNews] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [questionPaper, setQuestionPaper] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/news")
            .then(res => {
                setNews(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("http://localhost:8000/api/government_jobs")
            .then(res => {
                setJobs(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("http://localhost:8000/api/government_jobs/categories")
            .then(res => {
                // console.log(res);
                setCategories(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get("http://localhost:8000/api/questionpapers")
            .then(res => {
                // console.log(res);
                setQuestionPaper(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const carouselDummyData = [
        "https://i.ibb.co/QHfGBv2/Group-179-1.png",
        "https://i.ibb.co/QHfGBv2/Group-179-1.png",
        "https://i.ibb.co/QHfGBv2/Group-179-1.png"
    ];
    const items = [
        {
            src: "https://i.ibb.co/QHfGBv2/Group-179-1.png",
            altText: "Slide 1",
            caption: "Slide 1",
            header: "Slide 1 Header",
            key: "1"
        },
        {
            src: "https://i.ibb.co/QHfGBv2/Group-179-1.png",
            altText: "Slide 2",
            caption: "Slide 2",
            header: "Slide 2 Header",
            key: "2"
        },
        {
            src: "https://i.ibb.co/QHfGBv2/Group-179-1.png",
            altText: "Slide 3",
            caption: "Slide 3",
            header: "Slide 3 Header",
            key: "3"
        }
    ];

    const HomeCarousel = props => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);

        const next = () => {
            if (animating) return;
            const nextIndex =
                activeIndex === items.length - 1 ? 0 : activeIndex + 1;
            setActiveIndex(nextIndex);
        };

        const previous = () => {
            if (animating) return;
            const nextIndex =
                activeIndex === 0 ? items.length - 1 : activeIndex - 1;
            setActiveIndex(nextIndex);
        };

        const goToIndex = newIndex => {
            if (animating) return;
            setActiveIndex(newIndex);
        };

        const slides = carouselDummyData.map(item => {
            return (
                <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={item}
                >
                    <img src={item} className="w-100" alt="Home Slider" />
                </CarouselItem>
            );
        });

        return (
            // Carousel-Homepage
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        );
    };
    let LookingFor = () => {
        return (
            // Lookingfor-Homepage
            <Row className="justify-content-center align-items-center">
                <Col sm="12" md="4">
                    <h3 className="homepage-job-header">I'm looking for</h3>
                </Col>
                <Col sm="12" md="8" lg="6">
                    <Row className=" justify-content-center">
                        <Col sm="12" md="6" lg="3" className="text-center">
                            <img className="homepage-job-img" src={newspaper} />
                            <Link to={"/news"}>
                                <h5 className="text-dark">News</h5>
                            </Link>
                        </Col>
                        <Col sm="12" md="6" lg="3" className="text-center">
                            <img className="homepage-job-img" src={suitcase} />
                            <Link to={"/govermentjobs"}>
                                <h5 className="text-dark">Jobs</h5>
                            </Link>
                        </Col>
                        <Col sm="12" md="6" lg="3" className="text-center">
                            <img className="homepage-job-img" src={question} />
                            <Link to={"/questionpaper"}>
                                <h5 className="text-dark">Q. papers</h5>
                            </Link>
                            <h5></h5>
                        </Col>
                        <Col sm="12" md="6" lg="3" className="text-center">
                            <img className="homepage-job-img" src={exam} />
                            <Link to={"/examcalendar"}>
                                <h5 className="text-dark">Exams</h5>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    };

    return (
        <div>
            <section>
                <section>
                    <HomeCarousel />
                </section>
            </section>
            <section className="news-card-body">
                <div className="news-card-section">
                    <h4 className="news-card-section-header">Latest News</h4>
                    <Row className=" justify-content-center">
                        {news &&
                            news.slice(0, 9).map((n, key) => (
                                <div className="latest-news-card" key={key}>
                                    <img
                                        className="news-card-img"
                                        src={n?.image}
                                    />
                                    <p className="news-card-para">
                                        <a
                                            href={n?.description}
                                            target="_blank"
                                            style={{ color: "#000" }}
                                            rel="noreferrer noopener"
                                        >
                                            {n?.title}
                                        </a>
                                    </p>
                                </div>
                            ))}
                    </Row>
                    <hr className="hr" />
                    <div className="text-center pb-0">
                        <Link
                            to="#"
                            className="news-card-btn"
                            style={{ cursor: "pointer" }}
                        >
                            View All
                        </Link>
                    </div>
                </div>
            </section>
            <section className="homepage-job ">
                <LookingFor />
            </section>
            <section className="jobs-section-container">
                <div className="jobs-section-div">
                    <h3 className="">JOBS</h3>
                    <Row>
                        {/* Jobs-Homepage */}
                        {categories &&
                            categories.slice(0, 3).map((c, key) => (
                                <Col
                                    sm="12"
                                    md="6"
                                    lg="4"
                                    className="mt-2"
                                    key={key}
                                >
                                    <div className="text-center d-flex align-items-center justify-content-center ">
                                        <div className="jobs-section-circle ">
                                            <img
                                                className="jobs-section-circle-img"
                                                src={c?.image}
                                            />
                                        </div>
                                    </div>
                                    <h5 className="text-center">{c?.name}</h5>
                                    <div className="jobs-section-sub-divison">
                                        {jobs &&
                                            jobs
                                                .filter(
                                                    j =>
                                                        j.category.slug ==
                                                        c.slug
                                                )
                                                .map(j => {
                                                    return (
                                                        <div
                                                            className="d-flex jobs-section-box"
                                                            key={key}
                                                        >
                                                            <img
                                                                className="jobs-section-image"
                                                                src={
                                                                    j?.category
                                                                        .image
                                                                }
                                                            />

                                                            <div className="jobs-section-content">
                                                                {j?.title}
                                                            </div>
                                                        </div>
                                                    );
                                                })}

                                        <div className="text-center">
                                            <Link
                                                to={`/govermentjobs/${c?.id}`}
                                                className="jobs-section-btn mb-0 pb-0"
                                            >
                                                View All
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                    </Row>
                </div>
            </section>
            {jobs && jobs.length > 0 && (
                <LinkCard title="Exam Updates" data={jobs} limit={4} />
            )}

            {/* Question Paper */}
            {questionPaper && questionPaper.length > 0 && (
                <LinkCard
                    title="Question Papers"
                    data={questionPaper}
                    background={true}
                    limit={4}
                />
            )}
        </div>
    );
}
export default Homepage;
