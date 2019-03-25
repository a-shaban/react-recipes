import React from 'react';
import CheeseLovers from '../../static/images/value/cheese-lovers.jpg';
import HamAndCheese from '../../static/images/value/ham-and-cheese.jpg';

const Value = () => (
  <div>
    <h1 className="menu-header" > Value Pizzas</h1>

    <hr />
    <br />

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={CheeseLovers} src={CheeseLovers} />
      </div>
      <div className="product-desc">
        <p>
          Cheese Lovers – Tomato Sauce and Mozzarella Cheese.  
          Small $3.95 Medium $4.50 Large $5.95 Family $9.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={HamAndCheese} src={HamAndCheese} />
      </div>
      <div className="product-desc">
        <p>
          Ham and Cheese – Tomato Sauce, Mozzarella Cheese and Ham.  
          Small $4.50 Medium $4.95  Large $6.95 Family $10.95
        </p>
      </div>
    </div>

    


  </div>
);

export default Value;