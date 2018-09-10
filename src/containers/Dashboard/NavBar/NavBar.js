import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../../../components/IMAGES/deannalogolarge.png';
import Social from '../../homePage/Social'

class NavBar extends Component {




	render() {


		return (
			<div className="navContainer">
				<Navbar fixedTop inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#titleSection">
								<img className="logo" alt="logo" src={logo} />
							</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem className="navItem" eventKey={1} href="#aboutSection">
								About
      						</NavItem>
							<NavItem className="navItem" eventKey={2} href="#projectsSection">
								Projects
      						</NavItem>
							<NavItem className="navItem" eventKey={2} href="#experienceSection">
								Experience
     						 </NavItem>
							<NavItem className="navItem" eventKey={2} href="#contactSection">
								Contact
      						</NavItem>
						</Nav>
						<div className="smallSocial">
						<Social />
						</div>
					</Navbar.Collapse>
				</Navbar>
			</div>

		);
	}
}


export default NavBar;