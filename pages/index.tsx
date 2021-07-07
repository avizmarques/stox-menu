import { useState } from "react";
import Head from "next/head";

import { categories, Category } from "../data";
import Menu from "../components/Menu";
import MenuCategory from "../components/MenuCategory";

import Swiper from "../components/Swiper";

export async function getStaticProps() {
  return {
    props: { categories },
  };
}

export default function Home({ categories }: { categories: Category[] }) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const featuredCategories = categories.filter((cat) => cat.backgroundImg);

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
      {expanded && (
        <div>
          <Swiper categories={featuredCategories} />
          {categories.map((category, i) => (
            <MenuCategory key={i} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}
