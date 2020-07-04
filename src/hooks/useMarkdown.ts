import { useState, useEffect } from "react";

export default function useMarkdown(url: string) {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(url)
            .then(response => response.text())
            .then(md => setMarkdown(md));
    }, [url]);

    return markdown;
}