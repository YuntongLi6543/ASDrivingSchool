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

export default class App extends Component {
  constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <BrowserRouter>
              <div>
                <TopBar />
              </div>
              <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/home" component={ Home }/>
                <Route path="/about-us" component={ AboutUs }/>
                <Route path="/contact-us" component={ ContactUs }/>
                <Route path="/courses" component={ Courses }/>
                <Route path="/online-translation" component={ OnlineTranslation }/>
                <Route path="/online-resources" component={ OnlineResources }/>
                <Redirect from="/*" to="/"/>
              </Switch>
              <div>
                <Footer />
              </div>
            </BrowserRouter>
        )
    }
}
