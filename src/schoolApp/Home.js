import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
							<p>Our program is a ministry-approved beginner driver education course. This program is designed to enhance the students’ driving safety knowledge and allow students to practice correct driving techniques on the road while enforcing awareness and judgment as a responsible driver.

							After completing the course, students will be entered into the Driver Education System (DES) learning record. The system will automatically generate a personal driving history referred to as Driver Licence History (DLH).

							This course not only shorten the road test (G1 Exit G2) waiting period by 4 months (8 months after the G1 written tests), but also reduces your insurance costs.

							Teaching material is of Ministry standards and includes: video animation, case by case breakdown method, teacher-student interaction, a total of 40 hours course: 20 hours in-classroom (a total of 8 classes), 10 hours of homework and 10 hours in-vehicle practice.

							Full Course- Regular Package
							Full Course-Plus Package</p>
						</div>
						<div className="col-xs-12 col-sm-4">
							<p>INfo2</p>
						</div>
						<div className="col-xs-12 col-sm-4">
							<p>INfo3</p>
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
								    <p className="card-text">Instructor Zhang is an excellent and experienced instructor registered by the Ontario government. He is energetic, patient and detail-oriented, and proficient in traffic regulations and road test skills in Ontario. And also, he is good at using easy-to-grasp and efficient visualized teaching methods to enable students to master Essentials of safe driving. In addition, he usually implements intensive training before the test according to the characteristics of the test centers, which results in a high passing rate. Therefore, students gave him wonderful reviews and feedback. Tel：6479852174</p>
								  </div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4">
								<div className="card">
								  <img src="coach-zhou.png" className="card-img-top" alt="..." />
								  <div className="card-body">
								    <p className="card-text">Instructor Zhou is an excellent driving professional with more than 30 years of driving experience and registered with Ontario government. He is expert, responsible, patient and enthusiastic. By making good use of unique training methods, he can ensure that students master safe driving skills in a short time.  He is also familiar with the key points of road test, and usually makes appropriate arrangement of road tests in small towns so that the road test passing rate is over 98%. Tel：6479246776</p>
								  </div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4">
								<div className="card">
								  <img src="coach-hao.png" className="card-img-top" alt="..." />
								  <div className="card-body">
								    <p className="card-text">As an excellent Instructor of both in-car and in-class instruction, instructor Hao is very experienced, responsible, and very knowledgeable with road tests and traffic regulations.  He can accurately grasp the characteristics of each student, and implement targeted road training and theoretical teaching accordingly.  And also, he explains and analyses difficult and confusing points by using pictures, videos and other methods, which won a lot of praise from students. Tel：6475199286</p>
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