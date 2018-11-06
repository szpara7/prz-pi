import { INPROGRESS_CONSTS } from './../actions/inProgressActions';

const initialState = {
    inProgress: [],
    isLoading: false,
    isUpdateInProgressBoxOpen: false,
    inProgressToUpdate: {}
};

const inProgressReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPROGRESS_CONSTS.FETCH_INPROGRESS_REQUEST:
            return state = {
                ...state,
                isLoading: true
            };

        case INPROGRESS_CONSTS.FETCH_INPROGRESS_SUCCESS:
            return state = {
                ...state,
                inProgress: [...action.inProgress],
                isLoading: false
            };

        case INPROGRESS_CONSTS.FETCH_INPROGRESS_FAILURE:
            return state = {
                ...state,
                isLoading: false
            };

        case INPROGRESS_CONSTS.UPDATE_INPROGRESS_BOX_SHOW:
            return state = {
                ...state,
                isUpdateInProgressBoxOpen: true,
                inProgressToUpdate: action.inProgress
            };

        case INPROGRESS_CONSTS.UPDATE_INPROGRESS_BOX_HIDE:
            return state = {
                ...state,
                isUpdateInProgressBoxOpen: false
            };

        case INPROGRESS_CONSTS.UPDATE_INPROGRESS_REQUEST:
            return state = {
                ...state,
                inProgress: [...state.inProgress.filter(t => t.id !== action.inProgress.id), action.inProgress].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        case INPROGRESS_CONSTS.UPDATE_INPROGRESS_SUCCESS:
            return state = {
                ...state
            };

        case INPROGRESS_CONSTS.UPDATE_INPROGRESS_FAILURE:
            return state = {
                ...state,
                inProgress: [...state.inProgress.filter(t => t.id !== action.inProgress.id), action.inProgress].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        case INPROGRESS_CONSTS.DELETE_INPROGRESS_SUCCESS:
            return state = {
                ...state,
                inProgress: [...state.inProgress.filter(t => t.id !== action.id)].sort((a, b) => {
                    a.id - b.id
                })
            };

        case INPROGRESS_CONSTS.DELETE_INPROGRESS_FAILURE:
            return state = {
                ...state
            };
        
        case INPROGRESS_CONSTS.MOVE_TO_REQUEST:
            return state = {
                ...state,
                inProgress: [...state.inProgress.filter(t => t.id !== action.id)].sort((a, b) => {
                    a.id - b.id
                })
            };

        case INPROGRESS_CONSTS.MOVE_TO_SUCCESS:
            return state = {
                ...state
            };

        case INPROGRESS_CONSTS.MOVE_TO_FAILURE:
            return state = {
                ...state,
                inProgress: [...state.inProgress, action.inProgress].sort((a, b) => {
                    a.id - b.id
                })
            }

        default: return state;
    }
};

export default inProgressReducer;