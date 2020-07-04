import React from "react";

import Heading from "../heading/Heading";
import Markdown from "../markdown/Markdown";
import useMarkdown from "../../hooks/useMarkdown";

import "./About.css";
import AboutMarkdownPath from "../../assets/about.md";
import ProfilePic from "../../assets/profile.png";

export default function About() {
  const about = useMarkdown(AboutMarkdownPath);
  return (
    <div>
      <Heading heading={"About Me"} />
      <div className={"image-container"}>
        <img src={ProfilePic} alt={"Profile Pic"} />
      </div>
      <Markdown source={about} />
    </div>
  );
}
