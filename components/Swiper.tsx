import { Category } from "../data";

import styles from "../styles/Swiper.module.css";

export default function Swiper({ categories }: { categories: Category[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {categories.map((category, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.categoryName}>{category.name}</div>
            <div className={styles.gradientOverlay} />
            <div
              className={styles.cardImg}
              style={{ backgroundImage: `url(${category.backgroundImg})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
