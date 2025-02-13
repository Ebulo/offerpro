import Banner from "@/components/Banner";
import Tabs from "@/components/Tabs";
import styles from "./home.module.css";
import { Offer } from "@/types/Offer";

export default function Home({ offers }: { offers: Offer[] }) {
  return (
    <>
      <div className={styles.main_content}>
        <div className={styles.headers}>
          <Banner />
          <Tabs offers={offers} />
        </div>
      </div>
    </>
  );
}
