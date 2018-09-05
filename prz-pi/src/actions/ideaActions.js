import axios from 'axios';

import { API_URL } from '../globalSettings.js';

export const IDEA_CONSTS = {
    FETCH_IDEA_LIST: 'FETCH_IDEA_LIST',
    FETCH_IDEAS_BY_SEARCH: 'FETCH_IDEAS_BY_SEARCH',
    START_FETCHING_IDEA_LIST: 'START_FETCHING_IDEA_LIST'
};


export const fetchIdeaList = () => {
    
    return (dispatch) => {
        dispatch(startFetchingIdea());
        axios.get(API_URL + "/models/idea")
            .then(s => dispatch(fetchIdea(s.data))
            )
            .catch (e => alert("ERROR: " + e));
    }
}

function startFetchingIdea(){
    return {
        type: IDEA_CONSTS.START_FETCHING_IDEA_LIST
    };
}

function fetchIdea(data) {
    return {
        type: IDEA_CONSTS.FETCH_IDEA_LIST,
        ideas: data
    };
}

export const fetchIdeasBySearchFilter = (text) => {
    return {
        type: IDEA_CONSTS.FETCH_IDEAS_BY_SEARCH,
        text: text
    };

}
