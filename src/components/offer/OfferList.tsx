// import { Offer } from "@/types/Offer";
// import { Box, Typography } from "@mui/material";
// import OfferCard from "./OfferCard";
// import { useRouter } from "next/navigation";
// import NoOffersAvailable from "../noOffers/NoOffer";

// const OffersList: React.FC<{
//   offers: Offer[];
//   ongoingOffersLength: number;
// }> = ({ offers, ongoingOffersLength }) => {
//   const router = useRouter();

//   if (offers.length == 0)
//     return (
//       <NoOffersAvailable
//         title="No Offers!"
//         subtitle="It seems like you have completed all the available offers. Please check back later."
//       />
//     );

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         paddingBottom: "95px",
//       }}
//     >
//       {ongoingOffersLength > 0 && (
//         <Typography
//           variant="h6"
//           style={{
//             //   marginBottom: "10px",
//             fontSize: "1.1em",
//             textAlign: "left",
//             color: "#fff",
//             width: "100%",
//             marginBottom: "10px",
//             paddingLeft: "20px",
//           }}
//         >
//           Available Offers
//         </Typography>
//       )}
//       {offers.map((offer) => (
//         <OfferCard
//           key={offer.id}
//           offerDetails={offer}
//           onClick={() =>
//             offer.source
//               ? router.push(`/detail/${offer.id}/${offer.source}`)
//               : router.push(`/detail/${offer.id}/`)
//           }
//         />
//       ))}
//     </Box>
//   );
// };

// export default OffersList;
import { Offer } from "@/types/Offer";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import OfferCard from "./OfferCard";
import { useRouter } from "next/navigation";
import NoOffersAvailable from "../noOffers/NoOffer";

const OffersList: React.FC<{
  offers: Offer[];
  ongoingOffersLength: number;
  loadMoreOffers: () => void;
  loadingMore: boolean;
  nextPageUrl: string | null;
}> = ({
  offers,
  ongoingOffersLength,
  loadMoreOffers,
  loadingMore,
  nextPageUrl,
}) => {
  const router = useRouter();

  console.log("Oger ids list: ", offers);

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
          onClick={() =>
            offer.source == "offer18"
              ? router.push(`/detail/${offer.id}/${offer.source}`)
              : router.push(`/detail/${offer.id}/`)
          }
        />
      ))}

      {nextPageUrl && (
        <Button
          variant="contained"
          onClick={loadMoreOffers}
          disabled={loadingMore}
          sx={{
            marginTop: "20px",
            background: "var(--primary-color)",
            color: "var(--text-color)",
            borderRadius: "10px",
          }}
        >
          {loadingMore ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Load More"
          )}
        </Button>
      )}
    </Box>
  );
};

export default OffersList;
