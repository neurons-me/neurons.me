import { Box, Typography, Divider } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock, Footer } = GUI;

/**
 * FooterPage
 * Documentation & live previews for the generic Footer component.
 * The Footer is brand-agnostic: pass your own title, logo, social links and inline page links.
 */
export default function FooterPage() {
  const gridItems = [
    {
      title: "What is Footer?",
      content: (
        <Typography variant="body2">
          <strong>Footer</strong> is a reusable, brand-agnostic bottom bar. It supports:
          custom <em>title</em>, <em>logo</em>, <em>socialLinks</em>, and <em>links</em>.
          If you don’t pass props, sensible defaults are used.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Props",
      content: (
        <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
          <li><code>title?: string</code> – Brand or site name (default: <code>"neurons.me"</code>).</li>
          <li><code>logoSrc?: string</code> – Image URL for the logo (default: <code>"/neurons.me.png"</code>).</li>
          <li>
            <code>socialLinks?: Array&lt;&#123; icon: ReactNode; url: string &#125;&gt;</code> – Buttons for social media.
          </li>
          <li>
            <code>links?: Array&lt;&#123; label: string; href: string &#125;&gt;</code> – Inline links (e.g., Terms, Privacy).
          </li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Basic Usage",
      content: (
        <CodeBlock language="jsx">
{`import { GUI } from "all.this";
const { Footer } = GUI;

export default function App() {
  return (
    <>
      {/* page content */}
      <Footer />
    </>
  );
}`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Custom Branding",
      content: (
        <CodeBlock language="jsx">
{`<Footer
  title="LexIntel"
  logoSrc="https://neurons.me/media/neurons-grey.png"
  socialLinks={[
    { icon: <GitHubIcon />, url: "https://github.com/lexintel" },
    { icon: <InstagramIcon />, url: "https://instagram.com/lexintel" },
  ]}
  links={[
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ]}
/>`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="Footer"
        subtitle="A flexible, brand-agnostic footer with logo, social icons, and links."
      />

      <Section title="Overview">
        <Gridx items={gridItems} />
      </Section>

      <Section title="Live Preview" subtitle="Three common setups you can copy & paste">
        {/* Preview 1 – Defaults */}
        <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2, overflow: "hidden", mb: 3, alignSelf: "stretch", width: "100%" }}>
          <Box sx={{ p: 2 }}>
            <Typography>
              Default Footer (no props)
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ bgcolor: "background.default", width: "100%" }}>
            <Footer />
          </Box>
        </Box>

        {/* Preview 2 – Custom branding */}
        <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2, overflow: "hidden", mb: 3, alignSelf: "stretch", width: "100%" }}>
          <Box sx={{ p: 2 }}>
            <Typography>
              Custom Branding (title, logo, links, socials)
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ bgcolor: "background.default", width: "100%" }}>
            <Footer
              title="YourBrand"
              logoSrc="/media/neurons-grey.png"
              socialLinks={[
                // These icons are provided by your app; shown here as placeholders
                { icon: <span style={{ fontWeight: 700 }}>IG</span>, url: "https://instagram.com/yourbrand" },
                { icon: <span style={{ fontWeight: 700 }}>GH</span>, url: "https://github.com/yourbrand" },
              ]}
              links={[
                { label: "Terms", href: "/terms" },
                { label: "Privacy", href: "/privacy" },
              ]}
            />
          </Box>
        </Box>

        {/* Preview 3 – Minimal only-links */}
        <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2, overflow: "hidden", alignSelf: "stretch", width: "100%" }}>
          <Box sx={{ p: 2 }}>
            <Typography>
              Minimal (only links)
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ bgcolor: "background.default", width: "100%" }}>
            <Footer
              title=""
              logoSrc="https://neurons.me/media/neurons-grey.png"
              socialLinks={[]}
              links={[
                { label: "Docs", href: "/docs" },
                { label: "Support", href: "/support" },
              ]}
            />
          </Box>
        </Box>
      </Section>
    </>
  );
}