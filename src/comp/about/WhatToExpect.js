// WhatToExpect.js

import React from "react";
import styles from "./About.module.css";

const WhatToExpect = () => {
  return (
    <div className={`${styles.section} ${styles["what-to-expect-content"]}`}>
      <h2>What to expect from the course</h2>
      <ul className={`${styles.customlisttik}`}>
        <li className={`${styles.customlistitem}`}>Learn to manage your relationships</li>
        <li className={`${styles.customlistitem}`}>Better communication</li>
        <li className={`${styles.customlistitem}`}>Time management</li>
        <li className={`${styles.customlistitem}`}>Forgiveness</li>
      </ul>
    </div>
  );
};

export default WhatToExpect;
