import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Comp1 } from "./components/Comp1";

import "./custom.css"

export const App = () => {
    return (
        <Switch>
            <Route path="/c1" exact component={Comp1} />
            <Redirect from="*" to="/c1" />
        </Switch>
    );
}
