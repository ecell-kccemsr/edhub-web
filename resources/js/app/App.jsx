import React, { Fragment } from "react";
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
import Profile from "../profile/Profile";
import Profile1 from "../profile/Profile-1";
import Profile2 from "../profile/Profile-2";

import Notification from "../notification/notification";
import Compare from "../compare/Compare";
import Cart from "../cart/Cart";
import Checkout from "../checkout/Checkout";
import CourseDetail from "../courseDetail/CourseDetail";
import LandingPage from "../homepage/LandingPage";
import courseCategory from "../courseCategory/courseCategory";
import Guide1 from "../guide/Guide1";
import Guide2 from "../guide/Guide2";
import Guide3 from "../guide/Guide3";
import Guide4 from "../guide/Guide4";
import Guide5 from "../guide/Guide5";
const App = props => {
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
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/profile-1" exact component={Profile1} />
                    <Route path="/profile-2" exact component={Profile2} />

                    <Route
                        path="/notification"
                        exact
                        component={Notification}
                    />
                    <Route path="/compare" exact component={Compare} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route
                        path="/courseDetail"
                        exact
                        component={CourseDetail}
                    />
                    <Route path="/landingPage" exact component={LandingPage} />
                    <Route
                        path="/course-category"
                        exact
                        component={courseCategory}
                    />
                    <Route path="/guide1" exact component={Guide1} />
                    <Route path="/guide2" exact component={Guide2} />
                    <Route path="/guide3" exact component={Guide3} />
                    <Route path="/guide4" exact component={Guide4} />
                    <Route path="/guide5" exact component={Guide5} />
                </Layout>
            </Switch>
        </Fragment>
    );
};

export default App;
