import * as React from 'react';
import * as styles from './Landing.css';

import Navigation from '../Navigation/Navigation';
import Background from './Background/Background';
import Welcome from './Welcome/Welcome';
import Pointer from '../UI/Pointer/Pointer';

type LandingProps = {
  showSideDrawer: Function;
  open: boolean;
  clicked: Function;
  Y: number;
};

const Landing = (props: LandingProps) => {
  return (
    <section className={styles.Landing}>
      <Background Y={props.Y} />
      <Navigation
        toggleClicked={props.showSideDrawer}
        open={props.open}
        Y={props.Y}
      />
      <Welcome />
      <Pointer clicked={props.clicked} />
    </section>
  );
};

export default Landing;
