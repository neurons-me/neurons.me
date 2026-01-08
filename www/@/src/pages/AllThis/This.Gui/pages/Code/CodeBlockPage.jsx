import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridme, CodeBlock } = GUI;

export default function CodeBlockPage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <>
          The <strong>CodeBlock</strong> component is used to render syntax-highlighted code snippets
          with consistent styling, making it easier to showcase examples in documentation or tutorials.
          You can optionally specify a <code>language</code> prop (default: <code>javascript</code>) to
          highlight code appropriately (e.g., <code>jsx</code>, <code>html</code>, <code>css</code>).
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Features",
      content: (
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Consistent dark-themed styling for all code snippets.</li>
          <li>Automatic horizontal scrolling for long lines.</li>
          <li>Lightweight and reusable across pages.</li>
          <li>
            Accepts an optional <code>language</code> prop for syntax highlighting
            (defaults to <code>javascript</code>).
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
{`import { GUI } from "all.this";
const { CodeBlock } = GUI;

// With explicit language:
<CodeBlock language="jsx">
{ \`console.log("Hello, World!");\` }
</CodeBlock>

// Or relying on the default (javascript):
<CodeBlock>
{ \`console.log("Hello, World!");\` }
</CodeBlock>`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="CodeBlock"
        subtitle="A reusable component to display code snippets with consistent styling."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The CodeBlock component is designed for documentation pages to easily present code examples
          in a clean and readable format. By default, it highlights code as <code>javascript</code>,
          but you can pass a <code>language</code> prop to customize syntax highlighting.
        </Typography>
        <Gridme items={gridItems} />
      </Section>
    </>
  );
}
