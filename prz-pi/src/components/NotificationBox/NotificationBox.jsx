import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NotificationBox.css';
import { NOTIFICATION_CONSTS } from '../../actions/notificationsActions.js';

class NotificationBox extends Component {
    constructor(props) {
        super(props);
    }
   

    render() {

        if(this.props.show) {
            setTimeout(() => {
               this.props.notification_hide() 
            }, 5000);
        }

        let classNames = "alert alert-light alert-dismissible fade show notification";
        let title = "";      

        if (this.props.type === NOTIFICATION_CONSTS.NOTIFICATION_SUCCESS) {
            title = "SUCCESS!!!";
            classNames = "alert alert-success alert-dismissible fade show notification";
        }
        else if (this.props.type === NOTIFICATION_CONSTS.NOTIFICATION_ALERT) {
            title = "ALERT!!!";
            classNames = "alert alert-warning alert-dismissible fade show notification";
        }
        else if (this.props.type === NOTIFICATION_CONSTS.NOTIFICATION_ERROR) {
            title = "ERROR!!!";
            classNames = "alert alert-danger alert-dismissible fade show notification"
        }

        {
            if (this.props.show) {
                return (
                    <div className={classNames} role="alert" ref="alert">
                        <strong>{title}</strong> {this.props.message}                       
                    </div>
                );
            }
            else return null;
        }
    }
}

NotificationBox.propTypes = {
    show: PropTypes.bool.isRequired
};

export default NotificationBox;