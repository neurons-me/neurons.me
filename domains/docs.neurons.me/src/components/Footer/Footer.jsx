import React from "react";
import { Box, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
<Box
  component="footer"
  sx={{
    width: "100%", // Changed from 100vw
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderTop: "1px solid #ddd",
    bgcolor: "#fff",
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
            onClick={() => window.open("https://instagram.com", "_blank")}
          />
          <GitHubIcon
            sx={{
              fontSize: 24,
              color: "#000",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={() => window.open("https://github.com", "_blank")}
          />
        </Box>

        {/* Neurons.me Section */}
        <Link
          href="https://neurons.me"
          target="_blank"
          underline="none"
          sx={{
            display: "block",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#2C7370",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            neurons.me
          </Typography>
        </Link>

        {/* Links Section */}
        <Box sx={{ textAlign: "right" }}>
          <Link
            href="/terms-and-conditions"
            underline="none"
            sx={{
              display: "block",
              color: "#2C7370",
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
              color: "#2C7370",
              fontSize: "14px",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/docs"
            underline="none"
            sx={{
              display: "block",
              color: "#2C7370",
              fontSize: "14px",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Docs
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              display: "block",
              color: "#2C7370",
              fontSize: "14px",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Glossary
          </Link>
        </Box>
      </Box>

      {/* Logo Section */}
      <Box sx={{ marginLeft: "20px" }}>
       {/* Logo Section */}
      <Link
        href="https://neurons.me"
        target="_blank"
        underline="none"
        sx={{
          marginLeft: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="/neurons.me.webp"
          alt="neurons.me logo"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
      </Box>
    </Box>
  );
};

export default Footer;
