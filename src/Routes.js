import React from "react";
import { Router, Switch, Route } from "react-router-dom";

/* Screens */
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

/* History */
import history from "./History";

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about/" exact component={About} />
                <Route path="/contact/" exact component={Contact} />
            </Switch>
        </Router>
    );
}

export default Routes;