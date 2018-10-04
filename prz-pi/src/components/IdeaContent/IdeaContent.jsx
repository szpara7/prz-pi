import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import LoadingModal from '../LoadingModal/LoadingModal.jsx';
import './IdeaContent.css';
import IdeaItem from './../IdeaItem/IdeaItem.jsx';
import IdeaCreateContainer from '../../containers/IdeaCreateContainer.jsx';
import IdeaUpdateContainer from '../../containers/IdeaUpdateContainer.jsx';

class IdeaContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchIdeaList();
    }

    render() {
        const show = !this.props.isLoading;
        return (
            <div>
                <LoadingModal isLoading={this.props.isLoading} />
                {show &&
                    <React.Fragment>
                        <IdeaCreateContainer />
                        <IdeaUpdateContainer />
                        <div className="container">
                            <div className="row container-border justify-content-between">
                                {this.props.ideas.map((item, key) =>
                                    <IdeaItem idea={item} key={key} />
                                )}
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

IdeaContent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    ideas: PropTypes.array
};

export default IdeaContent;
