"use client";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ArrowBackRounded } from "@mui/icons-material";
import { Offer } from "@/types/Offer";

const DetailBanner = ({ offer }: { offer: Offer }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        height: "28vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div
        style={{
          borderRadius: "50px",
          background: "#0008",
          backdropFilter: "blur(6px)",
          padding: "10px",
          width: "fit-content",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "10px",
          left: "10px",
          cursor: "pointer",
          margin: "10px 10px 10px 10px",
        }}
        onClick={() => {
          router.back();
        }}
      >
        <ArrowBackRounded style={{ color: "#fff", fontSize: "1em" }} />
        <Typography variant="h6" color="#fff" fontSize="0.9em" marginLeft="5px">
          Back
        </Typography>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={offer.offerImage}
        alt="Offer Banner"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default DetailBanner;
