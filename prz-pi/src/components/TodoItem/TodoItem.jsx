import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './TodoItem.css';
import RatingBox from '../RatingBox/RatingBox.jsx';
import { updateTodo, deleteTodo, update_todo_box_show, moveToInProgress } from '../../actions/todoActions.js';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.addLike = this.addLike.bind(this);
        this.addDislike = this.addDislike.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.update_todo_box_show = this.update_todo_box_show.bind(this);
    }

    addLike() {
        const newTodo = Object.assign({}, this.props.todo);
        newTodo.likes += 1;

        this.props.updateTodo(this.props.todo, newTodo);
    }

    addDislike() {
        const newTodo = Object.assign({}, this.props.todo);
        newTodo.dislikes += 1;

        this.props.updateTodo(this.props.todo, newTodo);
    }

    deleteTodo(e) {
        this.props.deleteTodo(this.props.todo.id);
    }

    update_todo_box_show() {
        this.props.update_todo_box_show(this.props.todo);
    }

    render() {

        return (
            <div className="col-sm-12 col-md-6 mt-4" >
                <div className="item p-2">
                    <div className="clearfix">
                        <h4 className="float-left">{this.props.todo.title}</h4>
                        <div className="p-2 float-right dot-action dropleft">
                            <i className="fas fa-ellipsis-v fa-2x" data-toggle="dropdown"></i>
                            <ul className="dropdown-menu dropdown-menu border-0 rounded-0">
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0">MOVE TO IN PROGRESS</a></li>
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.update_todo_box_show}>EDIT</a></li>
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.deleteTodo}>DELETE</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around text-justify">
                        <p>
                            {this.props.todo.description}
                        </p>
                    </div>
                    <div>
                        <div>
                            {/* {this.props.user.fullName} */}
                        </div>
                        <div className="d-flex justify-content-end">
                            <RatingBox onLikeClick={this.addLike} onDislikeClick={this.addDislike} likes={this.props.todo.likes} unlikes={this.props.todo.dislikes} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TodoItem.propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    update_todo_box_show: PropTypes.func.isRequired,
    idea: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        dislikes: PropTypes.number.isRequired
    })
};

const mapStateToProps = (state, props) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodo: (oldTodo, newTodo) => dispatch(updateTodo(oldTodo, newTodo)),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        update_todo_box_show: (todo) => dispatch(update_todo_box_show(todo))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoItem));