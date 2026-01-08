// this.GUI/npm/src/pages/Docs/PageElements/TabsPage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock, PageDivider} = GUI;

export default function PageDividerPage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <Typography variant="body2">
          The <strong>PageDivider</strong> component provides a standardized way to visually
          separate sections or content blocks, ensuring consistent spacing and styling.
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
            <strong>spacing</strong>: Controls vertical spacing above and below the divider.
            Default: <code>2</code> (MUI spacing units).
          </li>
          <li>
            <strong>variant</strong>: MUI Divider variant. Accepts{" "}
            <code>"fullWidth"</code> or <code>"middle"</code>. Default:{" "}
            <code>"fullWidth"</code>.
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
{`import PageDivider from "../../components/Pages/PageDivider";

<PageDivider />

<PageDivider spacing={4} variant="middle" />`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Live Example",
      content: (
        <>
          <Typography variant="body2">Above the divider</Typography>
          <PageDivider />
          <Typography variant="body2">Below the divider</Typography>
        </>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="PageDivider"
        subtitle="A simple component to separate sections with consistent spacing."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>PageDivider</strong> is useful for visually separating content
          within a page, ensuring consistent spacing and alignment compared to
          using raw dividers.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}