import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import LoadingModal from '../LoadingModal/LoadingModal.jsx';
import './TodoContent.css';
import TodoItem from './../TodoItem/TodoItem.jsx';
import TodoCreateContainer from '../../containers/TodoCreateContainer.jsx';
import TodoUpdateContainer from '../../containers/TodoUpdateContainer.jsx';

class TodoContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTodosList();
        this.props.fetchUsers();
    }

    render() {
        const show = !this.props.isLoading;
        return (
            <div>
                <LoadingModal isLoading={this.props.isLoading} />
                {show &&
                    <React.Fragment>
                        <TodoCreateContainer />
                        <TodoUpdateContainer />
                        <div className="container">
                            <div className="row container-border justify-content-between">
                                {this.props.todos.filter(t => t.title.toUpperCase()
                                    .includes(this.props.searchExpression.toUpperCase())).map((item, key) =>
                                    <TodoItem todo={item} key={key} />
                                )}
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

TodoContent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    todos: PropTypes.array,
    fetchTodosList: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired
};

export default TodoContent;
