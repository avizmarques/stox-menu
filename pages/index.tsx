import Head from "next/head";
import CartIcon from "../components/CartIcon";

import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";
import SearchIcon from "../components/SearchIcon";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>STOX Energy Socks | Superior Performance, Best Price</title>
        <meta
          name="description"
          content="STOX Energy Socks | Superior Performance, Best Price"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.menu}>
        <div className={styles.menuLeft}>
          <Hamburger />
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
    </div>
  );
}
