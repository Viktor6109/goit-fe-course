import React from 'react';

const HeaderLogo = ({ name, imgLogo, alt }) => (
  <div className="nameLogo">
    <h2 className="name">{name}</h2>
    <img
      className="logoName"
      src={imgLogo}
      width="100"
      height="100"
      alt={alt}
    />
  </div>
);
export default HeaderLogo;
