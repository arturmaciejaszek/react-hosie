import * as React from 'react';
import * as styles from './Pointer.css';

import * as pointer from '../../../assets/pointer.svg';

type PointerProps = {
  clicked: any;
};

const Pointer = (props: PointerProps) => {
  return (
    <div className={styles.Pointer} onClick={props.clicked}>
      <img src={pointer} alt="pointer" />
    </div>
  );
};

export default Pointer;
