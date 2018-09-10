import React, { Component } from 'react';
import './Projects.css';
import borrowLogo from '../../../components/IMAGES/BorrowLogoWhite.png';



class Borrow extends Component {



  render() {
      return (

			<div className="projects">
			<div>
              <img className="borrowLogo" alt="logo" src={borrowLogo} />
			  </div>
			  <p>Web application to help manage things you borrow and loan to friends. It’s built in React.js with react-bootstrap. Data is managed with JSON server.  A beta version will soon be available at <a className="linkcolor" href='www.theborrowapp.com'>www.theborrowapp.com</a>. For now, please check out my <a className="linkcolor" href='https://github.com/Deanna2000/capstone-project-cohort25'>github repo</a> to see progress. </p>
            </div>
      );
    }
  }


export default Borrow;