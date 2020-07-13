import React from "react";
import ResumeFile from "../../assets/Resume.pdf";

export default function Resume() {
  return (
    <embed
      style={{
        position: "absolute",
        top: 0,
        left: 0
      }}
      width="100%"
      height="100%"
      src={ResumeFile}
      type="application/pdf"
    />
  );
}
