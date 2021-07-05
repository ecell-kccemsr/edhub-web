import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router";
import loadable from "@loadable/component";

//Layout
import JobLayoutRoute from "../layout/JobLayout";
import CourseLayoutRoutes from "../layoutCourse/LayoutCourse";

//Global Style
import "../../sass/app.scss";

//Components
const Govermentjob = loadable(() =>
    import("../jobs/Govermentjob" /* webpackChunkName: "js/goverment-job" */)
);
const Governmentjobsubcategory = loadable(() =>
    import(
        "../jobs/Governmentjobsubcategory" /* webpackChunkName: "js/government-job-subcategory" */
    )
);

// import News from "../news/News";
const Examcalendar = loadable(() =>
    import(
        "../examcalendar/Examcalendar" /* webpackChunkName: "js/exam-calendar" */
    )
);
const Notification = loadable(() =>
    import(
        "../notification/notification" /* webpackChunkName: "js/notification" */
    )
);
const NotFound = loadable(() =>
    import("../404/NotFound" /* webpackChunkName: "js/not-found" */)
);
const Compare = loadable(() =>
    import("../compare/Compare" /* webpackChunkName: "js/compare" */)
);
import RequestCallBack from "../components/RequestCallBack/RequestCallBack";
const Cart = loadable(() =>
    import("../cart/Cart" /* webpackChunkName: "js/cart" */)
);
const Checkout = loadable(() =>
    import("../checkout/Checkout" /* webpackChunkName: "js/checkout" */)
);
const CourseDetail = loadable(() =>
    import(
        "../courseDetail/CourseDetail" /* webpackChunkName: "js/course-detail" */
    )
);
const LandingPage = loadable(() =>
    import("../homepage/LandingPage" /* webpackChunkName: "js/landing-page" */)
);
const courseCategory = loadable(() =>
    import(
        "../courseCategory/courseCategory" /* webpackChunkName: "js/course-category" */
    )
);
const ProfileBasic = loadable(() =>
    import("../profile/ProfileBasic" /* webpackChunkName: "js/profile-basic" */)
);
const ProfileWishlist = loadable(() =>
    import(
        "../profile/ProfileWishlist" /* webpackChunkName: "js/profile-wishlist" */
    )
);
const ProfileCourses = loadable(() =>
    import(
        "../profile/ProfileCourses" /* webpackChunkName: "js/profile-course" */
    )
);
const Degree = loadable(() =>
    import("../degree/Degree" /* webpackChunkName: "js/degree" */)
);
const NewsHomePage = loadable(() =>
    import(
        "../newComponent/news/NewsHomePage" /* webpackChunkName: "js/news-home-page" */
    )
);
const SingleNewsPage = loadable(() =>
    import(
        "../newComponent/news/SingleNewsPage" /* webpackChunkName: "js/single-news-page" */
    )
);
const prevQPaperHomepage = loadable(() =>
    import(
        "../newComponent/prevQPaper/prevQPaperHomepage" /* webpackChunkName: "js/prev-qpaper-home-page" */
    )
);
const prevQPaperSingleDataPage = loadable(() =>
    import(
        "../newComponent/prevQPaper/prevQPaperSingleDataPage" /* webpackChunkName: "js/prev-qpaper-single-data-page" */
    )
);
const BlogHomepage = loadable(() =>
    import(
        "../newComponent/blogs/BlogHomepage" /* webpackChunkName: "js/blog-home-page" */
    )
);
const SingleBlog = loadable(() =>
    import(
        "../newComponent/blogs/SingleBlog" /* webpackChunkName: "js/single-blog" */
    )
);
const ForgotPass = loadable(() =>
    import(
        "../auth/forgotPass/ForgotPass" /* webpackChunkName: "js/forgot-pass" */
    )
);
const ResetPass = loadable(() =>
    import(
        "../auth/resetPass/ResetPass" /* webpackChunkName: "js/reset-pass" */
    )
);

