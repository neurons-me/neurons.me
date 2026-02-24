//this.GUI/npm/src/pages/Docs/PageElements/TableOfContentsPage.js
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock, TableOfContents} = GUI;

export default function TableOfContentsPage() {
  const sampleHeadings = [
    { id: "intro", text: "Introduction", level: 1 },
    { id: "setup", text: "Setup Instructions", level: 2 },
    { id: "usage", text: "Usage Guide", level: 1 },
    { id: "advanced", text: "Advanced Tips", level: 2 },
    { id: "faq", text: "FAQ", level: 1 },
  ];

  const gridItems = [
    {
      title: "Purpose",
      content: (
        <Typography variant="body2">
          The <strong>TableOfContents</strong> component generates a dynamic
          navigation menu based on page headings. It supports multiple levels of
          indentation and smooth scrolling to specific sections.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Props",
      content: (
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>
            <strong>headings</strong>: An array of objects with{" "}
            <code>{`{ id, text, level }`}</code>. The <code>id</code> must match
            the element’s <code>id</code> on the page.
          </li>
          <li>
            <strong>onNavigate</strong>: Optional callback when an item is clicked.
            Defaults to smooth scrolling to the element.
          </li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
{`import TableOfContents from this.gui;

const headings = [
  { id: "intro", text: "Introduction", level: 1 },
  { id: "setup", text: "Setup Instructions", level: 2 },
  { id: "usage", text: "Usage Guide", level: 1 },
];

<TableOfContents headings={headings} />`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Live Example",
      content: <TableOfContents headings={sampleHeadings} />,
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="TableOfContents"
        subtitle="A dynamic TOC component to navigate through sections using headings."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>TableOfContents</strong> component is useful for long
          documentation pages. Pass an array of heading objects, and it will
          generate a clickable navigation list with smooth scrolling.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}