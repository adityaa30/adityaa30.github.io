import React from "react";

import Heading from "../heading/Heading";
import Markdown from "../markdown/Markdown";
import ProfilePic from "../../assets/profile.png";

import "./About.css";

const aboutMarkdown = `
My name is Aditya Kumar, a junior year Computer Science undergraduate student at
[NIT, Trichy](https://www.nitt.edu/).

I like to work, travel, play games (both indoor & outdoor) and specially listen to
music. I've developed a crazy interest for 'coding' in general. I enjoy competitive
programming, hacking on random things, developing software, specifically in the field
machine learning and multi-modal artificial intelligence with a very deep focus on creating
application oriented AI solutions. I have been involved in software development, computer vision
& artificial Intelligence for the past 2 years and currently working on improving my skills,
finding new ways of thinking & problem solving to stay on top on new development.
`;

export default function About() {
  return (
    <div>
      <Heading heading={"About Me"} />
      <div className={"image-container"}>
        <img src={ProfilePic} alt={"Profile Pic"} />
      </div>
      <Markdown source={aboutMarkdown} />
    </div>
  );
}
