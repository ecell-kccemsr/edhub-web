import React, { Fragment } from "react";
import Layout from "../layout/Layout";
import "../../sass/app.scss";
import Homepage from "../home/Homepage";
import Govermentjob from "../jobs/govermentjobs/Govermentjob";
import Bankjob from "../jobs/bankjobs/Bankjob";
import Bankjoblast from "../jobs/bankjobs/Bankjoblast";
import { Route, Switch } from "react-router";

const App = (props) => {
    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/govermentjobs" exact component={Govermentjob} />
                    <Route path="/bankjob" exact component={Bankjob} /> 
                    <Route path="/bankjoblast" exact component={Bankjoblast} />

                </Switch>
            </Layout>
        </Fragment>
    );
};

export default App;
