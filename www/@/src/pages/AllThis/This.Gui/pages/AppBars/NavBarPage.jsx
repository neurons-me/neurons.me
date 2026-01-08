import { GUI } from "all.this";
const { TextTitle, Section, CodeBlock } = GUI;
import { Typography } from "@mui/material";

/**
 * NavBarPage
 * Documentation & usage examples for the NavBar component.
 *
 * NOTE: Rendering a live <NavBar /> inside this docs page can clash with the app's
 * existing layout AppBar. To avoid double app bars, we show code + API here.
 */
export default function NavBarPage() {
  return (
    <>
      <TextTitle
        title="NavBar"
        subtitle="Responsive top bar with optional side drawer and nested navigation."
      />

      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>NavBar</strong> component provides a responsive application
          bar with an optional left drawer for navigation. It supports nested
          menu items, external links, route highlighting, and a built-in theme
          toggle (light/dark) when enabled.
        </Typography>
      </Section>

      <Section title="Props">
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>title</strong> (string) — Brand or project name shown next to the logo. Default: <code>"neurons.me"</code>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>logo</strong> (string) — URL of the logo image. Default: neurons.me logo.
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>navBarRoutes</strong> (array) — Navigation structure. Each item can be:
        </Typography>
        <ul style={{ marginTop: 0 }}>
          <li>
            <code>&#123; label, path, external &#125;</code> for a simple link (internal or external).
          </li>
          <li>
            <code>&#123; label, path?, external?, children: [ ... ] &#125;</code> for a group with nested links.
          </li>
        </ul>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>injectThemeToggle</strong> (boolean) — Shows a light/dark toggle on the right. Default: <code>true</code>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>drawerWidth</strong> (number) — Width of the left navigation drawer on desktop. Default: <code>240</code>
        </Typography>
      </Section>

      <Section title="Route Shape (with nesting)">
        <CodeBlock language="jsx">
{`const navBarRoutes = [
  { label: "Home", path: "/", external: false },
  {
    label: "Docs",
    children: [
      { label: "Getting Started", path: "/docs/getting-started", external: false },
      {
        label: "Components",
        children: [
          { label: "AppBars", path: "/this.GUI/AppBars", external: false },
          { label: "Buttons", path: "/this.GUI/Buttons", external: false },
        ]
      }
    ]
  },
  { label: "GitHub", path: "https://github.com/neurons-me", external: true }
];`}
        </CodeBlock>
      </Section>

      <Section title="Basic Usage">
        <Typography variant="body2" sx={{ mb: 1 }}>
          Import the component and pass your routes. The NavBar integrates with <code>react-router-dom</code>
          and highlights the active route automatically.
        </Typography>
        <CodeBlock language="jsx">
{`import NavBar from "@/components/generics/AppBars/NavBar";
// or, using the aggregated package:
// or import directly from this.gui.
import { GUI } from "all.this";
const { NavBar } = GUI;

export default function AppLayout() {
  return (
    <>
      <NavBar
        title="My Product"
        logo="https://example.com/logo.png"
        navBarRoutes={navBarRoutes}
        injectThemeToggle
        drawerWidth={240}
      />
      {/* Your page content below */}
    </>
  );
}`}
        </CodeBlock>
      </Section>

      <Section title="Notes & Tips">
        <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
          <li>
            On mobile, the left drawer becomes temporary and opens via the menu icon.
          </li>
          <li>
            Nested items are supported via <code>children</code>. Groups can have a <code>path</code> or just be toggles.
          </li>
          <li>
            External links use <code>external: true</code> and open in a new tab.
          </li>
          <li>
            The theme toggle uses your app's <code>ThemeContext</code> via <code>useThemeToggle()</code>.
          </li>
        </ul>
      </Section>
    </>
  );
}