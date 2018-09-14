import React from "react";
import styles from './about.module.css';

const SKILLS = [
  {
    name: 'HTML5',
    rate: '70%'
  },
  {
    name: 'CSS3',
    rate: '60%'
  },
  {
    name: 'JavaScript',
    rate: '70%'
  },
  {
    name: 'React and Redux',
    rate: '60%'
  },
  {
    name: 'NodeJS',
    rate: '50%'
  },
  {
    name: 'MongoDB',
    rate: '50%'
  },
];

const Progress = ({ skill }) => {
  return (
    <div className={styles.progress}>
      <h5>{skill.name}</h5>
      <div className={styles.progressbar}>
        <div style={{ width: skill.rate }}>{skill.rate}</div>
      </div>
    </div>
  )
}

export default () => (
  <section className={styles.about}>
    <div className={styles.container}>
      <h1>About me</h1>
      <p>Nice to meet you! I'm Duy. I'm from Vietnam. I have been studying in Finland for more than 4 years at Turku University of Applied Sciences. I love to talk about front end and web developement.</p>
      <h3>Any hobbies?</h3>
      <p>I'm a learner, a gamer, a basketballer and a reader</p>
    </div>
    
    <div className={styles.skills}>    
      <h1>Skills</h1>
      {
        SKILLS.map(skill => (
          <Progress skill={skill} key={skill.name} />
        ))
      }
    </div>
  </section>
);
