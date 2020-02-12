import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Home.scss';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	Button,
	Card,
	CardBody,
	Container,
	Row,
	Col
} from "reactstrap";

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

import styled from 'styled-components';

const items = [
	{
		src: "assets/img/pic1.jpg",
		altText: 'pic1.jpg',
		caption: 'carsouel.carsouelCaption1',
		//button: "apply mortgage",
		//link: '/mortgage'
	},
	{
		src: "assets/img/pic2.jpg",
		altText: 'pic2.jpg',
		caption: 'Learning Your Benefits And Suitable Plans As A First Time Buyer Or New Immigrant',
		//button: 'Contact Monest',
		//link: '/contact'
	},
	{
		src: "assets/img/pic3.jpg",
		altText: 'pic3.jpg',
		caption: 'Want To Look For How You Can Afford Your Mortgage?',
		//button: 'See Mortgage calculators',
		//link: '/calculator'
	}
];

const CarsouelImg = styled.img`
    object-fit:cover;
	width: 100vw;
	height: 55vh;
`

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0,
			animating: false,
		};
	}

	componentDidMount() {
		// document.documentElement.scrollTop = 0;
		// document.scrollingElement.scrollTop = 0;
		// this.refs.main.scrollTop = 0;
	}

	nextCarouselPage = () => {
		if (!this.state.animating) {
			let nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
			this.setState({
				activeIndex: nextIndex
			})
		}
	}

	previousCarouselPage = () => {
		if (!this.state.animating) {
			let nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
			this.setState({
				activeIndex: nextIndex
			})
		}
	}

	goToCarouselPage = (newIndex) => {
		if (!this.state.animating) {
			this.setState({
				activeIndex: newIndex
			})
		}
	}

	setAnimatingStatus = (animatingStatus) => {
		this.setState({ animating: animatingStatus })
	}

	handleClick(lang) {
		i18next.changeLanguage(lang);
	}

	render() {
		const { t } = this.props;
		let slides = items.map((item, index) =>
			<CarouselItem
				onExiting={() => this.setAnimatingStatus(true)}
				onExited={() => this.setAnimatingStatus(false)}
				key={item.src}
			>
				<CarsouelImg className="CarsouelImg" width='100%' height='80%' src={require(`../assets/img/pic${index + 1}.jpg`)} />
				<div className="carousel-caption align-items-center justify-content-center m-0 p-0 carousel-text-content">
					<h1 className="carousel-text">{t(`carsouel.carsouelCaption${index + 1}`)}</h1>
				</div>
			</CarouselItem>
		);

		return (
			<div>
				<style>{`@import url(https://use.fontawesome.com/releases/v5.6.3/css/all.css)`}</style>
				<section className="section p-0 mb-5 all-slide" width='100%'>
					<div className="d-flex">
						{/* <div className="p-0 m-0"> */}
							<Carousel
								activeIndex={this.state.activeIndex}
								next={this.nextCarouselPage}
								previous={this.previousCarouselPage}
							>
								<CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToCarouselPage} />
								{slides}
								<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previousCarouselPage} />
								<CarouselControl direction="next" directionText="Next" onClickHandler={this.nextCarouselPage} />
							</Carousel>
						{/* </div> */}
					</div>
				</section>

				<section className="section section-lg pt-lg-0">
					<Container>
						<Row className="justify-content-center text-center">
							<Col lg="12" className="p-0">
								<Row className="row-grid">
									<Col lg="4">
										<Card className="card-lift--hover shadow border-0">
											<CardBody className="py-5 first-card-body">
												<i className="far fa-smile-wink fa-2x"></i>
												<h6 className="text-uppercase">
													{t('homePageFirstCardGroup.card1Title')}
												</h6>
												<p className="first-card-text">
													{t('homePageFirstCardGroup.card1Text')}
												</p>
												<Button
													className="mt-4 our-server-btn"
													color="primary"
												>
													{t('homePageFirstCardGroup.card1Button')}
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card className="card-lift--hover shadow border-0">
											<CardBody className="py-5 first-card-body">
												<i className="fas fa-language fa-2x"></i>
												<h6 className="text-uppercase">
													{t('homePageFirstCardGroup.card2Title')}
												</h6>
												<p className="first-card-text">
													{t('homePageFirstCardGroup.card2Text')}
												</p>
												<Button
													className="mt-4 our-server-btn"
													color="primary"
												>
													{t('homePageFirstCardGroup.card2Button')}
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card className="card-lift--hover shadow border-0">
											<CardBody className="py-5 first-card-body">
												<i className="fab fa-creative-commons-share fa-2x"></i>
												<h6 className="text-uppercase">
													{t('homePageFirstCardGroup.card3Title')}
												</h6>
												<p className="first-card-text">
													{t('homePageFirstCardGroup.card3Text')}
												</p>
												<Button
													className="mt-4 our-server-btn"
													color="primary"
												>
													{t('homePageFirstCardGroup.card3Button')}
												</Button>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</section>

				<div className="contact-us">
				<Container>
					<p>ARE YOU LOOKING FOR A DRIVING SCHOOL IN CANADA?
					</p>
					<Link className="contact-btn btn btn-primary" to="/contact-us" role="button">Contact Us</Link>
				</Container>
				</div>

				<section className="mt-5 section section-lg pt-lg-0">
					<Container>
						<Row className="justify-content-center text-center">
							<Col lg="12" className="p-0">
							<h2 className="mb-5">{t('homePageSecondCardGroup.groupTitle')}</h2>
								<Row className="row-grid">
									<Col lg="4">
										<Card className="card-lift--hover shadow border-0">
											<img src="coach-zhang.png" className="second-card-img" alt="..." />
											<CardBody className="py-5 second-card-body">
												<h6 className="text-uppercase">
													{t('homePageSecondCardGroup.card1Text')}
												</h6>
												<p className="description mt-2 mb-1">
													{t('homePageSecondCardGroup.card1Phone')}
												</p>
												<Button
													className="mt-4 our-server-btn"
													color="primary"
												>
													{t('homePageSecondCardGroup.card1Button')}
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card className="card-lift--hover shadow border-0">
											<img src="coach-zhou.png" className="second-card-img" alt="..." />
											<CardBody className="py-5 second-card-body">
												<h6 className="text-uppercase">
													{t('homePageSecondCardGroup.card2Text')}
												</h6>
												<p className="description mt-2 mb-1">
													{t('homePageSecondCardGroup.card2Phone')}
												</p>
												<Button
													className="mt-4 our-server-btn"
													color="primary"
												>
													{t('homePageSecondCardGroup.card2Button')}
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card className="card-lift--hover shadow border-0">
											<img src="coach-hao.png" className="second-card-img" alt="..." />
											<CardBody className="py-5 second-card-body">
												<h6 className="text-uppercase">
													{t('homePageSecondCardGroup.card3Text')}
												</h6>
												<p className="description mt-2 mb-1">
													{t('homePageSecondCardGroup.card3Phone')}
												</p>
												<Button
													className="mt-4 our-server-btn"
													color="primary"
												>
													{t('homePageSecondCardGroup.card3Button')}
												</Button>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</section>
			</div >
		);
	}
}

export default withTranslation()(Home);