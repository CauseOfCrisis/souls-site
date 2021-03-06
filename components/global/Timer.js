import styles from "@styles/global/Timer.module.css";

import { useState } from "react";

const Timer = () => {
  const endDate = new Date("November 1, 2021").getTime() - 25200000;
  let distance;

  let datePassed = false;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const clickHandle = () => {
    document.location.href = "https://spookysoulsmint.com/"
  }

  setInterval(() => {
    distance = endDate - Date.now();
    setDays(Math.floor(distance / (24 * 60 * 60 * 1000)));
    setHours(Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (60 * 1000)) / 1000));
  }, 1000);

  return (
    <p className={styles.timer}>
      {/*{days}:{hours}:{minutes}:{seconds}*/}
      {!datePassed && <button onClick={clickHandle} className={styles.mintButton}>Mint</button>}
    </p>
  );
};

export default Timer;
