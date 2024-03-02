import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

const Header: React.FC = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image
            src="/logo-new.svg"
            alt="Testvalley"
            className={styles.logo}
            width={0}
            height={0}
          />
          <div className={styles.categoryMenu}>category</div>
          <div className={styles.searchBar}>
            <Image
              src="/search.svg"
              alt=""
              className={styles.searchIcon}
              width={20}
              height={20}
            />
            <input
              type="search"
              placeholder="If you're wondering whether to buy it or not, search for it!"
              className={styles.searchInput}
            />
          </div>
        </div>
        <div className={styles.rightDesktop}>
          <button title="home">
            <Image src="/home-event.svg" alt="" width={28} height={28} />
          </button>
          <Image
            className={styles.bar}
            src="/vertical-bar.svg"
            alt=""
            width={1}
            height={14}
          />
          <button>Login / Register</button>
        </div>
        <div className={styles.rightMobile}>
          <Image
            src="/bell_default.svg"
            alt=""
            className={styles.iconMobile}
            width={48}
            height={48}
          />
          <Image
            src="/search_new.svg"
            alt=""
            className={styles.iconMobile}
            width={42}
            height={44}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
