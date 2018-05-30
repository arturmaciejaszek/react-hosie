import * as React from 'react';

import Landing from '../../components/Landing/Landing';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

interface LayoutProps {}
interface LayoutState {
  showSideDrawer: boolean;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  state = {
    showSideDrawer: false
  };

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
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
      </>
    );
  }
}

export default Layout;
