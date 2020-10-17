import React from "react";

import Heading from "../heading/Heading";
import Markdown from "../markdown/Markdown";
import ProfilePic from "../../assets/profile.png";

import "./About.css";

const aboutMarkdown = `
## Hi 👋, I'm Aditya
Currently a senior year Computer Science undergraduate student at
[NIT, Trichy](https://www.nitt.edu/).

I like to work, travel, play games (both indoor & outdoor) and specially listen to music.
I've developed a crazy interest for 'coding' in general. I enjoy competitive programming
and developing software. I have been involved in software development for the past 3 years
and currently working on improving my skills, finding new ways of thinking & problem solving
to stay on top on new development.

- 👨‍💻 **Programming Languages**: Python • C++ • Java • Kotlin •
JavaScript • TypeScript • Go
- 🌐 **Web Development**: HTML • CSS • React • Svelte •
NodeJS • Flask • Django
- 📱 **App Development**: Android Studio • Android Jetpack
- ⚙️ **Tools**: Linux • Git • TensorFlow • Docker • MySQL
`;

export default function About() {
  return (
    <div className={"about-container"}>
      <Heading heading={"About Me"} />
      <div className={"image-container"}>
        <img src={ProfilePic} alt={"Profile Pic"} />
      </div>
      <Markdown source={aboutMarkdown} />
    </div>
  );
}
