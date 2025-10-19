import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import mediaData from "../../assets/media.json";

const CompactMediaGrid = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ px: 2, py: 2 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 3,
          color: "white",
        }}
      >
        Media Profiles
      </Typography>
      <Grid container spacing={1.5} justifyContent="center">
        {Object.entries(mediaData.medias).map(([key, value]) => {
          let profilePic = "/default-profile.png";

          const facebookLink = Array.isArray(value.Facebook)
            ? value.Facebook[0]
            : value.Facebook || "";

          if (facebookLink.includes("facebook.com")) {
            const userId = facebookLink.split("/").slice(-2, -1)[0];
            profilePic = `https://graph.facebook.com/${userId}/picture?type=large`;
          }

          return (
            <Grid item xs={6} sm={4} md={3} lg={2.5} key={key}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 1.5,
                  textAlign: "center",
                  boxShadow: 2,
                  borderRadius: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <Avatar
                  src={profilePic}
                  alt={`${key} Profile`}
                  sx={{ width: 60, height: 60, mb: 1 }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {key}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => navigate(`/media/${encodeURIComponent(key)}`)}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CompactMediaGrid;