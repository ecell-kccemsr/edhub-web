import React, { Fragment } from "react";
import Layout from "../layout/Layout";
import "../../sass/app.scss";
import Homepage from "../home/Homepage";
import Govermentjob from "../jobs/govermentjobs/Govermentjob";
import Bankjob from "../jobs/bankjobs/Bankjob";
import Bankjoblast from "../jobs/bankjobs/Bankjoblast";
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
                    <Route path="/bankjob" exact component={Bankjob} />
                    <Route path="/bankjoblast" exact component={Bankjoblast} />
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
                </Switch>
            </Layout>
        </Fragment>
    );
};

export default App;
