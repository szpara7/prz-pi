import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createTodo, create_todo_box_hide, create_todo_box_show } from '../actions/todoActions.js';
import TodoCreate from '../components/TodoCreate/TodoCreate.jsx';



const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todo) => dispatch(createTodo(todo)),
        create_todo_box_hide: () => dispatch(create_todo_box_hide()),
        create_todo_box_show: () => dispatch(create_todo_box_show())
    };
}

const mapStateToProps = (state) => {
    return {
        isCreateTodoBoxOpen: state.todo.isCreateTodoBoxOpen
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoCreate));