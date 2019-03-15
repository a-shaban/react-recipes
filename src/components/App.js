import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from './Home';
import HomePage from './HomePage';
import Products from './Products';
import Footer from './Footer';
import GivingBack from './GivingBack'
import NavBar from './NavBar';
import Header from './Header2';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/giving-back" component={GivingBack} />
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
