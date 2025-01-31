import Banner from "@/components/Banner";
import Tabs from "@/components/Tabs";
import styles from "./home.module.css";
import OfferList from "@/components/OfferList";
import OfferFilter from "@/components/OfferFilter";

export default function Home() {
    return (
        <>
            <div className={styles.main_content}>
                <div className={styles.headers}>
                    <Banner />
                    <Tabs />
                </div>
                {/* <div className={styles.offer_list}>
                    <OfferFilter />
                    <OfferList />
                </div> */}
            </div>
        </>
    )
}
