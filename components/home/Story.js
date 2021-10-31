import styles from "@styles/home/Story.module.css";

import Image from "next/image";

import chath from "@public/chath.png";
import minnow from "@public/minnow.png";
import quarterchap from "@public/quarterchap.png";

import krillin from "@public/krillin.png";

//Ok let's think on how this is going to work...
//Constant size, then the margin around adjusts.

const Story = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header} id="story">
        Our Story
      </h2>

      <div className={`${styles.shotInTheDark} ${styles.chapter}`}>
        <div className={styles.content}>
          <h3>A Shot in the Dark</h3>
          <p>
            Last month I got a message from a random stranger begging for spare
            $ETH. He had lost everything and was asking for just enough to
            scrape by.
          </p>
          <p>
            <i>I laughed at him, and told him to get a job.</i>
          </p>
          <p>
            For whatever reason we kept talking, and soon became friends. We
            were kindred spirits; two kids who wanted more out of life and who
            had the determination to make it happen.
          </p>
          <p>
            A couple hours later we go to talking about NFTs. Projects made in a
            week were selling for millions of dollars... Hell, even we could do
            better than that. Fuck it, we can! We stayed up all night laughing
            our asses off, schemeing on becoming overnight millionaires. On that
            night, Spooky Souls was born.
          </p>
        </div>
        <div className={styles.honorary}>
          <div className={styles.honoraryImg}>
            <Image src={quarterchap} />
          </div>
        </div>
      </div>

      <div className={`${styles.dutyCalls} ${styles.chapter}`}>
        <div className={styles.honorary}>
          <div className={styles.honoraryImg}>
            <Image src={chath} />
          </div>
        </div>
        <div className={styles.content}>
          <h3>Duty Calls</h3>
          <p>
            We were short an artist, so in the morning I gave my buddy at
            university a call. I pitched to him that I was starting a business
            with a stranger that begged me for money and we were out to make a
            million bucks selling drawings of ghosts. Without hesitation he said
            yes.
          </p>
          <p>
            The next day we all hopped on our first call together and got to
            work, the chemistry was unmatched. By the end of the night we had our first soul.
          </p>
          <div className={styles.krillin}>
            <Image src={krillin} />
          </div>
          <p>
            In retrospect I don't know what the hell we were thinking, but in that moment
            I could see our future. What if this could actually work? What if we could make this fantasy real? How many lives could we change? This wasn't a joke anymore.
          </p>
        </div>
      </div>

      <div className={`${styles.journey} ${styles.chapter}`}>
        <div className={styles.content}>
          <h3>The Journey</h3>
          <p>A LOT has happened since that day.</p>
          <p>We've come from nothing, and it's finally all coming to life. We've been extremely fortunate with meeting the right people at the right time, but nothing was handed to us. This project has been some of the most fun we've ever had, but it's also brought us to our knees and we're sacrificing everything to see it through. </p>
          <p>I gave up my entire first semester of college to make this happen and have 0 IRL friends, and invested about $6k as a broke-ass student. I had to write a bot to do ~60% of my homework just to find the time to work on souls</p>
          <p>QuarterChap was working on souls after 12 hour days wading through sewage working for a dredging company, and still managed to put us in front of the right people</p>
          <p>Chath drew about 80% of the art by hand, painstakingly tracing over it in illustrator until we broke and bought and IPad on credit just two weeks ago. He's done an incredible job despite no formal experience, and we could not be more confident in the quality of the collection. Did I mention he's also a full-time architecture student?</p>
          <p>Despite it all, we've come this far and we're still going. We're here to prove that anybody from anywhere, in the unlikliest of places, will find success chasing their dreams. So long as you have unmatched passion, determination, and the right team, it will happen for you. Needless to say, <i><b>these are souls from real people.</b></i></p>
        </div>
        <div className={styles.honorary}>
          <div className={styles.honoraryImg}>
            <Image src={minnow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
