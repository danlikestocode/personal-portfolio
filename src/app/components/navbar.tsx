import { FC } from "react";
import styles from "./navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>test left side</div>
      <div className={styles.navbarRight}>test</div>
    </div>
  );
};

export default Navbar;
