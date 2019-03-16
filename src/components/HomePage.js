import React from 'react';
import ValueRange from '../static/images/value-range.jpeg';
import LegendaryRange from '../static/images/legendary-range.jpeg';
import TraditionalRange from '../static/images/traditional-range.jpeg';
import Deals from '../static/images/deals.jpg';
import Sides from './Sides';


const HomePage = () => (
  <div>
    <div className="abcd">
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
    </div>

    <Sides />

  </div>
);

export default HomePage;
