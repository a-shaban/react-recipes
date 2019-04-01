import React from 'react';
import ChickTorte from '../../static/images/Sides/chicken-tortellini.jpg';
import Lasagne from '../../static/images/Sides/lasagne.jpg';
import PorkRibs from '../../static/images/Sides/pork-ribs.jpg';
import SpagBolo from '../../static/images/Sides/spaghetti-bolognaise.jpg';
import VegLasa from '../../static/images/Sides/vegetable-lasagne.jpg';
import Wings1 from '../../static/images/Sides/wings-1.jpg';

const Sides = () => (

  <div>
    <h1 className="menu-header" >Sides</h1>

    <hr />
    <br />

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={ChickTorte} src={ChickTorte} />
      </div>
      <div className="product-desc">
        <p>
          Chicken Tortellini $7.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Lasagne} src={Lasagne} />
      </div>
      <div className="product-desc">
        <p>
          Lasagne $7.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={PorkRibs} src={PorkRibs} />
      </div>
      <div className="product-desc">
        <p>
          Pork Ribs - $7.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={SpagBolo} src={SpagBolo} />
      </div>
      <div className="product-desc">
        <p>
          Spaghetti Bolognaise $7.95 
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={VegLasa} src={VegLasa} />
      </div>
      <div className="product-desc">
        <p>
          Vegetable Lasagne $7.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Wings1} src={Wings1} />
      </div>
      <div className="product-desc">
        <p>
          Chicken Wings - Available as Buffalo, Texan BBQ or Flaming! $7.95
        </p>
      </div>
    </div>

  </div>
);

export default Sides;