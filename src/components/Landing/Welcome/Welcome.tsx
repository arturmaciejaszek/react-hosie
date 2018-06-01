import * as React from 'react';
import * as styles from './Welcome.css';
import Logo from '../../Logo/Logo';
import BreakLine from '../../UI/BreakLine/BreakLine';

const Welcome = () => {
  return (
    <div className={styles.Welcome}>
      <Logo height="10rem" width="10rem" />
      <h1 className={styles.Title}>Hosie</h1>
      <BreakLine color="#fff" />
      <h4 className={styles.Details}>
        The best Hostess & Models Agency in Poland
      </h4>
    </div>
  );
};

export default Welcome;
