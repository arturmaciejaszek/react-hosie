import * as React from 'react';
import * as styles from './Landing.css';

import Background from '../Background/Background';
import Navigation from '../Navigation/Navigation';
import Welcome from '../Welcome/Welcome';
import Pointer from '../UI/Pointer/Pointer';

type LandingProps = {
  showSideDrawer: Function;
  open: boolean;
  clicked: Function;
};

const Landing = (props: LandingProps) => {
  return (
    <section className={styles.Landing}>
      <Background />
      <Navigation toggleClicked={props.showSideDrawer} open={props.open} />
      <Welcome />
      <Pointer clicked={props.clicked} />
    </section>
  );
};

export default Landing;
