import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TodoUpdate from '../components/TodoUpdate/TodoUpdate.jsx';
import { updateTodo, update_todo_box_hide } from '../actions/todoActions';

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodo: (oldTodo, newTodo) => dispatch(updateTodo(oldTodo, newTodo)),
        update_todo_box_hide: () => dispatch(update_todo_box_hide()),
    };
};

const mapStateToProps = (state) => {
    return {
        todo: state.todo.todoToUpdate,
        isUpdateTodoBoxOpen: state.todo.isUpdateTodoBoxOpen
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoUpdate));