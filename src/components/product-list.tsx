import React from "react";
import ProductItem from "./product-item";
import { Product } from "@/types";
import styles from "./product-list.module.css";

const ProductList: React.FC<{ items: Product[] }> = ({ items }) => {
  return (
    <div className={styles.products}>
      {items.map((item) => (
        <div key={item.id} className={styles.productItem}>
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
