import React, { Fragment } from "react";
import Layout from "../layout/Layout";
import "../../sass/app.scss";
import Homepage from "../home/Homepage";
import Govermentjob from "../jobs/Govermentjob";
import Governmentjobcategory from "../jobs/Governmentjobcategory";
import Governmentjobsubcategory from "../jobs/Governmentjobsubcategory";
import Questionpaper from "../Question papers/Questionpaper";
import Questionpaper2 from "../Question papers/Questionpaper2";
import News from "../news/newspages/News";
import NewsCategory from "../news/newspages/NewsCategory";
import NewsSubCategory from "../news/newspages/NewsSubCategory";
import { Route, Switch } from "react-router";
import Examcalendar from "../examcalendar/Examcalendar";

const App = props => {
    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route
                        path="/govermentjobs"
                        exact
                        component={Govermentjob}
                    />
                    <Route path="/governmentjobcategory/view/:category_id" exact component={Governmentjobcategory} />
                    <Route path="/governmentjobsubcategory/view/:subcategory_id" exact component={Governmentjobsubcategory} />
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
                        path="/examcalendar"
                        exact
                        component={Examcalendar}
                    />
                </Switch>
            </Layout>
        </Fragment>
    );
};

export default App;
