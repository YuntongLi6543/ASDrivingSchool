import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import '../scss/Courses.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class classSchedule extends Component {

    handleClick(lang) {
        i18next.changeLanguage(lang);
    }

    render() {
        const { t } = this.props;

        return (
            <div>
                <Container>
                    <h2 className="page-title">{t('classSchedule.pageTitle')}</h2>
                        <div className="classSchedule">
                            <div id="day1">
                                <Container>
                                    <h4 id="classScheduleTitle1" >{t('classSchedule.day1')}</h4>
                                    <p id="intro1">{t('classSchedule.day1Part1Text')}</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{t('classSchedule.day1Part1Text1')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part1Text2')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part1Text3')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part1Text4')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part1Text5')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part1Text6')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part1Text7')}</li>
                                    </ul>
                                    <p id="intro1">{t('classSchedule.day1Part2Text')}</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{t('classSchedule.day1Part2Text1')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part2Text2')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part2Text3')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part2Text4')}</li>
                                        <li className="list-group-item">{t('classSchedule.day1Part2Text5')}</li>
                                    </ul>
                                </Container>
                            </div>
                            <div id="day2">
                                <Container>
                                    <h4 id="classScheduleTitle2" >{t('classSchedule.day2')}</h4>
                                    <p id="intro1">{t('classSchedule.day2Part1Text')}</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{t('classSchedule.day2Part1Text1')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part1Text2')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part1Text3')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part1Text4')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part1Text5')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part1Text6')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part1Text7')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part1Text8')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part1Text9')}</li>
                                    </ul>
                                    <p id="intro1">{t('classSchedule.day2Part2Text')}</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{t('classSchedule.day2Part2Text1')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part2Text2')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part2Text3')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part2Text4')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part2Text5')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part2Text6')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part2Text7')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part2Text8')}</li>
                                        <li className="list-group-item">{t('classSchedule.day2Part2Text9')}</li>
                                    </ul>
                                </Container>
                            </div>
                            <div id="day3">
                                <Container>
                                    <h4 id="classScheduleTitle3" >{t('classSchedule.day3')}</h4>
                                    <p id="intro1">{t('classSchedule.day3Part1Text')}</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{t('classSchedule.day3Part1Text1')}</li>
                                        <li className="list-group-item">{t('classSchedule.day3Part1Text2')}</li>
                                        <li className="list-group-item">{t('classSchedule.day3Part1Text3')}</li>
                                        
                                    </ul>
                                    <p id="intro1">{t('classSchedule.day3Part2Text')}</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{t('classSchedule.day3Part2Text1')}</li>
                                        <li className="list-group-item">{t('classSchedule.day3Part2Text2')}</li>
                                        <li className="list-group-item">{t('classSchedule.day3Part2Text3')}</li>
                                        <li className="list-group-item">{t('classSchedule.day3Part2Text4')}</li>
                                        <li className="list-group-item">{t('classSchedule.day3Part2Text5')}</li>
                                        <li className="list-group-item">{t('classSchedule.day3Part2Text6')}</li>
                                    </ul>
                                </Container>
                            </div>
                            <div id="day4">
                                <Container>
                                    <h4 id="classScheduleTitle4" >{t('classSchedule.day4')}</h4>
                                    <p id="intro1">{t('classSchedule.day4Part1Text')}</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{t('classSchedule.day4Part1Text1')}</li>
                                        <li className="list-group-item">{t('classSchedule.day4Part1Text2')}</li>
                                        <li className="list-group-item">{t('classSchedule.day4Part1Text3')}</li>
                                        <li className="list-group-item">{t('classSchedule.day4Part1Text4')}</li>
                                        <li className="list-group-item">{t('classSchedule.day4Part1Text5')}</li>
                                        <li className="list-group-item">{t('classSchedule.day4Part1Text6')}</li>
                                    </ul>
                                    <p id="intro1">{t('classSchedule.day4Part2Text')}</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{t('classSchedule.day4Part2Text1')}</li>
                                        <li className="list-group-item">{t('classSchedule.day4Part2Text2')}</li>
                                        <li className="list-group-item">{t('classSchedule.day4Part2Text3')}</li>
                                    </ul>
                                </Container>
                            </div>
                        </div>
                </Container>

            </div>
        );
    }
}

export default withTranslation()(classSchedule);