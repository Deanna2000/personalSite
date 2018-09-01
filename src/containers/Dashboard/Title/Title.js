import React, { Component } from 'react';
import './Title.css';
import titleLogo from '../../../components/IMAGES/deannalogolarge.png';


class Title extends Component {



  render() {
      return (

			<div>

              <img className="titleLogo" alt="logo" src={titleLogo} />
			  <h1>DEANNA VICKERS</h1>

            </div>
      );
    }
  }


export default Title;