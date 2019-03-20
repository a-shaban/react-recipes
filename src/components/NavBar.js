import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

  <div className="our-navbar flex fit">
    <div className="navbar-item">
      <Link to="/">
        <p className="center navbar-text">HOME</p>
      </Link>
    </div>

    <div className="navbar-item dropdown">
      <Link to="/products">
        <p className="center navbar-text dropbtn" >OUR MENU</p>
        </Link>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
    </div>

    
    
    <div className="navbar-item">
      <Link to="/giving-back">
        <p className="center navbar-text" >GIVING BACK</p>
      </Link>
    </div>
    <div className="navbar-item">
      <Link to="/aboutus">
        <p className="center navbar-text" >ABOUT US</p>
      </Link>
    </div>
    <div className="navbar-item">
      <Link to="/contactus">
        <p className="center navbar-text" >CONTACT US</p>
      </Link>
    </div>

    <div className="navbar-item">
      <Link to="/">
        <button className="order-now pointer">
          <p className="center navbar-text" > ORDER NOW </p>
        </button>
        
      </Link>
    </div>

  </div>

);

export default NavBar;