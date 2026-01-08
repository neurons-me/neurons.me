import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock} = GUI;
import { Typography } from "@mui/material";

export default function ButtonsPage() {
  const gridItems = [
    {
      title: "What is Buttons?",
      content: (
        <Typography variant="body2" sx={{ mb: 1 }}>
          The <strong>Buttons</strong> section will showcase various types of buttons available in <code>this.GUI</code>, including primary, secondary, icon buttons, and others.
          <br />
          Components here will be fully documented and customizable through props.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage example (placeholder)",
      content: (
        <CodeBlock language="jsx">
{`import { PrimaryButton } from 'this.gui';

<PrimaryButton label="Click me" onClick={() => alert('Hello!')} />`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="Buttons"
        subtitle="Interactive elements to trigger actions and submit forms."
      />
      <Section title="Overview">
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}