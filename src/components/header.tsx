import React from "react";
import styles from "./header.module.css";

const Header: React.FC = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/logo-new.svg" alt="Testvalley" className={styles.logo} />
          <div className={styles.categoryMenu}>category</div>
          <div className={styles.searchBar}>
            <img src="/search.svg" alt="" className={styles.searchIcon} />
            <input
              type="search"
              placeholder="If you're wondering whether to buy it or not, search for it!"
              className={styles.searchInput}
            />
          </div>
        </div>
        <div className={styles.rightDesktop}>
          <button title="home">
            <img src="/home-event.svg" alt="" />
          </button>
          <img className={styles.bar} src="/vertical-bar.svg" alt="" />
          <button>Login / Register</button>
        </div>
        <div className={styles.rightMobile}>
          <img src="/bell_default.svg" alt="" className={styles.iconMobile} />
          <img src="/search_new.svg" alt="" className={styles.iconMobile} />
        </div>
      </div>
    </header>
  );
};

export default Header;
