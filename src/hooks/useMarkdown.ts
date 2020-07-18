import { useState, useEffect } from "react";

export default function useMarkdownUrl(url: string | undefined) {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        if (url) {
            fetch(url)
                .then(response => response.text())
                .then(md => setMarkdown(md));
        }
    }, [url]);

    return markdown;
}