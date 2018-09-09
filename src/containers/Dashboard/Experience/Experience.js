import React, { Component } from 'react';
import './Experience.css';
import profile from '../../../components/IMAGES/deannaProfile.jpg'


class Experience extends Component {


	render() {

		return (

			<div>
					<h1 className="experienceTitle">Experience</h1>
				<section className="eperienceSectionContainer">
					<img className="profilepic" alt="deanna profile" src={ profile } />
				</section>
			</div>
		);
	}
}


export default Experience;