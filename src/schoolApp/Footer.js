import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { 
	Container,
	Row,
	Col,
} from 'react-bootstrap';
import '../scss/Footer.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class Footer extends Component {

	handleClick(lang) {
		i18next.changeLanguage(lang);
	}

    render() {
		const { t } = this.props;
        return (
            <div>
				<style>{`@import url(https://use.fontawesome.com/releases/v5.6.3/css/all.css)`}</style>
				<footer className="page-footer font-small pt-4">
					<div className="container text-center text-md-left">
						<div className="row">
					      	<div className="col-md-5 mt-md-0 mt-3">
					        	<h5 className="text-uppercase">{t('footer.headOfficer')}</h5>
					        	<p>{t('footer.address')}
					        	<br></br> 
					        	{t('footer.tel')}
					        	<br></br>
					        	{t('footer.email')}
					        	</p>
					      	</div>

					      <hr className="clearfix w-100 d-md-none pb-3" />
					      <div className="col-md-4 mb-md-0 mb-3">
						        <h5 className="text-uppercase">{t('footer.openingHours')}</h5>
						        <ul className="list-unstyled">
						          <li>
								  {t('footer.mondayToFriday')}
						          </li>
						          <li>
								  {t('footer.saturday')}
						          </li>
						          <li>
								  {t('footer.sunday')}
						          </li>
						        </ul>
					      </div>

					      	<div className="col-md-3 mb-md-0 mb-3">
					        	<h5 className="text-uppercase">{t('footer.information')}</h5>
						        <ul className="list-unstyled">
						          <li>
						            <Link className="contact-btn" to="/courses">{t('footer.courses')}</Link>
						          </li>
						          <li>
						          	<Link className="contact-btn" to="/about-us">{t('footer.aboutUs')}</Link>
						          </li>
						          <li>
						          	<Link className="contact-btn" to="/contact-us">{t('footer.contactUs')}</Link>
						          </li>
						        </ul>
					      	</div>
					    </div>
				  	</div>

					<div className="footer-copyright py-3">
					<Container>
						<Row>
							<Col lg="10" className="copyright">
				  			Copyright @2019 All successful driving school. Developed by Excalibur resume & Culture Service.
						  
						  	</Col>
							<Col lg="2" className="social-media">
								<a href="https://www.facebook.com/bestinstruction">
								  <i className="fab fa-facebook-f fa-lg"></i>
								</a>
								<a href="https://www.facebook.com/bestinstruction">
								  <i className="fab fa-twitter fa-lg"></i>
								</a>
								<a href="https://www.facebook.com/bestinstruction">
								  <i className="fab fa-linkedin-in fa-lg"></i>
								</a>
								<a href="https://www.facebook.com/bestinstruction">
								  <i className="fab fa-instagram fa-lg"></i>
								</a>
						  	</Col>
						  </Row>
					</Container>
					</div>
				</footer>
            </div>
        );
    }
}
export default withTranslation()(Footer);