// this.GUI/npm/src/pages/Docs/PageElements/PageImagePage.jsx
import { Typography } from "@mui/material";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock, Img} = GUI;

export default function ImgPage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <Typography variant="body2">
          The <strong>PageImage</strong> component displays images with consistent
          spacing and optional captions. It supports alignment options to fit
          different page layouts.
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
            <strong>src</strong>: The image URL (required).
          </li>
          <li>
            <strong>alt</strong>: Alternative text for accessibility (default: empty).
          </li>
          <li>
            <strong>align</strong>: Alignment of the image. Accepts{" "}
            <code>"left"</code>, <code>"center"</code>, or <code>"right"</code>.
            Default: <code>"center"</code>.
          </li>
          <li>
            <strong>caption</strong>: Optional text displayed below the image.
          </li>
          <li>
            <strong>maxWidth</strong>: Maximum width of the image (default:{" "}
            <code>"100%"</code>).
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
{`import PageImage from "../../components/Pages/PageImage";

<PageImage
  src="https://via.placeholder.com/400"
  alt="Example"
  align="center"
  caption="This is a sample image."
/>

<PageImage
  src="https://via.placeholder.com/300"
  alt="Left aligned example"
  align="left"
/>
`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Live Example",
      content: (
        <>
          <Img
            src="/media/MonadLisa.webp"
            alt="Live example"
            align="center"
            caption="This is a live preview of PageImage."
          />
        </>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="PageImage"
        subtitle="A component to display images with alignment and optional captions."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>PageImage</strong> component ensures that images are displayed
          consistently across pages, with built-in alignment and optional captions
          to provide context.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}