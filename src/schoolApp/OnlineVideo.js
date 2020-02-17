import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../scss/OnlineResources.scss';

export default class OnlineVideo extends Component {

    render() {
        return (
            <div>
                <Container>
                    <h2 className="page-title">Online Video</h2>
                    <Row>
                        <Col md="6">
                            <Card className="">
                                <Card.Img className="card-image" variant="top" src={require(`../assets/img/pic1.jpg`)} />
                                <Card.Body>
                                    <Card.Title className="pt-3 mt-0">G2 Online Video</Card.Title>
                                    <Link to="/G2-online-video" className="btn btn-primary mt-2 mb-4">Watch Video</Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md="6">
                            <Card>
                                <Card.Img className="card-image" variant="top" src={require(`../assets/img/pic2.jpg`)} />
                                <Card.Body>
                                    <Card.Title className="pt-3 mt-0">G Online Video</Card.Title>
                                    <Link to="/G-online-video" className="btn btn-primary mt-2 mb-4">Watch Video</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}