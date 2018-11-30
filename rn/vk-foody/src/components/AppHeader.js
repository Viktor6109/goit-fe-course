import React from 'react';
import HeaderLogo from './HeaderLogo';
import logo from '../img/foodylogo.png';
import logo2 from '../img/aa.jpg';

const AppHeader = () => (
  <div>
    <HeaderLogo name="Viktor" imgLogo={logo} alt="logo1" />
    <HeaderLogo name="Oleg" imgLogo={logo2} alt="logo2" />
  </div>
);

export default AppHeader;
