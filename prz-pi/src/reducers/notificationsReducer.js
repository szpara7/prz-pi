import { NOTIFICATION_CONSTS } from '../actions/notificationsActions.js';

const initialState = { message: "", type: "", show: false };
const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATION_CONSTS.NOTIFICATION_SUCCESS:
            return state = {
                ...state,
                message: action.message,
                type: NOTIFICATION_CONSTS.NOTIFICATION_SUCCESS,
                show: true
            };

        case NOTIFICATION_CONSTS.NOTIFICATION_ALERT:
            return state = {
                ...state,
                message: action.message,
                type: NOTIFICATION_CONSTS.NOTIFICATION_ALERT,
                show: true
            };

        case NOTIFICATION_CONSTS.NOTIFICATION_ERROR:
            return state = {
                ...state,
                message: action.message,
                type: NOTIFICATION_CONSTS.NOTIFICATION_ERROR,
                show: true
            };

        case NOTIFICATION_CONSTS.NOTIFICATION_HIDE:
            return state = {
                ...state,
                message: "",
                show: false
            };

        default: return state;
    }
}

export default notificationReducer;