import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import '../scss/Courses.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class Courses extends Component {

    handleClick(lang) {
        i18next.changeLanguage(lang);
    }

    render() {
        const { t } = this.props;

        return (
            <div>
                <Container>
                    <h2 className="page-title">{t('courses.pageTitle')}</h2>
                    <div className="courseDetails">
                        <div id="firstCourse">
                            <Container>
                                <h4 id="courseTitle1" >{t('courses.course1Title')}</h4>
                                <p id="intro1">{t('courses.course1Text')}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{t('courses.course1ListText1')}</li>
                                    <li className="list-group-item">{t('courses.course1ListText2')}</li>
                                    <li className="list-group-item">{t('courses.course1ListText3')}</li>
                                    <li className="list-group-item">{t('courses.course1ListText4')}</li>
                                </ul>
                            </Container>
                        </div>
                        <div id="secondCourse">
                            <Container>
                                <h4 id="courseTitle2" >{t('courses.course2Title')}</h4>
                                <p id=" intro2">{t('courses.course2Text')}</p>
                            </Container>
                        </div>
                        <div id="thirdCourse">
                            <Container>
                                <h4 id="courseTitle3" >{t('courses.course3Title')}</h4>
                                <p id="intro3">{t('courses.course3Text')}</p>
                            </Container>
                        </div>
                    </div>
                </Container>

            </div>
        );
    }
}

export default withTranslation()(Courses);