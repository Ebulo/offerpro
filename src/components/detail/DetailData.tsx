import { Offer } from "@/types/Offer";
import styles from "./details.module.css";

const DetailData = ({ offer }: { offer: Offer }) => {
    return (
        <div>
            <div className={styles.title}>
                <h4>{offer.name}</h4>
                <p>{offer.offerType.name}</p>
            </div>

        </div>
    )
}

export default DetailData;