import React, { Component } from 'react';

import './IdeaItem.css';
import RatingBox from '../RatingBox/RatingBox.jsx';


export default class IdeaItem extends Component {
    constructor(props) {
        super(props);
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