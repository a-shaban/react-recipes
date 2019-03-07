import React from 'react';
import Image1 from '../static/images/stock-images/Company1.jpg'
import Image2 from '../static/images/stock-images/Company2.jpg'
import Image3 from '../static/images/stock-images/Company3.jpg'

const GivingBack = () => (
  <div >
    <header className="givingback-header center">
      <img className=" header-images" alt={Image1} src={Image1} />
      <img className=" header-images" alt={Image2} src={Image2} />
      <img className=" header-images" alt={Image3} src={Image3} />
    </header>
  </div>
);

export default GivingBack;
