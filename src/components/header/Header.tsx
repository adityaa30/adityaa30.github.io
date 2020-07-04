import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <div className={"header-container"}>
      <div className={"menu-links"}>
        <Link to="/">Home</Link>
        <Link to="/m/projects">Projects</Link>
        <Link to="/m/resume" href="/Aditya-Kumar-Resume.pdf">
          Resume
        </Link>
      </div>
      <div className={"icon-links"}>
        <a href="https://www.linkedin.com/in/adityaa30" target="_blank" rel="noopener noreferrer">
          <i className={"fab fa-linkedin fa-lg"}></i>
        </a>
        <a href="https://github.com/adityaa30" target="_blank" rel="noopener noreferrer">
          <i className={"fab fa-github fa-lg"}></i>
        </a>
        <a href="mailto:k.aditya00@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className={"fas fa-envelope fa-lg"}></i>
        </a>
      </div>
    </div>
  );
}