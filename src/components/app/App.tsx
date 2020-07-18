import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Header from "../header/Header";
import About from "../about/About";
import Footer from "../footer/Footer";
import Projects from "../project/Projects";
import Resume from "../resume/Resume";

import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

export default function App() {
    return (
        <div className={'app-container'}>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Header />
                <Switch>
                    <Route exact={true} path={"/projects"} component={Projects} />
                    <Route exact={true} path={"/resume"} component={Resume} />
                    <Route path={"/"} component={About} />
                </Switch>
                <Footer />
            </HashRouter>
        </div>
    );
}
