import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import '../scss/OnlineResources.scss';

export default class OnlineResources extends Component {

	render() {
		return (
			<div>
				<Container>
					<h2 className="OR-Header">Resources</h2>
					<Tab.Container id="left-tabs-example" defaultActiveKey="first">
						<Row className="TabInfo">
							<Col sm={3}>
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link eventKey="first">Tab 1</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="second">Tab 2</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
								<Tab.Content>
									<Tab.Pane eventKey="first">
										<p>content1</p>
									</Tab.Pane>
									<Tab.Pane eventKey="second">
										<p>content2</p>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</Container>
			</div>
		);
	}
}