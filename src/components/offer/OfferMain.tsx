import { Offer } from "@/types/Offer";
import OngoingOffersCarousel from "./OngoingOffer";
import OffersList from "./OfferList";

const OfferMain: React.FC<{ offers: Offer[] }> = ({ offers }) => {
  // Collect Ongoing Offers here
  // Fetch Untracked Offers here
  return (
    <div>
      <OngoingOffersCarousel offers={offers} />
      <OffersList offers={offers} />
    </div>
  );
};

export default OfferMain;
