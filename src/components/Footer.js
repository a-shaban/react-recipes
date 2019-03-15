import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (

	<footer className="page-footer font-small footer">

		<div className="container footer-copyright text-center ">

			<div className="">
				<div className="col-md-2 mb-3">
					<h5 className="text-uppercase font-weight-bold">
						<Link to="/">Home</Link>
					</h5>
				</div>
				<div className="col-md-2 mb-3">
					<h5 className="text-uppercase font-weight-bold">
						<Link to="/products">Products</Link>
					</h5>
				</div>
				<div className="col-md-2 mb-3">
					<h5 className="text-uppercase font-weight-bold">
						<Link to="/giving-back">Giving Back</Link>
					</h5>
				</div>
			</div>
		</div>

		<div className="footer-copyright text-center py-3">© 2018 Copyright:
		</div>

	</footer>
);

export default Footer;