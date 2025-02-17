import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Offer } from "@/types/Offer";
// import styles from "./history.module.css";

const HistoryStats: React.FC<{ offer: Offer[] }> = ({ offer }) => {
  console.log("Offer: ", offer);

  return (
    <Box
      sx={{
        backgroundColor: "var(--card-bg)",
        width: "93%",
        borderRadius: "12px",
        padding: "8px",
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      <Typography
        sx={{
          color: "var(--text-color)",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Your Offer Statistics
      </Typography>

      <Box
        sx={{
          backgroundColor: "var(--primary-color)",
          borderRadius: "8px",
          padding: "16px",
          marginTop: "12px",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sx={{ borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}
          >
            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              123
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Ongoing Offers.
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              12
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Complete Offers
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HistoryStats;
