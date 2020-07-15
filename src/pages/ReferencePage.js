import React from 'react';

/**
 * Renders a reference page.
 * 
 * @param content - The page content.
 * @param format - The source format. Default is "Markdown".
 */
const ReferencePage = ({ content, format = "Markdown" }) => {
    return (
        <>
            <div>Reference page</div>
            <div>This page is ostensibly rendered from {content} in the {format} format.</div>
        </>
    );
};

export default ReferencePage;
