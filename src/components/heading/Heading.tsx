import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./Heading.css";

interface HeadingProps {
  heading: string;
}

export default function Heading(props: HeadingProps) {
  const theme = useContext(ThemeContext);
  return <h1 style={{ color: theme.primary }}>{props.heading}</h1>;
}
