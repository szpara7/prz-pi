import { DONE_CONSTS } from './../actions/doneActions';

const initialState = {
    done: [],
    isLoading: false,
    isUpdateDoneBoxOpen: false,
    doneToUpdate: {}
};

const doneReducer = (state = initialState, action) => {
    switch (action.type) {
        case DONE_CONSTS.FETCH_DONE_REQUEST:
            return state = {
                ...state,
                isLoading: true
            };

        case DONE_CONSTS.FETCH_DONE_SUCCESS:
            return state = {
                ...state,
                done: [...action.done],
                isLoading: false
            };

        case DONE_CONSTS.FETCH_DONE_FAILURE:
            return state = {
                ...state,
                isLoading: false
            };

        case DONE_CONSTS.UPDATE_DONE_BOX_SHOW:
            return state = {
                ...state,
                isUpdateDoneBoxOpen: true,
                doneToUpdate: action.done
            };

        case DONE_CONSTS.UPDATE_DONE_BOX_HIDE:
            return state = {
                ...state,
                isUpdateDoneBoxOpen: false
            };

        case DONE_CONSTS.UPDATE_DONE_REQUEST:
            return state = {
                ...state,
                done: [...state.done.filter(t => t.id !== action.done.id), action.done].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        case DONE_CONSTS.UPDATE_DONE_SUCCESS:
            return state = {
                ...state
            };

        case DONE_CONSTS.UPDATE_DONE_FAILURE:
            return state = {
                ...state,
                done: [...state.done.filter(t => t.id !== action.done.id), action.done].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        case DONE_CONSTS.DELETE_DONE_SUCCESS:
            return state = {
                ...state,
                done: [...state.done.filter(t => t.id !== action.id)].sort((a, b) => {
                    a.id - b.id
                })
            };

        case DONE_CONSTS.DELETE_DONE_FAILURE:
            return state = {
                ...state
            };
        
        case DONE_CONSTS.BACK_TO_INPROGRESS_REQUEST:
            return state = {
                ...state,
                done: [...state.done.filter(t => t.id !== action.id)].sort((a, b) => {
                    a.id - b.id
                })
            };

        case DONE_CONSTS.BACK_TO_INPROGRESS_SUCCESS:
            return state = {
                ...state
            };

        case DONE_CONSTS.BACK_TO_INPROGRESS_FAILURE:
            return state = {
                ...state,
                done: [...state.done, action.done].sort((a, b) => {
                    a.id - b.id
                })
            }

        default: return state;
    }
};

export default doneReducer;