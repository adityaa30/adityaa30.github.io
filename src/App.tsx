import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Project";
import Resume from "./components/resume/Resume";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function App() {
  return (
    <div className={"container"}>
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path={"/m/projects"} component={Projects} />
          <Route exact={true} path={"/m/resume"} component={Resume} />
          <Route path={"/"} component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
