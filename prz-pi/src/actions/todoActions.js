import axios from 'axios';

import { API_URL } from '../globalSettings.js';
import { NOTIFICATION_ACTIONS } from '../actions/notificationsActions.js';
import responseMessages from '../responseMessages.js';

export const TODO_CONSTS = {
    FETCH_TODO_REQUEST: 'FETCH_TODO_REQUEST',
    FETCH_TODO_SUCCESS: 'FETCH_TODO_SUCCESS',
    FETCH_TODO_FAILURE: 'FETCH_TODO_FAILURE',
    CREATE_TODO_SUCCESS: 'CREATE_TODO_SUCCESS',
    CREATE_TODO_FAILURE: 'CREATE_TODO_FAILURE',
    CREATE_TODO_BOX_SHOW: 'CREATE_TODO_BOX_SHOW',
    CREATE_TODO_BOX_HIDE: 'CREATE_TODO_BOX_HIDE',
    UPDATE_TODO_REQUEST: 'UPDATE_TODO_REQUEST',
    UPDATE_TODO_SUCCESS: 'UPDATE_TODO_SUCCESS',
    UPDATE_TODO_BOX_SHOW: 'UPDATE_TODO_BOX_SHOW',
    UPDATE_TODO_BOX_HIDE: 'UPDATE_TODO_BOX_HIDE',
    UPDATE_TODO_FAILURE: 'UPDATE_TODO_FAILURE',
    DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS',
    DELETE_TODO_FAILURE: 'DELETE_TODO_FAILURE',
    MOVE_TO_INPROGRESS_REQUEST: 'MOVE_TO_INPROGRESS_REQUEST',
    MOVE_TO_INPROGRESS_SUCCESS: 'MOVE_TO_INPROGRESS_REQUEST',
    MOVE_TO_INPROGRESS_FAILURE: 'MOVE_TO_INPROGRESS_FAILURE',
    MOVE_TO_INPROGRESS_BOX_SHOW: 'MOVE_TO_INPROGRESS_BOX_SHOW',
    MOVE_TO_INPROGRESS_BOX_HIDE: 'MOVE_TO_INPROGRESS_BOX_HIDE'
};


export const fetchTodoList = () => {

    return (dispatch) => {
        dispatch(fetch_todo_request());
        axios.get(API_URL + "/models/todo")
            .then(s => {
                dispatch(fetch_todo_success(s.data));
            })
            .catch(e => {
                dispatch(fetch_todo_failure(e));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.FETCH_IDEA_FAILURE));
            })
    }
}

export const createTodo = (todo) => {

    return (dispatch) => {
        axios.post(`${API_URL}/models`, todo)
            .then(s => {
                dispatch(create_todo_succes(s.data));
                dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.CREATE_IDEA_SUCCESS));
                dispatch(create_todo_box_hide());
            })
            .catch(e => {
                dispatch(create_todo_failure(e));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.CREATE_IDEA_FAILUER));
            })
    }
}

export const updateTodo = (oldTodo, newTodo) => {
    const copyOldTodo = Object.assign({}, oldTodo);
    const copyNewTodo = Object.assign({}, newTodo);

    return (dispatch) => {
        dispatch(update_todo_request(copyNewTodo));
        axios.put(`${API_URL}/models/${copyNewTodo.id}`, copyNewTodo)
            .then(s => {
                 dispatch(update_todo_success(s.data));
                 dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.UPDATE_IDEA_SUCCESS));
                 dispatch(update_todo_box_hide());
            })
            .catch(err => {
                dispatch(update_todo_failure(err, copyOldTodo));
                dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.UPDATE_IDEA_FAILURE));
            })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios.delete(`${API_URL}/models/${id}`)
        .then(s => {
            dispatch(delete_todo_success(id));
            dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.DELETE_IDEA_SUCCESS));
        })
        .catch(e => {
            dispatch(delete_todo_failure());
            dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.DELETE_IDEA_FAILURE))
        })
    };
}

export const moveToInProgress = (todo) => {
    let todoAssign = Object.assign({}, todo);
    return (dispatch) => {
        dispatch(move_to_inprogress_request(todo.id));
        todoAssign.modelStatus = 3; // status dla inprogress
        axios.put(`${API_URL}/models/${todoAssign.id}`, todoAssign)
        .then(s => {
            dispatch(move_to_inprogress_success());
            dispatch(NOTIFICATION_ACTIONS.notification_success(responseMessages.MOVE_TO_TODO_SUCCESS));
            dispatch(move_to_inprogress_box_hide());
        })
        .catch(e => {     
            todoAssign.modelStatus = 2;
            dispatch(move_to_inprogress_failure(todoAssign));
            dispatch(NOTIFICATION_ACTIONS.notification_error(responseMessages.MOVE_TO_TODO_FAILURE));
        });
    };
}



function fetch_todo_request() { return { type: TODO_CONSTS.FETCH_TODO_REQUEST }; }
function fetch_todo_success(todos) { return { type: TODO_CONSTS.FETCH_TODO_SUCCESS, todos: todos }; }
function fetch_todo_failure(error) { return { type: TODO_CONSTS.FETCH_TODO_FAILURE, error: error }; }

function create_todo_succes(todo) { return { type: TODO_CONSTS.CREATE_TODO_SUCCESS, todo: todo }; }
function create_todo_failure(error) { return { type: TODO_CONSTS.CREATE_TODO_FAILURE, error: error }; }

function update_todo_request(todo) { return { type: TODO_CONSTS.UPDATE_TODO_REQUEST, todo: todo }; }
function update_todo_success(todo) { return { type: TODO_CONSTS.UPDATE_TODO_SUCCESS, todo: todo }; }
function update_todo_failure(error, oldTodo) { return { type: TODO_CONSTS.UPDATE_TODO_FAILURE, error: error, todo: oldTodo }; }

function delete_todo_success(id) { return { type: TODO_CONSTS.DELETE_TODO_SUCCESS, id: id }; }
function delete_todo_failure() { return { type: TODO_CONSTS.DELETE_TODO_FAILURE }; }

export function create_todo_box_show() { return { type: TODO_CONSTS.CREATE_TODO_BOX_SHOW }; }
export function create_todo_box_hide() { return { type: TODO_CONSTS.CREATE_TODO_BOX_HIDE }; }

export function update_todo_box_show(todo) { return { type: TODO_CONSTS.UPDATE_TODO_BOX_SHOW, todo: todo }; }
export function update_todo_box_hide() { return { type: TODO_CONSTS.UPDATE_TODO_BOX_HIDE }; }

export function move_to_inprogress_box_show() { return { type: TODO_CONSTS.MOVE_TO_INPROGRESS_BOX_SHOW }; }
export function move_to_inprogress_box_hide() { return { type: TODO_CONSTS.MOVE_TO_INPROGRESS_BOX_HIDE }; }

function move_to_inprogress_request(id) { return { type: TODO_CONSTS.MOVE_TO_INPROGRESS_REQUEST, id: id }; }
function move_to_inprogress_success() { return { type: TODO_CONSTS.MOVE_TO_INPROGRESS_SUCCESS }; }
function move_to_inprogress_failure(oldTodo) { return { type: TODO_CONSTS.MOVE_TO_INPROGRESS_FAILURE, todo: oldTodo }; }