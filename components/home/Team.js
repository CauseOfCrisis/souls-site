import styles from "@styles/home/Team.module.css";

import twitterIcon from "@public/twitter.png";
import minnow from "@public/minnow.png";
import chath from "@public/chath.png";
import quarterchap from "@public/quarterchap.png";

import Image from "next/image";

import TwitterIcon from "@components/global/TwitterIcon.js";

const Member = ({ img, name, handle, role, twitter }) => {
  return (
    <div className={styles.member}>
      <div className={`${styles.pfp} ${styles[name]}`}>
        <div className={styles.pfpImage}>
          <Image src={img} />
        </div>
      </div>
      <h5 className={styles.name}>{name}</h5>
      <h6 className={styles.role}>{role}</h6>
      <a href={twitter} className={styles.handle}>
        <TwitterIcon />
        <p>{handle}</p>
      </a>
    </div>
  );
};

const Team = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>The Souls Behind Souls</h3>
      <div className={styles.members}>
        <Member
          name="chath"
          img={chath}
          handle="@crypto_chath"
          role="Artist"
          twitter="https://twitter.com/crypto_chath"
        />
        <Member
          name="minnow"
          img={minnow}
          handle="@CryptoMinnows"
          role="Project Manager"
          twitter="https://twitter.com/CryptoMinnows"
        />
        <Member
          name="QuarterChap"
          img={quarterchap}
          handle="@QuarterChap"
          role="Destitute"
          twitter="https://twitter.com/QuarterChap"
        />
      </div>
    </div>
  );
};

export default Team;
