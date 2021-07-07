import Hamburger from "./Hamburger";
import CloseIcon from "./CloseIcon";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";

import styles from "../styles/Menu.module.css";

export default function Menu({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}) {
  return (
    <div className={styles.menu}>
      <div className={styles.menuLeft}>
        <button
          className={styles.button}
          style={{ marginRight: "18px" }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <CloseIcon /> : <Hamburger />}
        </button>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
      </div>
      <div className={styles.menuRight}>
        <div className={styles.iconContainer}>
          <SearchIcon />
        </div>
        <div className={styles.iconContainer}>
          <CartIcon />
        </div>
      </div>
    </div>
  );
}
