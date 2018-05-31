import * as React from 'react';
import * as styles from './Navigation.css';

import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../Logo/Logo';
import NavItems from './NavItems/NavItems';

type NavigationProps = {
  open: boolean;
  toggleClicked: Function;
};

const Navigation = (props: NavigationProps) => {
  return (
    <div className={styles.Navigation}>
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
