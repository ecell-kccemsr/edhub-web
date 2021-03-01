import React, { Fragment } from "react";
import Layout from "../layout/Layout";
import "../../sass/app.scss";
import Homepage from "../home/Homepage";
import { Route, Switch } from "react-router";

const App = (props) => {
    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                </Switch>
            </Layout>
        </Fragment>
    );
};

export default App;
