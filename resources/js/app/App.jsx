import React, { Fragment } from "react";
import Layout from "../layout/Layout";
import "../../sass/app.scss";
import Homepage from "../home/Homepage";
import Govermentjob from "../jobs/govermentjobs/Govermentjob";
import Bankjob from "../jobs/bankjobs/Bankjob";
import Bankjoblast from "../jobs/bankjobs/Bankjoblast";
import Questionpaper from "../Question papers/Questionpaper";
import Questionpaper2 from "../Question papers/Questionpaper2";

import { Route, Switch } from "react-router";
import News from "../news/News";
import Examcalendar from "../examcalendar/Examcalendar";

const App = props => {
    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/govermentjobs" exact component={Govermentjob} />
                    <Route path="/bankjob" exact component={Bankjob} /> 
                    <Route path="/bankjoblast" exact component={Bankjoblast} />
                    <Route path="/news" exact component={News} />
                    <Route path="/questionpaper" exact component={Questionpaper} />
                    <Route path="/questionpaper2" exact component={Questionpaper2} />

                </Switch>
            </Layout>
        </Fragment>
    );
};

export default App;
