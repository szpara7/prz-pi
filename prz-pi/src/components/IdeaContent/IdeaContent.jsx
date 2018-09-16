import React, { Component } from 'react';

import LoadingModal from '../LoadingModal/LoadingModal.jsx';
import IdeaItem from '../IdeaItem/IdeaItem.jsx';
import './IdeaContent.css';

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
                <div className="row container-border justify-content-around">
                    {this.props.ideas.map((item, key) =>
                        <IdeaItem idea={item} key={key} />
                    )}
                </div>
            </div>
        );
    }
}

export default IdeaContent;