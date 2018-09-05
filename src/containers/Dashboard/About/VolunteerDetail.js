import React, { Component } from 'react';
import "./About.css";
import GirlScoutLogo from '../../../components/IMAGES/GirlScoutLogo.png'
import JayceesLogo from '../../../components/IMAGES/jaycees.png'
import APOLogo from '../../../components/IMAGES/APOLogo.png'
import WGILogo from '../../../components/IMAGES/wgigraylogo.png'
import MCTLogo from '../../../components/IMAGES/mctlogogray.png'


class VolunteerDetail extends Component {

	render() {
		return (
			<div className="volunteerModal" >
				<div className="volunteerText">
				<h3>Volunteer Lifestyle</h3>
				<p>From Girl Scouting as a kid to Junior Chamber as an adult,  there has always been a drive to be active in my community and find ways to volunteer.This drive has enabled me to find ample opportunity to work in spaces that need solutions and helping hands.

				For the last five years this has brought me to a few local organizations that resonate with my career and my personal interests: Music City Tech, where I can learn about the tech industry, meet people of similar dedications, and learn as much as I can, and WomenGetIT, where I can connect with and support other women in technology.
				<br/>
				One of the things that makes me feel great about volunteering is getting to bridge communities and encourage disenfranchised groups by helping them become speakers, volunteers, and organizers.
			</p>
			<a className="linkedinarticle" target="_blank" href="https://www.linkedin.com/pulse/top-5-reasons-volunteer-conference-deanna-vickers/"><p>Read my article about volunteering!</p></a>
			</div>

			<div className="vologogroup">
			<img className="vologo" alt="GSLogo" src={ GirlScoutLogo } />
			<img className="vologo" alt="JCLogo" src={ JayceesLogo } />
			<img className="vologo" alt="APOLogo" src={ APOLogo } />
			<img className="vologo" alt="WGILogo" src={ WGILogo } />
			<img className="vologo" alt="GSLogo" src={ MCTLogo } />
			</div>

			</div>
		);
	}
}

export default VolunteerDetail;