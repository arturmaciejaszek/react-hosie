import * as React from 'react';
import * as styles from './Welcome.css';
import Logo from '../Logo/Logo';

const Welcome = () => {
  return (
    <div className={styles.Welcome}>
      <Logo />
      <h1 className={styles.Title}>Hosie</h1>
      <div className={styles.BreakLine} />
      <h4 className={styles.Details}>
        The best Hostess & Models Agency in Poland
      </h4>
    </div>
  );
};

export default Welcome;
