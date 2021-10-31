import styles from "@styles/home/Hook.module.css";

import Image from "next/image";

import soulImg from "@public/souls.png";

import Header from "@components/global/Header.js";
import MoonScene from "@components/global/MoonScene.js";
import Timer from "@components/global/Timer.js";
import Logo from "@components/global/Logo.js";

const Arrow = () => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      className={styles.arrow}
    >
      <path
        d="M10.59 0.589966L6 5.16997L1.41 0.589966L0 1.99997L6 7.99997L12 1.99997L10.59 0.589966Z"
        fill="white"
      />
    </svg>
  );
};

//I need to display stuff on TOP of the moon somehow.
//I guess I wrap everything in a UI container then position it as absolute!

const Hook = () => {
  return (
    <div className={styles.container} id="hook">
      <div className={styles.uiContainer}>
        <Header />
        <Timer />
        <p className={styles.description}>
          A stranger messaged me begging for spare $ETH...
          <br />
          now we’re making spooky ghosts to chase our dreams.
        </p>

        <a href="#logo" className={styles.logoContainer} id="logo">
          <Logo />
          <Arrow />
        </a>
      </div>
      <div className={styles.scene}>
        <MoonScene />
      </div>

    <div className={styles.soul}>

      <Image src={soulImg} layout="fill" objectFit="contain" objectPosition="50% botom" priority />
    </div>

      <video width="70%" controls>
        <source src="spooky-sols-intro.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Hook;
