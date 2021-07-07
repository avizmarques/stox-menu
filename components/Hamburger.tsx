import styles from "../styles/Hamburger.module.css";

export default function Hamburger() {
  return (
    <div className={styles.hamburger}>
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
    </div>
  );
}
