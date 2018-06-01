import * as React from 'react';
import * as styles from './Experience.css';
import BreakLine from '../UI/BreakLine/BreakLine';

const Experience = () => {
  return (
    <section className={styles.Experience}>
      {/* <div className={styles.Image} /> */}
      <h1>Personalized Experience</h1>
      <BreakLine />
      <p>
        Visit our database to check who is available to work at your event. You
        can select models who suit your need best and ask for them in the quote
        inquiry.
      </p>
    </section>
  );
};

export default Experience;
