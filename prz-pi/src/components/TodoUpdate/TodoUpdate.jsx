import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoUpdate.css';

class TodoUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            isSubmited: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    closeForm(e) {
        e.preventDefault();
        this.props.update_todo_box_hide();

        this.setState({
            title: '',
            description: ''
        });
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: this.props.todo.id,
            title: this.state.title,
            description: this.state.description,
            modelStatus: 2,
            likes: this.props.todo.likes,
            dislikes: this.props.todo.dislikes
        };

        this.setState({
            isSubmited: true
        });

        this.props.updateTodo(this.props.todo, newTodo);
    }

    static getDerivedStateFromProps(props, state) {        
        if (props.isUpdateTodoBoxOpen && !state.isSubmited && (state.title === '' && state.description === '')) {
            return {
                title: props.todo.title,
                description: props.todo.description
            };
        }
        else if(state.isSubmited) {
            return { 
                isSubmited: false,
                title: '',
                description: ''
            };
        }
        return null;
    }

    render() {

        if (this.props.isUpdateTodoBoxOpen) {
            return (
                <div className="h-100 todo-update-form bg-secondary float-lg-left p-3 col-sm-12 col-lg-3">
                    <div className="justify-content-around">
                        <form onSubmit={this.handleSubmit}>
                            <h2>UPDATE TODO</h2>
                            <div className="form-group">
                                <h4 htmlFor="title">Title</h4>
                                <input type="text" name="title" className="form-control" onChange={this.handleInput} value={this.state.title} required />
                            </div>
                            <div className="form-group">
                                <h4 htmlFor="description">Description</h4>
                                <input type="text" name="description" className="form-control" onChange={this.handleInput} value={this.state.description} required />
                            </div>
                            <div className="btn-group-lg">
                                <button type="button" className="btn btn-warning rounded-0 col-6" onClick={this.closeForm}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
                                <button type="submit" className="btn btn-success rounded-0 col-6"><i className="fas fa-plus"></i> Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }
}


TodoUpdate.propTypes = {
    isUpdateTodoBoxOpen: PropTypes.bool.isRequired,
    update_todo_box_hide: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
};

export default TodoUpdate;
