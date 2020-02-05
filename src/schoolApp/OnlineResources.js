import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import '../scss/OnlineResources.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class OnlineResources extends Component {

	handleClick(lang) {
		i18next.changeLanguage(lang);
	}

	render() {
		const { t } = this.props;
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
										<Nav.Link eventKey="second">Question</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
								<Tab.Content>
									<Tab.Pane eventKey="first">
										<p>content1</p>
									</Tab.Pane>
									<Tab.Pane eventKey="second">
										<div className="question-title">
											<h2>{t('onlineResource.questionTitle')}</h2>
										</div>
										<Link to="/files/Trivia_Questionaire.docx" target="_blank" download>Download</Link>
										<Link to="/files/笔试题中文版.docx" target="_blank" download>中文版下载</Link>
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
export default withTranslation()(OnlineResources);