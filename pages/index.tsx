import { useState } from "react";
import Head from "next/head";

import { categories, Category } from "../data";
import Menu from "../components/Menu";

import styles from "../styles/Home.module.css";
import MenuCategory from "../components/MenuCategory";

export async function getStaticProps() {
  return {
    props: { categories },
  };
}

export default function Home({ categories }: { categories: Category[] }) {
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
      {expanded &&
        categories.map((category, i) => (
          <MenuCategory key={i} category={category} />
        ))}
    </div>
  );
}
