import React from "react";

import styles from "./collection-slides.module.css";

import { Product } from "@/types";
import ProductSlides from "./product-slides";
import ProductList from "./product-list";

import { useResponsive } from "@/hooks/useResponsive";

interface CollectionSlidesProps {
  slides: {
    id: number;
    title: string;
    subtitle: string;
    items: Product[];
  }[];
}

const CollectionSlides: React.FC<CollectionSlidesProps> = ({ slides }) => {
  const { isMobile } = useResponsive();

  return (
    <>
      {slides.map((slide, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.description}>
            <h6 className={styles.title}>{slide.title}</h6>
            <p className={styles.subtitle}>{slide.subtitle}</p>
          </div>
          {isMobile ? (
            <ProductList items={slide.items} />
          ) : (
            <ProductSlides items={slide.items} />
          )}
        </div>
      ))}
    </>
  );
};

export default CollectionSlides;
{
  /* {slide.items.map((item) => (
  <div key={item.id}>
    <h2>{item.title}</h2>
    <Image
      src={item.imageUrl}
      alt={item.title}
      width={0}
      height={0}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div> */
}
