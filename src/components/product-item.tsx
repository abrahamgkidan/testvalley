import React from "react";
import { Product } from "@/types";
import Image from "next/image";

import styles from "./product-item.module.css";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.imageContainer}>
          {product.tagsOnImage.length ? (
            <div className={styles.imageTagContainer}>
              <div>
                <div className={styles.imageTag}>
                  <Image src="/return-new.svg" alt="" width={12} height={12} />
                  {product.tagsOnImage?.[0]}
                </div>
              </div>
              <div className={styles.imageTagLine}></div>
            </div>
          ) : null}

          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={product.imageUrl}
              alt={product.title}
              width={174}
              height={174}
              loading="lazy"
              layout="responsive"
            />
          </div>
        </div>

        <div className={styles.title}>{product.title}</div>
        <div className={styles.description}>
          {product.discount && <span>{product.discount}%</span>}{" "}
          {new Intl.NumberFormat("KRW", {
            maximumSignificantDigits: 3,
          }).format(product.price)}
        </div>
        <div>
          {product.tagsOnDescription.length ? (
            <div className={styles.tags}>
              {product.tagsOnDescription?.map((tag, index) => (
                <div
                  key={index}
                  className={`${styles.tagItem} ${
                    tag.length > 2 ? styles.tagItemRed : null
                  }`}
                >
                  {tag}
                </div>
              ))}
            </div>
          ) : null}
          <div className={styles.rating}>
            <div className="flex">
              <Image
                src="/star-darkgray.svg"
                alt="star"
                width="12"
                height="12"
              />
              {product.rating.toFixed(1)}
            </div>
          </div>
        </div>

        {product.preface && (
          <div className={styles.prefaceContainer}>
            {product.prefaceImageUrl && (
              <Image
                className={styles.prefaceImage}
                src={product.prefaceImageUrl}
                alt={product.title}
                width={14}
                height={14}
                loading="lazy"
              />
            )}
            <>{product.preface}</>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
