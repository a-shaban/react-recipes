import React from 'react';
import Banner from '../static/images/banner-1.jpg';
import ValueRange from '../static/images/value-range.jpeg';
import LegendaryRange from '../static/images/legendary-range.jpeg';
import TraditionalRange from '../static/images/traditional-range.jpeg';
import Deals from '../static/images/deals.jpg';

const Favorites = () => (
  <div className="">
    <img className="fit" alt={Banner} src={Banner} />
    <div>
      <div className="col col-6 center pb4">
        Order Online
      </div>
      <div className="col col-6 center pb4">
        Call
      </div>
      <div className="pb4 px4">
        OUR MENU
      </div>

      <div className="pic-container">
        <img className="menu-pics" alt={ValueRange} src={ValueRange} />
        <img className="menu-pics" alt={LegendaryRange} src={LegendaryRange} />
      </div>
      <div className="pic-container">
        <img className="menu-pics" alt={TraditionalRange} src={TraditionalRange} />
        <img className="menu-pics" alt={Deals} src={Deals} />
      </div>
      <div className="pb4 px4">
        OUR SIDES
      </div>
    </div>
  </div>
);

export default Favorites;
