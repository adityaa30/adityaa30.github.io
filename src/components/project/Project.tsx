import React, { useState, useContext } from "react";
import Markdown from "../markdown/Markdown";
import useMarkdownUrl from "../../hooks/useMarkdown";
import { ThemeContext } from "../../context/ThemeContext";

import "./Project.css";

export interface ProjectProps {
  title: string;
  subtitle: string;
  duration: string;
  details: string;
  repositoryLink: string;
  webLink: string;
  playstoreLink: string;
  readme: string;
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
          <a href={props.repositoryLink} target="_blank" rel="noopener noreferrer">
            <i className={"fas fa-globe fa-lg"}></i>
          </a>
        )}
        {props.playstoreLink && (
          <a href={props.repositoryLink} target="_blank" rel="noopener noreferrer">
            <i className={"fab fa-google-play fa-lg"}></i>
          </a>
        )}
      </div>
      {props.subtitle && (
        <div className={"project-subtitle"} style={{ color: theme.lightest }}>
          {props.subtitle}
        </div>
      )}
      {props.duration && (
        <div className={"project-duration"} style={{ color: theme.lightest }}>
          <span role="img" aria-label={"Calendar"}>
            📅
          </span>{" "}
          {props.duration}
        </div>
      )}
      <div className={"project-details"}>
        <Markdown source={showDetails && readme ? readme : props.details} />
      </div>
    </div>
  );
}
