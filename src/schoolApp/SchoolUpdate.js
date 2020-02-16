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

        return (
            <div>
                <Container>
                    <h2 className="page-title">{t('schoolUpdate.pageTitle')}</h2>
                    <div className="updateDetails">
                        <div id="first">
                            <Container>
                                <Card>
                                    <Card.Body>
                                        <h4 id="newsTitle1" >{t('SchoolUpdate.news1Title')}</h4>
                                        <p id="intro1">{t('SchoolUpdate.news1Text')}</p>
                                        <div className = "shareBotton">
                                            <EmailShareButton><EmailIcon></EmailIcon></EmailShareButton>
                                            <TwitterShareButton><TwitterIcon></TwitterIcon></TwitterShareButton>
                                            <WeiboShareButton><WeiboIcon></WeiboIcon></WeiboShareButton>
                                            <FacebookShareButton><FacebookIcon></FacebookIcon></FacebookShareButton>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                        <div id="second">
                            <Container>
                                <Card>
                                    <Card.Body>
                                        <h4 id="newsTitle2" >{t('SchoolUpdate.news2Title')}</h4>
                                        <p id="intro2">{t('SchoolUpdate.news2Text')}</p>
                                        <div className = "shareBotton">
                                            <EmailShareButton><EmailIcon></EmailIcon></EmailShareButton>
                                            <TwitterShareButton><TwitterIcon></TwitterIcon></TwitterShareButton>
                                            <WeiboShareButton><WeiboIcon></WeiboIcon></WeiboShareButton>
                                            <FacebookShareButton><FacebookIcon></FacebookIcon></FacebookShareButton>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                        <div id="third">
                            <Container>
                                <Card>
                                    <Card.Body>
                                        <h4 id="newsTitle3" >{t('SchoolUpdate.news3Title')}</h4>
                                        <p id="intro3">{t('SchoolUpdate.news3Text')}</p>
                                        <div className = "shareBotton">
                                            <EmailShareButton><EmailIcon></EmailIcon></EmailShareButton>
                                            <TwitterShareButton><TwitterIcon></TwitterIcon></TwitterShareButton>
                                            <WeiboShareButton><WeiboIcon></WeiboIcon></WeiboShareButton>
                                            <FacebookShareButton><FacebookIcon></FacebookIcon></FacebookShareButton>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                    </div>
                </Container>

            </div>
        );
    }
}

export default withTranslation()(SchoolUpdate);