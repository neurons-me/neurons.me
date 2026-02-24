//pages/Minimal.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock } = GUI;

export default function MinimalPage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <>
          The <strong>Minimal Layout</strong> is a clean and lightweight layout designed
          for apps that require a simple structure with a top navigation bar and a
          standard page container. It is ideal for dashboards, simple landing pages,
          or documentation sections.
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Features",
      content: (
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Responsive top navigation bar with configurable logo and routes.</li>
          <li>Integrated with the global theme system (light/dark modes).</li>
          <li>Standardized page container for consistent spacing and alignment.</li>
          <li>Easily extendable with page components like sections and grids.</li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
  {`<Route element={<Minimal config={{
  title: "My App",
  logo: "https://neurons.me/neurons.me.png",
  navBarRoutes: [
    { label: "Home", path: "/", external: false },
    { label: "Docs", path: "https://docs.neurons.me", external: true }
  ]
}} />}>
  <Route path="/" element={<HomePage />} />
</Route>`}
</CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="Minimal Layout"
        subtitle="A clean, lightweight layout with top navigation and standardized container."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The Minimal Layout is designed to be the base structure for simple apps.
          It combines a responsive AppBar with a content container, making it
          ideal for rapid prototyping or sections that do not require complex
          sidebars or dashboards.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}
