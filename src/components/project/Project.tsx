import React, { useState, useContext } from "react";
import Chip from "../chip/Chip";
import Markdown from "../markdown/Markdown";
import useMarkdownUrl from "../../hooks/useMarkdown";
import { ThemeContext } from "../../context/ThemeContext";

import "./Project.css";

export interface ProjectProps {
  title: string;
  subtitle: string | undefined;
  techStack: Array<string> | undefined;
  duration: string | undefined;
  details: string;
  repositoryLink: string | undefined;
  webLink: string | undefined;
  playstoreLink: string | undefined;
  readme: string | undefined;
}

export default function Project(props: ProjectProps) {
  const [showDetails, setShowDetails] = useState(false);
  const readme = useMarkdownUrl(props.readme);
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ borderColor: theme.light }}
      className={"project-container"}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className={"project-header"}>
        <div className={"project-title"} style={{ color: theme.light }}>
          {props.title}
        </div>
        {props.repositoryLink && (
          <a href={props.repositoryLink} target="_blank" rel="noopener noreferrer">
            <i className={"fab fa-github fa-lg"}></i>
          </a>
        )}
        {props.webLink && (
          <a href={props.webLink} target="_blank" rel="noopener noreferrer">
            <i className={"fas fa-globe fa-lg"}></i>
          </a>
        )}
        {props.playstoreLink && (
          <a href={props.playstoreLink} target="_blank" rel="noopener noreferrer">
            <i className={"fab fa-google-play fa-lg"}></i>
          </a>
        )}
      </div>
      {props.subtitle && (
        <div className={"project-subtitle"} style={{ color: theme.lightest }}>
          {props.subtitle}
        </div>
      )}
      {props.techStack &&
        props.techStack.map((value, idx) => {
          return <Chip key={idx} value={value} />;
        })}
      {props.duration && (
        <div className={"project-duration"} style={{ color: theme.lightest }}>
          <span role="img" aria-label={"Calendar"}>
            📆
          </span>{" "}
          {props.duration}
        </div>
      )}
      <Markdown source={showDetails && readme ? readme : props.details} />
    </div>
  );
}
