import * as React from 'react';
import * as styles from './NavItem.css';

type NavItemProps = {
  aria: string;
  link: string;
};

const NavItem = (props: NavItemProps) => {
  return (
    <div className={styles.NavItemWrapper}>
      <div role="button" aria-label={props.aria} className={styles.NavItem}>
        {props.link}
      </div>
    </div>
  );
};

export default NavItem;
