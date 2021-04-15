import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import {
    List,
    Row,
    Col,
    Label,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    FormGroup,
    Input
} from "reactstrap";
import { Link } from "react-router-dom";

import CourseCard from "../components/course-card/CourseCard";

const price = [
    {
        id: "d95d4514-538a-4b57-85d5-f9072dc80bef",
        title: "Type of course"
    },
    {
        id: "15536c59-30ab-430e-b857-d02b416dedc7",
        title: "Student's Ratings"
    },
    {
        id: "f56739d4-fbea-46cb-b2db-5511b1d744a2",
        title: "Provided By"
    }
];
const carouselDummyData = [
    "https://i.ibb.co/HBWwCPK/Group-1.png",
    "https://i.ibb.co/HBWwCPK/Group-1.png",
    "https://i.ibb.co/HBWwCPK/Group-1.png"
];
const items = [
    {
        src: "https://i.ibb.co/HBWwCPK/Group-1.png",
        altText: "Slide 1",
        caption: "Slide 1",
        header: "Slide 1 Header",
        key: "ac9861b1-baa3-43ad-9934-9d67e8617565"
    },
    {
        src: "https://i.ibb.co/HBWwCPK/Group-1.png",
        altText: "Slide 2",
        caption: "Slide 2",
        header: "Slide 2 Header",
        key: "62ab7a96-d868-4b9f-a70a-b8af5a417631"
    },
    {
        src: "https://i.ibb.co/HBWwCPK/Group-1.png",
        altText: "Slide 3",
        caption: "Slide 3",
        header: "Slide 3 Header",
        key: "20e05c32-bd0f-4e81-8cca-dab1166c89f1"
    }
];

const CourseCategoryCarousel = props => {
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
                key={item.key}
            >
                <img src={item} className="w-100" alt="Category Page Slider" />
            </CarouselItem>
        );
    });

    return (
        // Carousel-CategoryPage
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
const courseCategory = () => {
    const [sliderVal, setSliderVal] = useState(5000);
    const [courseCategory, setCourseCategory] = useState([]);
    const minValue = useRef(null);
    const maxValue = useRef(null);
    const sliderValue = useRef(null);
    const [priceFilter, setPriceFilter] = useState({
        min: 0,
        max: 150000
    });
    const onSliderChange = value => {
        setPriceFilter({
            ...priceFilter,
            max: isNaN(parseInt(value)) ? 0 : parseInt(value)
        });
        setSliderVal(value);
        getCourses(true, value);
    };
    useEffect(() => {
        getCourses(false);
    }, []);
    const getCourses = (filter, max, min) => {
        let pricefilter = "";
        let minV = min || minValue.current.value;
        let maxv = max || maxValue.current.value;
        if (filter) {
            pricefilter = `?price_min=${minV}&price_max=${maxv}`;
        }
        axios
            .get(`/api/courses${pricefilter}`)
            .then(res => {
                setCourseCategory(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    const onPriceChange = (name, value) => {
        if (name == "min") {
            setPriceFilter({
                ...priceFilter,
                min: isNaN(parseInt(value)) ? 0 : parseInt(value)
            });
        } else {
            setPriceFilter({
                ...priceFilter,
                max: isNaN(parseInt(value)) ? 0 : parseInt(value)
            });
            setSliderVal(isNaN(parseInt(value)) ? 0 : parseInt(value));
        }
        getCourses(true);
    };

    return (
        <>
            <Link to={`/compare`}>
                <button className="compare-btn-category">Compare</button>
            </Link>
            <div className="course-category-section">
                <div className="course-category-hero-slider">
                    <CourseCategoryCarousel />
                </div>
                <div className="course-category-main-section">
                    <Row>
                        <Col sm="12" lg="3">
                            <div className="course-category-filter-section">
                                <h5>Filters</h5>
                                <h6>Pricing</h6>
                                <div style={{ padding: "5px 20px" }}>
                                    <input
                                        type="range"
                                        min="0"
                                        max="150000"
                                        step="100"
                                        className="course-pricing-slider"
                                        value={sliderVal}
                                        step={10000}
                                        onChange={e =>
                                            onSliderChange(e.target.value)
                                        }
                                        ref={sliderValue}
                                    ></input>
                                </div>
                                <div className="pricing-slider-div">
                                    <span>Free</span>
                                    <span>1.5 Lakh</span>
                                </div>
                                <div className="pricing-input-div">
                                    <div className="pricing-div">
                                        <label htmlFor="from">Min</label>
                                        <input
                                            type="text"
                                            id="from"
                                            value={priceFilter.min}
                                            ref={minValue}
                                            onChange={e =>
                                                onPriceChange(
                                                    "min",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <p>To</p>
                                    <div className="pricing-div">
                                        <label htmlFor="to">Max</label>
                                        <input
                                            type="text"
                                            id="to"
                                            value={priceFilter.max}
                                            ref={maxValue}
                                            onChange={e =>
                                                onPriceChange(
                                                    "max",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div
                                    className="accordion course-category-accordion"
                                    id="courseCategoryParent"
                                >
                                    {price &&
                                        price.map(priceFilterIndividual => (
                                            <div
                                                className="card"
                                                key={priceFilterIndividual?.id}
                                            >
                                                <div
                                                    id={`heading${priceFilterIndividual?.id}`}
                                                >
                                                    <h2 className="mb-0">
                                                        <a
                                                            className="btn btn-link course-category-card-headerlink"
                                                            type="button"
                                                            data-toggle="collapse"
                                                            data-target={`#collapse${priceFilterIndividual?.id}`}
                                                            aria-expanded="true"
                                                            aria-controls={`collapse${priceFilterIndividual?.id}`}
                                                        >
                                                            {
                                                                priceFilterIndividual?.title
                                                            }
                                                            <i
                                                                className="fas fa-chevron-down ml-2"
                                                                style={{
                                                                    color:
                                                                        "#000"
                                                                }}
                                                            ></i>
                                                        </a>
                                                    </h2>
                                                </div>

                                                <div
                                                    id={`collapse${priceFilterIndividual?.id}`}
                                                    className="collapse show"
                                                    aria-labelledby={`heading${priceFilterIndividual?.id}`}
                                                    data-parent="#courseCategoryParent"
                                                >
                                                    <div className="card-body">
                                                        <List
                                                            type="unstyled"
                                                            className="mb-0"
                                                        >
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="checkbox" />
                                                                    Test 1
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="checkbox" />
                                                                    Test 2
                                                                </Label>
                                                            </FormGroup>
                                                        </List>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" lg="9">
                            <Row>
                                {courseCategory.map(course => (
                                    <Col
                                        sm="12"
                                        md="4"
                                        style={{ marginBottom: "25px" }}
                                        key={course?.id}
                                    >
                                        <CourseCard data={course} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default courseCategory;
