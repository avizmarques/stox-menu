import styles from "../styles/CloseIcon.module.css";

export default function CloseIcon() {
  return (
    <div className={styles.container}>
      <div className={`${styles.line} ${styles.left}`}>
        <div className={`${styles.line} ${styles.right}`} />
      </div>
    </div>
  );
}
