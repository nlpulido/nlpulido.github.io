import React from "react";
import { Router, Switch, Route } from "react-router-dom";

/* Screens */
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Oasis from "./pages/Projects/Oasis";
import ShadowThief from "./pages/Projects/ShadowThief";
import LostAndFound from "./pages/Projects/LostAndFound";

/* History */
import history from "./History";

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/projects/oasis" exact component={Oasis} />
                <Route path="/projects/shadow-thief" exact component={ShadowThief} />
                <Route path="/projects/lost-and-found" exact component={LostAndFound} />
            </Switch>
        </Router>
    );
}

export default Routes;