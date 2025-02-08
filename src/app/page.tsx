import styles from "./page.module.css";
import Home from "./home/page";

export default function Main() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}