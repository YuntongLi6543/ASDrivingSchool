import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Iframe from 'react-iframe';
import '../scss/G2OnlineVideo.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class GOnlineVideo extends Component{
    handleClick(lang) {
		i18next.changeLanguage(lang);
	}

    render(){
        const { t } = this.props;

        return(
            <div>
                <Container className = "main-content">
                    <h2 className = "main-title">{t('gOnlineVideo.mainTitle')}</h2>
                    <Row>
                        <Col md = "6">
                            <div id = "video-01">
                            <Iframe url="https://drive.google.com/file/d/1nTyAN7MDWApHEIBXZqSXV63kBbRsFns7/preview" 
                            id = "video-01"
                            width = "100%"
                            height = "480px"
                            position = "relative"></Iframe>
                            <h4>{t('gOnlineVideo.gOnlineVideo1')}</h4>
                            </div>
                        </Col>
                        <Col md = "6">
                            <div id = "video-02">
                            <Iframe url="https://drive.google.com/file/d/1Qlp9-R18f_nN3m2T1IRg-L248NAyDfMQ/preview" 
                            id = "video-02"
                            width = "100%"
                            height = "480px"
                            position = "relative"></Iframe>
                            <h4>{t('gOnlineVideo.gOnlineVideo2')}</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = "6">
                            <div id = "video-03">
                            <Iframe url="https://drive.google.com/file/d/19SjFVxMN3atU6_SudMdaLfD2T03iER2v/preview" 
                            id = "video-03"
                            width = "100%"
                            height = "480px"
                            position = "relative"></Iframe>
                            <h4>{t('gOnlineVideo.gOnlineVideo3')}</h4>
                            </div>
                        </Col>
                        <Col md = "6">
                            <div id = "video-04">
                            <Iframe url="https://drive.google.com/file/d/1pCag8RnO6zLqtrltbcTfIw7IrTLA0d2h/preview" 
                            id = "video-04"
                            width = "100%"
                            height = "480px"
                            position = "relative"></Iframe>
                            <h4>{t('gOnlineVideo.gOnlineVideo4')}</h4>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

            </div>

        );
    }
}

export default withTranslation()(GOnlineVideo);