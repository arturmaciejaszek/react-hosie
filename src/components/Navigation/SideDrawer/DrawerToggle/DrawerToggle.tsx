import * as React from 'react';
import * as styles from './DrawerToggle.css';

type DrawerToggleProps = {
  open: boolean;
  clicked: any;
};

const DrawerToggle = (props: DrawerToggleProps) => {
  let drawerToggleStyles: string[] = [styles.DrawerToggle];
  if (props.open) {
    drawerToggleStyles = [styles.DrawerToggle, styles.Active];
  }
  return (
    <div className={drawerToggleStyles.join(' ')} onClick={props.clicked}>
      <div className={styles.Hamburger} />
    </div>
  );
};

export default DrawerToggle;
