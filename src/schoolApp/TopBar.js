import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../scss/TopBar.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class TopBar extends Component {

  handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  render() {
    const { t } = this.props;

    return (
      // Top Nav 
      <div className="nav-part">
        <div className="top-nav-bar">
          {/* <Container> */}
          <div className="language container">
            <div onClick={() => this.handleClick('en')} className="en-lang">
                English
              </div>
              <div onClick={() => this.handleClick('zh')} className="ch-lang">
                中文
              </div>
            </div>
            {/* </Container> */}
        </div>
        <nav className="navbar navbar-expand-lg navbar-light static-top nav-bar">
          <Container>
            <Link className="navbar-brand brand col-xs-8 col-md-6" to="/home">
              <img className="logo-image" src="LOGO.png" width="100" height="100" alt="" />
              <p className="text-uppercase school-name">{t('topBar.allSuccessfulDrivingSchool')}</p>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">{t("topBar.home")}
                  {/* <span className="sr-only">(current)</span> */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">{t("topBar.aboutUs")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">{t("topBar.courses")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/online-translation">{t("topBar.onlineTranslation")}</Link>
                </li>
                <li className="nav-item online-resource">
                  <Link className="nav-link" to="/online-resources">{t("topBar.onlineResources")}</Link>
                </li>
              </ul>
            </div>
          </Container>
        </nav>
      </div>
    );
  }
}

export default withTranslation()(TopBar);