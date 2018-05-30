import * as React from 'react';
import * as styles from './SideDrawer.css';

import NavItems from '../../Navigation/NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

type SideDrawerProps = {
  open: boolean;
  closed: any;
};

const SideDrawer = (props: SideDrawerProps) => {
  let sideDrawerClasses: string[] = [styles.SideDrawer, styles.Closed];
  if (props.open) {
    sideDrawerClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={sideDrawerClasses.join(' ')} onClick={props.closed}>
        <NavItems />
      </div>
    </>
  );
};

export default SideDrawer;