import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import GuideModal from "../guide/Guide";
import http from "../utils/http";
import { useStoreActions } from "easy-peasy";
const App = props => {
    const setUser = useStoreActions(actions => actions.setUser);
    const setCompares = useStoreActions(actions => actions.setCompares);
    const setWishList = useStoreActions(actions => actions.setWishList);
    useEffect(() => {
        http.setToken(localStorage.getItem("accessToken"));
        http.get("auth/user").then(res => setUser(res.data.data));
        setCompares(JSON.parse(localStorage.getItem("compares")) || []);
        setWishList(JSON.parse(localStorage.getItem("wishlist")) || []);
    }, []);
    return (
        <Fragment>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/request" exact component={RequestCallBack} />
                <Route path="/register" exact component={Register} />
                <Route path="/forgot-password" exact component={ForgotPass} />
                <Route path="/reset-password/:token" component={ResetPass} />
                {/* //JobLayoutRoutes */}

                <CourseLayoutRoutes path="/" exact component={LandingPage} />

                {/*CourseLayoutRoutes */}
                <CourseLayoutRoutes
                    path="/govermentjobs"
                    exact
                    component={Govermentjob}
                />

                <CourseLayoutRoutes
                    path="/govermentjobs/:category_slug/:subcategory_slug"
                    exact
                    component={Governmentjobsubcategory}
                />
                <CourseLayoutRoutes
                    path="/govermentjobs/:category_slug/:subcategory_slug/:slug"
                    exact
                    component={Governmentjobsubcategory}
                />

                <CourseLayoutRoutes
                    path="/questionpaper"
                    exact
                    component={prevQPaperHomepage}
                />
                <CourseLayoutRoutes
                    path="/questionpaper/:category_slug/:subcategory_slug"
                    exact
                    component={prevQPaperSingleDataPage}
                />
                <CourseLayoutRoutes
                    path="/news"
                    exact
                    component={NewsHomePage}
                />
                <CourseLayoutRoutes
                    path="/news/:news_slug"
                    exact={true}
                    exact
                    component={SingleNewsPage}
                />

                <CourseLayoutRoutes
                    path="/exam/calendar"
                    exact
                    component={Examcalendar}
                />
                <CourseLayoutRoutes
                    path="/blogs"
                    exact
                    component={BlogHomepage}
                />
                <CourseLayoutRoutes
                    path="/blog/:blog_slug"
                    exact
                    component={SingleBlog}
                />

                <CourseLayoutRoutes
                    path="/profile/basic"
                    exact
                    component={ProfileBasic}
                />
                <CourseLayoutRoutes
                    path="/profile/wishlist"
                    exact
                    component={ProfileWishlist}
                />
                <CourseLayoutRoutes
                    path="/profile/my-courses"
                    exact
                    component={ProfileCourses}
                />
                <CourseLayoutRoutes
                    path="/notification"
                    exact
                    component={Notification}
                />
                <CourseLayoutRoutes path="/compare" exact component={Compare} />
                <CourseLayoutRoutes path="/cart" exact component={Cart} />
                <CourseLayoutRoutes
                    path="/checkout"
                    exact
                    component={Checkout}
                />
                <CourseLayoutRoutes
                    path="/courseDetail/:course_slug"
                    exact
                    component={CourseDetail}
                />
                <CourseLayoutRoutes
                    path="/course-category"
                    exact
                    component={courseCategory}
                />
                <CourseLayoutRoutes
                    path="/course-category/:query"
                    exact
                    component={courseCategory}
                />
                <CourseLayoutRoutes
                    path="/guide"
                    exact
                    component={GuideModal}
                />
                <CourseLayoutRoutes path="/degree" exact component={Degree} />
                <CourseLayoutRoutes path="*" exact component={NotFound} />
            </Switch>
        </Fragment>
    );
};

export default App;
