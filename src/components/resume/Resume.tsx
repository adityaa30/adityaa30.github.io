import React from "react";
import ResumeFile from "../../assets/Resume.pdf";

const EmbedStyle = {
  position: "absolute",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 100
} as React.CSSProperties;

export default function Resume() {
  return <embed style={EmbedStyle} width="100%" height="100%" src={ResumeFile} type="application/pdf" />;
}
