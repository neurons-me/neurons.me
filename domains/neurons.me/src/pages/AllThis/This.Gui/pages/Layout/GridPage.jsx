// this.GUI/npm/src/pages/Docs/PageElements/TabsPage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock } = GUI;

export default function GridPage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <Typography variant="body2">
          The <strong>PageGrid</strong> component organizes content into a responsive grid layout.
          It’s ideal for displaying cards, sections, or any set of items in a structured way.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Features",
      content: (
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Responsive grid system based on Material UI.</li>
          <li>Define columns using <code>xs</code> and <code>md</code> props.</li>
          <li>Accepts any custom React components as items.</li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
{`const items = [
  { title: "Card 1", content: "This is card one.", xs: 12, md: 6 },
  { title: "Card 2", content: "This is card two.", xs: 12, md: 6 }
];

<Gridx items={items} />`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="Gridx"
        subtitle="A responsive grid system to organize cards or content."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Use <strong>Gridx</strong> to quickly create responsive layouts for your pages.
          Each grid item is automatically spaced and aligned based on Material UI’s grid system.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}