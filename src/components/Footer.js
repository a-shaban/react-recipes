import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../static/images/logo.png';
import fblogo from '../static/images/contactus-icons/facebook-logo.png';


const Footer = () => (
	<div className="footer-container">
		<hr />
		<br />
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
		<div className="center">
		<img className="footer-logo" alt={Logo} src={Logo}></img>
		</div>

		<div className="footer-links">

				<div className="center sm-col sm-col-4">
						<h2 className="">Operating Hours</h2>
						<div>
							<p className="footer-links-text">
								Sunday - Monday: 11am - 10pm
							</p>
							<p className="footer-links-text">
								Tuesday - Thursday: 11am - 11pm
							</p>
							<p className="footer-links-text">
								Friday - Saturday: 11am - 12am
							</p>
							<p className="footer-links-text">
								Public Holidays: 4pm - 9pm
							</p>
						</div>
					</div>

					<div className="center sm-col sm-col-4">
					<h2 className="">Quick Links</h2>
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
						<h2 className="">Contact Info</h2>
						<div>
							<p className="footer-links-text">
								Address: 91-97 MCIVOR RD,
							</p>
							<p className="footer-links-text">
								Bendigo, VIC, 3550
							</p>
							<p className="footer-links-text">
								Phone Number: 5444 5551
							</p>
							<img className = "footer-fb-logo" alt={fblogo} src={fblogo} />
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