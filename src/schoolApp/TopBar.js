import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../scss/TopBar.scss';

export default class TopBar extends Component {

    render() {
        return (
          // Top Nav 
            <div className="Nav">
                <div className="TopNav">
                  <p className="Language">language</p>
                </div> 
              <nav className="navbar navbar-expand-lg navbar-light static-top NavBar">
                <Container>
                  <Link className="navbar-brand Brand col-xs-8 col-md-6" to="/home">
                      <img className="LogoImage" src="LOGO.png" width="100" height="100"alt="" />
                      <p className="text-uppercase SchoolName">All successful driving school</p>
              
                  </Link>
              
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                      
                <div className="collapse navbar-collapse" id="navbarResponsive">
                 <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/home">Home
                          <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/online-translation">Online Translation</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/online-resources">Online Resources</Link>
                    </li>
                  </ul>
                </div>
              </Container>
            </nav>
          </div>               
        );
    }
}