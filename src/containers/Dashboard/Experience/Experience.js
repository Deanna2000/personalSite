import React, { Component } from 'react';
import './Experience.css';
import { Carousel } from 'react-bootstrap';
// import profile from '../../../components/IMAGES/deannaProfile.jpg'


class Experience extends Component {


	render() {

		return (

			<div>
				<h1 className="experienceTitle">Experience</h1>
				<section className="experienceSectionContainer">
				<div className="experienceItems">
					<h4>Nashville Software School</h4>
					<h5>Full Stack Developer</h5>
					<h6>April - September, 2018</h6>
					<p>Learned OOP fundamentals through group and individual projects. Created single page applications in Javascript using React.js, CSS3 and Bootstrap. Leveraged Django for creating server-side Python web applications. Used an API with open-source JSON-Server library and used basic SQL commands to create tables and foreign key constraints and to perform CRUD operations. </p>
					</div>
					<div className="experienceItems">
					<h4>Acklen Avenue</h4>
					<h5>Senior Engagement Manager</h5>
					<h6>2014 - 2017</h6>
					<p>Worked with clients as main point of contact on custom software deliveries. Increased client participation and satisfaction by adding designers to our teams and connecting more frequently with clients to confirm design decisions as we built their products. Assisted leadership with internal communications by starting up monthly all hands sessions to review projects, processes, and policies.</p>
					</div>
					<div className="experienceItems">
					<h4>appendTo</h4>
					<h5>Director of Client Engagement</h5>
					<h6>2013 - 2014</h6>
					<p>Transitioned the software delivery team to Agile by adding Scrum practices across all projects. Served as an escalation point for all clients. Provided coaching and mentoring for team members. </p>
					</div>

					{/* <img className="profilepic" alt="deanna profile" src={profile} /> */}
				{/* </section> */}


</section>
</div>
		);
	}
}


export default Experience;