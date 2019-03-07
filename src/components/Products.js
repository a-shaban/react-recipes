import React from 'react';
import Tabs from './Tabs';
import Value from './Product-Tabs/Value';
import Traditional from './Product-Tabs/Traditional';
import Legendary from './Product-Tabs/Legendary';
import ViewAll from './Product-Tabs/ViewAll';
import Deals from './Product-Tabs/Deals';
import Header from './Header';


const Favorites = () => (

  <div>
    <Header />
    <Tabs>
      <div label="Value">
        <Value />
      </div>
      <div label="Traditional">
        <Traditional />
      </div>
      <div label="Legendary">
        <Legendary />
      </div>
      <div label="Deals">
        <Deals />
      </div>
      <div label="View All">
        <Deals />
        <Value />
        <Traditional />
        <Legendary />
      </div>
    </Tabs>
  </div>


);

export default Favorites;
