// this.GUI/npm/demo/src/pages/Docs/PageElements/PageParagraphPage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock, TextParagraph } = GUI;

export default function TextParagraphPage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <Typography variant="body2">
          The <strong>PageParagraph</strong> component standardizes paragraph text in pages,
          providing consistent spacing, alignment, and typography. It is ideal for body content,
          descriptions, and general textual information.
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
            <strong>align</strong>: Controls text alignment. Accepts <code>"left"</code>,{" "}
            <code>"center"</code>, <code>"right"</code>, or <code>"justify"</code>. Default:{" "}
            <code>"left"</code>.
          </li>
          <li>
            <strong>variant</strong>: Uses Material UI's typography variants. Common values:{" "}
            <code>"body1"</code>, <code>"body2"</code>, <code>"caption"</code>. Default:{" "}
            <code>"body1"</code>.
          </li>
          <li>
            <strong>gutterBottom</strong>: Adds bottom margin spacing. Default:{" "}
            <code>true</code>.
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
{`import { PageParagraph } from "this.gui";

<TextParagraph align="center" variant="body1">
  This is a centered paragraph with default bottom spacing.
</TextParagraph>

<TextParagraph align="justify" variant="body2" gutterBottom={false}>
  This justified paragraph has no bottom margin.
</TextParagraph>`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="PageParagraph"
        subtitle="A standardized paragraph component with alignment, variant, and spacing options."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>PageParagraph</strong> component provides a unified way to render
          paragraphs with consistent styling and spacing. It supports alignment options,
          typography variants, and optional bottom spacing to adapt to different page
          layouts.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}