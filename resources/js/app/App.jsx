import React, { Fragment, useEffect } from "react";
import Layout from "../layout/Layout";
import "../../sass/app.scss";
import Homepage from "../home/Homepage";
import Govermentjob from "../jobs/Govermentjob";
import Governmentjobcategory from "../jobs/Governmentjobcategory";
import Governmentjobsubcategory from "../jobs/Governmentjobsubcategory";

import Questionpaper from "../Question papers/Questionpaper";
import Questionpaper2 from "../Question papers/Questionpaper2";
import News from "../news/News";
import NewsCategory from "../news/NewsCategory";
import NewsSubCategory from "../news/NewsSubCategory";
import { Route, Switch } from "react-router";
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
import LayoutCourse from "../layoutCourse/LayoutCourse";
import store from "../store/store";
const App = props => {
    useEffect(() => {
        store.getActions().getAuthUser();
    }, []);
    return (
        <Fragment>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Layout>
                    <Route path="/" exact component={Homepage} />

                    <Route
                        path="/govermentjobs"
                        exact
                        component={Govermentjob}
                    />
                    <Route
                        path="/govermentjobs/:category_slug"
                        exact
                        component={Governmentjobcategory}
                    />

                    <Route
                        path="/govermentjobs/:category_slug/:subcategory_slug/:slug"
                        exact
                        component={Governmentjobsubcategory}
                    />

                    <Route
                        path="/questionpaper"
                        exact
                        component={Questionpaper}
                    />
                    <Route
                        path="/questionpaper/:category_slug"
                        exact
                        component={Questionpaper2}
                    />
                    <Route path="/news" exact component={News} />
                    <Route
                        path="/news/:category_slug"
                        exact={true}
                        component={NewsCategory}
                    />
                    <Route
                        path="/news/:category_slug/:subcategory_slug"
                        exact={true}
                        exact
                        component={NewsSubCategory}
                    />
                    <Route
                        path="/news/:category_slug/:subcategory_slug/:news_slug"
                        exact={true}
                        exact
                        component={Newsdetails}
                    />
                    <Route
                        path="/exam/calendar"
                        exact
                        component={Examcalendar}
                    />
                    <Route
                        path="/profile/basic"
                        exact
                        component={ProfileBasic}
                    />
                    <Route
                        path="/profile/wishlist"
                        exact
                        component={ProfileWishlist}
                    />
                    <Route
                        path="/profile/my-courses"
                        exact
                        component={ProfileCourses}
                    />

                    <Route
                        path="/notification"
                        exact
                        component={Notification}
                    />
                    <Route path="/compare" exact component={Compare} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route
                        path="/courseDetail/:course_slug"
                        exact
                        component={CourseDetail}
                    />
                    <Route path="/landingPage" exact component={LandingPage} />
                    <Route
                        path="/course-category"
                        exact
                        component={courseCategory}
                    />
                    <Route path="/guide" exact component={GuideModal} />
                    <Route path="/degree" exact component={Degree} />
                </Layout>
                {/* <LayoutCourse>
                    
                </LayoutCourse> */}
            </Switch>
        </Fragment>
    );
};

export default App;
