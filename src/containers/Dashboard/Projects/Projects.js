import React, { Component } from 'react';
import Borrow from './Borrow';
import StudyWhere from './StudyWhere';
import './Projects.css';
import items from '../../../components/IMAGES/itemsView.png'
import swView from '../../../components/IMAGES/studywhereview.png'


class Projects extends Component {


	render() {

		return (

			<div>
					<h1 className="projectTitle">Projects</h1>
				<section className="projectsSectionContainer">
					<div><Borrow />
					<img className="itemsView" alt="borrow items" src={ items } />
					</div>
					<div><StudyWhere />
					<img className="studyWhereView" alt="view of studywhere" src={ swView } />
					</div>
				</section>
			</div>
		);
	}
}


export default Projects;