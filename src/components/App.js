import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
