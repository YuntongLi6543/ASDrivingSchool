import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import{
    EmailShareButton,
    TwitterShareButton,
    WeiboShareButton,
    FacebookShareButton,
    TwitterIcon,
    WeiboIcon,
    FacebookIcon,
    EmailIcon
} from "react-share"

import '../scss/Courses.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class SchoolUpdate extends Component {

    handleClick(lang) {
        i18next.changeLanguage(lang);
    }

    render() {
        const { t } = this.props;
        const shareUrl = 'http://github.com';
        const title = 'DEMO';

        return (
            <div>
                <Container>
                    <h2 className="page-title">{t('schoolUpdate.pageTitle')}</h2>
                    <div className="updateDetails">
                        <div id="first">
                            <Container>
                                <Card>
                                    <Card.Body>
                                        <h4>{t('schoolUpdate.blog1Title')}</h4>
                                        <p>{t('schoolUpdate.blog1Text')}</p>

                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                        <div id="second">
                            <Container>
                                <Card>
                                    <Card.Body>
                                        <h4>{t('schoolUpdate.blog2Title')}</h4>
                                        <p>{t('schoolUpdate.blog2Text')}</p>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                        <div id="third">
                            <Container>
                                <Card>
                                    <Card.Body>
                                        <h4>{t('schoolUpdate.blog3Title')}</h4>
                                        <p>{t('schoolUpdate.blog3Text')}</p>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                    </div>
                    <div className = "shareBotton">
                        <EmailShareButton
                            url={shareUrl}
                            quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <EmailIcon size={32} round />
                        </EmailShareButton>
                        <TwitterShareButton 
                            url={shareUrl}
                            quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <TwitterIcon size={32} round />
            
                        </TwitterShareButton>
                        <WeiboShareButton 
                            url={shareUrl}
                            quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <WeiboIcon size={32} round />
            
                        </WeiboShareButton>
                        <FacebookShareButton
                            url={shareUrl}
                            quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </div>
                </Container>

            </div>
        );
    }
}

export default withTranslation()(SchoolUpdate);