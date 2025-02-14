import { Offer } from "@/types/Offer";
import { Box, Typography } from "@mui/material";
import OfferCard from "./OfferCard";
import { useRouter } from "next/navigation";

const OffersList: React.FC<{ offers: Offer[] }> = ({ offers }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: "70px",
      }}
    >
      <Typography
        variant="h6"
        style={{
          //   marginBottom: "10px",
          textAlign: "left",
          color: "#fff",
          width: "100%",
          marginBottom: "10px",
          paddingLeft: "20px",
        }}
      >
        Available Offers
      </Typography>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offerDetails={offer}
          onClick={() => router.push(`/detail/${offer.id}`)}
        />
      ))}
    </Box>
  );
};

export default OffersList;
