import React from "react";

import Heading from "../heading/Heading";
import Project, { ProjectProps } from "./Project";

interface ProjectListProps {
  heading: string;
  projects: Array<ProjectProps>;
}

export default function ProjectList(props: ProjectListProps) {
  return (
    <div>
      <Heading heading={props.heading} />
      {props.projects.map((project) => {
        return <Project key={project.title} {...project} />;
      })}
    </div>
  );
}
