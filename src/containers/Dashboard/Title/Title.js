import React, { Component } from 'react';
import './Title.css';
import titleLogo from '../../../components/IMAGES/deannalogolarge.png';

class Title extends Component {



  render() {
      return (

			<div>
              <img className="titleLogo" alt="logo" src={titleLogo} />
			  <h1 className="titleName">DEANNA VICKERS</h1>
			  <h4>Heart of a user, brain of a developer</h4>
            </div>
      );
    }
  }


export default Title;