import { useState } from "react";
import Head from "next/head";

import Menu from "../components/Menu";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [expanded, setExpanded] = useState<boolean>(false);

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
      <Menu expanded={expanded} setExpanded={setExpanded} />
      {expanded && <div>hello!</div>}
    </div>
  );
}
