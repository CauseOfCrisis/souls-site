import styles from "@styles/global/Header.module.css";

import MainMenu from "@components/global/MainMenu.js";
import Socials from "@components/global/Socials.js";

const Header = () => {
  return (
    <header className={styles.container}>
      <MainMenu />
      <Socials />
    </header>
  );
};

export default Header;
