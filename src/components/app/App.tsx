import React, { useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Header from "../header/Header";
import About from "../about/About";
import Footer from "../footer/Footer";
import ProjectList from "../project/ProjectList";
import { experience as experiences, projects } from "../project/ProjectDetails";
import Resume from "../resume/Resume";

import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import { ThemeContext } from "../../context/ThemeContext";

export default function App() {
  const theme = useContext(ThemeContext);
  document.body.style.color = theme.textColor;
  document.body.style.backgroundColor = theme.accent;

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className={"app-container"}>
        <Header />
        <Switch>
          <Route
            exact={true}
            path={"/projects"}
            render={() => <ProjectList heading={"Projects"} projects={projects} />}
          />
          <Route
            exact={true}
            path={"/experience"}
            render={() => <ProjectList heading={"Experience"} projects={experiences} />}
          />
          <Route exact={true} path={"/resume"} component={Resume} />
          <Route path={"/"} component={About} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}
