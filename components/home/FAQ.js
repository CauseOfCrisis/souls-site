import styles from "@styles/home/FAQ.module.css";

const Bullet = ({ heading, description }) => {
  return (
    <div className={styles.bullet}>
      <h4>{heading}</h4>
      <p>{description}</p>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 id="faq">Frequently Asked Questions</h3>
        <Bullet
          heading="How do I get a soul?"
          description="After 10pm UTC you should be able to make your own from our website for just .25 $SOL!
        Scroll back up to the top of this page and when the timer hits 0, click on the mint button to visit our mint page. The process is pretty intuitive after that, just make sure there's at least an extra .05 $SOL in your wallet to cover fees. You'll also be able to pickup souls second-hand on marketplaces, we'll have more details on that later!"
        />
        <Bullet
          heading="What can my soul do?"
          description="Right now your soul is just looking pretty and it's a medium to support our story, but as we continue to collab with smaller creators in this space your soul will qualify you for rewards whether that be a raffle entry or a direct airdrop. We want to expand souls far beyond that, it's unfair to make big promises out the gate with nothing to show for it. We've lowered minting prices to compensate, so if you choose to support us now the risk is minimal 😁"
        />
        <Bullet heading="What happens after launch?" description="Same thing as always, but MORE. More content, more engaging with the community, and slowly but surely building the souls brand. Since all of this is too much work for any two people, let alone college students we'll be focusing on expanding the team and finding mentorship to get the ball rolling." />
      </div>
    </div>
  );
};

export default FAQ;
