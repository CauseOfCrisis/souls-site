import styles from "@styles/home/Vision.module.css";

import cyborgImg from "@public/cyborg.png";

import Image from "next/image";

const Vision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <h3 className={styles.heading} id="vision">
          Our Vision
        </h3>
        <div className={styles.icon}>
          <Image src={cyborgImg} />
        </div>
      </div>
      <div className={styles.content}>
        <p>
          This project has evolved well beyond "becoming millionaires". The journey has been the most valuable thing that's ever happened for us. The people we've met have been extremely inspiring, and building that circle and creating lasting relationships is so much much more important than material wealth. This collection will serve as the foundation for the future, as we continue to get involved in this space and keep building.
        </p>
      </div>
    </div>
  );
};

export default Vision;
