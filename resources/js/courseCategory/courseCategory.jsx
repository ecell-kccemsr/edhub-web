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
const courseCategory = props => {
    const [sliderVal, setSliderVal] = useState(5000);
    const [ratingValue, setRating] = useState(1);
    const [providerVal, setProviderVal] = useState("");
    const [providerData, setProviderData] = useState([]);
    const [courseCategory, setCourseCategory] = useState([]);
    const [apiURL, setApiURL] = useState("");
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
        getCourses(true, apiURL, ratingValue, null, value);
    };
    useEffect(() => {
        if (props?.location?.search == "") {
            setApiURL("/api/courses?");
            getCourses(false, "/api/courses?");
        } else {
            let url = `/api/courses?search${props?.location?.search.substring(
                2
            )}&`;
            setApiURL(url);
            getCourses(false, url);
        }
        axios
            .get("/api/course-providers")
            .then(res => setProviderData(res.data.data))
            .catch(err => console.log(err));
    }, []);

    const getCourses = (filter, url, rating, provider, max, min) => {
        let pricefilter = "";
        let ratingfilter = "";
        let providerfilter = "";
        let minV = min || minValue.current.value;
        let maxv = max || maxValue.current.value;
        let ratingV = rating || ratingValue;
        let providerV = provider || providerVal;
        if (filter) {
            pricefilter = `price_min=${minV}&price_max=${maxv}`;
            ratingfilter = `&rating=${ratingV}`;
            providerfilter =
                providerV == "" ? "" : `&course_provider_id=${providerV}`;
        }
        axios
            .get(`${url}${pricefilter}${ratingfilter}${providerfilter}`)
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
        getCourses(true, apiURL);
    };

    const onRatingChange = ratingVal => {
        setRating(ratingVal);
        getCourses(true, apiURL, ratingVal);
    };

    const handleProviderFilter = providerVal => {
        setProviderVal(providerVal);
        getCourses(true, apiURL, null, providerVal);
    };

    return (
        <>
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
                                    <div className="card" key="rating">
                                        <div id={`heading-rating`}>
                                            <h2 className="mb-0">
                                                <a
                                                    className="btn btn-link course-category-card-headerlink"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target={`#collapse-rating`}
                                                    aria-expanded="true"
                                                    aria-controls={`collapse-rating`}
                                                >
                                                    Student’s Ratings
                                                    <i
                                                        className="fas fa-chevron-down ml-2"
                                                        style={{
                                                            color: "#000"
                                                        }}
                                                    ></i>
                                                </a>
                                            </h2>
                                        </div>

                                        <div
                                            id={`collapse-rating`}
                                            className="collapse show"
                                            aria-labelledby={`heading-rating`}
                                            data-parent="#courseCategoryParent"
                                        >
                                            <div className="card-body">
                                                <List
                                                    type="unstyled"
                                                    className="mb-0"
                                                >
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input
                                                                type="checkbox"
                                                                value="4"
                                                                onChange={e =>
                                                                    onRatingChange(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                            4 * & above
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input
                                                                type="checkbox"
                                                                value="3"
                                                                onChange={e =>
                                                                    onRatingChange(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                            3 * & above
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input
                                                                type="checkbox"
                                                                value="2"
                                                                onChange={e =>
                                                                    onRatingChange(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                            2 * & above
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input
                                                                type="checkbox"
                                                                value="1"
                                                                onChange={e =>
                                                                    onRatingChange(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                            1 * & above
                                                        </Label>
                                                    </FormGroup>
                                                </List>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="accordion course-category-accordion"
                                    id="courseCategoryParent"
                                >
                                    <div className="card" key="provider">
                                        <div id={`heading-provider`}>
                                            <h2 className="mb-0">
                                                <a
                                                    className="btn btn-link course-category-card-headerlink"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target={`#collapse-provider`}
                                                    aria-expanded="true"
                                                    aria-controls={`collapse-provider`}
                                                >
                                                    Provided by
                                                    <i
                                                        className="fas fa-chevron-down ml-2"
                                                        style={{
                                                            color: "#000"
                                                        }}
                                                    ></i>
                                                </a>
                                            </h2>
                                        </div>

                                        <div
                                            id={`collapse-provider`}
                                            className="collapse show"
                                            aria-labelledby={`heading-provider`}
                                            data-parent="#courseCategoryParent"
                                        >
                                            <div className="card-body">
                                                <List
                                                    type="unstyled"
                                                    className="mb-0"
                                                >
                                                    {providerData &&
                                                        providerData.map(p => {
                                                            return (
                                                                <FormGroup
                                                                    check
                                                                >
                                                                    <Label
                                                                        check
                                                                    >
                                                                        <Input
                                                                            type="checkbox"
                                                                            value={
                                                                                p?.id
                                                                            }
                                                                            onChange={e =>
                                                                                handleProviderFilter(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                        />
                                                                        {
                                                                            p?.name
                                                                        }
                                                                    </Label>
                                                                </FormGroup>
                                                            );
                                                        })}
                                                </List>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" lg="9">
                            <Row>
                                {courseCategory &&
                                    courseCategory.map(course => (
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
