import React, { Component } from 'react';

import { englishTest, chineseTest } from '../assets/data/TestData';

import '../scss/Courses.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class OnlineTest extends Component {

    handleClick(lang) {
        i18next.changeLanguage(lang);
    }

    render() {
        const { t } = this.props;

        let lang = this.props.i18n.language;

        if (lang === 'en') {
            return (
                <div>
                    <h2 className="page-title">{t('onlineResource.onlineTest')}</h2>
                    <div>
                        <img src={require(`../assets/img/test/englishTestImg/${englishTest[0].question}`)} className="second-card-img" alt="..." />
                        <text>{englishTest[0].answer}</text>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h2 className="page-title">{t('onlineResource.onlineTest')}</h2>
                    <div>
                        <img src={require(`../assets/img/test/chineseTestImg/${chineseTest[0].question}`)} className="second-card-img" alt="..." />
                        <text>{chineseTest[0].answer}</text>
                    </div>
                </div>
            )
        }
    }
}

export default withTranslation()(OnlineTest);