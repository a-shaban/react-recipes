import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
	<div className="footer-container">
		<div className="news-letter">
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
		</div>
		<div className="footer-links">
			<Link to="/">
				<p>Home</p>
			</Link>
		</div>
		<div className="social-links">

		</div>
	</div>
);

export default Footer;