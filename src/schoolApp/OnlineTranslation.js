import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/OnlineTranslation.scss';
import '../scss/ContactUs.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class OnlineTranslation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            mailSent: false,
            error: null,
            selectedFile: null,
            fileValue: "",
        }
        this.sendMail = this.sendMail.bind(this);
    }

    handleClick(lang) {
        i18next.changeLanguage(lang);
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
        //phone number
        if (!fields["phoneNumber"]) {
            formIsValid = false;
            errors["phoneNumber"] = "Cannot be empty";
        }
        //File 
        if (!this.selectedFile) {
            formIsValid = false;
            errors["file"] = "Cannot be empty";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    sendMail() {
        let fields = this.state.fields;
        this.setState({
			mailSent: false
        });
        const self = this;
		if (this.handleValidation()) {

            var file = this.selectedFile;
            var reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = function () {
                var datauri = "data:" + file.type + ";base64," + btoa(reader.result);
                window.Email.send({
                    Host : "smtp.gmail.com",
				    Username : "yuntong.li000000@gmail.com",
				    Password : "1234@abcd",
				    To : 'yuntong.li000000@gmail.com',
				    From : "yuntong.li000000@gmail.com",
				    Subject : `Online Translation: ${fields['name']} - ${fields['phoneNumber']}`,
                    Body : `Email: ${fields['email']}`,
                    Attachments : [
                       {
                           name : file.name,
                           data : datauri
                       }]
                }).then(
                    message => {
                        self.setState({ 
                            mailSent: true,
                            error: false,
                            fields: {},
                        });
                        self.fileValue.value="";
                        self.selectedFile = null;
                    }
                );
            };
            reader.onerror = function (error) {
                alert(error);
            };
		}
	}

    onChangeHandler(e){
        this.selectedFile=e.target.files[0];
        this.fileValue = e.target;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        const { t } = this.props;

        return (
            <div>
                <Container>
                    <h2 className="page-title">{t('onlineTranslation.pageTitle')}</h2>
                    <Card>
                        <Card.Title className="card-title">
                            {t('onlineTranslation.cardTitle')}
                        </Card.Title>
                        <Card.Body className="card-body">
                            <ul className="card-list">
                                <li className="card-list-content">{t('onlineTranslation.cardText1')}</li>
                                <li className="card-list-content">{t('onlineTranslation.cardText2')}</li>
                                <li className="card-list-content">{t('onlineTranslation.cardText3')}</li>
                                <li className="card-list-content">{t('onlineTranslation.cardText4')}</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Form id="test">
                        <h4 className="form-title">{t('onlineTranslation.formTitle')}</h4>
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={3}>
                                {t('onlineTranslation.yourName')}
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="name"
                                    onChange={this.handleChange.bind(this, "name")}
                                    value={this.state.fields["name"] || ''}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                {t('onlineTranslation.emailAddress')}
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="email"
                                    onChange={this.handleChange.bind(this, "email")}
                                    value={this.state.fields["email"] || ''}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                {t('onlineTranslation.phoneNumber')}
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="phoneNumber"
                                    onChange={this.handleChange.bind(this, "phoneNumber")}
                                    value={this.state.fields["phoneNumber"] || ''}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["phoneNumber"]}</span>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                            <Form.Label column sm={3}>
                                {t('onlineTranslation.uploadFile')}
                            </Form.Label>
                            <Col sm={9}>
                                <input type="file" name="myFile" 
                                    onChange={this.onChangeHandler.bind(this)}
                                />
                                 <span style={{ display:"block", color: "red" }}>{this.state.errors["file"]}</span>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 3 }}>
                                <Button onClick={this.sendMail}  style={{ backgroundColor: "#006935", border:"none" }}>{t('onlineTranslation.submit')}</Button>
                            </Col>
                        </Form.Group>
                        <div>
                            {this.state.mailSent && <div style={{ color: "#006935" }}>{t('onlineTranslation.thankYou')}</div>}
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}
export default withTranslation()(OnlineTranslation);