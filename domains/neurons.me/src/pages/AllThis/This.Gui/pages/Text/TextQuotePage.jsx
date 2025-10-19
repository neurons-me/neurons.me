// this.GUI/npm/src/pages/Docs/PageElements/TextQuotePage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock } = GUI;

export default function TextQuotePage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <>
          The <strong>TextQuote</strong> component is designed to display
          highlighted quotations or important excerpts in a visually distinct way.
          It provides consistent styling for quotes across the application, with
          theme-aware background and color adjustments.
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
{`<TextQuote>
  This is a highlighted quote. It will adapt to light and dark themes.
</TextQuote>`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Features",
      content: (
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Applies a left border using the primary theme color.</li>
          <li>Background color adapts to light or dark theme mode.</li>
          <li>Italicized text style for emphasis.</li>
          <li>Consistent padding and spacing for blockquotes.</li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="TextQuote Component"
        subtitle="Stylized blockquote component for highlighting key text."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>TextQuote</strong> component standardizes the presentation of
          quoted or highlighted text. It ensures a clean and consistent look across
          all pages, while adapting automatically to the application's light or
          dark theme mode.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}