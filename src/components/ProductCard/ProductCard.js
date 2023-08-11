import Image from "next/image";
import React from "react";

import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className={styles["product-container"]}>
      <Image
        src={product.thumbnail}
        width={250}
        height={250}
        alt={product.title}
      />
      <h2 className={styles["product-title"]}>{product.title}</h2>
      <span className={styles["product-price"]}>${product.price}</span>
    </div>
  );
};

export default ProductCard;
