import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  value: string;
  language: string;
}

export default function CodeBlock(props: CodeBlockProps) {
  return (
    <SyntaxHighlighter language={props.language} style={atomDark}>
      {props.value}
    </SyntaxHighlighter>
  );
}
