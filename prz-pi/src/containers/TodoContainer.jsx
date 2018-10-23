import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TodoContent from '../components/TodoContent/TodoContent.jsx';
import { fetchTodoList } from '../actions/todoActions.js';

const mapStateToProps = (state) => {
    return {
        isLoading: state.todo.isLoading,
        todos: state.todo.todos,
        searchExpression: state.search.expression
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodosList: () => dispatch(fetchTodoList())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (TodoContent));