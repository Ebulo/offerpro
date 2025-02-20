/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Typography } from "@mui/material";
import { Offer } from "@/types/Offer";
import CoinButton from "../buttons/CoinButton";

const HistoryCard: React.FC<{ offer: Offer }> = ({ offer }) => {
  return (
    <Box
      sx={{
        width: "98%",
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
        margin: "10px 2px",
      }}
      onClick={() => {}}
    >
      {/* First Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "60%",
          }}
        >
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

          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
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
        </div>

        <CoinButton mainText={offer.rewardCoins.toString()} />
      </Box>
    </Box>
  );
};

export default HistoryCard;
