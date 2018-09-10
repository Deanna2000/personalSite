import React, { Component } from 'react';
import './Experience.css';


// import profile from '../../../components/IMAGES/deannaProfile.jpg'


class Experience extends Component {


	render() {

		return (

			<div>
				<h1 className="experienceTitle">Experience</h1>
				<section className="experienceSectionContainer">
					<div className="experienceItems">
					<h4>Nashville Software School (4-9/2018</h4>
					<h6>Full Stack Developer</h6></div>
					<p>Learned OOP fundamentals through group and individual projects. Created single page applications in Javascript using React.js, CSS3 and Bootstrap. Leveraged Django for creating server-side Python web applications. Used an API with open-source JSON-Server library and used basic SQL commands to create tables and foreign key constraints and to perform CRUD operations. </p>
					<div className="experienceItems">
					<h4>Acklen Avenue (2014-2017)</h4>
					<h6>Senior Engagement Manager</h6>
					</div>
					<p>Worked with clients as main point of contact on custom software deliveries. Increased client participation and satisfaction by adding designers to our teams and connecting more frequently with clients to confirm design decisions as we built their products. Assisted leadership with internal communications by starting up monthly all hands sessions to review projects, processes, and policies.</p>
					<div className="experienceItems">
					<h4>appendTo (2013-2014)</h4>
					<h6>Director of Client Engagement</h6>
					</div>
					<p>Transitioned the software delivery team to Agile by adding Scrum practices across all projects. Served as an escalation point for all clients. Provided coaching and mentoring for team members. </p>
					<p>For more detail on my work history, skills, and certifications, you can see my <a className='linkcolor' href='http://linkedin.com/deannavickers'>LinkedIn Profile</a>.</p>
</section>
<section >
<div className="skillsLogos">
<i className="skillsIcons devicon-amazonwebservices-plain-wordmark"></i>
<i className="skillsIcons devicon-bootstrap-plain-wordmark"></i>
<i className="skillsIcons devicon-css3-plain-wordmark"></i>
<i className="skillsIcons devicon-django-plain-wordmark"></i>
<i className="skillsIcons devicon-git-plain-wordmark"></i>
<i className="skillsIcons devicon-github-plain-wordmark"></i>
<i className="skillsIcons devicon-grunt-plain-wordmark"></i>
<i className="skillsIcons devicon-html5-plain-wordmark"></i>
<i className="skillsIcons devicon-javascript-plain"></i>
<i className="skillsIcons devicon-jquery-plain-wordmark"></i>
<i className="skillsIcons devicon-python-plain-wordmark"></i>
<i className="skillsIcons devicon-react-original-wordmark"></i>
</div>

</section>
</div>
		);
	}
}



export default Experience;