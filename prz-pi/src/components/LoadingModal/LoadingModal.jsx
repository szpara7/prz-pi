import React, { Component } from 'react';
import Modal from 'react-modal';

import '../LoadingModal/LoadingModal.css';

Modal.setAppElement('#root');

class LoadingModal extends Component {
    render() {
        return (
            <Modal className="modal-transparent" isOpen={this.props.isLoading}>
                <div class="modal-dialog">
                    <div class="modal-content modal-transparent">

                        <div class="modal-body">
                            <i className="fas fa-spinner fa-spin fa-6x mx-auto"></i>
                            <h3 className="mx-auto">LOADING...</h3>
                         </div>
                         
                    </div>
                </div>
            </Modal>
        );
    }
}

export default LoadingModal;