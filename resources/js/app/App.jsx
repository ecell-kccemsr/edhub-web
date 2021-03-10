import React, { Fragment } from "react";
import Layout from "../layout/Layout";
import "../../sass/app.scss";
import Homepage from "../home/Homepage";
import Govermentjob from "../jobs/Govermentjob";
import Governmentjobcategory from "../jobs/Governmentjobcategory";
import Governmentjobsubcategory from "../jobs/Governmentjobsubcategory";
import Govermentjobcategory1 from "../jobs/Govermentjobcategory1";
import Questionpaper from "../Question papers/Questionpaper";
import Questionpaper2 from "../Question papers/Questionpaper2";
import News from "../news/newspages/News";
import NewsCategory from "../news/newspages/NewsCategory";
import NewsSubCategory from "../news/newspages/NewsSubCategory";
import NewsDetails from "../news/newspages/Newsdetails";
import { Route, Switch } from "react-router";
import Examcalendar from "../examcalendar/Examcalendar";
import Governmentjobsubcategory1 from "../jobs/Govermentjobcategory1";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";

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
                        path="/govermentjobs/view/:category_id"
                        exact
                        component={Governmentjobcategory}
                    />
                    <Route
                        path="/govermentjobs/view/sub/category/:subcategory_id"
                        exact
                        component={Governmentjobsubcategory}
                    />
                    <Route
                        path="/govermentjobs/view/category/:category_id"
                        exact
                        component={Governmentjobsubcategory1}
                    />
                    <Route path="/news" exact component={News} />
                    <Route
                        path="/questionpaper"
                        exact
                        component={Questionpaper}
                    />
                    <Route
                        path="/questionpaper2"
                        exact
                        component={Questionpaper2}
                    />

                    <Route
                        path="/newscategory/view/:category_id"
                        exact={true}
                        component={NewsCategory}
                    />
                    <Route
                        path="/newssubcategory/view/:subcategory_id"
                        exact={true}
                        exact
                        component={NewsSubCategory}
                    />
                     <Route
                        path="/newsdetails"
                        exact={true}
                        component={NewsDetails}
                    />
                    <Route
                        path="/examcalendar"
                        exact
                        component={Examcalendar}
                    />
                </Layout>
            </Switch>
        </Fragment>
    );
};

export default App;
