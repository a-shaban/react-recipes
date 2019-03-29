import React from 'react';
import Banner from '../static/images/EPBanner.png';
import ScrollableAnchor from 'react-scrollable-anchor'

const Header = () => (
  <header className="fit my-header" >
    <ScrollableAnchor id={'slideshow'}>
      <img className="my-header-pic" src={Banner} />
    </ScrollableAnchor>
  </header>
);

export default Header;
