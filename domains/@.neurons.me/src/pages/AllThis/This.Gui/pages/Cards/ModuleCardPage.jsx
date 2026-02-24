import { Box, Typography, Grid } from '@mui/material';
import { GUI } from "all.this";
const {  ModuleCard, CodeBlock  } = GUI;
const demoModules = [
  {
    title: "Neural Model",
    description: "Train and visualize dynamic neural architectures.",
    link: "#",
    image: "/media/PixelGrid.webp",
  },
  {
    title: "Signal Flow",
    description: "Real-time signal propagation and transformation.",
    link: "#",
    image: "/media/neurons-me-blog.webp",
  },
  {
    title: "Data Handler",
    description: "Intuitive control over how data flows through systems.",
    link: "#",
    image: "/media/MonadLisa.webp",
  },
];

const ModuleCardPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        ModuleCard Component
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>ModuleCard</strong> is a ready-to-use UI block designed to present a module or feature
        visually. It supports an image, a title, a short description, and a link to learn more.
      </Typography>

      <Typography variant="body2" sx={{ mb: 3 }}>
        You can use it declaratively by passing props like: <code>title</code>, <code>description</code>,
        <code>link</code>, and <code>image</code>.
      </Typography>

      <Typography variant="subtitle1" sx={{ fontWeight: '600', mb: 1 }}>
        Example Usage (React):
      </Typography>
      <CodeBlock language="jsx">
{`<ModuleCard
  title="Neural Model"
  description="Train and visualize dynamic neural architectures."
  link="https://neurons.me/docs/neural-model"
  image="/media/module-neural.png"
/>`}
      </CodeBlock>

      <Grid container spacing={3}>
        {demoModules.map((mod, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ModuleCard {...mod} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ModuleCardPage;