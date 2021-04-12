import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router";

//Layout
import JobLayoutRoute from "../layout/JobLayout";
import CourseLayoutRoutes from "../layoutCourse/LayoutCourse";

//Global Style
import "../../sass/app.scss";

//Components
import Homepage from "../home/Homepage";
import Govermentjob from "../jobs/Govermentjob";
import Governmentjobcategory from "../jobs/Governmentjobcategory";
import Governmentjobsubcategory from "../jobs/Governmentjobsubcategory";
import Questionpaper from "../Question papers/Questionpaper";
import Questionpaper2 from "../Question papers/Questionpaper2";
import News from "../news/News";
import NewsCategory from "../news/NewsCategory";
import NewsSubCategory from "../news/NewsSubCategory";
import Examcalendar from "../examcalendar/Examcalendar";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Newsdetails from "../news/NewsDetails";
import Notification from "../notification/notification";
import Compare from "../compare/Compare";
import Cart from "../cart/Cart";
import Checkout from "../checkout/Checkout";
import CourseDetail from "../courseDetail/CourseDetail";
import LandingPage from "../homepage/LandingPage";
import courseCategory from "../courseCategory/courseCategory";
import GuideModal from "../guide/Guide";
import ProfileBasic from "../profile/ProfileBasic";
import ProfileWishlist from "../profile/ProfileWishlist";
import ProfileCourses from "../profile/ProfileCourses";
import Degree from "../degree/Degree";
import http from "../utils/http";
import { useStoreActions } from "easy-peasy";

const App = props => {
    const setUser = useStoreActions(actions => actions.setUser);
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        http.setToken(accessToken);
        http.get("auth/user").then(res => setUser(res.data.data));
    }, []);
    return (
        <Fragment>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />\
                {/* //JobLayoutRoutes */}
                <JobLayoutRoute path="/" exact component={Homepage} />
                <JobLayoutRoute
                    path="/govermentjobs"
                    exact
                    component={Govermentjob}
                />
                <JobLayoutRoute
                    path="/govermentjobs/:category_slug"
                    exact
                    component={Governmentjobcategory}
                />
                <JobLayoutRoute
                    path="/govermentjobs/:category_slug/:subcategory_slug/:slug"
                    exact
                    component={Governmentjobsubcategory}
                />
                <JobLayoutRoute
                    path="/questionpaper"
                    exact
                    component={Questionpaper}
                />
                <JobLayoutRoute
                    path="/questionpaper/:category_slug"
                    exact
                    component={Questionpaper2}
                />
                <JobLayoutRoute path="/news" exact component={News} />
                <JobLayoutRoute
                    path="/news/:category_slug"
                    exact={true}
                    component={NewsCategory}
                />
                <JobLayoutRoute
                    path="/news/:category_slug/:subcategory_slug"
                    exact={true}
                    exact
                    component={NewsSubCategory}
                />
                <JobLayoutRoute
                    path="/news/:category_slug/:subcategory_slug/:news_slug"
                    exact={true}
                    exact
                    component={Newsdetails}
                />
                <JobLayoutRoute
                    path="/exam/calendar"
                    exact
                    component={Examcalendar}
                />
                //CourseLayoutRoutes
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
                    path="/landingPage"
                    exact
                    component={LandingPage}
                />
                <CourseLayoutRoutes
                    path="/course-category"
                    exact
                    component={courseCategory}
                />
                <CourseLayoutRoutes
                    path="/guide"
                    exact
                    component={GuideModal}
                />
                <CourseLayoutRoutes path="/degree" exact component={Degree} />
            </Switch>
        </Fragment>
    );
};

export default App;
