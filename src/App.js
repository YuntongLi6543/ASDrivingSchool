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
import OnlineVideo from './schoolApp/OnlineVideo';
import G2OnlineVideo from './schoolApp/G2OnlineVideo';
import GOnlineVideo from './schoolApp/GOnlineVideo';
import ClassSchedule from './schoolApp/ClassSchedule';
import SchoolUpdate from './schoolApp/SchoolUpdate';

import { withTranslation } from 'react-i18next';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <BrowserRouter>
          <TopBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/courses" component={Courses} />
          <Route path="/online-translation" component={OnlineTranslation} />
          <Route path="/online-resources" component={OnlineResources} />
          <Route path="/G-online-video" component={GOnlineVideo} />
          <Route path="/G2-online-video" component={G2OnlineVideo} />
          <Route path="/online-video" component={OnlineVideo} />
          <Route path="/class-schedule" component={ClassSchedule} />
          <Route path="/school-update" component={SchoolUpdate} />
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
