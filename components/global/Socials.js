import styles from "@styles/global/Socials.module.css"

import Image from "next/image";

import DiscordIcon from "@components/global/DiscordIcon.js"
import TwitterIcon from "@components/global/TwitterIcon.js"


const Item = ({ icon, link }) => {
  return (
    <li>
      <a href={link}>
        {icon}
      </a>
    </li>
  );
};

const Socials = () => {
  return (
    <ul className={styles.container}>
      <Item icon={<TwitterIcon />} link="https://twitter.com/home" />
      <Item icon={<DiscordIcon />} link="https://discord.gg/jnEgJdtWNH" />
    </ul>
  );
};

export default Socials;