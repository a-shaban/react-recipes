import React from 'react';
import Banner from '../static/images/banner-1.jpg';
import Menu from '../static/images/value-range.jpeg';

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

      <div className="flex center p2">
        <img className="flex-auto" alt={Menu} src={} />
      </div>

      <div className="col col-6 center pb4">
        Value
      </div>
      <div className="col col-6 center pb4">
        Traditional
      </div>
      <div className="col col-6 center pb4">
        LEGENDARY
      </div>
      <div className="col col-6 center pb4">
        DEALS
      </div>
      <div className="pb4 px4">
        OUR SIDES
      </div>
    </div>
  </div>
);

export default Favorites;
