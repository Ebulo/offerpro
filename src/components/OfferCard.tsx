import { Box, Button, Typography, Chip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Clock icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Right arrow icon
import { Offer } from "@/types/Offer";

const OfferCard = ({
  offerDetails,
  onClick,
}: {
  offerDetails: Offer;
  onClick: () => void;
}) => {
  return (
    <Box
      sx={{
        width: "94%",
        bgcolor: "var(--card-bg)",
        borderRadius: "16px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": { opacity: 0.9 },
        margin: "10px 2px",
      }}
      onClick={() => onClick()}
    >
      {/* First Row */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Offer Image */}
        <Box
          component="img"
          src={offerDetails.offerImage}
          alt="Offer"
          sx={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        {/* Offer Details */}
        <Box sx={{ width: "80%", display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            {offerDetails.offerType.name}
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
          >
            {/* Offer Name */}
            {offerDetails.name}
          </Typography>
          <Chip
            icon={<AccessTimeIcon sx={{ fontSize: "14px", color: "white" }} />}
            label="5 mins"
            sx={{
              bgcolor: "var(--primary-color)",
              color: "white",
              width: "fit-content",
              fontSize: "12px",
              height: "24px",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>

      {/* Second Row */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* View Details Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "gray",
            color: "white",
            borderRadius: "12px",
            textTransform: "none",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          View Details <ChevronRightIcon />
        </Button>

        {/* Coin Reward */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "var(--primary-color)",
            color: "white",
            borderRadius: "12px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {offerDetails.rewardCoins} Coins
        </Button>
      </Box>
    </Box>
  );
};

export default OfferCard;

export const HistoryCard = ({ offerDetails }: { offerDetails: Offer }) => {
  return (
    <Box
      sx={{
        width: "94%",
        bgcolor: "var(--card-bg)",
        borderRadius: "16px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": { opacity: 0.9 },
        margin: "10px 2px",
      }}
    >
      {/* First Row */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Offer Image */}
        <Box
          component="img"
          src={offerDetails.offerImage}
          alt="Image of the Offer History"
          sx={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        {/* Offer Details */}
        <Box sx={{ width: "80%", display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            {offerDetails.offerType.name}
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
          >
            {/* Offer Name */}
            {offerDetails.name}
          </Typography>
          <Chip
            icon={<AccessTimeIcon sx={{ fontSize: "14px", color: "white" }} />}
            label="5 mins"
            sx={{
              bgcolor: "var(--primary-color)",
              color: "white",
              width: "fit-content",
              fontSize: "12px",
              height: "24px",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
