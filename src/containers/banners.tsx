// "use client";

import React, { useState, useEffect } from "react";
import BannerSlides from "@/components/banner-slides";
import { Banner } from "@/types";

const Banners: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(
          `https://api.testvalley.kr/main-banner/all?`
        );
        const data = await response.json();
        const bannersData = data.map(
          (banner: {
            id: number;
            title: string;
            pcImageUrl: string;
            mobileImageUrl: string;
          }) => ({
            title: banner.title,
            imageUrl: banner.pcImageUrl,
            mobileImageUrl: banner.mobileImageUrl,
          })
        );

        setBanners(bannersData);
      } catch (e) {
        // console.error("Error fetching banners:", error);
      }
    };
    fetchBanners();
  }, []);

  return <BannerSlides slides={banners} />;
};

export default Banners;
