import * as React from 'react';

import * as styles from './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = () => {
  return (
    <ul className={styles.NavItems}>
      <NavItem aria="Link" link="Link" />
      <NavItem aria="Link2" link="Link2" />
    </ul>
  );
};

export default NavItems;
