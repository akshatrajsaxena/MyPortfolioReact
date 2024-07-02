import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <a href="https://www.linkedin.com/in/akshat-raj-saxena-849423258/" style={{ color: 'white', textDecoration: 'underline' }}> Akshat </a></h1>
        <h3 className={styles.subtitle}>I'm a Computer Science Undergraduate at <a href="https://www.iiitd.ac.in/" style={{ color: 'white', textDecoration: 'underline' }}>IIIT Delhi</a> who specializes in Web Development and Data Structures & Algorithms. I actively participates in coding contests related to Competitive programming. I like to build cool Web Projects and contribute towards well-being of online community. I'm a web developer based in Delhi. I specialize in building websites. My Interests are Competitive Programming and Web3. </h3>
        <p className={styles.description}>

        </p>
        <a href="mailto:akshat22054@iiitd.ac.in" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile-pic(1).png")}
        alt="Hello Developers!"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
