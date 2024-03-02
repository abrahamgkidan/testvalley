import Image from "next/image";
import React from "react";

import styles from "./shortcut-list.module.css";
import RegularList from "./regular-list";

interface Shortcut {
  id: number;
  title: string;
  imageUrl: string;
  mobileImageUrl: string;
}

const ShortcutItem: React.FC<{ shortcut: Shortcut }> = ({ shortcut }) => {
  return (
    <div className={styles.shortcut}>
      <Image
        src={shortcut.imageUrl}
        srcSet={`${shortcut.mobileImageUrl} 480w, ${shortcut.imageUrl} 900w`}
        alt={shortcut.title}
        layout="responsive"
        loading="lazy"
        width={62}
        height={62}
        className={styles.image}
      />
      <div className={styles.name}>{shortcut.title}</div>
    </div>
  );
};

interface ShortcutListProps {
  shortcuts: Shortcut[];
}

const ShortcutList: React.FC<ShortcutListProps> = ({ shortcuts }) => {
  return (
    <div className={styles.container}>
      <RegularList
        items={shortcuts}
        itemComponent={ShortcutItem}
        resourceName="shortcut"
      />
    </div>
  );
};

export default ShortcutList;
