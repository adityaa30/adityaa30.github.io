import React from "react";

import "./Chip.css";

interface ChipProps {
  value: string;
}

export default function Chip(props: ChipProps) {
  return <div className={"chip"}>{props.value}</div>;
}
