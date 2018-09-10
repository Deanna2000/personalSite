import React, { Component } from 'react';
import './Projects.css';
import studywhereLogo from '../../../components/IMAGES/studywherelogowhite.png';



class StudyWhere extends Component {



  render() {
      return (

			<div className="projects">
			<div>
              <img className="studywhereLogo" alt="logo" src={studywhereLogo} />
			  </div>
			  <p>Web application to help NSS students find places to study around Nashville. It’s built in Python/Django with Bootstrap for front end styling and a Google Maps integration and a custom API to store the user generated map data.  A beta version will soon be available at <a className='linkcolor' href='www.studywhereapp.com'>www.studywhereapp.com</a>. For now, please check out my <a className="linkcolor" href='https://github.com/Deanna2000/studywhere'>github repo</a> to see progress. </p>
            </div>
      );
    }
  }


export default StudyWhere;