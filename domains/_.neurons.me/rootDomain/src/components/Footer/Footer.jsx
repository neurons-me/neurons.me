import React from "react";
import { Box, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  return (
<Box
  component="footer"
  sx={{
    width: "100%", // Changed from 100vw
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderTop: `1px solid ${theme.palette.divider}`,
    bgcolor: theme.palette.background.paper,
  }}
>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "right",
        }}
      >
        {/* Icons Section */}
        <Box sx={{ display: "flex", gap: "12px", marginBottom: "10px" }}>
          <InstagramIcon
            sx={{
              fontSize: 24,
              color: "#E4405F",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={() => window.open("https://instagram.com/neurons.me", "_blank")}
          />
          <GitHubIcon
            sx={{
              fontSize: 24,
              color: theme.palette.text.primary,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={() => window.open("https://github.com/neurons-me", "_blank")}
          />
        </Box>

        {/* Neurons.me Section */}
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            marginBottom: "10px",
          }}
        >
          neurons.me
        </Typography>

        {/* Links Section */}
        <Box sx={{ textAlign: "right" }}>
          <Link
            href="/terms-and-conditions"
            underline="none"
            sx={{
              display: "block",
              color: theme.palette.text.primary,
              fontSize: "14px",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Terms of Use
          </Link>
          <Link
            href="/privacy-policy"
            underline="none"
            sx={{
              display: "block",
              color: theme.palette.text.primary,
              fontSize: "14px",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Privacy Policy
          </Link>
        </Box>
      </Box>

      {/* Logo Section */}
      <Box sx={{ marginLeft: "20px" }}>
        <img
          src="/neurons.me.png"
          alt="neurons.me logo"
          style={{ width: "50px", height: "50px" }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
