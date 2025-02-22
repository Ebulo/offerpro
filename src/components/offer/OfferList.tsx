import { Offer } from "@/types/Offer";
import { Box, Typography } from "@mui/material";
import OfferCard from "./OfferCard";
import { useRouter } from "next/navigation";
import NoOffersAvailable from "../noOffers/NoOffer";

const OffersList: React.FC<{
  offers: Offer[];
  ongoingOffersLength: number;
}> = ({ offers, ongoingOffersLength }) => {
  const router = useRouter();

  if (offers.length == 0)
    return (
      <NoOffersAvailable
        title="No Offers!"
        subtitle="It seems like you have completed all the available offers. Please check back later."
      />
    );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: "95px",
      }}
    >
      {ongoingOffersLength > 0 && (
        <Typography
          variant="h6"
          style={{
            //   marginBottom: "10px",
            fontSize: "1.1em",
            textAlign: "left",
            color: "#fff",
            width: "100%",
            marginBottom: "10px",
            paddingLeft: "20px",
          }}
        >
          Available Offers
        </Typography>
      )}
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
