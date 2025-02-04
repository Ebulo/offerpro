import { Offer } from "@/types/Offer";
import styles from "./detail.module.css";
import DetailBanner from "@/components/detail/DetailBanner";
import DetailData from "@/components/detail/DetailData";

const OfferDetail = ({ offer }: { offer: Offer }) => {
  console.log("Offer: ", offer);

  return (<div className={styles.main}>
    <DetailBanner />
    <DetailData offer={offer} />
  </div>);
};

export default OfferDetail;
