import { IDEA_CONSTS } from '../actions/ideaActions.js';

const initialState = { ideas: [], isLoading: false };

const ideaReducer = (state = initialState, action) => {
    switch (action.type) {
        case IDEA_CONSTS.FETCH_IDEA_REQUEST:
            return state = {
                ...state,
                isLoading: true
            };


        case IDEA_CONSTS.FETCH_IDEA_SUCCESS:
            return state = {
                ...state,
                ideas: [...action.ideas],
                isLoading: false
            };

        case IDEA_CONSTS.FETCH_IDEA_FAILURE:
            return state = {
                ...state,
                isLoading: false
            };

        case IDEA_CONSTS.UPDATE_IDEA_REQUEST:
            return state = {
                ...state,
                ideas: [...state.ideas.filter(t => t.id !== action.idea.id), action.idea].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        case IDEA_CONSTS.UPDATE_IDEA_SUCCESS:
            return state = {
                ...state
            };

        case IDEA_CONSTS.UPDATE_IDEA_FAILURE:
            return state = {
                ...state,
                ideas: [...state.ideas.filter(t => t.id !== action.idea.id), action.idea].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        default: return state;
    }
};

export default ideaReducer;