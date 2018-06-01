import * as React from 'react';
import * as styles from './Background.css';

// import * as jpg from '../../assets/smile.jpg';
// import * as webp from '../../assets/smile.webp';

type BackGroundProps = {
  Y: number;
};

const Background = (props: BackGroundProps) => {
  return (
    <div
      className={styles.Background}
      style={{
        // backgroundImage: `linear-gradient(162deg,
        //     rgba(2,0,36,0.9) 0%,
        //     rgba(10,10,121,0.8) 55%,
        //     rgba(0,212,255,1) 100%), url(${webp})`,
        transform: `translate3d(0, ${props.Y * -0.2}px, 0)`
      }}
    />
  );
};

export default Background;
