import { USER_CONSTS } from './../actions/userActions.js';

const initialState = {
    users: [],
    isLoading: false
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_CONSTS.FETCH_USERS_REQUEST:
            return state = {
                ...state,
                isLoading: true
            };

        case USER_CONSTS.FETCH_USERS_SUCCESS:
            return state = {
                ...state,
                isLoading: false,
                users: [...action.users]
            };

        case USER_CONSTS.FETCH_USERS_FAILURE: 
            return state = {
                ...state,
                isLoading: false
            };

        default: return state;
    }
}

export default userReducer;