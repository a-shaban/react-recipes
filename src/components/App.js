import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Products from './Products';
import Footer from './Footer';
import GivingBack from './GivingBack'

const App = () => (
  <BrowserRouter>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/giving-back" component={GivingBack} />
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
