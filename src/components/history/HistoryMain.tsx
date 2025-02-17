import { Offer } from "@/types/Offer";
import HistoryList from "./HistoryList";
import HistoryStats from "./HistoryStats";
import styles from "./history.module.css";

const HistoryMain: React.FC<{ history: Offer[] }> = ({ history }) => {
  console.log(history);

  return (
    <div className={styles.history_main}>
      {/* History */}
      <HistoryStats offer={history} />
      <HistoryList offers={history} />
    </div>
  );
};

export default HistoryMain;
