import { IDEA_CONSTS } from '../actions/ideaActions.js';

const initialState = { ideas: [], isLoading: false };

const ideaReducer = (state = initialState, action) => {
    switch (action.type) {
        case IDEA_CONSTS.FETCH_IDEAS_BY_SEARCH:
            return state = {
                ...state,
                ideas: [...action.state]
            };

        case IDEA_CONSTS.FETCH_IDEA_LIST:
            return state = {
                ...state,
                ideas: [...action.ideas],
                isLoading: false
            };

        case IDEA_CONSTS.START_FETCHING_IDEA_LIST:
            return state = {
                ...state,
                isLoading: true
            };

        default: return state;

    }
};

export default ideaReducer;