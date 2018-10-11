import { IDEA_CONSTS } from '../actions/ideaActions.js';

const initialState = { 
    ideas: [],
    isLoading: false,
    isCreateIdeaBoxOpen: false,
    isUpdateIdeaBoxOpen: false,
    ideaToUpdate : {}
};

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

        case IDEA_CONSTS.CREATE_IDEA_SUCCESS:
            return state = {
                ...state,
                ideas: [...state.ideas.filter(t => t.id !== action.idea.id), action.idea].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        case IDEA_CONSTS.CREATE_IDEA_FAILURE:
            return state = {
                ...state
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

        case IDEA_CONSTS.CREATE_IDEA_BOX_SHOW:
            return state = {
                ...state,
                isCreateIdeaBoxOpen: true,
                isUpdateIdeaBoxOpen: false
            };

        case IDEA_CONSTS.CREATE_IDEA_BOX_HIDE:
            return state = {
                ...state,
                isCreateIdeaBoxOpen: false
            };

        case IDEA_CONSTS.DELETE_IDEA_SUCCESS:
            return state = {
                ...state,
                ideas: [...state.ideas.filter(t => t.id !== action.id)].sort((a, b) => {
                    return a.id - b.id;
                })
            };
        
        case IDEA_CONSTS.DELETE_IDEA_FAILURE: 
            return state = {
                ...state
            };

        case IDEA_CONSTS.UPDATE_IDEA_BOX_SHOW:
            return state = {
                ...state,
                isUpdateIdeaBoxOpen: true,
                isCreateIdeaBoxOpen: false,
                ideaToUpdate: action.idea
            };
        
        case IDEA_CONSTS.UPDATE_IDEA_BOX_HIDE:
            return state = {
                ...state,
                isUpdateIdeaBoxOpen: false
            };

        case IDEA_CONSTS.MOVE_TO_TODO_REQUEST:     
            return state = {
                ...state,
                ideas: [...state.ideas.filter(t => t.id !== action.id)].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        case IDEA_CONSTS.MOVE_TO_TODO_SUCCESS: 
            return state = {
                ...state
            };

        case IDEA_CONSTS.MOVE_TO_TODO_FAILURE:
            return state = {
                ...state,
                ideas: [...state.ideas, action.idea].sort((a,b) => {
                    return a.id - b.id
                })
            };

        default: return state;
    }
};

export default ideaReducer;