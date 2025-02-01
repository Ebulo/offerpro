import { Box } from "@mui/material";
import OfferCard, { HistoryCard } from "./OfferCard";

const offers = [
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
];

const history = [
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
  {
    offerType: "Offer Type",
    offerName: "Offer Name",
    offerDuration: "5 Mins",
    offerCoins: "220",
    offerImage:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    offerId: "1",
  },
];

const OfferList: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {offers.map((offer, index) => (
        <OfferCard key={index} offerDetails={offer} />
      ))}
    </Box>
  );
};

export const HistoryList: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {history.map((offer, index) => (
        <HistoryCard key={index} offerDetails={offer} />
      ))}
    </Box>
  );
};

export default OfferList;
