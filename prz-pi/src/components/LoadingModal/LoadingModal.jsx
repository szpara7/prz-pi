import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import '../LoadingModal/LoadingModal.css';

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
}

class LoadingModal extends Component {
    render() {
        return (
            <Modal className="modal-transparent" isOpen={this.props.isLoading}>
                <div className="modal-dialog">
                    <div className="modal-content modal-transparent">

                        <div className="modal-body">
                            <i className="fas fa-spinner fa-spin fa-6x mx-auto"></i>
                            <h3 className="mx-auto">LOADING...</h3>
                         </div>
                         
                    </div>
                </div>
            </Modal>
        );
    }
}

LoadingModal.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default LoadingModal;