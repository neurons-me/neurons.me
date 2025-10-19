import { GUI } from "all.this";
const {  TextTitle, Section, Gridx, CodeBlock, Callout } = GUI;
import { Typography } from "@mui/material";

export default function CalloutPage() {
  const gridItems = [
    {
      title: "What is Callout?",
      content: (
        <Typography variant="body2" sx={{ mb: 1 }}>
          The <code>Callout</code> component is used to highlight important information such as warnings, success messages, or general information. It adapts its styles based on the selected <code>variant</code> and the current theme mode (light or dark).
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Supported Variants",
      content: (
        <Typography variant="body2">
          The component supports the following <code>variant</code> values:
          <ul>
            <li><strong>warning</strong> – used for cautionary messages</li>
            <li><strong>info</strong> – used for neutral or informational content</li>
            <li><strong>success</strong> – used to show positive confirmations</li>
            <li><strong>alert</strong> – used for critical system errors requiring immediate attention</li>
            <li><strong>neutral</strong> – used for general context messages without strong emphasis</li>
          </ul>
          Each variant has different color schemes for light and dark modes.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
{`<Callout variant="info">
  This is an informational message.
</Callout>`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Default Props and Styling",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            If no <code>variant</code> is provided, the component defaults to <code>"warning"</code>. It also includes responsive styles like padding, border, color, and font adjustments for better emphasis and readability.
          </Typography>
          <CodeBlock language="jsx">
{`<Callout>
  This repository is in continuous development and may be unstable.
</Callout>`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Real-World Use Cases",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            The <code>Callout</code> component is perfect for practical scenarios such as:
            <ol>
              <li>Displaying maintenance alerts on a dashboard.</li>
              <li>Showing form submission success messages.</li>
              <li>Giving users tips or best practices.</li>
            </ol>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Below are examples demonstrating these use cases:
          </Typography>
          <CodeBlock language="jsx">
{`// Maintenance alert on dashboard
<Callout variant="warning">
  Scheduled maintenance will occur at 2:00 AM UTC. Services may be temporarily unavailable.
</Callout>`}
          </CodeBlock>
          <Callout variant="warning">
  Scheduled maintenance will occur at 2:00 AM UTC. Services may be temporarily unavailable.
</Callout>
          <CodeBlock language="jsx">
{`// Form submission success message
<Callout variant="success">
  Your form has been successfully submitted. Thank you!
</Callout>`}
          </CodeBlock>
          <Callout variant="success">
  Your form has been successfully submitted. Thank you!
</Callout>
          <CodeBlock language="jsx">
{`// User tip or best practice
<Callout variant="info">
  Tip: Use strong passwords with at least 12 characters to enhance your account security.
</Callout>`}
          </CodeBlock>
          <Callout variant="info">
  Tip: Use strong passwords with at least 12 characters to enhance your account security.
</Callout>
          <CodeBlock language="jsx">
{`// Critical system error alert
<Callout variant="alert">
  Critical system error detected. Immediate action is required.
</Callout>`}
          </CodeBlock>
          <Callout variant="alert">
  Critical system error detected. Immediate action is required.
</Callout>
          <CodeBlock language="jsx">
{`// Neutral general context message
<Callout variant="neutral">
  This is a neutral message for general context.
</Callout>`}
          </CodeBlock>
          <Callout variant="neutral">
  This is a neutral message for general context.
</Callout>
        </>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="Callout"
        subtitle="Highlight important content with visual emphasis."
      />
      <Section title="Overview">
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}
