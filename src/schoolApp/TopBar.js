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
      <div className="Nav">
        <div className="TopNav">
          {/* <p className="Language">language</p> */}
          <button onClick={() => this.handleClick('en')} >
              English
            </button>
            <button onClick={() => this.handleClick('zh')} >
              中文
            </button>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light static-top NavBar">
          <Container>
            <Link className="navbar-brand Brand col-xs-8 col-md-6" to="/home">
              <img className="LogoImage" src="LOGO.png" width="100" height="100" alt="" />
              <p className="text-uppercase SchoolName">{t('allSuccessfulDrivingSchool')}</p>

            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">{t("home")}
                  <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">{t("aboutUs")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">{t("courses")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/online-translation">{t("onlineTranslation")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/online-resources">{t("onlineResources")}</Link>
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