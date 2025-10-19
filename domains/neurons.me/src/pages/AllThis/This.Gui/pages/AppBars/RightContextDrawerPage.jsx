import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock, Callout } = GUI;

/**
 * Docs: RightContextDrawer
 * A responsive right-side drawer to surface contextual navigation or actions.
 * - Desktop: persistent open by default.
 * - Mobile: hidden; reveals a small ">" tab, taps to open as a temporary drawer.
 * - Renders nothing if `rightContext` is missing or has no `items`.
 */
export default function RightContextDrawerPage() {
  const gridItems = [
    {
      title: "What is RightContextDrawer?",
      content: (
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>RightContextDrawer</strong> is an optional, responsive drawer that appears on the right side
          of the layout. Use it to display contextual navigation, shortcuts, or references related to the
          current page. It accepts a single prop: <code>rightContext</code>.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Quick start",
      content: (
        <CodeBlock language="jsx">
{`// You can import directly from \`this.gui\` or via \`all.this.GUI\`
import RightContextDrawer from "this.gui/components/generics/AppBars/RightContextDrawer";

const rightContext = {
  title: "Components",
  items: [
    { type: "label", label: "Basics" },
    { label: "AppBars", href: "/this.GUI/AppBars", icon: "Navigation" },
    {
      label: "Cards",
      icon: "Layers",
      children: [
        { label: "ModuleCard", href: "/this.GUI/Cards/ModuleCard" },
        { label: "LilBox", href: "/this.GUI/Cards/LilBox" }
      ]
    },
    { label: "Layout", href: "/this.GUI/Layout", icon: "Grid" }
  ]
};

// Render once at the root layout (e.g., MinimalLayout) or inside a page:
<RightContextDrawer rightContext={rightContext} />`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "rightContext shape",
      content: (
        <CodeBlock language="ts">
{`type RightContext = {
  title?: string;
  items: Array<
    | {
        // Section label (non-clickable)
        type: "label";
        label: string;
      }
    | {
        // Clickable item (can nest children)
        label: string;
        href?: string;              // internal route (react-router)
        icon?: string | JSX.Element; // react-feather name (e.g., "Grid") or a JSX icon
        children?: RightContext["items"];
      }
  >;
};`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Nesting & icons",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Items can contain <code>children</code> for multi-level navigation. For icons you can pass either:
          </Typography>
          <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
            <li>
              A <code>string</code> matching a <code>react-feather</code> icon name (e.g.,{" "}
              <code>"Navigation"</code>, <code>"Layers"</code>, <code>"Grid"</code>), or
            </li>
            <li>A custom JSX element (your own icon component).</li>
          </ul>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Children are revealed/collapsed with the built-in chevron.
          </Typography>
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Responsive behavior",
      content: (
        <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
          <li>
            <strong>Desktop</strong>: the drawer is persistent (open by default).
          </li>
          <li>
            <strong>Mobile</strong>: the drawer is hidden; a small <code>&gt;</code> tab on the right edge toggles it.
          </li>
          <li>
            If <code>rightContext</code> is missing or has no <code>items</code>, the component renders <em>null</em>.
          </li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Layout integration",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            In the provided <strong>MinimalLayout</strong>, horizontal space is automatically reserved when the
            drawer is present (e.g., <code>marginRight</code> is applied). If you build a custom layout,
            ensure you add appropriate right spacing when the drawer is visible so the content remains centered.
          </Typography>
          <CodeBlock language="jsx">
{`// Inside your layout wrapper:
<Box
  sx={{
    maxWidth: { md: "calc(100% - 240px - 260px)" }, // left drawer + right drawer
    marginLeft: { md: "240px" },
    marginRight: { md: rightContext?.items?.length ? "260px" : 0 },
  }}
>
  <PageContainer>{/* your routed content */}</PageContainer>
</Box>`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Gotchas",
      content: (
        <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
          <li>
            Links are rendered with <code>react-router</code>'s <code>Link</code> for internal routes.
          </li>
          <li>
            Section labels use <code>type: "label"</code> and are non-interactive.
          </li>
          <li>
            If you need external links, wrap them in your items as custom components or extend the drawer.
          </li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Complete example",
      content: (
        <CodeBlock language="jsx">
{`// You can import directly from \`this.gui\` or via \`all.this.GUI\`
import { MinimalLayout } from "this.gui/templates";
// You can import directly from \`this.gui\` or via \`all.this.GUI\`
import RightContextDrawer from "this.gui/components/generics/AppBars/RightContextDrawer";

const rightContext = {
  title: "Docs",
  items: [
    { type: "label", label: "Navigation" },
    { label: "NavBar", href: "/this.GUI/AppBars/NavBar", icon: "Navigation" },
    { type: "label", label: "Context" },
    {
      label: "Right Drawer",
      icon: "Sidebar",
      children: [
        { label: "Overview", href: "/this.GUI/AppBars/RightContextDrawer" }
      ]
    }
  ]
};

export default function App() {
  return (
    <MinimalLayout
      config={{ title: "This.GUI", logo: "/logo.png" }}
      rightContext={rightContext}
    />
  );
}`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="RightContextDrawer"
        subtitle="A responsive, contextual drawer for secondary navigation and actions."
      />
      <Section title="Overview">
        <Callout variant="info">
          Use the right drawer to keep your primary content focused while exposing helpful secondary links.
        </Callout>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}