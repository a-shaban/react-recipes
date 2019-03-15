import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from './Home';
import HomePage from './HomePage';
import Products from './Products';
import Footer from './Footer';
import GivingBack from './GivingBack'

const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true}  path="/products" component={Products} />
        <Route exact={true}  path="/giving-back" component={GivingBack} />
      </Switch>
      
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
