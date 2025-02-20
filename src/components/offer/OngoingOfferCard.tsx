import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Offer } from "@/types/Offer";
import { useRouter } from "next/navigation";
import CoinButton from "../buttons/CoinButton";

const OngoingOfferCard: React.FC<{ offer: Offer }> = ({ offer }) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        width: "92%",
        margin: "auto",
        borderRadius: "12px",
        border: "2px solid var(--primary-color)",
        padding: "8px",
        backgroundColor: "#1A1525",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={() => router.push(`/detail/${offer.id}`)}
    >
      {/* Ongoing Offers Tag */}
      <Box
        sx={{
          position: "absolute",
          top: "7px",
          left: "7px",
          background: "var(--primary-color)",
          padding: "5px 12px",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Ongoing Offers
      </Box>

      {/* Offer Image */}
      <Box
        sx={{
          width: "100%",
          height: "140px",
          borderRadius: "8px",
          background: `url(${offer.offerImage}) center/cover no-repeat`,
        }}
      />

      {/* Offer Details */}
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 8px",
        }}
      >
        {/* Left Section (Image + Text) */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Small Icon */}
          <Box
            sx={{
              width: "45px",
              height: "45px",
              background: `url(${
                offer.offerType.imageUrl ?? offer.offerImage
              }) center/cover no-repeat`,
              borderRadius: "8px",
            }}
          />
          {/* Offer Texts */}
          <Box sx={{ marginLeft: "12px" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {offer.name.substring(0, 15)}..
            </Typography>
            <Typography variant="body2" color="gray">
              {offer.offerType.name}
            </Typography>
          </Box>
        </Box>
        <CoinButton mainText={offer.rewardCoins.toLocaleString()} />
      </CardContent>
    </Card>
  );
};

export default OngoingOfferCard;
