import React, { Component } from 'react';
import './Projects.css';
import borrowLogo from '../../../components/IMAGES/BorrowLogoWhite.png';



class Borrow extends Component {



  render() {
      return (

			<div>
              <img className="borrowLogo" alt="logo" src={borrowLogo} />
			  <p>Web application to help manage things you borrow and loan to friends. It’s built in React.js with react-bootstrap. Firebase is used for data storage as well as a social login option. A beta version is available at <a href='www.theborrowapp.com'>www.theborrowapp.com</a></p>

            </div>
      );
    }
  }


export default Borrow;