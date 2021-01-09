import React from "react";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock";

interface MarkdownProps {
  source: string;
}

export default function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown
      source={props.source}
      escapeHtml={false}
      renderers={{ code: CodeBlock }}
      disallowedTypes={[]}
    />
  );
}
