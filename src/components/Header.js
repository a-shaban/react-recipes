import React from 'react';
import Banner from '../static/images/EPBanner.png';

const bgImage = {
  backgroundImage: `url(${Banner})`,
};

const Header = () => (
  <header className="fit my-header" >
  
  <img className="my-header-pic" src={Banner} />
    
  </header>
);

export default Header;
