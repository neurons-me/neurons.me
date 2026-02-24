// this.GUI/npm/src/pages/Docs/PageElements/PageContainerPage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock, VideoEmbed} = GUI;

export default function VideoEmbedPage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <Typography variant="body2">
          The <strong>PageEmbed</strong> component allows embedding external content
          such as videos, maps, or other iframes with a responsive aspect ratio,
          ensuring consistent styling across pages.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Props",
      content: (
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>
            <strong>src</strong>: The URL of the content to embed (required).
          </li>
          <li>
            <strong>title</strong>: Accessible title for the iframe (required for accessibility).
          </li>
          <li>
            <strong>ratio</strong>: Aspect ratio of the embed. Accepts{" "}
            <code>"16:9"</code> (default), <code>"4:3"</code>, or custom.
          </li>
          <li>
            <strong>allowFullScreen</strong>: Enables fullscreen mode for videos.
            Default: <code>true</code>.
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
{`import PageEmbed from "../../components/Pages/PageEmbed";

<VideoEmbed
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Sample Video"
  ratio="16:9"
/>

<VideoEmbed
  src="https://www.google.com/maps/embed?pb=..."
  title="Sample Map"
  ratio="4:3"
/>`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Live Example",
      content: (
        <VideoEmbed
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Live Example Video"
        />
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="PageEmbed"
        subtitle="Embed videos, maps, or iframes with responsive aspect ratio and consistent styling."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>PageEmbed</strong> component is perfect for including external
          content like videos or interactive maps in your pages. It adapts to different
          aspect ratios and ensures responsive display across devices.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}