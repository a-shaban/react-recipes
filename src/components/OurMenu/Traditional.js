import React from 'react';
import American from '../../static/images/traditional/american.jpg';
import Aussie from '../../static/images/traditional/aussie.jpg';
import BbqChickBacon from '../../static/images/traditional/bbq-chicken-and-bacon.jpg';
import BbqMeat from '../../static/images/traditional/bbq-meat.jpg';
import CajunChick from '../../static/images/traditional/cajun-chicken.jpg';
import ChipotleMM from '../../static/images/traditional/chipotle-mega-meat.jpg';
import CountryChickBacon from '../../static/images/traditional/country-style-chicken-bacon.jpg';
import FireEater from '../../static/images/traditional/fire-eater.jpg';
import GarlicChick1 from '../../static/images/traditional/garlic-chicken-spinach-1.jpg';
import Hawaiian from '../../static/images/traditional/hawaiian.jpg';
import Mexican1 from '../../static/images/traditional/mexican-1.jpg';
import RanchBacon from '../../static/images/traditional/ranch-style-bacon.jpg';
import Supreme from '../../static/images/traditional/supreme.jpg';
import Vegetarian from '../../static/images/traditional/vegetarian.jpg';

const Traditional = () => (
  <div>
    <h1 className="menu-header" > Traditional </h1>

    <hr />
    <br />

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={American} src={American} />
      </div>
      <div className="product-desc">
        <p>
          American – Tomato Sauce, Double Cheese, Double Pepperoni, Ham and Onion. 
          Small $7.95 Medium $9.95 Large $11.95 Family $15.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Aussie} src={Aussie} />
      </div>
      <div className="product-desc">
        <p>
          Aussie – Tomato Sauce, Mozzarella Cheese, Bacon, Onion and Egg.  
          Small $5.95 Medium $7.95 Large $9.95 Family $13.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={BbqChickBacon} src={BbqChickBacon} />
      </div>
      <div className="product-desc">
        <p>
          BBQ Chicken and Bacon – BBQ Sauce, Mozzarella Cheese, Chicken, Bacon, Mushroom and Onion.  
          Small $7.95 Medium $9.95 Large $11.95 Family $15.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={BbqMeat} src={BbqMeat} />
      </div>
      <div className="product-desc">
        <p>
          BBQ Meat – BBQ Sauce, Mozzarella Cheese, Pepperoni, Ham, Bacon and Cabanossi
          Small $6.95 Medium $8.95 Large $10.95 Family $14.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={CajunChick} src={CajunChick} />
      </div>
      <div className="product-desc">
        <p>
          Cajun Chicken – Tomato Sauce, Mozzarella Cheese, Chicken, Onion, Capsicum and Cajun Spices.  
          Small $7.95 Medium $9.95 Large $11.95 Family $15.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={ChipotleMM} src={ChipotleMM} />
      </div>
      <div className="product-desc">
        <p>
          Chipotle Mega Meat – BBQ Sauce, Mozzarella, Ham, Onion, Chunky Meatballs and 
          Spicy Chipotle Swirl. 
          Small $7.95, Medium $9.95, Large $11.95, Family $15.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={CountryChickBacon} src={CountryChickBacon} />
      </div>
      <div className="product-desc">
        <p>
          Country Style Chicken and Bacon – Tomato Sauce, Mozzarella, Chicken, Bacon Onion and Sliced Tomato.
          Small $7.95, Medium $9.95, Large $11.95, Family $15.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={FireEater} src={FireEater} />
      </div>
      <div className="product-desc">
        <p>
          Fire Eater – Tomato Sauce, Mozzarella Cheese, Pepperoni, Onion, Jalapeno Peppers 
          and Sliced Tomato with Cajun Spices and Chilli. 
          Small $6.95 Medium $8.95 Large $11.95 Family $15.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={GarlicChick1} src={GarlicChick1} />
      </div>
      <div className="product-desc">
        <p>
          Garlic Chicken and Spinach – Garlic Aioli Sauce base, Mozzarella Cheese, Baby Spinach, 
          Chicken and Onion.  
          Small $7.95 Medium $9.95 Large $11.95 Family $15.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Hawaiian} src={Hawaiian} />
      </div>
      <div className="product-desc">
        <p>
          Hawaiian – Tomato Sauce, Mozzarella Cheese, Ham and Pineapple
          Small $4.95 Medium $7.95 Large $9.95 Family $13.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Mexican1} src={Mexican1} />
      </div>
      <div className="product-desc">
        <p>
          Mexican – Tomato Sauce, Mozzarella, Ham, Mushroom, Capsicum and Cajun Spices. 
          Small $5.95, Medium $7.95, Large $9.95, Family $13.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={RanchBacon} src={RanchBacon} />
      </div>
      <div className="product-desc">
        <p>
          Ranch Style Bacon – BBQ Sauce, Mozzarella Cheese, Double Bacon, 
          Onion and Ranch Sauce Swirl.
          Small $5.95 Medium $7.95 Large $9.95 Family $13.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Supreme} src={Supreme} />
      </div>
      <div className="product-desc">
        <p>
          Supreme – Tomato Sauce, Mozzarella Cheese, Pepperoni, Ham, Mushroom, Onion, 
          Capsicum, Pineapple. 
          Small $6.95 Medium $8.95 Large $10.95 Family $14.95
        </p>
      </div>
    </div>

    <div className="product-container" >
      <div className="product-image">
        <img className="menu-pics pointer" alt={Vegetarian} src={Vegetarian} />
      </div>
      <div className="product-desc">
        <p>
          Vegetarian – Tomato Sauce, Mozzarella Cheese, Mushroom, Onion, Capsicum, 
          Olives, Sliced Tomato, Garlic and Mixed Herbs.  
          Small $6.95 Medium $8.95 Large $9.95 Family $13.95
        </p>
      </div>
    </div>

  </div>
);

export default Traditional;
