import styles from "./loader.module.css";

const Loader = () => {
  return (
    // <div className={styles.loader_body}>
    <div className={styles.loader_container}>
      <div className={styles.spinner}></div>
    </div>
    // </div>
  );
};

export default Loader;
