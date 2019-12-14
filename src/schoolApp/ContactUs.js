import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";

import '../scss/ContactUs.scss';

const API_PATH = 'http://localhost:3000/myData';

export default class ContactUs extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    fields: {},
        errors: {},
        mailSent: false,
      	error: null
	  }
	}

	handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       } 
       //Message
        if(!fields["message"]){
           formIsValid = false;
           errors["message"] = "Cannot be empty";
        }

       this.setState({errors: errors});
       return formIsValid;
   }

	handleFormSubmit(e){
	  	e.preventDefault();
	  	// console.log(this.state);
	  	this.setState({
			mailSent: false
		});
		// console.log("1: ", this.state.mailSent);
	  
	  if(this.handleValidation()){         
           	axios({
			    method: 'post',
			    url: API_PATH,
			    data: this.state,
			  })
			  	.then((response)=>{
			      if (response.data.status === true){
			        // console.log("Message Sent. Thank you for contcting us."); 
			        this.setState({
			            mailSent: true
			          });
			        this.setState({ error: false });
			        this.resetForm();
			        // console.log(response);
			        // console.log(this.state);
			        // console.log("2: ", this.state.mailSent);
			      }else if(response.data.status === false){
			        console.log("Message failed to send.");
			      }
			    })

        }
        // else{
        //    alert("Form has errors.");

        // }

	  
	};

	resetForm(){
     this.setState({
     	fields: {}
     });
  }

   handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

  render() {

    return (
      <div>
      <Container>
      		<div className="mapouter">
      			<div className="gmap_canvas">
      				<iframe title="navigation" width="600" height="500" id="gmap_canvas" 
      				src="https://maps.google.com/maps?q=4438%20Sheppard%20Ave.%20E&t=&z=13&ie=UTF8&iwloc=&output=embed" 
      				frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
      			</div>
      		</div>

      		<h3>CONTACT FORM</h3>
	        <Form method="POST">
		        <Form.Group as={Row} controlId="formHorizontalPassword">
				    <Form.Label column sm={2}>
				      Your Name
				    </Form.Label>
				    <Col sm={10}>
				       	<Form.Control type="name" placeholder="Your Name" 
		    			onChange={this.handleChange.bind(this, "name")}
		    			value={this.state.fields["name"] || ''}
				      	/>
				      	<span style={{color: "red"}}>{this.state.errors["name"]}</span>
				    </Col>
				  </Form.Group>

				<Form.Group as={Row} controlId="formHorizontalEmail">
				    <Form.Label column sm={2}>
				      Email
				    </Form.Label>
				    <Col sm={10}>
				       	<Form.Control type="email" placeholder="Email" 
		    			onChange={this.handleChange.bind(this, "email")}
		    			value={this.state.fields["email"] || ''}
				      	/>
				      	<span style={{color: "red"}}>{this.state.errors["email"]}</span>
				    </Col>
				  </Form.Group>

				<Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
				  	<Form.Label column sm={2}>
				      Message
				    </Form.Label>
				    <Col sm={10}>
				    	<Form.Control as="textarea" rows="3" 
				    	onChange={this.handleChange.bind(this, "message")}
				    	value={this.state.fields["message"] || ''}
				    	/>
				    	<span style={{color: "red"}}>{this.state.errors["message"]}</span>
				    </Col>
				  </Form.Group>

				<Form.Group as={Row}>
				    <Col sm={{ span: 10, offset: 2 }}>
				      <Button type="submit" onClick={e => this.handleFormSubmit(e)}>Submit</Button>
				    </Col>
				</Form.Group>
			  	<div>
				  {this.state.mailSent &&<div>Thank you for contcting us.</div>}
				</div>
			</Form>
		</Container>
      </div>
    );
  }
}
