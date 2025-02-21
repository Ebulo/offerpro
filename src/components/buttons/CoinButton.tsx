import { Box, Typography } from "@mui/material";

const CoinButton: React.FC<{ mainText: string }> = ({ mainText }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        background: "var(--primary-color)",
        padding: "6px 12px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "right",
        justifyContent: "right",
        flexDirection: "row",
        color: "#fff",
        gap: "5px",
      }}
    >
      <div
        style={{
          width: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/offercoin.png"
          alt="Rayole Software Offer Coin"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ textAlign: "right" }}>
        <Typography fontSize="0.6em" style={{ opacity: "0.7" }}>
          Up To
        </Typography>
        <Typography fontWeight="bold">{mainText}</Typography>
      </div>
    </Box>
  );
};

export default CoinButton;
