import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../scss/ContactUs.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {},
			errors: {},
			error: null
		}
		this.sendMail = this.sendMail.bind(this);
	}

	handleClick(lang) {
		i18next.changeLanguage(lang);
	}

	handleChange(field, e) {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });
	}

	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		//Name
		if (!fields["name"]) {
			formIsValid = false;
			errors["name"] = "Cannot be empty";
		}

		//Email
		if (!fields["email"]) {
			formIsValid = false;
			errors["email"] = "Cannot be empty";
		}

		if (typeof fields["email"] !== "undefined") {
			let lastAtPos = fields["email"].lastIndexOf('@');
			let lastDotPos = fields["email"].lastIndexOf('.');

			if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
				formIsValid = false;
				errors["email"] = "Email is not valid";
			}
		}
		//Message
		if (!fields["message"]) {
			formIsValid = false;
			errors["message"] = "Cannot be empty";
		}

		this.setState({ errors: errors });
		return formIsValid;
	}
	sendMail() {
		let fields = this.state.fields;
		this.setState({
			mailSent: false
		});

		if (this.handleValidation()) {

			window.Email.send({
				Host : "smtp.gmail.com",
				Username : "yuntong.li000000@gmail.com",
				Password : "1234@abcd",
				To : 'yuntong.li000000@gmail.com',
				From : "yuntong.li000000@gmail.com",
				Subject : `Contact us: ${fields['name']} - ${fields['email']}`,
				Body : `Message: ${fields['message']}`
			}).then(
				message => {
					this.setState({
						mailSent: true,
						error: false,
						fields: {}
					});
			})
		}
	}
	render() {
		const { t } = this.props;
		
		return (
			<div>
				<Container>
					<h3 className="form-title mt-5">{t('contactUs.contactForm')}</h3>

					<Form>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={2}>
								{t('contactUs.yourName')}
							</Form.Label>
							<Col sm={10}>
								<Form.Control name="name"
									onChange={this.handleChange.bind(this, "name")}
									value={this.state.fields["name"] || ''}
								/>
								<span style={{ color: "red" }}>{this.state.errors["name"]}</span>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalEmail">
							<Form.Label column sm={2}>
								{t('contactUs.emailAddress')}
							</Form.Label>
							<Col sm={10}>
								<Form.Control type="email"
									onChange={this.handleChange.bind(this, "email")}
									value={this.state.fields["email"] || ''}
								/>
								<span style={{ color: "red" }}>{this.state.errors["email"]}</span>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
							<Form.Label column sm={2}>
								{t('contactUs.message')}
							</Form.Label>
							<Col sm={10}>
								<Form.Control as="textarea" rows="3"
									onChange={this.handleChange.bind(this, "message")}
									value={this.state.fields["message"] || ''}
								/>
								<span style={{ color: "red" }}>{this.state.errors["message"]}</span>
							</Col>
						</Form.Group>

						<Form.Group as={Row}>
							<Col sm={{ span: 10, offset: 2 }}>
								<Button onClick={this.sendMail}>{t('contactUs.submit')}</Button>
							</Col>
						</Form.Group>

						<div>
							{this.state.mailSent && <div style={{ color: "#006935" }}>{t('contactUs.thankYou')}</div>}
						</div>
					</Form>

					<div className="mapouter">
						<div className="gmap_canvas">
							<iframe title="navigation" width="100%" height="500" id="gmap_canvas"
								src="https://maps.google.com/maps?q=4438%20Sheppard%20Ave.%20E&t=&z=13&ie=UTF8&iwloc=&output=embed"
								frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default withTranslation()(ContactUs);