import React from 'react';
import ClubChicken from '../../static/images/legendary/club-chicken.jpg';
import DeluxMeatLovers from '../../static/images/legendary/deluxe-meat-lovers.jpg';
import GourmetVegetarian from '../../static/images/legendary/gourmet-vegetarien.jpg';
import PrawnsAndGarlicAioli from '../../static/images/legendary/prawns-and-garlic-aioli.jpg';
import TandoriChicken from '../../static/images/legendary/tandori-chicken.jpg';
import TheWorks from '../../static/images/legendary/the-works.jpg';
import CheeseLovers from '../../static/images/value/cheese-lovers.jpg';
import HamAndCheese from '../../static/images/value/ham-and-cheese.jpg';
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
import ChickTorte from '../../static/images/Sides/chicken-tortellini.jpg';
import Lasagne from '../../static/images/Sides/lasagne.jpg';
import PorkRibs from '../../static/images/Sides/pork-ribs.jpg';
import SpagBolo from '../../static/images/Sides/spaghetti-bolognaise.jpg';
import VegLasa from '../../static/images/Sides/vegetable-lasagne.jpg';
import Wings1 from '../../static/images/Sides/wings-1.jpg';

const Legendary = () => (
  <div>
    <h1 className="menu-header" > Our Menu</h1>

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
        <img className="menu-pics pointer" alt={ChickTorte} src={ChickTorte} />
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
        <img className="menu-pics pointer" alt={Lasagne} src={Lasagne} />
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
        <img className="menu-pics pointer" alt={PorkRibs} src={PorkRibs} />
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
        <img className="menu-pics pointer" alt={SpagBolo} src={SpagBolo} />
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
        <img className="menu-pics pointer" alt={VegLasa} src={VegLasa} />
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
        <img className="menu-pics pointer" alt={Wings1} src={Wings1} />
      </div>
      <div className="product-desc">
        <p>
          Cheese Lovers – Tomato Sauce and Mozzarella Cheese.
          Small $3.95 Medium $4.50 Large $5.95 Family $9.95
        </p>
      </div>
    </div>

    

  </div>
);

export default Legendary;