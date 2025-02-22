import { Offer } from "@/types/Offer";
import OngoingOffersCarousel from "./OngoingOffer";
import OffersList from "./OfferList";

const OfferMain: React.FC<{ offers: Offer[]; ongoingOffers: Offer[] }> = ({
  offers,
  ongoingOffers,
}) => {
  // console.log("onhuih: ", ongoingOffers);

  return (
    <div>
      <OngoingOffersCarousel offers={ongoingOffers} />
      <OffersList offers={offers} ongoingOffersLength={ongoingOffers.length} />
    </div>
  );
};

export default OfferMain;
