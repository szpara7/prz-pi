import React from 'react';

import './RatingBox.css';

class RatingBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="d-inline-block">
                <button type="button" onClick={this.props.onLikeClick} className="btn btn-success rounded-0"><span><i className="far fa-thumbs-up"></i>Like {this.props.likes}</span></button>
                <button type="button" onClick={this.props.onDislikeClick} className="btn btn-secondary rounded-0"><span><i className="far fa-thumbs-down"></i>Dislike {this.props.unlikes}</span></button>
            </div>
        );
    }
}

export default RatingBox;