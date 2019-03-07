import React from 'react';
import Banner from '../static/images/banner-1.jpg';

const bgImage = {
  backgroundImage: `url(${Banner})`,
};

const Header = () => (
  <header className="px4 pr4 pb4 flex" style={bgImage}>
    <h1 className=" ">
      LOGO
    </h1>
    <h1 className="ml-auto ">
      menu
    </h1>
  </header>
);

export default Header;
