export const NOTIFICATION_CONSTS = {
    NOTIFICATION_SUCCESS: 'NOTIFICATION_SUCCESS',
    NOTIFICATION_ALERT: 'NOTIFICATION_ALERT',
    NOTIFICATION_ERROR: 'NOTIFICATION_ERROR',
    NOTIFICATION_HIDE: 'NOTIFICATION_HIDE'
};

export const NOTIFICATION_ACTIONS = {
    notification_success,
    notification_alert,
    notification_error,
    notification_hide
};


function notification_success(message) { return { type: NOTIFICATION_CONSTS.NOTIFICATION_SUCCESS, message: message }; }
function notification_alert(message) { return { type: NOTIFICATION_CONSTS.NOTIFICATION_ALERT, message: message }; }
function notification_error(message) { return { type: NOTIFICATION_CONSTS.NOTIFICATION_ERROR, message: message }; }
function notification_hide() { return { type: NOTIFICATION_CONSTS.NOTIFICATION_HIDE }; }

