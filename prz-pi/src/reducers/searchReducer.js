import { SEARCH_CONSTS } from '../actions/searchActions.js';

const initialState = {
    expression: ''
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_CONSTS.SET_EXPRESSION:
        return state = {
            ...state,
            expression: action.expression
        };

        default: return state;
    }
}

export default searchReducer;

