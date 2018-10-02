import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NotificationBox from '../components/NotificationBox/NotificationBox';
import { NOTIFICATION_ACTIONS } from '../actions/notificationsActions';

const mapStateToProps = (state) => {
    return {
        message: state.notification.message,
        type: state.notification.type,
        show: state.notification.show
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        notification_hide: () => dispatch(NOTIFICATION_ACTIONS.notification_hide())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotificationBox))