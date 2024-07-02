import React from 'react';
import styles from './SocialMediaLinks.module.css';
import { getImageUrl } from '../../utils';

export const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={getImageUrl("social/facebook.png")} alt="Facebook" className={styles.icon} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={getImageUrl("social/twitter.png")} alt="Twitter" className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={getImageUrl("social/linkedin.png")} alt="LinkedIn" className={styles.icon} />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <img src={getImageUrl("social/github.png")} alt="GitHub" className={styles.icon} />
      </a>
    </div>
  );
};
