// this.GUI/npm/src/pages/Docs/PageElements/SectionHeaderPage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock } = GUI;

export default function SectionHeaderPage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <>
          The <strong>SectionHeader</strong> component provides a standardized way
          to render a section's title and optional subtitle.  
          It ensures consistent typography, spacing, and alignment across different sections.
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
{`import Section from "@/components/generics/Layout/Section";
import SectionHeader from "@/components/generics/Layout/SectionHeader";

export default function Example() {
  return (
    <Section>
      <SectionHeader
        title="Overview"
        subtitle="A brief description of this section."
      />
      <p>Section content goes here...</p>
    </Section>
  );
}`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Features",
      content: (
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Consistent typography for titles and subtitles.</li>
          <li>Automatic spacing between title, subtitle, and content.</li>
          <li>Works inside any container, respecting parent width.</li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="SectionHeader Component"
        subtitle="Consistent section titles and subtitles for structured layouts."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>SectionHeader</strong> is intended to be used within a{" "}
          <code>Section</code> component (or any layout container) to keep section
          headings uniform across your application.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}