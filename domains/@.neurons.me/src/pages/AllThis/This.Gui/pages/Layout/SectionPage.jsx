// this.GUI/npm/src/pages/Docs/PageElements/SectionPage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, CodeBlock } = GUI;

export default function SectionPage() {
  return (
    <>
      <TextTitle
        title="Section"
        subtitle="A semantic and styled section wrapper for organizing content in pages."
      />

      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>Section</strong> component helps you group related content
          within a page. It provides a consistent heading, spacing, and styling,
          making sections easier to scan and visually structured.
        </Typography>
      </Section>

      <Section title="Key Features">
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Consistent vertical spacing and section separation.</li>
          <li>Optional title prop for automatically rendered headings.</li>
          <li>Works seamlessly inside <strong>PageContainer</strong>.</li>
        </ul>
      </Section>

      <Section title="Usage Example">
        <CodeBlock language="jsx">
{`import Section from "../../components/Pages/Section";

<Section title="Overview">
  <p>This is a structured section of the page.</p>
</Section>`}
        </CodeBlock>
      </Section>
    </>
  );
}
