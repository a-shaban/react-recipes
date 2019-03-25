import React from 'react';
import ClubChicken from '../../static/images/legendary/club-chicken.jpg';
import DeluxMeatLovers from '../../static/images/legendary/deluxe-meat-lovers.jpg';
import GourmetVegetarian from '../../static/images/legendary/gourmet-vegetarien.jpg';
import PrawnsAndGarlicAioli from '../../static/images/legendary/prawns-and-garlic-aioli.jpg';
import TandoriChicken from '../../static/images/legendary/tandori-chicken.jpg';
import TheWorks from '../../static/images/legendary/the-works.jpg';

const Legendary = () => (
  <div>
    <h1 className="menu-header" > Legendary</h1>

    <hr />
    <br />

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={ClubChicken} src={ClubChicken} />
      </div>
      <div className="product-desc">
        <p>
          Club Chicken – Tomato Sauce, Mozzarella Cheese, Chicken, Bacon, Mushroom, Onion, 
          Capsicum, Garlic Aioli Swirl and Parmesan Cheese.  
          Small $9.95 Medium $11.95 Large $13.95 Family $17.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={DeluxMeatLovers} src={DeluxMeatLovers} />
      </div>
      <div className="product-desc">
        <p>
          Deluxe Meat Lovers – BBQ Sauce, Mozzarella Cheese, Pepperoni, Ham, Bacon, Pulled Beef, 
          Cabanossi, Chicken and Hollandaise Sauce Swirl.  
          Small $9.95 Medium $11.95 Large $13.95 Family $17.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={GourmetVegetarian} src={GourmetVegetarian} />
      </div>
      <div className="product-desc">
        <p>
          Gourmet Vegetarian – Tomato Sauce, Mozzarella, Baby Spinach, Garlic, Mushroom, Onion, 
          Capsicum, Pineapple, Olives, Sliced Tomato, Parmesan Cheese and Ranch Swirl. 
          Small $9.95, Medium $11.95, Large $13.95, Family $17.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={PrawnsAndGarlicAioli} src={PrawnsAndGarlicAioli} />
      </div>
      <div className="product-desc">
        <p>
          Prawns and Garlic Aioli – Tomato Sauce, Mozzarella Cheese, Onion, Capsicum, 
          Prawns and Garlic Aioli Swirl.  
          Small $11.95 Medium $13.95 Large $16.95 Family $19.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={TandoriChicken} src={TandoriChicken} />
      </div>
      <div className="product-desc">
        <p>
          Tandoori Chicken – Tomato Sauce, Mozzarella Cheese, Tandoori Marinated Chicken, 
          Baby Spinach, Onion, Garlic and Sour Cream.  
          Small $9.95 Medium $11.95 Large $13.95 Family $17.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={TheWorks} src={TheWorks} />
      </div>
      <div className="product-desc">
        <p>
          The Works – Tomato Sauce, Mozzarella Cheese, Pepperoni, Ham, Bacon, Pulled Beef, 
          Cabanossi, Mushroom, Onion, Capsicum, Pineapple, Olives and Hollandaise Sauce Swirl.  
          Small $9.95 Medium $11.95 Large $13.95 Family $17.95
        </p>
      </div>
    </div>

  </div>
);

export default Legendary;