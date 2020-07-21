import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownContent from '../components/MarkdownContent';

/**
 * Renders a reference page.
 */
const ReferencePage = () => {
  let { pageKey } = useParams();

  // Read markdown content
  const mdContent = `
  # Markdown Test

  This is a test markdown file used to test the MarkdownContent component.

  ## Unit Testing

  This will ultimately be converted into a unit test run via Jest.

  Testing a hyperlink [Jest](https://jestjs.io/)
  `;

  return (
    <>
      <div>Reference page</div>
      <div>Page key: {pageKey}</div>
      <MarkdownContent content={mdContent} />
    </>
  );
};

export default ReferencePage;
