import React from "react";
import { Line } from 'rc-progress';
import randomcolor from 'randomcolor';

import styles from './about.module.css';

const SKILLS = [
  {
    name: 'HTML5',
    rate: '75',
  },
  {
    name: 'CSS3',
    rate: '60',
  },
  {
    name: 'JavaScript',
    rate: '70',
  },
  {
    name: 'React and Redux',
    rate: '60',
  },
  {
    name: 'NodeJS',
    rate: '50'
  },
  {
    name: 'MongoDB',
    rate: '50'
  },
];

class Progress extends React.Component {
  state = {
    percent: 0,
    color: randomcolor()
  }

  componentDidMount() {
    this.increase();
  }

  increase = () => {
    const percent = this.state.percent + 1;
    if (percent >= this.props.skill.rate) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increase, 15);
  }

  render() {
    return (
      <div className={styles.progress}>
      <h5>{this.props.skill.name}</h5>
      <Line strokeWidth="2" percent={this.state.percent} strokeColor={this.props.color} />
    </div>
    )
  }
}

export default class About extends React.Component {
  render() {
    return (
      <section className={styles.about}>
        <div className={styles["about-text"]}>
          <span>About me</span>
          <p>Nice to meet you! I'm Duy. I'm from Vietnam. I have been studying in Finland for more than 4 years at Turku University of Applied Sciences. I love to talk about front end and web development.</p>
          <span>Any hobbies?</span>
          <p>I'm a learner, a gamer, a basketballer and a reader</p>
        </div>
        
        <div className={styles.skills}>    
          <h1>Skills</h1>
          {
            SKILLS.map(skill => (
              <Progress skill={skill} key={skill.name} color={randomcolor()}/>
            ))
          }
        </div>
      </section>
    )
  }
};
