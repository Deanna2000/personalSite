import React, { Component } from 'react';
import "./About.css";
import Modal from 'react-responsive-modal';
import VolunteerDetail from './VolunteerDetail'



class Volunteer extends Component {
	state = {
		open: false,
	}

	onOpenModal = () => {
		this.setState({ open: true });
	}

	onCloseModal = () => {
		this.setState({ open: false });
	}
	render() {
		const { open } = this.state;
		return (
			<div>
				<h3 className="volunteer" onClick={this.onOpenModal}>
					Volunteer
                </h3>{' '}

				<Modal
					open={open}
					onClose={this.onCloseModal}
					center
					classNames={{
						transitionEnter: 'transition-enter',
						transitionEnterActive: 'transition-enter-active',
						transitionExit: 'transition-exit-active',
						transitionExitActive: 'transition-exit-active',
						overlay: 'custom-overlay',
					}}
					animationDuration={1000}
				>
					<VolunteerDetail />
				</Modal>

			</div>
		);
	}
}

export default Volunteer;