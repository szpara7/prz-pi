import React, { Component } from 'react';

import LoadingModal from '../LoadingModal/LoadingModal.jsx';

class IdeaContent extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchIdeaList();
    }

    render() {
        return (
            <div className="container">
                <LoadingModal isLoading={this.props.isLoading}></LoadingModal>
                {this.props.ideas.map((item, key) => 
                    <h1 key={key}>{item.title}</h1>
                )}
            </div>
        );
    }
}

export default IdeaContent;