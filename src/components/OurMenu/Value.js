import React from 'react';
import CheeseLovers from '../../static/images/value/cheese-lovers.jpg';
import HamAndCheese from '../../static/images/value/ham-and-cheese.jpg';
import Vegiosa from '../../static/images/value/logo.png';
import Pepperoni from '../../static/images/value/logo.png';
import CheeseAndGarlic from '../../static/images/value/logo.png';
import Texan from '../../static/images/value/logo.png';
import Margaritta from '../../static/images/value/logo.png';

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

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Vegiosa} src={Vegiosa} />
      </div>
      <div className="product-desc">
        <p>
            Vegiosa – Tomato Sauce, Mozzarella Cheese, Baby Spinach, Mushroom and Olives.
            Small $4.50 Medium $4.95 Large $6.95 Family $10.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Pepperoni} src={Pepperoni} />
      </div>
      <div className="product-desc">
        <p>
          Pepperoni – Tomato Sauce, Mozzarella Cheese and Pepperoni.  
          Small $4.50 Medium $4.95 Large $6.95 Family $10.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={CheeseAndGarlic} src={CheeseAndGarlic} />
      </div>
      <div className="product-desc">
        <p>
          Cheese & Garlic – Garlic Aioli and Mozzarella Cheese.  
          Small $3.95 Medium $4.50 Large $5.95 Family $9.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Texan} src={Texan} />
      </div>
      <div className="product-desc">
        <p>
          The Texan – Spicy Bbq sauce, Mozzarella, Pepperoni, Onion, Capsicum and Cajun Spices. 
          Small $4.95, Medium $5.95, Large $7.95, Family $11.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Margaritta} src={Margaritta} />
      </div>
      <div className="product-desc">
        <p>
          Margaritta – Tomato Sauce, Garlic, Mixed Herbs, Mozzarella Cheese, Sliced Tomato and Parmesan Cheese.  
          Small $4.95 Medium $5.95 Large $7.95 Family $11.95
        </p>
      </div>
    </div>

  </div>
);

export default Value;