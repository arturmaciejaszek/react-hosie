import * as React from 'react';
import * as styles from './Backdrop.css';

type BackdropProps = {
  show: boolean;
  clicked: any;
};

const Backdrop = (props: BackdropProps) => {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked} />
  ) : null;
};

export default Backdrop;
