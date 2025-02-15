import { Offer } from "@/types/Offer";
import OngoingOffersCarousel from "./OngoingOffer";
import OffersList from "./OfferList";

const OfferMain: React.FC<{ offers: Offer[]; ongoingOffers: Offer[] }> = ({
  offers,
  ongoingOffers,
}) => {
  // Collect Ongoing Offers here
  // Fetch Untracked Offers here
  console.log("onhuih: ", ongoingOffers);

  return (
    <div>
      <OngoingOffersCarousel offers={ongoingOffers} />
      <OffersList offers={offers} />
    </div>
  );
};

export default OfferMain;
