import * as React from 'react';
const throttle = require('lodash.throttle');

const Parallax = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class extends React.Component {
    state = {
      y: 0.2
    };

    setY = () => {
      const newY = window.scrollY;
      this.setState({ y: newY });
    };

    throttled = throttle(this.setY, 100);

    componentDidMount() {
      if (window.matchMedia('(min-width: 500px)').matches)
        window.addEventListener('scroll', this.throttled);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.throttled);
    }

    render() {
      return (
        <div
          style={{ transform: `translate3d(0, ${this.state.y * -0.2}px, 0)` }}
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default Parallax;
