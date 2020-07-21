import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

/**
 * Returns a function used to render markdown content.
 * 
 * @param {*} content - The markdown content to render.
 */
const MarkdownContent = ({ content }) => {
  /**
   * Gets HTML from markdown.
   * 
   * @param {*} md - The markdown content.
   */
  const getHTMLFromMarkdown = md => {
    // Use MarkedJS to compile markdown into html
    const html = marked(md);
    // Protect against XSS (https://owasp.org/www-community/attacks/xss/)
    const sanitized = DOMPurify.sanitize(html);
    return { __html: sanitized };
  };

  return <div dangerouslySetInnerHTML={getHTMLFromMarkdown(content)} />;
};

export default MarkdownContent;
