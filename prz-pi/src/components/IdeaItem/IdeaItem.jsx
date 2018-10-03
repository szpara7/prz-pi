import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './IdeaItem.css';
import RatingBox from '../RatingBox/RatingBox.jsx';
import { updateIdea, deleteIdea } from '../../actions/ideaActions.js';

class IdeaItem extends Component {
    constructor(props) {
        super(props);

        this.addLike = this.addLike.bind(this);
        this.addDislike = this.addDislike.bind(this);
        this.deleteIdea = this.deleteIdea.bind(this);
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

    render() {
        return (
            <div className="col-sm-12 col-md-6 mt-4">
                <div className="item p-2">
                    <div className="clearfix">
                        <h4 className="float-left">{this.props.idea.title}</h4>
                        <div className="p-2 float-right dot-action dropleft">
                            <i className="fas fa-ellipsis-v fa-2x" data-toggle="dropdown"></i>
                            <div className="dropdown-menu dropdown-menu border-0 rounded-0">
                                <button className="btn btn-outline-dark border-0 w-100 rounded-0">MOVE</button>
                                <button className="btn btn-outline-dark border-0 w-100 rounded-0">EDIT</button>
                                <button className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.deleteIdea}>DELETE</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around text-justify">
                        <p>
                            {this.props.idea.description}
                        </p>
                    </div>
                    <div className="d-flex justify-content-end">
                        <RatingBox onLikeClick={this.addLike} onDislikeClick={this.addDislike} likes={this.props.idea.likes} unlikes={this.props.idea.dislikes} />
                    </div>
                </div>
            </div>
        );
    }
}

IdeaItem.propTypes = {
    updateIdea: PropTypes.func.isRequired,
    deleteIdea: PropTypes.func.isRequired,
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
        deleteIdea: (id) => dispatch(deleteIdea(id))
    };
}

export default withRouter(connect(null, mapDispatchToProps)(IdeaItem));