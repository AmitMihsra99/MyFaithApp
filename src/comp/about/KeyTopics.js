// KeyTopics.js

import React from "react";
import styles from "./About.module.css";

const KeyTopics = ({ keyTopicsContent }) => {
  return (
    <div className={styles.keySction}>
      <h2>Key topics covered</h2>
      <div className={`${styles.section} ${styles["Kye-topies"]}`}>
        <ul className={`${styles.customlisttik}`}>
          <li className={`${styles.customlistitem}`}>
            <span className={styles.keypoint}>10 written and audio sessions</span> guiding you in decoding the language of numbers so that you can easily receive their insights and messages.
          </li>
          <li className={`${styles.customlistitem}`}>
            <span className={styles.keypoint}>Intuitive exercises and homework</span> walk you through the energies and values of numbers and number sequences so you can become your own authority.
          </li>
          <li className={`${styles.customlistitem}`}>
            <span className={styles.keypoint}>Handy reference</span> to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.
          </li>
          <li className={`${styles.customlistitem}`}>
            <span className={styles.keypoint}>Expert techniques</span> for manifestation offer simple ways to use numbers to co-create with the universe.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeyTopics;
