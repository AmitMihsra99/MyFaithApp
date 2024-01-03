// AboutSection.js

import React from "react";
import AboutContent from "./AboutContent";
import WhatToExpect from "./WhatToExpect";
import KeyTopics from "./KeyTopics";
import styles from "./About.module.css";
import courseData from "../json/data.json";

const AboutSection = () => {
  const aboutContent = courseData.course.about.html_content;
  //const whatToExpectContent = courseData.course.what_to_expect.html_content;
  const keyTopicsContent = courseData.course.key_topics.html_content;

  return (
    <div id="about" className={styles.aboutsection}>
      <AboutContent aboutContent={aboutContent} />

      <WhatToExpect />

      <KeyTopics keyTopicsContent={keyTopicsContent} />
    </div>
  );
};

export default AboutSection;
