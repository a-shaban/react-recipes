import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

  <div className="our-navbar flex fit">
    <div className="navbar-item">
      <Link to="/">
        <p className="navbar-text">HOME</p>
      </Link>
    </div>
    <div className="navbar-item">
      <Link to="/products">
        <p className="navbar-text" >OUR MENU</p>
        </Link>
    </div>
    <div className="navbar-item">
      <Link to="/giving-back">
        <p className="navbar-text" >GIVING BACK</p>
      </Link>
    </div>
    <div className="navbar-item">
      <Link to="/aboutus">
        <p className="navbar-text" >ABOUT US</p>
      </Link>
    </div>
    <div className="navbar-item">
      <Link to="/">
        <p className="navbar-text" >CONTACT US</p>
      </Link>
    </div>
  </div>

);

export default NavBar;