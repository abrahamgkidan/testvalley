import React from "react";
import Image from "next/image";
// Import Swiper React components
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import styles from "./banner-slides.module.css";
import { Banner } from "@/types";
import { useResponsive } from "@/hooks/useResponsive";

interface BannerSlidesProps {
  slides: Banner[];
}

const BannerSlides: React.FC<BannerSlidesProps> = ({ slides }) => {
  const { isMobile } = useResponsive();

  return (
    <div className={styles.slidesContainer}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Parallax, Autoplay]}
        navigation={isMobile ? false : true}
        parallax
        autoplay={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        spaceBetween={20}
        initialSlide={1}
        className={styles.swiperContainer}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <Image
              className={styles.slideImage}
              src={slide.imageUrl}
              // srcSet={
              //   `${slide.mobileImageUrl} 600w, ${slide.imageUrl} 1200w` as any
              // }
              alt={slide.title}
              loading="lazy"
              width={0}
              height={0}
              sizes="100vw,100vh"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlides;
