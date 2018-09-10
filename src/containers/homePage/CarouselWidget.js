import React, { Component } from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import athena1 from '../../components/IMAGES/athena3.jpg'
import lescat from '../../components/IMAGES/Lescat.png'
import animals from '../../components/IMAGES/zoeathenalester.jpg'

class CarouselWidget extends Component {
	render() {

		return (

			<div className="carouselFooter">

				<Carousel>
					<Carousel.Item >
						<img width={200} height={200} alt="200x200" src={athena1} />
						<Carousel.Caption >
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img width="200px" height="200px" alt="200x200" src={lescat} />
						<Carousel.Caption>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img width={200} height={200} alt="200x200" src={animals} />
						<Carousel.Caption>
						</Carousel.Caption>
					</Carousel.Item>

				</Carousel>
			</div>
		);
	}
}


export default CarouselWidget;