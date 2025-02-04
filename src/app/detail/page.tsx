import { Offer } from "@/types/Offer";
import styles from "./detail.module.css";

const OfferDetail = ({ offer }: { offer: Offer }) => {
  console.log("Offer: ", offer);

  return <div className={styles.main}></div>;
};

export default OfferDetail;
