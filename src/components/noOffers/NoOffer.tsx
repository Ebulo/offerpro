import { Typography } from "@mui/material";
import styles from "./nooffers.module.css";

const NoOffersAvailable: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
  return <div className={styles.no_offer_main}>
    <div className={styles.img_container}>
      <img src="/img/no_offers.png" alt="No Offers Available Image Background" className={styles.img} />
    </div>
    <div className={styles.content}>
      {/* <Typography variant="h6" className={styles.content_head}>
        Nothing to show here
      </Typography>
      <Typography variant="h6" className={styles.content_subtext}>
        Look like you have not complete any offers. start exploring offers to earn unlimited rewards.
      </Typography> */}
      <Typography variant="h6" className={styles.content_head}>
        {title}
      </Typography>
      <Typography variant="h6" className={styles.content_subtext}>
        {subtitle}
      </Typography>
    </div>
  </div>;
};

export default NoOffersAvailable;
