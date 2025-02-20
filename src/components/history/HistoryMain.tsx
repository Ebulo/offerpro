import HistoryList from "./HistoryList";
import HistoryStats from "./HistoryStats";
import styles from "./history.module.css";
import { Postback } from "@/types/Postback";

const HistoryMain: React.FC<{ history: Postback[] }> = ({ history }) => {
  console.log(history);

  return (
    <div className={styles.history_main}>
      {/* History */}
      <HistoryStats history={history} />
      <HistoryList postbacks={history} />
    </div>
  );
};

export default HistoryMain;
