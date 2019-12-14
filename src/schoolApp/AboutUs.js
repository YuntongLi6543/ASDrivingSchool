import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../scss/AboutUs.scss';

export default class AboutUs extends Component {

    render() {
        return (
        	<div className="AboutUs">
	            <Container className="ASTitle">
		            <Row>
		            	<Col xs={12} md={12} className="title">
		            	
					      <h2 className="AU-Header">About AS Driving School</h2>
					    
					    </Col>
						{/* introduction */}
					    <Col xs={12} md={5}>
					       <Card.Img className="Image" src="pic1.jpg" />
					    </Col>

					    <Col xs={12} md={7}>
					      	<p className="Content">All Successful Driving School is one of the MTO approved and specialized driving schools and it is dedicated to helping students achieve their dreams to become a skilled, responsible and safe driver by providing visualized, student-centered and small-sized quality in-class lessons, and one-to-one in vehicle advanced training.<br /><br />
					    	Instructors in our driving school, who have many years of experience and familiar with the routes and features of all the drive test centers, are very patient, helpful and dedicated.<br /><br />
					    	The school also provides additional services, such as free G1 tutoring & practice test, notarization and translation of licenses, vehicle purchase and insurance, International licence and car accident inquiry, etc.
					    	</p>
					    </Col>
		  			</Row>
	            </Container>

	            <div className="ThreeCoachInfo">
	            <Container>
	           		<Row>
	            		<Col xs={12} md={12} className="title">
					    	<h2 className="AU-Header-Coach">Featured Instructors</h2>
						</Col>
		  				{/* coach-Zhang */}
		  			<Row className="coach-zhang">
						<Col xs={12} md={7}>
					      	<p className="Content">Instructor Zhang is an excellent and experienced instructor registered by the Ontario government. He is energetic, patient and detail-oriented, and proficient in traffic regulations and road test skills in Ontario. 
					      	<br /><br />And also, he is good at using easy-to-grasp and efficient visualized teaching methods to enable students to master Essentials of safe driving. 
					      	<br /><br />In addition, he usually implements intensive training before the test according to the characteristics of the test centers, which results in a high passing rate. Therefore, students gave him wonderful reviews and feedback. 
					      	<br /><br />Tel：6479852174
					    	</p>
					    </Col>
						<Col xs={12} md={5} >
						    <Card.Img className="Image" src="coach-zhang.png" />
						</Col>
					</Row>
					</Row>
				</Container>
				    {/* coach-Zhou */}
	
				<Container className="coach-zhou">
					<Row>
					    <Col xs={12} md={5}>
					       <Card.Img className="Image" src="coach-zhou.png" />
					    </Col>

					    <Col xs={12} md={7}>
					      	<p className="Content">Instructor Zhou is an excellent driving professional with more than 30 years of driving experience and registered with Ontario government. He is expert, responsible, patient and enthusiastic. 
					      	<br /><br />By making good use of unique training methods, he can ensure that students master safe driving skills in a short time. He is also familiar with the key points of road test, and usually makes appropriate arrangement of road tests in small towns so that the road test passing rate is over 98%. 
					      	<br /><br />Tel：6479246776
					    	</p>
					    </Col>
					</Row>
				</Container>
				
				 {/* coach-Hao */}
				<Container className="coach-hao">
					<Row>
					    <Col xs={12} md={7}>
					      	<p className="Content">As an excellent Instructor of both in-car and in-class instruction, instructor Hao is very experienced, responsible, and very knowledgeable with road tests and traffic regulations. He can accurately grasp the characteristics of each student, and implement targeted road training and theoretical teaching accordingly. 
					      	<br /><br />And also, he explains and analyses difficult and confusing points by using pictures, videos and other methods, which won a lot of praise from students. 
					      	<br /><br />Tel：6475199286
					    	</p>
					    </Col>
					    <Col xs={12} md={5}>
					       <Card.Img className="Image" src="coach-Hao.png" />
					    </Col>
					</Row>
	            </Container>
	            </div>
  			</div>
        );
    }
}