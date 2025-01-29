import Banner from "@/components/Banner";
import Tabs from "@/components/Tabs";
import styles from "./home.module.css";

export default function Home() {
    return (
        <>
            <div className={styles.main_content}>
                <Banner />
                <Tabs />
            </div>

        </>
    )
}
