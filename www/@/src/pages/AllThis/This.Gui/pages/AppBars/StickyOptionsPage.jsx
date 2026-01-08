import { useMemo } from "react";
import { Typography, Box, Divider } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock, StickyOptions} = GUI;
import { FiCalendar, FiMessageCircle, FiChevronRight } from "react-icons/fi";

export default function StickyOptionsPage() {
  // Demo items reused across examples
  const demoItems = useMemo(
    () => [
      { icon: <FiCalendar />, label: "bookAppointment", to: "/ai-integration-call", variant: "primary", trackId: "doc-book" },
      { icon: <FiMessageCircle />, label: "chatWithUs", to: "/chat", variant: "neutral", trackId: "doc-chat" },
    ],
    []
  );

  const gridItems = [
    {
      title: "What is StickyOptions?",
      content: (
        <Typography variant="body2" sx={{ mb: 1 }}>
          <code>StickyOptions</code> is a reusable action menu (CTAs) that "sticks" below the navbar. 
          It receives a list of items (icon + label) and manages their position, responsive behavior, and style, 
          respecting the theme (light/dark) and the right drawer.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Props Overview",
      content: (
        <Typography variant="body2" component="div">
          <ul>
            <li>
              <strong>items</strong>: <code>Array&lt;{`{ icon, label, to|href, variant, trackId, ariaLabel }`}&gt;</code>
            </li>
            <li>
              <strong>positioning</strong>: <code>{`{ mode: 'sticky'|'fixed', topOffset: number|string, align: 'center'|'right', maxWidth, navVar, navFallback }`}</code>
            </li>
            <li>
              <strong>behavior</strong>: <code>{`{ hideOnScrollDown, iconOnlyOnMobile, mobileBreakpoint, respectRightDrawer }`}</code>
            </li>
            <li>
              <strong>theme</strong>: <code>{`{ elevation, blur, contrastMode }`}</code>
            </li>
            <li>
              <strong>visibility</strong>: <code>{`{ enabled, includeRoutes, excludeRoutes }`}</code>
            </li>
            <li>
              <strong>i18n</strong>: <code>{`{ useI18n, t }`}</code> — if you pass <code>t</code> (function), it translates <code>label</code>; otherwise it uses the string as is.
            </li>
          </ul>
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Live Example (sticky)",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Example stuck to the document flow (mode <code>sticky</code>). This block defines its own <code>--nav-height</code> variable for the demo.
          </Typography>
          <Box sx={{ position: "relative", border: "1px dashed", borderColor: "divider", borderRadius: 2, p: 2, "--nav-height": "42px", minHeight: 180 }}>
            <StickyOptions
              items={demoItems}
              positioning={{ mode: "sticky", topOffset: "1rem", align: "center", maxWidth: 820, reserveSpace: true, }}
              behavior={{ iconOnlyOnMobile: false, hideOnScrollDown: false, respectRightDrawer: false }}
              theme={{ elevation: 28, blur: 9 }}
              i18n={{ useI18n: false }}
            />
            <Typography
              variant="body2"
            >
              <FiChevronRight />
              This box simulates page content — the menu remains visible while scrolling inside this container.
            </Typography>
          </Box>
          <CodeBlock language="jsx">
{`<StickyOptions
  items=[
    { icon: <FiCalendar />, label: 'bookAppointment', to: '/ai-integration-call', variant: 'primary' },
    { icon: <FiMessageCircle />, label: 'chatWithUs', to: '/chat', variant: 'neutral' }
  ]
  positioning={{ mode: 'sticky', topOffset: '1rem', align: 'center', maxWidth: 820 }}
  behavior={{ iconOnlyOnMobile: false, hideOnScrollDown: false, respectRightDrawer: false }}
  theme={{ elevation: 28, blur: 9 }}
  i18n={{ useI18n: false }}
/>`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Live Example (fixed)",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Example fixed to the viewport (mode <code>fixed</code>). Uses <code>topOffset</code> to separate it from the navbar.
          </Typography>
          <Box sx={{ position: "relative", border: "1px dashed", borderColor: "divider", borderRadius: 2, p: 2, "--nav-height": "42px", height: 320, overflow: 'auto' }}>
            <StickyOptions
              items={demoItems}
              positioning={{ mode: "sticky", topOffset: "1.68rem", align: "center", maxWidth: 820, reserveSpace: true }}
              behavior={{ iconOnlyOnMobile: false, hideOnScrollDown: false, respectRightDrawer: false }}
              theme={{ elevation: 28, blur: 9 }}
              i18n={{ useI18n: false }}
            />                  
            <Typography variant="body2">
              This demo is sandboxed: the menu sticks within this scrollable box instead of the whole page.
            </Typography>
          </Box>
          <CodeBlock language="jsx">
{`<StickyOptions
  items=[
    { icon: <FiCalendar />, label: 'bookAppointment', to: '/ai-integration-call', variant: 'primary' },
    { icon: <FiMessageCircle />, label: 'chatWithUs', to: '/chat', variant: 'neutral' }
  ]
  positioning={{ mode: 'sticky', topOffset: '1.68rem', align: 'center', maxWidth: 820 }}
  behavior={{ iconOnlyOnMobile: false, hideOnScrollDown: false, respectRightDrawer: true }}
/>`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Integration with Layout",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            You can pass the configuration via the <code>stickyOptions</code> prop to the layout for use across multiple pages:
          </Typography>
          <CodeBlock language="jsx">
{`<Route
  element={
    <MinimalLayoutWrapper
      topic="BusinessHub"
      contextDrawer={GUI_Drawer_Data}
      stickyOptions={{
        items: [
          { icon: <FiCalendar />, label: 'bookAppointment', to: '/ai-integration-call', variant: 'primary' },
          { icon: <FiMessageCircle />, label: 'chatWithUs', to: '/chat', variant: 'neutral' }
        ],
        positioning: { mode: 'fixed', topOffset: '1.68rem', align: 'center', maxWidth: 820 },
        behavior: { respectRightDrawer: true, iconOnlyOnMobile: false, hideOnScrollDown: false },
        theme: { elevation: 28, blur: 9 }
      }}
    />
  }
/>`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Notes & Best Practices",
      content: (
        <Typography variant="body2" component="div">
          <ul>
            <li>To keep text on mobile, use <code>behavior.iconOnlyOnMobile: false</code>.</li>
            <li>If you use right drawer, enable <code>respectRightDrawer</code> and make sure to expose <code>--right-drawer-width</code> in the main container.</li>
            <li>Colors derive from the theme (light/dark) — no need to pass colors manually.</li>
            <li>If you want translations, pass <code>i18n.t</code> from your app; otherwise, the component will display labels as is.</li>
          </ul>
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle title="StickyOptions" subtitle="Sticky CTA menu that plays nice with your layout, theme, and drawers." />
      <Section title="Overview">
        <Gridx items={gridItems} />
      </Section>
      <Divider sx={{ my: 3 }} />
      <p>
        Tip: you can control the spacing with <code>positioning.topOffset</code> (e.g. <code>'1.68rem'</code>) and the navbar variable 
        with <code>positioning.navVar</code> (default <code>--nav-height</code>).
      </p>
    </>
  );
}
