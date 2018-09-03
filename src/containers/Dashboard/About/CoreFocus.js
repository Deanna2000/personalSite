import React, { Component } from 'react';
import "./About.css";
import Modal from 'react-responsive-modal';
import CoreFocusDetail from './CoreFocusDetail'



class CoreFocus extends Component {
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
                <div className="occupation boxShadow">
                <button className="coreFocus btn btn-action" onClick={this.onOpenModal}>
				<h3>My Core FOcus</h3>
                </button>{' '}

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
            modal: 'custom-modal'
          }}
          animationDuration={1000}
        >
        <CoreFocusDetail />
        </Modal>

        </div>
        );
    }
}

export default CoreFocus;