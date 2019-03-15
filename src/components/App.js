import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Products from './Products';
import Footer from './Footer';
import GivingBack from './GivingBack'
import NavBar from './NavBar';
import Header from './Header';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={Products} />
      <Route path="/giving-back" component={GivingBack} />
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
