import React from "react";

import "./Heading.css";

interface HeadingProps {
  heading: string;
}

export default function Heading(props: HeadingProps) {
  return <h1>{props.heading}</h1>;
}
