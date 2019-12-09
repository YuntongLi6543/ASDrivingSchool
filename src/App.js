import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import TopBar from './schoolApp/TopBar.js';
import Home from './schoolApp/Home.js';
import Courses from './schoolApp/Courses.js';
import AboutUs from './schoolApp/AboutUs.js';
import ContactUs from './schoolApp/ContactUs.js';
import OnlineTranslation from './schoolApp/OnlineTranslation.js';
import OnlineResources from './schoolApp/OnlineResources.js';
import Footer from './schoolApp/Footer.js';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  render() {
    const { t } = this.props;

    return (
      <BrowserRouter>
        <div>
          <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
            <button onClick={() => this.handleClick('en')} >
              English
            </button>
            <button onClick={() => this.handleClick('zh')} >
              Chinese
            </button>
          </nav>
          <h3>{t('languageExample')}</h3>
          <TopBar />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/courses" component={Courses} />
          <Route path="/online-translation" component={OnlineTranslation} />
          <Route path="/online-resources" component={OnlineResources} />
          <Redirect from="/*" to="/" />
        </Switch>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default withTranslation()(App);
