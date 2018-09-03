import React, { Component } from 'react';
import './About.css';
import NavBar from '../NavBar/NavBar';


class About extends Component {


	render() {

		return (

			<div>
				{/* <h1 className="aboutTitle">Getting to Know Me</h1> */}
				<section className="aboutSectionContainer">
					<h3 className="coreFocus">My Core Focus</h3>
					<h3 className="volunteer">Volunteer Lifestyle</h3>
					<h3 className="careerChange">Changing careers</h3>
					<h3 className="funStuff">Fun Stuff</h3>
				</section>
			</div>
		);
	}
}


export default About;