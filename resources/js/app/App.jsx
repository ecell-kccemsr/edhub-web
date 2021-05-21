import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router";

//Layout
import JobLayoutRoute from "../layout/JobLayout";
import CourseLayoutRoutes from "../layoutCourse/LayoutCourse";

//Global Style
import "../../sass/app.scss";

//Components
import Govermentjob from "../jobs/Govermentjob";
import Governmentjobsubcategory from "../jobs/Governmentjobsubcategory";

// import News from "../news/News";

import Examcalendar from "../examcalendar/Examcalendar";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Notification from "../notification/notification";
import NotFound from "../404/NotFound";
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
import NewsHomePage from "../newComponent/news/NewsHomePage";
import SingleNewsPage from "../newComponent/news/SingleNewsPage";
import prevQPaperHomepage from "../newComponent/prevQPaper/prevQPaperHomepage";
import prevQPaperSingleDataPage from "../newComponent/prevQPaper/prevQPaperSingleDataPage";
import BlogHomepage from "../newComponent/blogs/BlogHomepage";
import SingleBlog from "../newComponent/blogs/SingleBlog";
import ForgotPass from "../auth/forgotPass/ForgotPass"
import ResetPass from "../auth/resetPass/ResetPass";
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
                <Route path="/register" exact component={Register} />
                <Route path="/forgot-password" exact component={ForgotPass} />
                <Route path="/reset-password/:token" component={ResetPass} />
                {/* //JobLayoutRoutes */}

                <CourseLayoutRoutes path="/" exact component={NewsHomePage} />


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
                <CourseLayoutRoutes path='*' exact component={NotFound} />
            </Switch>
        </Fragment>
    );
};

export default App;
