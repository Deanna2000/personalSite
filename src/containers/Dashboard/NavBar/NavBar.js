import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../../../components/IMAGES/deannalogolarge.png';


class NavBar extends Component {




	render() {


		return (
			<div className="navContainer">
				<Navbar fixedTop inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/">
								<img className="logo" alt="logo" src={logo} />
							</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="/about">
								About
      						</NavItem>
							<NavItem eventKey={2} href="/projects">
								Projects
      						</NavItem>
							<NavItem eventKey={2} href="/projects">
								Experience
     						 </NavItem>
							<NavItem eventKey={2} href="/contact">
								Contact
      						</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>

		);
	}
}


export default NavBar;