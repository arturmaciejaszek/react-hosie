import * as React from 'react';

import * as logo from '../../assets/placeholder-logo.svg';

type LogoProps = {
  width: string;
  height: string;
};

const Logo = (props: LogoProps) => {
  return (
    <img
      src={logo}
      alt="logo"
      style={{
        width: props.width,
        height: props.height
      }}
    />
  );
};

export default Logo;
