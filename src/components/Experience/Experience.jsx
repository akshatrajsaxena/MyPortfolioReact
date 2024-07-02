import React from "react";

import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const skills = [
    { title: "HTML", imageSrc: "skills/html.png" },
    { title: "CSS", imageSrc: "skills/css.png" },
    { title: "React", imageSrc: "skills/react.png" },
    { title: "Node", imageSrc: "skills/node.png" },
    { title: "Java", imageSrc: "skills/java.png" },
    {title : "Python", imageSrc: "skills/python.png"},
    { title: "Figma", imageSrc: "skills/figma.png" },
    { title: "SQL", imageSrc: "skills/sql.png", },
    { title: "C/CPP", imageSrc: "skills/cpp.png" },
  ];

  const history = [
    
    {
      role: "Competitive Programmer",
      organisation: "Codeforces",
      startDate: "July 2022",
      endDate: "Present",
      experiences: ["Posted blogs for beginners", "Participated in many contests"],
      imageSrc: "achievements/codeforces.png"
    },
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title}
                  className={skill.imageSrc === "skills/sql.png" ? styles.sqlImage : "height-100 width-100 border-radius-50 overflow-hidden"}
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};