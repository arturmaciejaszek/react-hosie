import * as React from 'react';
import * as styles from './Button.css';

interface ButtonProps {
  name: string;
  action: () => any | Function;
  width?: string;
  aria?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div
      className={styles.Button}
      role="button"
      aria-label={props.aria}
      onClick={props.action}
      style={{ width: props.width }}
    >
      {props.name}
    </div>
  );
};

export default Button;
