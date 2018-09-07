import React, { Component } from 'react';
import "./About.css";
import Modal from 'react-responsive-modal';
import FunStuffDetail from './FunStuffDetail'



class FunStuff extends Component {
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
				<h3 className="funStuff" onClick={this.onOpenModal}>
					Fun Stuff!
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
					<FunStuffDetail />
				</Modal>

			</div>
		);
	}
}

export default FunStuff;