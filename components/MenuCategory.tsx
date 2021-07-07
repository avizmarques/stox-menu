import { useState } from "react";

import { Category } from "../data";
import styles from "../styles/MenuCategory.module.css";
import ChevronIcon from "./ChevronIcon";

export default function MenuCategory({ category }: { category: Category }) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.categoryName}>{category.name}</div>
        {category.subCategories.length > 0 && (
          <div
            onClick={() => setExpanded(!expanded)}
            className={expanded ? styles.transformChevron : styles.chevron}
          >
            <ChevronIcon />
          </div>
        )}
      </div>
      {expanded && (
        <div className={styles.expandedContainer}>
          {category.subCategories.map((subcategory, i) => (
            <div key={i} className={styles.subcategoryContainer}>
              <div className={styles.subcategoryName}>{subcategory.name}</div>
              <div className={styles.quantity}>
                {subcategory.quantity} products
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
