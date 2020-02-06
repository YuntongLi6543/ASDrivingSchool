import React, {Component} from 'react';
//import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import TabContainer from 'react-bootstrap/TabContainer';
// import TabPane from 'react-bootstrap/TabPane';
//import Nav from 'react-bootstrap/Nav';
import '../scss/OnlineResources.scss';

export default class OnlineVideo extends Component {

    render() {
        return (
           <div>
              <Container className = "main-content">
                  <h1 className = "main-title">Online Video</h1>
                  <Row>
                      <Col md = "6">
                      <Card style={{ width: '27.5rem' }}>
                        <Card.Img variant="top" src="pic1.jpg" />
                        <Card.Body>
                            <Card.Title>G2 Online Video</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Link to="/G2-online-video" className="btn btn-primary">Watch Video</Link>
                        </Card.Body>
                        </Card>

                      </Col>
                      
                      <Col md = "6">
                        <Card style={{ width: '27.5rem' }}>
                            <Card.Img variant="top" src="pic1.jpg" />
                            <Card.Body>
                                <Card.Title>G Online Video</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Link to="/G2-online-video" className="btn btn-primary">Watch Video</Link>
                            </Card.Body>
                        </Card>
                      </Col>
                  </Row>
              </Container>
           </div>
        );
    }
}