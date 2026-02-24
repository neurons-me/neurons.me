import React from "react";
import { Box } from "@mui/material";
import NeuronsAppBar from "../../components/AppBar/NeuronsAppBar"; // Import the AppBar
import Footer from "../../components/Footer/Footer"; // Import the Footer

const DocsPage = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures the layout spans the viewport height
      }}
    >
      {/* AppBar at the top */}
      <NeuronsAppBar />

      {/* Scrollable content */}
      <Box
        sx={{
          flex: 1, // Takes up remaining space
          overflowY: "auto", // Allows scrolling if content overflows
          padding: 2,
        }}
      >
        {children} {/* Render passed children dynamically */}
      </Box>

      {/* Footer at the bottom */}
      <Footer />
    </Box>
  );
};

export default DocsPage;
