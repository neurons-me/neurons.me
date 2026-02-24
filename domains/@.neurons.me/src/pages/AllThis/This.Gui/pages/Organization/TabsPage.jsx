//this.GUI/npm/src/pages/Docs/PageElements/TableOfContentsPage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock, Tabs} = GUI;

export default function TabsPage() {
  const sampleTabs = [
    { label: "Overview", content: <Typography variant="body2">This is the overview content.</Typography> },
    { label: "Details", content: <Typography variant="body2">Here are the detailed specifications.</Typography> },
    { label: "Examples", content: <Typography variant="body2">Some practical examples go here.</Typography> },
  ];

  const gridItems = [
    {
      title: "Purpose",
      content: (
        <Typography variant="body2">
          The <strong>Tabs</strong> component provides a way to switch between different sections of content within the same page,
          making it ideal for organizing related information without overwhelming the user.
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
            <strong>tabs</strong>: An array of objects <code>{`{ label, content }`}</code> (required).
          </li>
          <li>
            <strong>initialIndex</strong>: The tab index to display first. Default: <code>0</code>.
          </li>
          <li>
            <strong>variant</strong>: The MUI Tabs variant. Accepts <code>"standard"</code>, <code>"scrollable"</code>, or <code>"fullWidth"</code>. Default: <code>"standard"</code>.
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
{`import Tabs from this.gui;

const tabs = [
  { label: "Overview", content: <p>This is the overview content.</p> },
  { label: "Details", content: <p>Here are the detailed specifications.</p> },
];

<Tabs tabs={tabs} initialIndex={0} variant="standard" />`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Live Example",
      content: <Tabs tabs={sampleTabs} />,
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="Tabs"
        subtitle="Organize content into easily switchable sections using tabs."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>Tabs</strong> component helps organize large amounts of related content
          into distinct sections. Users can switch between sections without leaving the page.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}