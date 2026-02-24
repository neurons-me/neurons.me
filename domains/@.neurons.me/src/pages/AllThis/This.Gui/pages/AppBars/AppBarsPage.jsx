import { GUI } from "all.this";
import { Typography, Box } from "@mui/material";
const { TextTitle, Section, Gridx, CodeBlock } = GUI;
// These components are illustrative only — not real components.
// AppBarsPage serves as a landing introduction to the available AppBars.

export default function AppBarsPage() {
  const gridItems = [
    {
      title: "What is AppBars?",
      content: (
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>AppBars</strong> are top navigation components that help anchor your app.
          You can use different versions depending on how minimal or functional you need it to be.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Default AppBar",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <code>AppBarDefault</code> is a lightweight component ideal for basic top navigation needs. 
            It will be available soon in <code>this.gui</code>.
          </Typography>
          <CodeBlock language="jsx">
{`// Coming soon
<AppBarDefault title="Dashboard" />`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "AppBar with Menu",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <code>AppBarWithMenu</code> is a planned component that will accept a <code>menuItems</code> array to create a simple nav dropdown.
            Stay tuned for its release in <code>this.gui</code>.
          </Typography>
          <CodeBlock language="jsx">
{`// Coming soon
<AppBarWithMenu
  title="Service Hub"
  menuItems={['Home', 'About', 'Docs']}
/>`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="AppBars"
        subtitle="Minimal and functional top navigation components."
      />
      <Section title="Overview">
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}