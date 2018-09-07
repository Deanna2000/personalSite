import React, { Component } from 'react';
import './Title.css';
import titleLogo from '../../../components/IMAGES/deannalogolarge.png';
import { Parallax } from 'react-scroll-parallax';


class Title extends Component {



  render() {
      return (

			<div>
			<Parallax>
              <img className="titleLogo" alt="logo" src={titleLogo} />
			  <h1 className="titleName">DEANNA VICKERS</h1>
			  <h4>Heart of a user, brain of a developer</h4>
 			</Parallax>
            </div>
      );
    }
  }


export default Title;