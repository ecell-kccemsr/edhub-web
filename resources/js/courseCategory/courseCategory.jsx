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
import TooltipComponent from "../homepage/landingPageComponents/TooltipComponent";

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
                <img src={item} className="w-100" style={{height:"20rem"}} alt="Category Page Slider" />
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

    //State
    const [apiURL, setApiURL] = useState("");
    const [ratingValue, setRating] = useState(0);
    const [ceritificationVal, setCertificationVal] = useState(1);
    const [lang, setLang] = useState("");
    const [discount, setDiscount] = useState('0');
    const [sliderVal, setSliderVal] = useState(20000000);
    const [providerVal, setProviderVal] = useState("");
    const [providerData, setProviderData] = useState([]);
    const [courseCategory, setCourseCategory] = useState([]);
    const [priceFilter, setPriceFilter] = useState({
        min: 0,
        max: 20000000
    });
    const [currentCoursePage, setCurrentCoursePage] = useState({
        current_page: 1,
        last_page: null
    });

    //Refs
    const minValue = useRef(null);
    const maxValue = useRef(null);
    const sliderValue = useRef(null);
   
    //Change price input and slider value when user slides. Also get all courses by adding price filter 
    const onSliderChange = value => {
        setPriceFilter({
            ...priceFilter,
            max: isNaN(parseInt(value)) ? 0 : parseInt(value)
        });
        setSliderVal(value);
        getCourses(true, apiURL, ratingValue, null, value);
    };

    useEffect(() => {
        //If user comes from guide modal the passed values will be used
        if (props?.location?.state?.modalValues) {
            const modalVals = props?.location?.state?.modalValues;
            let str = "/api/courses?"; //base url
            if (modalVals?.category != "")
                str = str.concat(`course_category_id=${modalVals?.category}&`); //If user selected category append to url
            if (modalVals?.subcategory != "")
                str = str.concat(
                    `course_sub_category_id=${modalVals?.subcategory}&`//If user selected subcategory append to url
                );
            if (modalVals?.difficulty != "")
                str = str.concat(`difficulty_level=${modalVals?.difficulty}&`);//If user selected difficulty append to url
            if (modalVals?.locale != "")
                str = str.concat(`locale=${modalVals?.locale}&`);//If user selected difficulty append to url
            setApiURL("/api/courses?");
            getCourses(true, str, 0, "", modalVals?.max, modalVals?.min);
            window.history.replaceState(null, '')
        } 
        //If user comes from searching on landing page but entered empty string (show all courses)
        else if (props?.location?.search == "") {
            setApiURL("/api/courses?");
            getCourses(false, "/api/courses?");
        } 
        //If user comes from searching on landing page (show courses as per user preference)
        else {
            let url = `/api/courses?search${props?.location?.search.substring(
                2
            )}&`;
            setApiURL(url);
            getCourses(false, url);
        }

        // Get all course providers for filter
        axios
            .get("/api/course-providers")
            .then(res => setProviderData(res.data.data))
            .catch(err => console.log(err));
    }, [props?.location?.state]);
    
    //Function to get courese on basis of the various filter passed to it
    const getCourses = (filter, url, rating, provider, max, min,perPage=15,pageNumber,certification,language,discountArg) => {
        let pricefilter = "";
        let ratingfilter = "";
        let providerfilter = "";
        let certificationfilter = "";
        let langfilter = "";
        let discountfilter = "";
        let perpage = `&per_page=${perPage}`;
        let pagenumber = pageNumber?`&page=${pageNumber}`:`&page=${currentCoursePage?.current_page}`;
        let ratingV = rating || ratingValue;
        let providerV = provider || providerVal;
        let minV = min || minValue.current.value;
        let maxv = max || maxValue.current.value;
        let certificationV = certification==null?ceritificationVal: certification;
        let languageV = language==null?lang:language
        let discountV = discountArg==null?discount:discountArg
        if (filter) {
            pricefilter = `price_min=${minV}&price_max=${maxv}`;
            ratingfilter = `&rating=${ratingV}`;
            certificationfilter = `&certification=${certificationV}`;
            discountfilter = `&discount_percentage=${discountV}`;
            langfilter =languageV==""?"": `&locale=${languageV}`;
            providerfilter =
                providerV == "" ? "" : `&course_provider_id=${providerV}`;
        }
        //Request Data
        axios
            .get(`${url}${pricefilter}${ratingfilter}${providerfilter}${langfilter}${discountfilter}${certificationfilter}${perpage}${pagenumber}`)
            .then(res => {
                setCourseCategory(res.data.data);
                setCurrentCoursePage({
                    current_page: res.data.meta.current_page,
                    last_page: res.data.meta.last_page
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handlePagination = (pageNo)=>{
            getCourses(true, apiURL,null,null,null,null,15,pageNo);
            window.scrollTo(0, 0)
    }

    //Function to set values of the range slider and input as user changes input and also call courses adding price filters
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

    //Function to get courses by adding a rating filter
    const onRatingChange = ratingVal => {
        setRating(ratingVal);
        getCourses(true, apiURL, ratingVal);
    };

    //Function to get courses by adding a certificate filter
    const onCertificationChange = val => {
        setCertificationVal(val);
        getCourses(true, apiURL,null,null,null,null,9,1,val);
    };

    //Function to get courses by adding a language filter
    const onLangChange = val => {
        setLang(val);
        getCourses(true, apiURL,null,null,null,null,9,1,null,val);
    };

    //Function to get courses by adding a discount filter
    const onDiscountChange = val => {
        setDiscount(val);
        getCourses(true, apiURL,null,null,null,null,9,1,null,null,val);
    };

    //Function to get courses by adding a provider filter
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
                                        max="200000"
                                        step="100"
                                        className="course-pricing-slider"
                                        value={sliderVal}
                                        step={1000}
                                        onChange={e =>
                                            onSliderChange(e.target.value)
                                        }
                                        ref={sliderValue}
                                    ></input>
                                </div>
                                <div className="pricing-slider-div">
                                    <span>Free</span>
                                    <span>2L</span>
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
                                                                  type="radio" name="rating"
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
                                                                  type="radio" name="rating"
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
                                                                 type="radio" name="rating"
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
                                                                 type="radio" name="rating"
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
                                                        providerData.map((p,key) => {
                                                            return (
                                                                <FormGroup
                                                                    check
                                                                    key={key}
                                                                >
                                                                    <Label
                                                                        check
                                                                    >
                                                                        <Input
                                                                         type="radio" name="provider"
                                                                            
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

                                
                                <div
                                    className="accordion course-category-accordion"
                                    id="courseCategoryParent"
                                >
                                    <div className="card" key="language">
                                        <div id={`heading-language`}>
                                            <h2 className="mb-0">
                                                <a
                                                    className="btn btn-link course-category-card-headerlink"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target={`#collapse-language`}
                                                    aria-expanded="true"
                                                    aria-controls={`collapse-language`}
                                                >
                                                    Language
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
                                            id={`collapse-language`}
                                            className="collapse show"
                                            aria-labelledby={`heading-language`}
                                            data-parent="#courseCategoryParent"
                                        >
                                            <div className="card-body">
                                                <List
                                                    type="unstyled"
                                                    className="mb-0"
                                                >
                                                    
                                                                <FormGroup
                                                                    check
                                                                >
                                                                    <Label
                                                                        check
                                                                    >
                                                                        <Input
                                                                       
                                                                       type="radio" name="language"
                                                                            value="English (US)"
                                                                            onClick={(e)=>onLangChange(e.target.value)}
                                                                        />
                                                                       English (US)
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup
                                                                    check
                                                                >
                                                                    <Label
                                                                        check
                                                                    >
                                                                        <Input
                                                                             type="radio" name="language"
                                                                            value="English (UK)"
                                                                            onClick={(e)=>onLangChange(e.target.value)}
                                                                        />
                                                                       English (UK)
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup
                                                                    check
                                                                >
                                                                    <Label
                                                                        check
                                                                    >
                                                                        <Input
                                                                             type="radio" name="language"
                                                                            value="Hindi"
                                                                            onClick={(e)=>onLangChange(e.target.value)}
                                                                        />
                                                                       Hindi
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup
                                                                    check
                                                                >
                                                                    <Label
                                                                        check
                                                                    >
                                                                        <Input
                                                                             type="radio" name="language"
                                                                            value="Marathi"
                                                                            onClick={(e)=>onLangChange(e.target.value)}
                                                                        />
                                                                       Marathi
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup
                                                                    check
                                                                >
                                                                    <Label
                                                                        check
                                                                    >
                                                                        <Input
                                                                             type="radio" name="language"
                                                                            value="Punjabi"
                                                                            onClick={(e)=>onLangChange(e.target.value)}
                                                                        />
                                                                       Punjabi
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
                                    <div className="card" key="offers">
                                        <div id={`heading-offers`}>
                                            <h2 className="mb-0">
                                                <a
                                                    className="btn btn-link course-category-card-headerlink"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target={`#collapse-offers`}
                                                    aria-expanded="true"
                                                    aria-controls={`collapse-offers`}
                                                >
                                                    Offers/Discounts
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
                                            id={`collapse-offers`}
                                            className="collapse show"
                                            aria-labelledby={`heading-offers`}
                                            data-parent="#courseCategoryParent"
                                        >
                                            <div className="card-body">
                                                <List type="unstyled" className="mb-0">
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="discount_percentage" onChange={e=>onDiscountChange(e.target.value)} value="30"/>30% & above off
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="discount_percentage" onChange={e=>onDiscountChange(e.target.value)} value="40"/>40% & above off
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="discount_percentage" onChange={e=>onDiscountChange(e.target.value)} value="60"/>60% & above off
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="discount_percentage" onChange={e=>onDiscountChange(e.target.value)} value="80"/>80% & above off
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
                                    <div className="card" key="certificates">
                                        <div id={`heading-certificates`}>
                                            <h2 className="mb-0">
                                                <a
                                                    className="btn btn-link course-category-card-headerlink"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target={`#collapse-certificates`}
                                                    aria-expanded="true"
                                                    aria-controls={`collapse-certificates`}
                                                >
                                                    Certificates
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
                                            id={`collapse-certificates`}
                                            className="collapse show"
                                            aria-labelledby={`heading-certificates`}
                                            data-parent="#courseCategoryParent"
                                        >
                                            <div className="card-body">
                                                <List
                                                    type="unstyled"
                                                    className="mb-0"
                                                >
                                                    
                                                                <FormGroup
                                                                    check
                                                                >
                                                                    <Label
                                                                        check
                                                                    >
                                                                        <Input
                                                                            type="radio"
                                                                            name="radio1"
                                                                            onChange={()=>onCertificationChange(1)}
                                                                        />
                                                                       Yes
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup
                                                                    check
                                                                >
                                                                    <Label
                                                                        check
                                                                    >
                                                                        <Input
                                                                            type="radio"
                                                                            name="radio1"
                                                                            onChange={()=>onCertificationChange(0)}
                                                                        />
                                                                      No
                                                                    </Label>
                                                                </FormGroup>
                                                             
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
                                            <a data-tip data-for={course?.id.toString()}>
                                             <CourseCard data={course} />
                                          </a>
                                            <TooltipComponent data={course} />
                                        </Col>
                                    ))}
                            </Row>
                            {
                                courseCategory && courseCategory?.length>0 && (
                                    <>
                                    <button 
                                    className="pg-btn"
                                    disabled={currentCoursePage?.current_page==1}
                                    onClick={()=>{
                                        handlePagination(currentCoursePage?.current_page-1)
                                    }}>PREV</button>
                                    <button 
                                    className="pg-btn"
                                     disabled={currentCoursePage?.current_page==currentCoursePage?.last_page}
                                    onClick={()=>{
                                        handlePagination(currentCoursePage?.current_page+1)
                                    }}>NEXT</button>
                                    </>
                                )
                            }
                            
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default courseCategory;
