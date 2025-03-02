import { Offer } from "@/types/Offer";
import OngoingOffersCarousel from "./OngoingOffer";
import OffersList from "./OfferList";

// const OfferMain: React.FC<{ offers: Offer[]; ongoingOffers: Offer[] }> = ({
//   offers,
//   ongoingOffers,
// }) => {
//   return (
//     <div>
//       <OngoingOffersCarousel offers={ongoingOffers} />
//       <OffersList offers={offers} ongoingOffersLength={ongoingOffers.length} />
//     </div>
//   );
// };

// export default OfferMain;

const OfferMain: React.FC<{
  offers: Offer[];
  ongoingOffers: Offer[];
  loadMoreOffers: () => void;
  loadingMore: boolean;
  nextPageUrl: string | null;
}> = ({ offers, ongoingOffers, loadMoreOffers, loadingMore, nextPageUrl }) => {
  return (
    <div>
      <OngoingOffersCarousel offers={ongoingOffers} />
      <OffersList
        offers={offers}
        ongoingOffersLength={ongoingOffers.length}
        loadMoreOffers={loadMoreOffers}
        loadingMore={loadingMore}
        nextPageUrl={nextPageUrl}
      />
    </div>
  );
};

export default OfferMain;
