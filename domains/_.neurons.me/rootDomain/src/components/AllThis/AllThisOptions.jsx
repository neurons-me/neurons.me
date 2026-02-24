import React from "react";
import { Box, Grid, Typography, Card, CardActionArea, CardContent } from "@mui/material";

// Define menu items with images and explicit links
const menuItems = [
  {
    title: "this.me",
    description: "Identity management simplified.",
    link: "/all-this/this-me",
    image: "/media/all-this/webp/this.me.webp", // Replace with actual image paths
  },
  {
    title: "this.wallet",
    description: "Secure wallet integration.",
    link: "/all-this/this-wallet",
    image: "/media/all-this/webp/this.wallet.webp",
  },
  {
    title: "this.img",
    description: "Image processing made easy.",
    link: "/all-this/this-img",
    image: "/media/all-this/webp/this.img.webp",
  },
  {
    title: "this.audio",
    description: "Audio manipulation tools.",
    link: "/all-this/this-audio",
    image: "/media/all-this/webp/this.audio.webp",
  },
  {
    title: "this.blockchain",
    description: "Blockchains on the Go!",
    link: "/all-this/this-blockchain",
    image: "/media/all-this/webp/this.blockchain.webp",
  },
  {
    title: "this.pixel",
    description: "Pixel-level control utilities.",
    link: "/all-this/this-pixel",
    image: "/media/all-this/webp/this.pixel.webp",
  },
  {
    title: "this.video",
    description: "Video editing and streaming.",
    link: "/all-this/this-video",
    image: "/media/all-this/webp/this.video.webp",
  },
  {
    title: "this.DOM",
    description: "DOM manipulation helpers.",
    link: "/all-this/this-DOM",
    image: "/media/all-this/webp/this.DOM.webp",
  },
  {
    title: "this.dictionaries",
    description: "Dictionary utilities.",
    link: "/all-this/this-dictionaries",
    image: "/media/all-this/webp/this.dictionaries.webp",
  },
  {
    title: "this.env",
    description: "Environment management tools.",
    link: "/all-this/this-env",
    image: "/media/all-this/webp/this.env.webp",
  },
  {
    title: "this.GUI",
    description: "Custom GUI components.",
    link: "/all-this/this-GUI",
    image: "/media/all-this/webp/this.gui.webp",
  },
  {
    title: "this.text",
    description: "Text parsing and manipulation.",
    link: "/all-this/this-text",
    image: "/media/all-this/webp/this.text.webp",
  },
  {
    title: "this.file",
    description: "File handling made simple.",
    link: "/all-this/this-file",
    image: "/media/all-this/webp/this.file.webp",
  },
  {
    title: "this.url",
    description: "URL utilities and helpers.",
    link: "/all-this/this-url",
    image: "/media/all-this/webp/this.url.webp",
  },
  {
    title: "this.dir",
    description: "Directory management tools.",
    link: "/all-this/this-dir",
    image: "/media/all-this/webp/this.dir.webp",
  },
];

const AllThisOptions = () => {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: .89,
      }}
    >
      {/* Compact Grid of Items */}
      <Grid container spacing={2}>
        {menuItems.map((item, index) => (
          <Grid
            item
            xs={6} // 2 per row on small screens
            sm={4} // 3 per row on medium screens
            md={3} // 4 per row on large screens
            key={index}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                "&:hover": {
                  boxShadow: 4,
                  transform: "translateY(-2px)",
                  transition: "0.3s ease-in-out",
                },
              }}
            >
              {item.title === "this.me" || item.title === "all.this" ? (
                <CardActionArea href={item.link}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: 2,
                    }}
                  >
                    {/* Image */}
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "80px",
                        height: "80px",
                        marginBottom: 1,
                        objectFit: "contain",
                      }}
                    />

                    {/* Title */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        marginBottom: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.85rem",
                        color: "text.secondary",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: 2,
                    }}
                  >
                    {/* Image */}
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "80px",
                        height: "80px",
                        marginBottom: 1,
                        objectFit: "contain",
                      }}
                    />

                    {/* Title */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        marginBottom: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.85rem",
                        color: "text.secondary",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </a>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllThisOptions;
