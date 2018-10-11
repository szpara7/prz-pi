import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './IdeaItem.css';
import RatingBox from '../RatingBox/RatingBox.jsx';
import { updateIdea, deleteIdea, update_idea_box_show, moveToTodo } from '../../actions/ideaActions.js';

class IdeaItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMoveToTodoBoxOpen: false
        };

        this.addLike = this.addLike.bind(this);
        this.addDislike = this.addDislike.bind(this);
        this.deleteIdea = this.deleteIdea.bind(this);
        this.update_idea_box_show = this.update_idea_box_show.bind(this);
        this.moveToTodo = this.moveToTodo.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    addLike() {
        const newIdea = Object.assign({}, this.props.idea);
        newIdea.likes += 1;

        this.props.updateIdea(this.props.idea, newIdea);
    }

    addDislike() {
        const newIdea = Object.assign({}, this.props.idea);
        newIdea.dislikes += 1;

        this.props.updateIdea(this.props.idea, newIdea);
    }

    deleteIdea(e) {
        this.props.deleteIdea(this.props.idea.id);
    }

    update_idea_box_show() {
        this.props.update_idea_box_show(this.props.idea);
    }

    moveToTodo() {
        this.props.moveToTodo(this.props.idea);
    }

    toggleForm() {
        this.setState(prevState => ({
            isMoveToTodoBoxOpen: !prevState.isMoveToTodoBoxOpen
        }));
    }

    render() {

        const showBox = this.state.isMoveToTodoBoxOpen;

        return (
            <div className="col-sm-12 col-md-6 mt-4">
                <div className="item p-2">
                    <div className="clearfix">
                        <h4 className="float-left">{this.props.idea.title}</h4>
                        <div className="p-2 float-right dot-action dropleft">
                            <i className="fas fa-ellipsis-v fa-2x" data-toggle="dropdown"></i>
                            <ul className="dropdown-menu dropdown-menu border-0 rounded-0">
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.toggleForm}>MOVE TO TODO</a></li>
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.update_idea_box_show}>EDIT</a></li>
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.deleteIdea}>DELETE</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around text-justify">
                        <p>
                            {this.props.idea.description}
                        </p>
                    </div>
                    <div className="d-flex justify-content-end">
                        <RatingBox onLikeClick={this.addLike} onDislikeClick={this.addDislike} likes={this.props.idea.likes} unlikes={this.props.idea.dislikes} />
                        {
                            showBox &&
                            <div className="todo-form p-2">
                                <form onSubmit={this.handleSubmit}>
                                    <h2>MOVE TO TODO</h2>
                                    <div className="form-group">
                                        <h4 htmlFor="title">Assign to</h4>
                                        <select class="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="btn-group-lg">
                                        <button type="button" className="btn btn-warning rounded-0 col-6" onClick={this.toggleForm}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
                                        <button type="submit" className="btn btn-success rounded-0 col-6"><i className="fas fa-plus"></i> Save</button>
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

IdeaItem.propTypes = {
    updateIdea: PropTypes.func.isRequired,
    deleteIdea: PropTypes.func.isRequired,
    update_idea_box_show: PropTypes.func.isRequired,
    moveToTodo: PropTypes.func.isRequired,
    idea: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        dislikes: PropTypes.number.isRequired
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateIdea: (oldIdea, newIdea) => dispatch(updateIdea(oldIdea, newIdea)),
        deleteIdea: (id) => dispatch(deleteIdea(id)),
        update_idea_box_show: (idea) => dispatch(update_idea_box_show(idea)),
        moveToTodo: (idea) => dispatch(moveToTodo(idea))
    };
}

export default withRouter(connect(null, mapDispatchToProps)(IdeaItem));