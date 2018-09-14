import React from "react";
import styles from "./index.module.css";
import Typist from "react-typist";

export default () => (
  <div className={styles.container}>
    <Typist cursor={{ show: false }} startDelay={500} avgTypingDelay={70}>
      <span className={styles.mainText}>
        Hello, I am Duy Le. I am a softwareeeeeeeeeee
      </span>
      <Typist.Delay ms={1500} />
      <span className={styles.mainText}> Oops! 😨</span>
      <Typist.Backspace count={19} delay={1000} />
      <Typist.Delay ms={700} />
      <span className={styles.mainText}> developer.</span>
      <br />
      <br />
      <h1 className={styles.mainText}>Welcome to my website!</h1>
      <br />
      <h1 className={styles.mainText}>😄😄😄</h1>
    </Typist>
  </div>
);
