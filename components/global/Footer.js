import styles from "@styles/global/Footer.module.css";

import TwitterIcon from "@components/global/TwitterIcon.js";
import DiscordIcon from "@components/global/DiscordIcon.js";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <a href="https://twitter.com/home" className={styles.twitter}>
        <TwitterIcon />
      </a>
      <a href="https://discord.gg/jnEgJdtWNH" className={styles.discord}>
        <DiscordIcon />
      </a>
    </footer>
  );
};

export default Footer;