import React from 'react';
import SlideShow from './Slideshow';
import ValueRange from '../static/images/value-range.jpg';
import LegendaryRange from '../static/images/legendary-range.jpg';
import TraditionalRange from '../static/images/traditional-range.jpg';


const HomePage = () => (
  <div>
    <div className="">

      <div className="slideshow-container">
        <SlideShow />
      </div>

      <div className="main-btns container">

        <div className="homepage-btns sm-col sm-col-6">
          <button className="button-element btn-color pointer">
            <p className="btn-text">ORDER NOW</p>
          </button>
        </div>

        <div className="homepage-btns sm-col sm-col-6">
          <button className="button-element btn-color pointer">
            <p className="btn-text">CALL</p>
          </button>
        </div>
        
      </div>

      <hr />
      <br />

      <div className="our-selection">
        <h1 className="center our-selection-header">OUR SELECTION </h1>
        <p className="center">
          Eagle Pizzas. The Taste That Has Developed Into the Three Finest Categories
        </p>
      </div>

      {/* <div className="pic-container">
        <img className="menu-pics pointer" alt={ValueRange} src={ValueRange} />
        <img className="menu-pics pointer" alt={TraditionalRange} src={TraditionalRange} />
        <img className="menu-pics pointer" alt={LegendaryRange} src={LegendaryRange} />
      </div> */}
      
      <div className="product-container" >
        <div className="product-image">
          <img className="menu-pics pointer" alt={ValueRange} src={ValueRange} />
        </div>
        <div className="product-desc">
          <p>
            On a budget? Try our Value Range!
          </p>
        </div>
      </div>

      <div className="product-container" >
        <div className="product-image">
          <img className="menu-pics pointer" alt={TraditionalRange} src={TraditionalRange} />
        </div>
        <div className="product-desc">
          <p>
            Keeping it simple? Try the Traditional Range!
          </p>
        </div>
      </div>

      <div className="product-container" >
        <div className="product-image">
          <img className="menu-pics pointer" alt={LegendaryRange} src={LegendaryRange} />
        </div>
        <div className="product-desc">
          <p>
           Love your Pizzas? Try the Legendary range!
          </p>
        </div>
      </div>

      <div className="homepage-btns">
        <button className="button-element btn-color pointer">
          <p className="btn-text ">VIEW OUR MENU</p>
        </button>
      </div>

    </div>
  </div>
);

export default HomePage;
