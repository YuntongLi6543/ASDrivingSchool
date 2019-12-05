import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../scss/Footer.scss';

export default class Footer extends Component {

    render() {
        return (
            <div>
				<footer className="page-footer font-small pt-4">
					<div className="container-fluid text-center text-md-left">
						<div className="row">
					      	<div className="col-md-5 mt-md-0 mt-3">
					        	<h5 className="text-uppercase">Head Officer</h5>
					        	<p>Office Address 
					        	<br></br> 
					        	Tel
					        	<br></br>
					        	Email
					        	</p>
					      	</div>

					      <hr className="clearfix w-100 d-md-none pb-3" />
					      <div className="col-md-4 mb-md-0 mb-3">
						        <h5 className="text-uppercase">Opening Hours</h5>
						        <ul className="list-unstyled">
						          <li>
						            Monday-Friday: x:00-x:00
						          </li>
						          <li>
						            Saturday: x:00-x:00
						          </li>
						          <li>
						            Sunday: x:00-x:00
						          </li>
						        </ul>
					      </div>

					      	<div className="col-md-3 mb-md-0 mb-3">
					        	<h5 className="text-uppercase">Information</h5>
						        <ul className="list-unstyled">
						          <li>
						            <Link className="ContactBtn" to="/contact-us">Contact Us</Link>
						          </li>
						          <li>
						          	<Link className="ContactBtn" to="/contact-us">Contact Us</Link>
						          </li>
						          <li>
						          	<Link className="ContactBtn" to="/contact-us">Contact Us</Link>
						          </li>
						        </ul>
					      	</div>
					    </div>
				  	</div>



				  	<div className="footer-copyright text-center py-3">Copyright @2019 All successful driving school
				  	</div>
				</footer>
            </div>
        );
    }
}