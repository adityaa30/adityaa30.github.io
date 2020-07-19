import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./Chip.css";

interface ChipProps {
  value: string;
}

export default function Chip(props: ChipProps) {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ borderColor: theme.primaryDark }} className={"chip"}>
      {props.value}
    </div>
  );
}
