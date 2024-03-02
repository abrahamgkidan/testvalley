"use client";

import Shortcuts from "@/containers/shortcuts";
import Banners from "@/containers/banners";

import styles from "./page.module.css";
import Collections from "@/containers/collections";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.bannersContainer}>
          <Banners />
        </div>
        <div className={styles.shortcutsContainer}>
          <Shortcuts />
        </div>
        <div className={styles.collectionsContainer}>
          <Collections />
        </div>
      </div>
    </div>
  );
}
