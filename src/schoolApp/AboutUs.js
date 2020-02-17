import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../scss/AboutUs.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class AboutUs extends Component {

	handleClick(lang) {
		i18next.changeLanguage(lang);
	}

    render() {
		const { t } = this.props;
        return (
        	<div className="AboutUs">
	            <Container>
		            <Row>
		            	<Col xs={12} md={12}>
					      <h2 className="page-title">{t('aboutUs.aboutASDrivingSchool')}</h2>
					    </Col>
						{/* introduction */}
					    <Col xs={12} md={5}>
					       <Card.Img className="schoolImage" src={require(`../assets/img/asdrivingschool.png`)} />
					    </Col>

					    <Col xs={12} md={7}>
					      	<p className="Content">
							  {t('aboutUs.aboutASDrivingSchoolContent.para1')}
							  <br />
							  {t('aboutUs.aboutASDrivingSchoolContent.para2')}
							  <br />
							  {t('aboutUs.aboutASDrivingSchoolContent.para3')}
					    	</p>
					    </Col>
		  			</Row>
	            </Container>

	            <div className="ThreeCoachInfo">
	            <Container>
	           		<Row>
	            		<Col xs={12} md={12} className="title">
					    	<h2 className="AU-Header-Coach">{t('aboutUs.featuredInstructors')}</h2>
						</Col>
		  				{/* coach-Zhang */}
		  			<Row className="coach-zhang">
						<Col xs={12} md={7}>
					      	<p className="Content">
							{t('aboutUs.coachZhang.para1')}
					      	<br /><br />{t('aboutUs.coachZhang.para2')}
					      	<br /><br />{t('aboutUs.coachZhang.para3')}
					      	<br /><br />{t('aboutUs.coachZhang.tel')}
					    	</p>
					    </Col>
						<Col xs={12} md={5} >
						    <Card.Img className="Image" src={require(`../assets/img/coach-zhang.png`)} />
						</Col>
					</Row>
					</Row>
				</Container>
				    {/* coach-Zhou */}
	
				<Container className="coach-zhou">
					<Row>
					    <Col xs={12} md={5}>
					       <Card.Img className="Image" src={require(`../assets/img/coach-zhou.png`)} />
					    </Col>

					    <Col xs={12} md={7}>
					      	<p className="Content">{t('aboutUs.coachZhou.para1')}
					      	<br /><br />{t('aboutUs.coachZhou.para2')}
					      	<br /><br />{t('aboutUs.coachZhang.tel')}
					    	</p>
					    </Col>
					</Row>
				</Container>
				
				 {/* coach-Hao */}
				<Container className="coach-hao">
					<Row>
					    <Col xs={12} md={7}>
					      	<p className="Content">{t('aboutUs.coachHao.para1')}
					      	<br /><br />{t('aboutUs.coachHao.para2')}
					      	<br /><br />{t('aboutUs.coachHao.tel')}
					    	</p>
					    </Col>
					    <Col xs={12} md={5}>
					       <Card.Img className="Image" src={require(`../assets/img/coach-hao.png`)} />
					    </Col>
					</Row>
	            </Container>
	            </div>
  			</div>
        );
    }
}

export default withTranslation()(AboutUs);