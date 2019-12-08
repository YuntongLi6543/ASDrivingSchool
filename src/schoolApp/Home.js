import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../scss/Home.scss';


export default class Home extends Component {

    render() {
        return (
        	<div>
	            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				  <ol class="carousel-indicators">
				    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
				    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				  </ol>
				  <div className="carousel-inner Images">
				    <div className="carousel-item active">
				      <img src="pic2.jpg" className="d-block w-100" alt="..." />
				    </div>
				    <div className="carousel-item">
				      <img src="pic1.jpg" className="d-block w-100" alt="..." />
				    </div>
				    
				  </div>
				  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span className="sr-only">Previous</span>
				  </a>
				  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="sr-only">Next</span>
				  </a>
				</div>

				<div className="ThreeButton">
					<button className="btn btn-primary" type="submit">Button1</button>
					<button className="btn btn-primary" type="submit">Button2</button>
					<button className="btn btn-primary" type="submit">Button3</button>
				</div>

				<div className="container ThreeInfo">
					<div className="row">
						<div className="col-xs-12 col-sm-4">
							<p className="Info">Our program is a ministry-approved beginner driver education course. This program is designed to enhance the students’ driving safety knowledge and allow students to practice correct driving techniques on the road while enforcing awareness and judgment as a responsible driver.
							</p>
						</div>
						<div className="col-xs-12 col-sm-4">
							<p className="Info">INfo2</p>
						</div>
						<div className="col-xs-12 col-sm-4">
							<p className="Info">INfo3</p>
						</div>
					</div>
				</div>

				<div className="ContactUs">
					<p>ARE YOU LOOKING FOR A DRIVING SCHOOL IN CANADA?
					</p>
					<Link className="ContactBtn btn btn-primary" to="/contact-us" role="button">Contact Us</Link>
				</div>

				<div className="ThreeCoach">
					<div className="container ThreeInfo">
						<div className="row">
							<div className="col-xs-12 col-sm-4">
								<div className="card">
								  <img src="coach-zhang.png" className="card-img-top" alt="..." />
								  <div className="card-body">
								    <p className="card-text">Instructor Zhang is an excellent and experienced instructor registered by the Ontario government. 
								    </p>
								    <Button className="btn-link"><Link className="nav-link" to="/about-us">More</Link>
								    </Button>
								    </div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4">
								<div className="card">
								  <img src="coach-zhou.png" className="card-img-top" alt="..." />
								  <div className="card-body">
								    <p className="card-text">Instructor Zhou is an excellent driving professional with more than 30 years of driving experience and registered with Ontario government.  patient and enthusiastic. By making good use of unique training methods, he can ensure that students master safe driving skills in a short time.</p>
								  	<Button className="btn-link"><Link className="nav-link" to="/about-us">More</Link>
								    </Button>
								  </div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4">
								<div className="card">
								  <img src="coach-hao.png" className="card-img-top" alt="..." />
								  <div className="card-body">
								    <p className="card-text">As an excellent Instructor of both in-car and in-class instruction, instructor Hao is very experienced, responsible, and very knowledgeable with road tests and traffic regulations.</p>
								  	<Button className="btn-link"><Link className="nav-link" to="/about-us">More</Link>
								    </Button>
								  </div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
        );
    }
}