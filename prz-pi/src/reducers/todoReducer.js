import { TODO_CONSTS } from './../actions/todoActions.js';

const initialState = {
    todos: [],
    isLoading: false,
    isCreateTodoBoxOpen: false,
    isUpdateTodoBoxOpen: false,
    todoToUpdate: {}
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CONSTS.FETCH_TODO_REQUEST:
            return state = {
                ...state,
                isLoading: true
            };

        case TODO_CONSTS.FETCH_TODO_SUCCESS:
            return state = {
                ...state,
                todos: [...action.todos],
                isLoading: false
            };

        case TODO_CONSTS.FETCH_TODO_FAILURE:
            return state = {
                ...state,
                isLoading: false
            };

        case TODO_CONSTS.UPDATE_TODO_BOX_SHOW:
            return state = {
                ...state,
                isUpdateTodoBoxOpen: true,
                todoToUpdate: action.todo
            };

        case TODO_CONSTS.UPDATE_TODO_BOX_HIDE:
            return state = {
                ...state,
                isUpdateTodoBoxOpen: false
            };

        case TODO_CONSTS.UPDATE_TODO_REQUEST:
            return state = {
                ...state,
                todos: [...state.todos.filter(t => t.id !== action.todo.id), action.todo].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        case TODO_CONSTS.UPDATE_TODO_SUCCESS:
            return state = {
                ...state
            };

        case TODO_CONSTS.UPDATE_TODO_FAILURE:
            return state = {
                ...state,
                todos: [...state.todos.filter(t => t.id !== action.todos.id), action.todos].sort((a, b) => {
                    return a.id - b.id;
                })
            };

        case TODO_CONSTS.CREATE_TODO_BOX_SHOW:
            return state = {
                ...state,
                isCreateTodoBoxOpen: true
            };

        case TODO_CONSTS.CREATE_TODO_BOX_HIDE:
            return state = {
                ...state,
                isCreateTodoBoxOpen: false
            };

        case TODO_CONSTS.CREATE_TODO_SUCCESS:
            return state = {
                ...state,
                todos: [...state.todos, action.todo].sort((a, b) => {
                    a.id - b.id
                })
            };

        case TODO_CONSTS.CREATE_TODO_FAILURE:
            return state = {
                ...state
            };

        case TODO_CONSTS.DELETE_TODO_SUCCESS:
            return state = {
                ...state,
                todos: [...state.todos.filter(t => t.id !== action.id)].sort((a, b) => {
                    a.id - b.id
                })
            };

        case TODO_CONSTS.DELETE_TODO_FAILURE:
            return state = {
                ...state
            };


        default: return state;
    }
};

export default todoReducer;