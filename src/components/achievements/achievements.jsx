import React from "react";
import styles from "./Achievements.module.css";
import { getImageUrl } from "../../utils";

export const Achievements = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.content}>
        <ul className={styles.achievementsItems}>
          <li className={styles.achievementsItem}>
          <img src={getImageUrl("achievements/React_icon.png")} alt="React icon" className={styles.ReactImage} />
            <div className={styles.achievementsItemText}>
              <h3>React Developer</h3>
              <p>
                Being a Fanatic of React, I have built multiple projects using React and its ecosystem. I have also contributed to open-source projects and have written articles on React development. In fact, the website you are currently viewing is built using React.
              </p>
            </div>
          </li>
          <li className={styles.achievementsItem}>
            <img src={getImageUrl("achievements/codeforces.png")} alt="Trophy icon" className={styles.codeforcesImage} />
            <div className={styles.achievementsItemText}>
              <h3 style={{ color: "#008000" }}>Codeforces Pupil</h3>
              <p>
                Achieved the Codeforces Pupil title with consistent performance in competitive programming contests. With Constant dedication and daily practise, I have solved over 250+ problems and my next goal is to reach the Expert level.
              </p>
            </div>
          </li>
          <li className={styles.achievementsItem}>
          <img src={getImageUrl("achievements/blockchain.png")} alt="Trophy icon" className={styles.blockchainImage} />
            <div className={styles.achievementsItemText}>
              <h3>Top Blockchain Developer</h3>
              <p>
                Enthusiastic about blockchain technology and its applications. I have completed multiple courses on blockchain development and have built projects on Ethereum and Binance Smart Chain. I have also contributed to the blockchain community by writing articles on Medium and Dev too.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
