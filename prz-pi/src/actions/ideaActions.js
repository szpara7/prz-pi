import axios from 'axios';

import { API_URL } from '../globalSettings.js';

export const IDEA_CONSTS = {
    FETCH_IDEA_REQUEST: 'FETCH_IDEA_REQUEST',
    FETCH_IDEA_SUCCESS: 'FETCH_IDEA_SUCCESS',
    FETCH_IDEA_FAILURE: 'FETCH_IDEA_FAILURE',
    UPDATE_IDEA_REQUEST: 'UPDATE_IDEA_REQUEST',
    UPDATE_IDEA_SUCCESS: 'UPDATE_IDEA_SUCCESS',
    UPDATE_IDEA_FAILURE: 'UPDATE_IDEA_FAILURE'
};

export const IDEA_ACTIONS = {
    fetchIdeaList
}

export const fetchIdeaList = () => {
    
    return (dispatch) => {
        dispatch(fetch_idea_request());
        axios.get(API_URL + "/models/idea")
            .then(s => dispatch(fetch_idea_success(s.data)))
            .catch (e => dispatch(fetch_idea_failure(e)));
    }
}

export const updateIdea = (oldIdea, newIdea) => {
    const copyOldIdea = Object.assign({}, oldIdea);
    const copyNewIdea = Object.assign({}, newIdea);

    return (dispatch) => {
        dispatch(update_idea_request(copyNewIdea));
        axios.put(`${API_URL}/models/${copyNewIdea.id}`, copyNewIdea)
        .then(s => dispatch(update_idea_success(s.data)))
        .catch(err => dispatch(update_idea_failure(err, copyOldIdea)));
    }
}


function fetch_idea_request() { return { type: IDEA_CONSTS.FETCH_IDEA_REQUEST }; }
function fetch_idea_success(ideas) { return { type: IDEA_CONSTS.FETCH_IDEA_SUCCESS, ideas: ideas }; }
function fetch_idea_failure(error) { return { type: IDEA_CONSTS.FETCH_IDEA_FAILURE, error: error }; }

function update_idea_request(idea) { return { type: IDEA_CONSTS.UPDATE_IDEA_REQUEST, idea: idea }; }
function update_idea_success(idea) { return { type: IDEA_CONSTS.UPDATE_IDEA_SUCCESS, idea: idea }; }
function update_idea_failure(error, oldIdea) { return { type: IDEA_CONSTS.UPDATE_IDEA_FAILURE, error : error, idea: oldIdea }; }