/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Typography } from "@mui/material";
import { Offer } from "@/types/Offer";

const HistoryCard: React.FC<{ offer: Offer }> = ({ offer }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "var(--card-bg)",
        borderRadius: "16px",
        // padding: "8px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": { opacity: 0.9 },
        margin: "10px 0",
      }}
      onClick={() => {}}
    >
      {/* First Row */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Offer Image */}
        <Box
          component="img"
          src={offer.offerImage}
          alt="Offer"
          sx={{
            width: "60px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        {/* Offer Details */}
        <Box sx={{ width: "85%", display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            {offer.offerType.name}
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}
          >
            {/* Offer Name */}
            {offer.name}
          </Typography>
        </Box>
        {/* <Box
          sx={{
            textAlign: "center",
            background: "var(--primary-color)",
            padding: "6px 12px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
            flexDirection: "column",
          }}
        >
          <Typography fontSize="0.7em">Up To</Typography>
          <Typography fontWeight="bold">
            🪙 {offerDetails.rewardCoins.toLocaleString()}
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default HistoryCard;
