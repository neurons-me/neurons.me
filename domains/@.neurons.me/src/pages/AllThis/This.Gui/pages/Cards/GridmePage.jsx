// src/pages/AllThis/This.Gui/pages/Cards/GridmePage.jsx
import { Box, Typography } from "@mui/material";
import { GUI } from "all.this";
const { Gridme, LilBox, CodeBlock, TextTitle, Section, Gridx } = GUI;
export default function GridmePage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <>
          <strong>Gridme</strong> is a thin grid container (MUI <code>Box</code> wrapper) for laying out elements in columns in a declarative and consistent way. It controls columns, spacing, and vertical margins without fighting with ad-hoc styles.
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Props",
      content: (
        <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
          <li>
            <code>columns</code> (number, default <code>3</code>) – Number of columns.
          </li>
          <li>
            <code>columnGap</code> (CSS, default <code>'0.5rem'</code>) – Horizontal space between items.
          </li>
          <li>
            <code>rowGap</code> (CSS, default <code>'1rem'</code>) – Vertical space between rows.
          </li>
          <li>
            <code>marginTop</code> (CSS, default <code>'0px'</code>) – Top margin of the grid.
          </li>
          <li>
            <code>marginBottom</code> (CSS, default <code>'0px'</code>) – Bottom margin of the grid.
          </li>
          <li>
            <code>sx</code> (object) – Additional MUI styles at the container level.
          </li>
          <li>
            <code>children</code> – The elements to render (they stretch to <code>width: 100%</code> / <code>height: 100%</code>).
          </li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage (React)",
      content: (
        <CodeBlock language="jsx">
{`import { Gridme } from "this.gui";
// ó import Gridme from "ruta/local/Gridme";

<Gridme
  columns={3}
  columnGap="0.75rem"
  rowGap="1rem"
  marginTop="8px"
  marginBottom="16px"
  sx={{ alignItems: 'stretch', justifyItems: 'stretch' }}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Gridme>`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Tips",
      content: (
        <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
          <li>
            To make the “tiles” uniform, give them a fixed height or an <code>aspect-ratio</code> (e.g. <code>aspectRatio: '1 / 1'</code>).
          </li>
          <li>
            Keep the visual spacing compact by adjusting <code>columnGap</code> and <code>rowGap</code> (your welcome grid uses small gaps).
          </li>
          <li>
            If you use components like <code>LilBox</code>, leave them with <code>width: '100%'</code> so they occupy their entire cell.
          </li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="Gridme"
        subtitle="A tiny, declarative grid wrapper to lay out items with consistent spacing."
      />

      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Gridme</strong> centralizes the configuration of columns and spacing so your grids look uniform throughout the app. Use it as a base block and compose your cards, shortcuts, or modules inside.
        </Typography>
        <Gridx items={gridItems} />
      </Section>

      <Section title="Live Example">
        <Typography variant="body2" sx={{ mb: 1 }}>
          Example with <code>LilBox</code> as items (3 columns, compact gaps):
        </Typography>

        <Gridme columns={3} columnGap="0.75rem" rowGap="0.75rem" marginTop="8px" marginBottom="8px">
          {[
            { label: "AppBars", href: "/this.GUI/AppBars" },
            { label: "Buttons", href: "/this.GUI/Buttons" },
            { label: "Cards", href: "/this.GUI/Cards" },
            { label: "Code", href: "/this.GUI/Code" },
            { label: "Feedback", href: "/this.GUI/Feedback" },
            { label: "Media", href: "/this.GUI/Media" },
            { label: "Organization", href: "/this.GUI/Organization" },
            { label: "Text", href: "/this.GUI/Text" },
            { label: "Layout", href: "/this.GUI/Layout" },
          ].map((it, i) => (
            <LilBox key={i} label={it.label} href={it.href} />
          ))}
        </Gridme>

        <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
          With uniform height (square tiles):
        </Typography>
        <Gridme columns={4} columnGap="0.5rem" rowGap="0.5rem">
          {Array.from({ length: 8 }).map((_, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: (t) =>
                  t.palette.mode === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.04)",
                border: "1px solid",
                borderColor: (t) =>
                  t.palette.mode === "dark"
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(0,0,0,0.1)",
                borderRadius: "8px",
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "text.secondary",
                fontSize: "0.9rem",
              }}
            >
              Tile {i + 1}
            </Box>
          ))}
        </Gridme>
      </Section>

      <Section title="Copy & Paste">
        <CodeBlock language="jsx">
{`import { Box } from '@mui/material';

// Gridme: Declarative grid wrapper
const Gridme = ({
  children,
  columns = 3,
  columnGap = '0.5rem',
  rowGap = '1rem',
  marginTop = '0px',
  marginBottom = '0px',
  sx = {},
}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        columnGap,
        rowGap,
        width: '100%',
        alignItems: 'stretch',
        justifyItems: 'stretch',
        mt: marginTop,
        mb: marginBottom,
        '& > *': { width: '100%', height: '100%' },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Gridme;`}
        </CodeBlock>
      </Section>
    </>
  );
}