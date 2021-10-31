import styles from "@styles/home/Roadmap.module.css";

import sign from "@public/sign.png";

import Image from "next/image";

import Space from "@components/global/Space.js";

const Bullet = ({ icon, header, description }) => {
  return (
    <div className={styles.bulletContainer}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.textContainer}>
        <h4>{header}</h4>
        {description}
      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <h3 className={styles.heading} id="roadmap">
          Roadmap
        </h3>
        <p className={styles.description}>What happens when souls is live?</p>
        <Bullet
          icon={<p>🍬</p>}
          header="Mint"
          description={
            <p>
              Our mint goes live <b>October 30th, 8pm UTC</b>. There will be a
              total of <b>5000 souls</b> minting at <b>.25 $SOL</b> each. For
              reference I paid 6 times that on transaction fees selling my
              shitcoins on Ethereum so I could afford to upload the collection.
              We're choosing a low mint price to justify higher <b>10%</b>{" "}
              royalties
            </p>
          }
        />
        <Bullet
          icon={<p>🏚️</p>}
          header="Escape Poverty"
          description={
            <p>
              One of our biggest goals is to get QuarterChap his life back.
              Covid took his job at the oil rig, the motor on his truck blew up
              after 2 weeks of purchase and insurance wouldnt cover it and
              warranty was voided (leaving him 50k in debt), and now he's
              working 12 hours a day 7 days a week wading through sewage just to
              make ends meet... and still working on souls!
              <br />
              <br />
              With souls we have an opportunity to turn all of that around and
              make history. We've spent every waking moment of the past 2 months
              to see it through. And we've spent a good amount of money on it
              too 😅.
            </p>
          }
        />
        <Bullet
          icon={<p>📹</p>}
          header="Souls Logs"
          description={
            <p>
              The most valuable part of this project and this team is our story,
              it's just unmatched. So much crazy shit has happened in just the
              past two months that we haven't been able to share properly.
              <ul>
                <li>
                  I wrote a bot to do my homework so I had time to work on souls
                </li>
                <li>
                  QuarterChap got stranded at an airport in Louisville and had
                  to scalp trade with his paycheck to make loan payments
                </li>
                <li>I pitched the project to missionaries</li>
              </ul>
              The list goes on...
              <br />
              <br />
              Now that we'll have some time on our hands, we want to be much
              more active with sharing our story by frequently hosting spaces,
              keeping a journal, and making videos like the intro that probably
              led you here.
              <br />
              <br />
            </p>
          }
        />
        <Bullet
          icon={<p>🎨</p>}
          header="Supporting Creators"
          description={
            <p>
              One of the most rewarding parts of this journey so far has been
              meeting other souls. I've had the incredible opportunity to speak
              with diverse people all across the world. Artists, musicians,
              single-mothers, developers, content creators, influencers, all
              with their own hopes and dreams.
              <br />
              <br />
              As underdogs ourselves, we want to share that success and focus on
              giving other people the same opportunity the cosmos bestowed upon
              us by getting hands-on, working on them with their projects and
              making collabs to simultaneously rewards our souls.
            </p>
          }
        />
        <Bullet
          icon={<p>🏆</p>}
          header="Competitions"
          description={
            <p>
              We've only held two art competitons to date, but we've watched it
              make meaningful impact on people's lives. Both for the recipients
              and the participants. <br />
              <br />We want to keep scaling competitons, getting more people involved, and giving artists the support and notoriety they need to launch their careers in the space.
            </p>
          }
        />
      </div>
      <h4 className={styles.beyondHeading}>🚀 Beyond</h4>
      <div className={styles.beyondContainer}>
        <Space />
        <div className={styles.UIwrapper}>
          <p>Our story doesn't end here. We're not sure what the future holds in store for us, but we're going to keep throwing ourselves at this space, building this community and expanding the narrative, as we always have.</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
