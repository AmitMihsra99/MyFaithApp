// AboutContent.js

import React from "react";
import styles from "./About.module.css";

const AboutContent = ({ aboutContent }) => {
  return (
    <div className={styles.aboutcontent}>
      <h1>About the Course</h1>
      <p dangerouslySetInnerHTML={{ __html: aboutContent }} style={{ padding: 0 }}></p>
      <p dangerouslySetInnerHTML={{ __html: aboutContent }} style={{ padding: 0 }}></p>
      <p dangerouslySetInnerHTML={{ __html: aboutContent }} style={{ padding: 0 }}></p>
    </div>
  );
};

export default AboutContent;
