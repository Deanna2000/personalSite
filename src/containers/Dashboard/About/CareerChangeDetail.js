import React, { Component } from 'react';
import "./About.css";



class CareerChangeDetail extends Component {

	render() {
		return (
			<div className="careerChangeModal" >
				<div className="careerChangeText">
					<h3>Career Change</h3>
					<p>As a long time event organizer, I've had a chance to build a large network of developer friends, many of whom I met while they were in a bootcamp at Nashville Software School (NSS). I have encouraged friends and family to attend NSS as a way to get into tech and create a new career. My work in support roles (Project Manager, Scrum Master, Product Owner) led me to be more and more curious about what goes on behind the development curtain. I had done some self-study online, however without a way to implement what I learned, I quickly lost the skills I was learning. I never got to a point from self-learning to be comfortable enough to jump in and work on volunteer code projects. I needed a way to focus more time on building things and some close collaboration in order to move forward faster.

					<br/>
					<br/>
					Enter NSS, a place where I can get both of those things and so much more. I am almost finished with a 6 month bootcamp in HTML/CSS/JavaScript, React, Python and Django. I am getting exposure to architect level design decision making as well as industry standards and practices. The possibilities for where I can take my career with these new skills are wide open. As a product owner, I have several ideas of my own that I hope to bring to life, and as a project manager, I hope to provide value as a technical leader in an organization.</p>
					<a className="linkedinarticle" target="_blank" href="https://www.linkedin.com/pulse/transitioning-tech-job-easy-deanna-vickers-2/"><p>See my article about Career Transition</p></a>
					<a className="linkedinarticle" target="_blank" href="https://www.linkedin.com/pulse/re-schooling-your-career-deanna-vickers/"><p>See my article about NSS</p></a>
				</div>

			</div>
		);
	}
}

export default CareerChangeDetail;