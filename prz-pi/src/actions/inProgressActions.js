import axios from 'axios';

import { API_URL } from '../globalSettings.js';
import { NOTIFICATION_ACTIONS } from '../actions/notificationsActions.js';
import responseMessages from '../responseMessages.js';

export const INPROGRESS_CONSTS = {
    FETCH_INPROGRESS_REQUEST: 'FETCH_INPROGRESS_REQUEST',
    FETCH_INPROGRESS_SUCCESS: 'FETCH_INPROGRESS_SUCCESS',
    FETCH_INPROGRESS_FAILURE: 'FETCH_INPROGRESS_FAILURE',
    UPDATE_INPROGRESS_REQUEST: 'UPDATE_INPROGRESS_REQUEST',
    UPDATE_INPROGRESS_SUCCESS: 'UPDATE_INPROGRESS_SUCCESS',
    UPDATE_INPROGRESS_BOX_SHOW: 'UPDATE_INPROGRESS_BOX_SHOW',
    UPDATE_INPROGRESS_BOX_HIDE: 'UPDATE_INPROGRESS_BOX_HIDE',
    UPDATE_INPROGRESS_FAILURE: 'UPDATE_INPROGRESS_FAILURE',
    DELETE_INPROGRESS_SUCCESS: 'DELETE_INPROGRESS_SUCCESS',
    DELETE_INPROGRESS_FAILURE: 'DELETE_INPROGRESS_FAILURE',
    MOVE_TO_REQUEST: 'MOVE_TO_REQUEST',
    MOVE_TO_SUCCESS: 'MOVE_TO_REQUEST',
    MOVE_TO_FAILURE: 'MOVE_TO_FAILURE'
};

export const fetchInProgressList = () => {

    return (dispatch) => {
        dispatch(fetch_inProgress_request());
        axios.get(API_URL + "/models/inprogress")
            .then(s => {
                dispatch(fetch_inProgress_success(s.data));
            })
            .catch(e => {
                dispatch(fetch_inProgress_failure(e));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.FETCH_INPROGRESS_FAILURE));
            })
    }
}

export const updateInProgress = (oldInProgress, newInProgress) => {
    const copyOldInProgress = Object.assign({}, oldInProgress);
    const copyNewInProgress = Object.assign({}, newInProgress);

    return (dispatch) => {
        dispatch(update_inProgress_request(copyNewInProgress));
        axios.put(`${API_URL}/models/${copyNewInProgress.id}`, copyNewInProgress)
            .then(s => {
                dispatch(update_inProgress_success(s.data));
                dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.UPDATE_INPROGRESS_SUCCESS));
                dispatch(update_inProgress_box_hide());
            })
            .catch(err => {
                dispatch(update_inProgress_failure(err, copyOldInProgress));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.UPDATE_INRPROGRESS_FAILURE));
            })
    }
}

export const deleteInProgress = (id) => {
    return (dispatch) => {
        axios.delete(`${API_URL}/models/${id}`)
            .then(s => {
                dispatch(delete_inProgress_success(id));
                dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.DELETE_INPROGRESS_SUCCESS));
            })
            .catch(e => {
                dispatch(delete_inProgress_failure());
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.DELETE_INPROGRESS_FAILURE))
            })
    };
}

export const moveTo = (inProgress, modelStatus) => {
    let inProgressAssign = Object.assign({}, inProgress);
    return (dispatch) => {
        dispatch(move_to_request(inProgress.id));
        inProgressAssign.modelStatus = modelStatus;
        axios.put(`${API_URL}/models/${inProgressAssign.id}`, inProgressAssign)
            .then(s => {
                dispatch(move_to_success());
                dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.MOVE_TO_SUCCESS));
            })
            .catch(e => {
                inProgressAssign.modelStatus = 2;
                dispatch(move_to_failure(inProgressAssign));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.MOVE_TO_FAILURE));
            });
    };
}



function fetch_inProgress_request() { return { type: INPROGRESS_CONSTS.FETCH_INPROGRESS_REQUEST }; }
function fetch_inProgress_success(inProgress) { return { type: INPROGRESS_CONSTS.FETCH_INPROGRESS_SUCCESS, inProgress: inProgress }; }
function fetch_inProgress_failure(error) { return { type: INPROGRESS_CONSTS.FETCH_INPROGRESS_FAILURE, error: error }; }

function update_inProgress_request(inProgress) { return { type: INPROGRESS_CONSTS.UPDATE_INPROGRESS_REQUEST, inProgress: inProgress }; }
function update_inProgress_success(inProgress) { return { type: INPROGRESS_CONSTS.UPDATE_INPROGRESS_SUCCESS, inProgress: inProgress }; }
function update_inProgress_failure(error, oldinProgress) { return { type: INPROGRESS_CONSTS.UPDATE_INPROGRESS_FAILURE, error: error, inProgress: oldinProgress }; }

function delete_inProgress_success(id) { return { type: INPROGRESS_CONSTS.DELETE_INPROGRESS_SUCCESS, id: id }; }
function delete_inProgress_failure() { return { type: INPROGRESS_CONSTS.DELETE_INPROGRESS_FAILURE }; }

export function update_inProgress_box_show(inProgress) { return { type: INPROGRESS_CONSTS.UPDATE_INPROGRESS_BOX_SHOW, inProgress: inProgress }; }
export function update_inProgress_box_hide() { return { type: INPROGRESS_CONSTS.UPDATE_INPROGRESS_BOX_HIDE }; }

function move_to_request(id) { return { type: INPROGRESS_CONSTS.MOVE_TO_REQUEST, id: id }; }
function move_to_success() { return { type: INPROGRESS_CONSTS.MOVE_TO_SUCCESS }; }
function move_to_failure(oldinProgress) { return { type: INPROGRESS_CONSTS.MOVE_TO_FAILURE, inProgress: oldinProgress }; }