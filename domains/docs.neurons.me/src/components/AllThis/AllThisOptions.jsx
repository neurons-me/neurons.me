import React from "react";
import { Box, Grid, Typography, Card, CardActionArea, CardContent } from "@mui/material";

// Define menu items with images and explicit links
const menuItems = [
  {
    title: "this.me",
    description: "Identity management simplified.",
    link: "/this.me/index.html",
    image: "/media/all-this/webP/this.me.webp", // Replace with actual image paths
  },
  {
    title: "this.wallet",
    description: "Secure wallet integration.",
    link: "/this.wallet/index.html",
    image: "/media/all-this/webP/this.wallet.webp",
  },
  {
    title: "this.img",
    description: "Image processing made easy.",
    link: "/this.img/index.html",
    image: "/media/all-this/webP/this.img.webp",
  },
  {
    title: "this.audio",
    description: "Audio manipulation tools.",
    link: "/this.audio/index.html",
    image: "/media/all-this/webP/this.audio.webp",
  },
  {
    title: "this.blockchain",
    description: "Blockchains on the Go!",
    link: "/this.blockchains/index.html",
    image: "/media/all-this/webP/this.blockchain.webp",
  },
  {
    title: "this.pixel",
    description: "Pixel-level control utilities.",
    link: "/this.pixel/index.html",
    image: "/media/all-this/webP/this.pixel.webp",
  },
  {
    title: "this.video",
    description: "Video editing and streaming.",
    link: "/this.video/index.html",
    image: "/media/all-this/webP/this.video.webp",
  },
  {
    title: "this.DOM",
    description: "DOM manipulation helpers.",
    link: "/this.DOM/index.html",
    image: "/media/all-this/webP/this.DOM.webp",
  },
  {
    title: "this.dictionaries",
    description: "Dictionary utilities.",
    link: "/this.dictionaries/index.html",
    image: "/media/all-this/webP/this.dictionaries.webp",
  },
  {
    title: "this.env",
    description: "Environment management tools.",
    link: "/this.env/index.html",
    image: "/media/all-this/webP/this.env.webp",
  },
  {
    title: "this.GUI",
    description: "Custom GUI components.",
    link: "/this.GUI/index.html",
    image: "/media/all-this/webP/this.gui.webp",
  },
  {
    title: "this.text",
    description: "Text parsing and manipulation.",
    link: "/this.text/index.html",
    image: "/media/all-this/webP/this.text.webp",
  },
  {
    title: "this.document",
    description: "Data Structures for Documents.",
    link: "/this.document/index.html",
    image: "/media/all-this/webP/this.document-removebg.webp",
  },
  {
    title: "this.url",
    description: "URL utilities and helpers.",
    link: "/this.url/index.html",
    image: "/media/all-this/webP/this.url.webp",
  },
  {
    title: "this.dir",
    description: "Directory management tools.",
    link: "/this.dir/index.html",
    image: "/media/all-this/webP/this.dir.webp",
  },  
  {
    title: "this.be",
    description: "Acts as the guardian of that state, ensuring that it's accessible and known.",
    link: "/this.be/index.html",
    image: "/media/all-this/webP/this.be.webp",
  },
  {
    title: "be.this",
    description: "Designed to empower users in defining, managing, and utilizing data functions effectively.",
    link: "/be.this/index.html",
    image: "/media/all-this/webP/be.this.webp",
  },
];

const AllThisOptions = () => {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: 2,
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
              {/* Link */}
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllThisOptions;
