//this.GUI/npm/src/pages/Docs/PageElements/TabsPage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock } = GUI;

export default function TextTitlePage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <>
          The <strong>PageTitle</strong> component provides a standardized way to
          display titles and subtitles across pages. It ensures consistent
          spacing, typography, and alignment.
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
{`<PageTitle
  title="My Page Title"
  subtitle="This is an optional subtitle"
/>`}
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
          <li>Automatic spacing below the title.</li>
          <li>Dark/light theme compatibility.</li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="PageTitle Component"
        subtitle="Standardized titles and subtitles for consistent page design."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>PageTitle</strong> is a simple component meant to unify
          page headings across the system. Below is an example of how to use it.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}
