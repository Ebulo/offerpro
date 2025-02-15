import { Offer } from "@/types/Offer";
import HistoryList from "./HistoryList";
import HistoryStats from "./HistoryStats";

const HistoryMain: React.FC<{ history: Offer[] }> = ({ history }) => {
  console.log(history);

  return (
    <>
      History
      <HistoryStats />
      <HistoryList />
    </>
  );
};

export default HistoryMain;
