import axios from 'axios';

import { API_URL } from '../globalSettings.js';
import { NOTIFICATION_ACTIONS } from '../actions/notificationsActions.js';
import responseMessages from '../responseMessages.js';

export const IDEA_CONSTS = {
    FETCH_IDEA_REQUEST: 'FETCH_IDEA_REQUEST',
    FETCH_IDEA_SUCCESS: 'FETCH_IDEA_SUCCESS',
    FETCH_IDEA_FAILURE: 'FETCH_IDEA_FAILURE',
    CREATE_IDEA_SUCCESS: 'CREATE_IDEA_SUCCESS',
    CREATE_IDEA_FAILURE: 'CREATE_IDEA_FAILURE',
    CREATE_IDEA_BOX_SHOW: 'CREATE_IDEA_BOX_SHOW',
    CREATE_IDEA_BOX_HIDE: 'CREATE_IDEA_BOX_HIDE',
    UPDATE_IDEA_REQUEST: 'UPDATE_IDEA_REQUEST',
    UPDATE_IDEA_SUCCESS: 'UPDATE_IDEA_SUCCESS',
    UPDATE_IDEA_FAILURE: 'UPDATE_IDEA_FAILURE',
    DELETE_IDEA_SUCCESS: 'DELETE_IDEA_SUCCESS',
    DELETE_IDEA_FAILURE: 'DELETE_IDEA_FAILURE'
};


export const fetchIdeaList = () => {

    return (dispatch) => {
        dispatch(fetch_idea_request());
        axios.get(API_URL + "/models/idea")
            .then(s => {
                dispatch(fetch_idea_success(s.data));
            })
            .catch(e => {
                dispatch(fetch_idea_failure(e));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.FETCH_IDEA_FAILURE));
            })
    }
}

export const createIdea = (idea) => {

    return (dispatch) => {
        axios.post(`${API_URL}/models`, idea)
            .then(s => {
                dispatch(create_idea_succes(s.data));
                dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.CREATE_IDEA_SUCCESS));
                dispatch(create_idea_box_hide());
            })
            .catch(e => {
                dispatch(create_idea_failure(e));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.CREATE_IDEA_FAILUER));
            })
    }
}

export const updateIdea = (oldIdea, newIdea) => {
    const copyOldIdea = Object.assign({}, oldIdea);
    const copyNewIdea = Object.assign({}, newIdea);

    return (dispatch) => {
        dispatch(update_idea_request(copyNewIdea));
        axios.put(`${API_URL}/models/${copyNewIdea.id}`, copyNewIdea)
            .then(s => dispatch(update_idea_success(s.data)))
            .catch(err => {
                dispatch(update_idea_failure(err, copyOldIdea));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.UPDATE_IDEA_FAILURE));
            })
    }
}

export const deleteIdea = (id) => {
    return (dispatch) => {
        axios.delete(`${API_URL}/models/${id}`)
        .then(s => {
            dispatch(delete_idea_success(id));
            dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.DELETE_IDEA_SUCCESS));
        })
        .catch(e => {
            dispatch(delete_idea_failure());
            dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.DELETE_IDEA_FAILURE))
        })
    };
}



function fetch_idea_request() { return { type: IDEA_CONSTS.FETCH_IDEA_REQUEST }; }
function fetch_idea_success(ideas) { return { type: IDEA_CONSTS.FETCH_IDEA_SUCCESS, ideas: ideas }; }
function fetch_idea_failure(error) { return { type: IDEA_CONSTS.FETCH_IDEA_FAILURE, error: error }; }

function create_idea_succes(idea) { return { type: IDEA_CONSTS.CREATE_IDEA_SUCCESS, idea: idea }; }
function create_idea_failure(error) { return { type: IDEA_CONSTS.CREATE_IDEA_FAILURE, error: error }; }

function update_idea_request(idea) { return { type: IDEA_CONSTS.UPDATE_IDEA_REQUEST, idea: idea }; }
function update_idea_success(idea) { return { type: IDEA_CONSTS.UPDATE_IDEA_SUCCESS, idea: idea }; }
function update_idea_failure(error, oldIdea) { return { type: IDEA_CONSTS.UPDATE_IDEA_FAILURE, error: error, idea: oldIdea }; }

function delete_idea_success(id) { return { type: IDEA_CONSTS.DELETE_IDEA_SUCCESS, id: id }; }
function delete_idea_failure() { return { type: IDEA_CONSTS.DELETE_IDEA_FAILURE }; }

export function create_idea_box_show() { return { type: IDEA_CONSTS.CREATE_IDEA_BOX_SHOW }; }
export function create_idea_box_hide() { return { type: IDEA_CONSTS.CREATE_IDEA_BOX_HIDE }; }