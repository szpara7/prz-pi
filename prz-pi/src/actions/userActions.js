import axios from 'axios';

import { API_URL } from './../globalSettings.js';
import { NOTIFICATION_ACTIONS } from './../actions/notificationsActions.js';
import responseMessages from '../responseMessages.js';

export const USER_CONSTS = {
    FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE'
};

export const fetch_users = () => {
    return (dispatch) => {
        dispatch(fetch_users_request());
        axios.get(`${API_URL}/users`)
        .then(s => {
            dispatch(fetch_users_success(s.data));
        })
        .catch(e => {
            dispatch(fetch_user_failure());
            dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.FETCH_USERS_FAILURE));
        })
    }
}

function fetch_users_request() { return { type: USER_CONSTS.FETCH_USERS_REQUEST }; }
function fetch_users_success(users) { return { type: USER_CONSTS.FETCH_USERS_SUCCESS, users: users }; }
function fetch_user_failure() { return { type: USER_CONSTS.FETCH_USERS_FAILURE }; }