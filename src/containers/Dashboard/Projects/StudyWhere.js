import React, { Component } from 'react';
import './Projects.css';
import studywhereLogo from '../../../components/IMAGES/studywherelogowhite.png';



class StudyWhere extends Component {



  render() {
      return (

			<div>
              <img className="studywhereLogo" alt="logo" src={studywhereLogo} />
			  <p>Web application to help NSS students find places to study around Nashville. It’s built in Python/Django with Bootstrap for front end styling and a Google Maps integration and a custom API to store the user generated map data.  See <a href='www.studywhereapp.com'>www.studywhereapp.com</a> to try it.</p>
            </div>
      );
    }
  }


export default StudyWhere;