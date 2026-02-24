import React from "react";
import { Box, Typography } from "@mui/material";
import AllThisOptions from "./AllThisOptions"; // Import the options component

const AllThis = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Stack content and menu vertically
        gap: 4, // Add spacing between sections
        maxWidth: "1200px",
        margin: "0 auto",
        padding: 3,
      }}
    >
      {/* Intro Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
          alignItems: { xs: "flex-start", md: "flex-start" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "55%" },
            textAlign: "justify",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "primary.main",
              fontFamily: "Roboto, sans-serif",
              lineHeight: 1.6,
            }}
          >
            <b>All.This</b>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "text.primary",
            }}
          >
            <b>All.This</b> is your ultimate toolbox for modular development. It offers a suite of tools designed to help developers create, customize, and manage projects with ease.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "text.primary",
              marginTop: "10px",
            }}
          >
            Whether you're working on AI, web applications, or systems infrastructure, <b>All.This</b> empowers you to build with precision and flexibility. Explore its tools and start developing today.
          </Typography>
        </Box>

        {/* Responsive Image */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "80%", md: "40%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            order: { xs: 2, md: 0 }, // Ensures correct position for mobile and desktop
          }}
        >
          <img
            src="/media/all.this.png"
            alt="All.This illustration"
            style={{
              width: "100%",
              maxWidth: "377px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>

      {/* Tools Options */}
      <Box>
        <AllThisOptions />
      </Box>
    </Box>
  );
};

export default AllThis;
