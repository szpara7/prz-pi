import axios from 'axios';

import { API_URL } from '../globalSettings.js';
import { NOTIFICATION_ACTIONS } from '../actions/notificationsActions.js';
import responseMessages from '../responseMessages.js';

export const DONE_CONSTS = {
    FETCH_DONE_REQUEST: 'FETCH_DONE_REQUEST',
    FETCH_DONE_SUCCESS: 'FETCH_DONE_SUCCESS',
    FETCH_DONE_FAILURE: 'FETCH_DONE_FAILURE',
    UPDATE_DONE_REQUEST: 'UPDATE_DONE_REQUEST',
    UPDATE_DONE_SUCCESS: 'UPDATE_DONE_SUCCESS',
    UPDATE_DONE_BOX_SHOW: 'UPDATE_DONE_BOX_SHOW',
    UPDATE_DONE_BOX_HIDE: 'UPDATE_DONE_BOX_HIDE',
    UPDATE_DONE_FAILURE: 'UPDATE_DONE_FAILURE',
    DELETE_DONE_SUCCESS: 'DELETE_DONE_SUCCESS',
    DELETE_DONE_FAILURE: 'DELETE_DONE_FAILURE',
    BACK_TO_INPROGRESS_REQUEST: 'BACK_TO_INPROGRESS_REQUEST',
    BACK_TO_INPROGRESS_SUCCESS: 'BACK_TO_INPROGRESS_REQUEST',
    BACK_TO_INPROGRESS_FAILURE: 'BACK_TO_INPROGRESS_FAILURE'
};

export const fetchDoneList = () => {

    return (dispatch) => {
        dispatch(fetch_done_request());
        axios.get(API_URL + "/models/done")
            .then(s => {
                dispatch(fetch_done_success(s.data));
            })
            .catch(e => {
                dispatch(fetch_done_failure(e));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.FETCH_DONE_FAILURE));
            })
    }
}

export const updateDone = (oldDone, newDone) => {
    const copyOldDone = Object.assign({}, oldDone);
    const copyNewDone = Object.assign({}, newDone);

    return (dispatch) => {
        dispatch(update_done_request(copyNewDone));
        axios.put(`${API_URL}/models/${copyNewDone.id}`, copyNewDone)
            .then(s => {
                dispatch(update_done_success(s.data));
                dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.UPDATE_DONE_SUCCESS));
                dispatch(update_done_box_hide());
            })
            .catch(err => {
                dispatch(update_done_failure(err, copyOldDone));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.UPDATE_DONE_FAILURE));
            })
    }
}

export const deleteDone = (id) => {
    return (dispatch) => {
        axios.delete(`${API_URL}/models/${id}`)
            .then(s => {
                dispatch(delete_done_success(id));
                dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.DELETE_DONE_SUCCESS));
            })
            .catch(e => {
                dispatch(delete_done_failure());
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.DELETE_DONE_FAILURE))
            })
    };
}

export const backToInProgress = (done, modelStatus) => {
    let doneAssign = Object.assign({}, done);
    return (dispatch) => {
        dispatch(back_to_inProgress_request(done.id));
        doneAssign.modelStatus = modelStatus;
        axios.put(`${API_URL}/models/${done.id}`, doneAssign)
            .then(s => {
                dispatch(back_to_inProgress_success());
                dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.MOVE_TO_SUCCESS));
            })
            .catch(e => {
                doneAssign.modelStatus = 2;
                dispatch(back_to_inProgress_failure(doneAssign));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.MOVE_TO_FAILURE));
            });
    };
}



function fetch_done_request() { return { type: DONE_CONSTS.FETCH_DONE_REQUEST }; }
function fetch_done_success(done) { return { type: DONE_CONSTS.FETCH_DONE_SUCCESS, done: done }; }
function fetch_done_failure(error) { return { type: DONE_CONSTS.FETCH_DONE_FAILURE, error: error }; }

function update_done_request(done) { return { type: DONE_CONSTS.UPDATE_DONE_REQUEST, done: done }; }
function update_done_success(done) { return { type: DONE_CONSTS.UPDATE_DONE_SUCCESS, done: done }; }
function update_done_failure(error, oldDone) { return { type: DONE_CONSTS.UPDATE_DONE_FAILURE, error: error, done: oldDone }; }

function delete_done_success(id) { return { type: DONE_CONSTS.DELETE_DONE_SUCCESS, id: id }; }
function delete_done_failure() { return { type: DONE_CONSTS.DELETE_DONE_FAILURE }; }

export function update_done_box_show(done) { return { type: DONE_CONSTS.UPDATE_DONE_BOX_SHOW, done: done }; }
export function update_done_box_hide() { return { type: DONE_CONSTS.UPDATE_DONE_BOX_HIDE }; }

function back_to_inProgress_request(id) { return { type: DONE_CONSTS.BACK_TO_INPROGRESS_REQUEST, id: id }; }
function back_to_inProgress_success() { return { type: DONE_CONSTS.BACK_TO_INPROGRESS_SUCCESS }; }
function back_to_inProgress_failure(oldDone) { return { type: DONE_CONSTS.BACK_TO_INPROGRESS_FAILURE, done: oldDone }; }