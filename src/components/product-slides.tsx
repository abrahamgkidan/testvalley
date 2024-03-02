import React from "react";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Parallax,
  Scrollbar,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";
import "swiper/css/autoplay";

import { Product } from "@/types";
import ProductItem from "./product-item";

import styles from "./collection-slides.module.css";

interface ProductSlidesProps {
  items: Product[];
}

const ProductSlides: React.FC<ProductSlidesProps> = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, Parallax, Autoplay]}
      // navigation
      parallax
      autoplay={true}
      scrollbar={{ draggable: true }}
      slidesPerView={items.length >= 4 ? 4 : items.length}
      spaceBetween={10}
      className="swiper-container"
    >
      {items.map((item, index) => (
        <SwiperSlide className={styles.slide} key={index}>
          <ProductItem product={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlides;
