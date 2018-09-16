import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './IdeaItem.css';
import RatingBox from '../RatingBox/RatingBox.jsx';
import { updateIdea } from '../../actions/ideaActions.js';

class IdeaItem extends Component {
    constructor(props) {
        super(props);

        this.addLike = this.addLike.bind(this);
        this.addDislike = this.addDislike.bind(this);
    }

    addLike() {
        const newIdea = this.props.idea;
        newIdea.likes += 1;

        this.props.updateIdea(this.props.idea, newIdea);
    }

    addDislike() {
        const newIdea = this.props.idea;
        newIdea.dislikes += 1;

        this.props.updateIdea(this.props.idea, newIdea);
    }

    render() {
        return (
            <div className="col-sm-12 col-md-6 mt-4">
                <div className="item p-2">
                    <div className="d-flex justify-content-center">
                        <h4>{this.props.idea.title}</h4>
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateIdea: (oldIdea, newIdea) => dispatch(updateIdea(oldIdea, newIdea))
    };
}

export default withRouter(connect(null, mapDispatchToProps) (IdeaItem));