import React from "react";

import Heading from "../heading/Heading";
import Project from "./Project";
import { ProjectDetails } from "./ProjectDetails";

export default function Projects() {
  console.log(ProjectDetails);
  return (
    <div>
      <Heading heading={"Projects"} />
      {ProjectDetails.map((project, idx) => {
        return <Project key={idx} {...project} />;
      })}
    </div>
  );
}
