import * as React from 'react';
import * as styles from './Navigation.css';

import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../Logo/Logo';
import NavItems from './NavItems/NavItems';

type NavigationProps = {
  open: boolean;
  toggleClicked: Function;
  Y: number;
};

const Navigation = (props: NavigationProps) => {
  let classes: string[] = [styles.Navigation];
  if (props.Y >= 70) classes = [styles.Navigation, styles.Solid];
  return (
    <div className={classes.join(' ')}>
      <Logo height="100%" width="auto" />
      <nav className={styles.Desktop}>
        <NavItems />
      </nav>
      <span className={styles.Desktop} />
      <span className={styles.Mobile}>
        <DrawerToggle clicked={props.toggleClicked} open={props.open} />
      </span>
    </div>
  );
};

export default Navigation;
