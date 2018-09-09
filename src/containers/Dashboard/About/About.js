import React, { Component } from 'react';
import Volunteer from './Volunteer';
import CoreFocus from './CoreFocus';
import CareerChange from './CareerChange';
import FunStuff from './FunStuff';


class About extends Component {


	render() {

		return (

			<div>
				<h1 className="aboutTitle">About</h1>
				<section className="aboutSectionContainer">
					<CoreFocus />
					<Volunteer />
					<CareerChange />
					<FunStuff />
				</section>
			</div>
		);
	}
}


export default About;