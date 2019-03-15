import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
	<div>
		<div className="news-letter">
			<form>
				<label htmlFor="search">Search</label>
				<input id="search" type="text" className="field"></input>
				<button className="btn btn-primary">Go</button>
			</form>
		</div>
		<div className="footer-links">

		</div>


			<Link to="/">
				<p>Home</p>
			</Link>
	Value
	Traditional
	Legendary
	Deals
	
	Our Menu:
	Value
	Traditional
	Legendary
	Desserts
	Drinks
	
	Giving Back: 
	First company name
	2nd company name
	3rd company
	Featured article
	
	Contact us:
	
	
	
	Facebook: 
	https://www.facebook.com/eaglepizzasbendigo/
	
	
	
			

	</div>
);

export default Footer;