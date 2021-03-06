import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Footer from './Footer';
import GivingBack from './GivingBack'
import NavBar from './NavBar';
import Header from './Header';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Value from './OurMenu/Value';
import Legendary from './OurMenu/Legendary';
import Traditional from './OurMenu/Traditional';
import Sides from './OurMenu/Sides';
import Products from './OurMenu/Products'

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <NavBar />
      <div className="p3">
        <Route exact path="/" component={HomePage} />
        <Route path="/giving-back" component={GivingBack} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/value-pizzas" component={Value} />
        <Route path="/traditional-pizzas" component={Traditional} />
        <Route path="/legendary-pizzas" component={Legendary} />
        <Route path="/sides" component={Sides} />
        <Route path="/products" component={Products} />
        
      </div>
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
