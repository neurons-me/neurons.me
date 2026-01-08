// this.GUI/npm/src/pages/Docs/PageElements/TabsPage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock } = GUI;

export default function ContainersPage() {
  const gridItems = [
    {
      title: "What is PageContainer?",
      content: (
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>PageContainer</strong> is the standardized wrapper for page content.
          It ensures consistent spacing, alignment, and responsiveness across layouts.
          Use it inside layouts to wrap your page components.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Features",
      content: (
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Responsive and centered content with automatic max-width.</li>
          <li>Consistent padding and spacing across pages.</li>
          <li>Integrated with the global theme (light/dark modes).</li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
{`import PageContainer from "../../components/Pages/PageContainer";

export default function MyPage() {
  return (
    <PageContainer>
      <h1>My Content</h1>
      <p>This page uses the standardized container.</p>
    </PageContainer>
  );
}`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="PageContainer"
        subtitle="A standardized responsive container for page content."
      />
      <Section title="Overview">
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}