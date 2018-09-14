import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './contact.module.css';

export default () => (
  <section className={styles.contact}>
    <h1>WANNA GET IN TOUCH??</h1>
    <p>Please feel free to contact me with those social media!</p>
    <div className={styles.social}>
      <div className={styles.icon}><a href="mailto:lenguyenduy85@gmail.com" target="_blank"><FontAwesomeIcon icon={faGooglePlusSquare} size='2x' /></a></div>
      <div className={styles.icon}><a href="http://github.com/duyn55" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' /></a></div>
      <div className={styles.icon}><a href="https://www.linkedin.com/in/duy-le-nguyen-945b13b7/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a></div>
    </div>
  </section>
);
