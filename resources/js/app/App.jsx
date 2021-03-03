import React, { Fragment } from "react";
import Layout from "../layout/Layout";
import "../../sass/app.scss";
import Homepage from "../home/Homepage";
import Govermentjob from "../jobs/govermentjobs/Govermentjob";
import { Route, Switch } from "react-router";
import News from "../news/News";

const App = props => {
    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/news" exact component={News} />
                    <Route
                        path="/govermentjobs"
                        exact
                        component={Govermentjob}
                    />
                </Switch>
            </Layout>
        </Fragment>
    );
};

export default App;
