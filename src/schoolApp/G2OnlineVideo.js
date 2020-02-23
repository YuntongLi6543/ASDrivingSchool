import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Iframe from 'react-iframe';
import '../scss/G2OnlineVideo.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class G2OnlineVideo extends Component {

    handleClick(lang) {
		i18next.changeLanguage(lang);
	}

    render() {
        const { t } = this.props;
        return (
            <div>
                <Container className="main-content">
                    <h2 className="main-title">{t('g2OnlineVideo.mainTitle')}</h2>
                    <Row>
                        <Col md="12">
                            <div id="video-01">
                                <Iframe url="https://drive.google.com/file/d/1pCag8RnO6zLqtrltbcTfIw7IrTLA0d2h/preview"
                                    id="video-01"
                                    width="100%"
                                    height='600px'
                                    position="relative">
                                    </Iframe>
                                    <h4>{t('g2OnlineVideo.g2OnlineVideo1')}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-02">
                                <Iframe url="https://drive.google.com/file/d/1XqZgiAB-AGQ_Bhw6iFHcE0Q8BFPVvKVQ/preview"
                                    id="video-02"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                            </div>
                            <h4>{t('g2OnlineVideo.g2OnlineVideo2')}</h4>
                        </Col>
                        <Col md="12">
                            <div id="video-03">
                                <Iframe url="https://drive.google.com/file/d/1R_PAiTuQh9fzB9kafunZbLLWGdsLnJii/preview"
                                    id="video-03"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                                    <h4>{t('g2OnlineVideo.g2OnlineVideo3')}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-04">
                                <Iframe url="https://drive.google.com/file/d/1m78V41PirAjb8H6aXkfaxqPRd9fCuo_O/preview"
                                    id="video-04"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                                    <h4>{t('g2OnlineVideo.g2OnlineVideo4')}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-05">
                                <Iframe url="https://drive.google.com/file/d/1w3_rmhmDDYxAVV33Icd97l4mPOmXq1w9/preview"
                                    id="video-05"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                                    <h4>{t('g2OnlineVideo.g2OnlineVideo5')}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-06">
                                <Iframe url="https://drive.google.com/file/d/17fALsqLfslRvOeBQabDYB8M30q6v8tii/preview"
                                    id="video-06"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                                    <h4>{t('g2OnlineVideo.g2OnlineVideo6')}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-07">
                                <Iframe url="https://drive.google.com/file/d/1xg7_wqLgGknb9mT8REu6K96_fXqfekKY/preview"
                                    id="video-07"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                                    <h4>{t('g2OnlineVideo.g2OnlineVideo7')}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-08">
                                <Iframe url="https://drive.google.com/file/d/1pCag8RnO6zLqtrltbcTfIw7IrTLA0d2h/preview"
                                    id="video-08"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                                    <h4>{t('g2OnlineVideo.g2OnlineVideo8')}</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

        );
    }
}

export default withTranslation()(G2OnlineVideo);