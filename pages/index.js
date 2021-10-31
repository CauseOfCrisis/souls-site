import styles from "@styles/home/Page.module.css";

import Hook from "@components/home/Hook.js";
import Story from "@components/home/Story.js";
import Vision from "@components/home/Vision.js";
import Roadmap from "@components/home/Roadmap.js";
import FAQ from "@components/home/FAQ.js";
import Team from "@components/home/Team.js";
import Footer from "@components/global/Footer.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hook />
      <Story />
      <Vision />
      <Roadmap />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}
