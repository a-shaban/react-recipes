import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../static/images/logo.png'


const Footer = () => (
	<div className="footer-container">
		{/* <div className="news-letter">
			<form>
				<label htmlFor="search">
					<p className="newsletter-text white"> Sign Up For Our Newsletter </p> 
				</label>
				<div className="search-field">
					<input 
						id="search" 
						type="text" 
						className="field email-input newsletter-input-box fit"
						placeholder="Enter Email Address">
						</input>
					<button className="  newsletter-input-btn">
						<p className="white  fit">Go</p>
					</button>
				</div>
			</form>
		</div> */}
		<div className="p0 center">
		<img className="footer-logo" alt={Logo} src={Logo}></img>
		</div>

		<div className="footer-links">

				<div className="center sm-col sm-col-4">
						<h3 className="">Operating Hours</h3>
						<div>
							<p className="footer-links-text">1</p>
							<p className="footer-links-text">2</p>
							<p className="footer-links-text">3</p>
							<p className="footer-links-text">4</p>
						</div>
					</div>

					<div className="center sm-col sm-col-4">
					<h3 className="">Quick Links</h3>
						<div>
							<Link to="/">
								<p className="footer-links-text">Home</p>
							</Link>
							<Link to="/products">
								<p className="footer-links-text">Our Menu</p>
							</Link>
							<Link to="/giving-back">
								<p className="footer-links-text">Giving back</p>
							</Link>
							<Link to="/aboutus">
								<p className="footer-links-text">About us</p>
							</Link>
							<Link to="/">
								<p className="footer-links-text">Contact Us</p>
							</Link>
						</div>
					</div>

					<div className="center sm-col sm-col-4">
						<h3 className="">Contact Info</h3>
						<div>
							<p className="footer-links-text">1</p>
							<p className="footer-links-text">2</p>
							<p className="footer-links-text">3</p>
							<p className="footer-links-text">Facebook logo here</p>
						</div>
					</div>

		</div>

		<hr />
		<br />

		<div className="footer-btm">
			<p className="social-links">Copyright Eagle Pizzas Bendigo 2019</p>
		</div>

	</div>
);

export default Footer;