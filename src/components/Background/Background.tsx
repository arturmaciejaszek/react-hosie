import * as React from 'react';
import * as styles from './Background.css';

import * as jpg from '../../assets/smile.jpg';
import Parallax from '../../hoc/Parallax/Parallax';
// import * as webp from '../../assets/smile.webp';

// its impossible to fallback from it to jpg as every check possible is asynchronous so i would have to create smart component for this
// try to figure something else
const Background = () => {
  return (
    <div
      className={styles.Background}
      style={{
        backgroundImage: `linear-gradient(162deg,
            rgba(2,0,36,0.9) 0%,
            rgba(10,10,121,0.8) 55%,
            rgba(0,212,255,1) 100%), url(${jpg})`
      }}
    />
  );
};

export default Parallax(Background);
