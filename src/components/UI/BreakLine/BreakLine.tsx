import * as React from 'react';
import * as styles from './BreakLine.css';

type BreakLineProps = { color?: string };

const BreakLine = (props: BreakLineProps) => {
  return (
    <div
      className={styles.BreakLine}
      style={{ backgroundColor: props.color }}
    />
  );
};

export default BreakLine;
