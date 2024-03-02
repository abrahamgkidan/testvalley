import React, { useEffect, useState } from "react";
import CollectionSlides from "@/components/collection-slides";

interface Collection {
  id: number;
  title: string;
  imageUrl: string;
  priceRange: string;
}

const Collections: React.FC = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(
          "https://api.testvalley.kr/collections?prearrangedDiscount"
        );
        const data = await response.json();
        const newCollections = data.items
          .filter((d: any) => d.items.length)
          .map((d: any) => ({
            title: d.title || d.productName,
            subtitle: d.subtitle || d.description,
            items: [
              ...d.items.map((m: any) => ({
                id: m.publication?.productId,
                title: m.publication?.title || m.publication?.productName,
                subtitle: m.publication?.description,
                imageUrl:
                  m.publication?.media?.[0]?.uri ||
                  m.publication?.prefaceIconUrl,
                rating: m.publication?.rating,
                brand: m.publication?.brandName,
                price: m.publication?.priceInfo?.price,
                discount: m.publication?.priceInfo?.discountRate,
                tagsOnImage: m.publication?.tagsOnImage,
                tagsOnDescription: m.publication?.tagsOnDesc,
                preface: m.publication?.preface,
                prefaceImageUrl: m.publication?.prefaceIconUrl,
              })),
            ],
          }));
        setCollections(newCollections);
      } catch (error) {
        // console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  return <CollectionSlides slides={collections} />;
};

export default Collections;
