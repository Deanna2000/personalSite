import React, { Component } from 'react';
import Volunteer from './Volunteer';
import CoreFocus from './CoreFocus';
import CareerChange from './CareerChange';


class About extends Component {


	render() {

		return (

			<div>
				{/* <h1 className="aboutTitle">Getting to Know Me</h1> */}
				<section className="aboutSectionContainer">
					<CoreFocus />
					<Volunteer />
					<CareerChange />
					<h3 className="funStuff">Fun Stuff</h3>
				</section>
			</div>
		);
	}
}


export default About;