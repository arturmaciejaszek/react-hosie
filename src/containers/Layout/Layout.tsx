import * as React from 'react';
import * as _ from 'lodash';

import Landing from '../../components/Landing/Landing';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';

interface LayoutProps {}
interface LayoutState {
  showSideDrawer: boolean;
  Y: number;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  state = {
    showSideDrawer: false,
    Y: 0
  };

  setY = () => {
    const newY = window.scrollY;
    this.setState({ Y: newY });
  };

  throttled = _.throttle(this.setY, 100);

  componentDidMount() {
    if (window.matchMedia('(min-width: 500px)').matches)
      window.addEventListener('scroll', this.throttled);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttled);
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  pointerHandler = () => {};

  render() {
    return (
      <>
        <Landing
          showSideDrawer={this.sideDrawerToggleHandler}
          open={this.state.showSideDrawer}
          clicked={this.pointerHandler}
          Y={this.state.Y}
        />
        <About />
        <Experience />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div style={{ height: '100vh' }} />
      </>
    );
  }
}

export default Layout;
