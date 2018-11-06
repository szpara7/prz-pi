import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import LoadingModal from '../LoadingModal/LoadingModal.jsx';
import './InProgressContent.css';
import InProgressItem from './../InProgressItem/InProgressItem.jsx';
import InProgressUpdateContainer from '../../containers/InProgressUpdateContainer.jsx';

class InProgressContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchInProgressList();
        this.props.fetchUsers();
    }

    render() {
        const show = !this.props.isLoading;
        return (
            <div>
                <LoadingModal isLoading={this.props.isLoading} />
                {show &&
                    <React.Fragment>
                        <InProgressUpdateContainer />
                        <div className="container">
                            <div className="row container-border justify-content-between">
                                {this.props.inProgress.filter(t => t.title.includes(this.props.searchExpression)).map((item, key) =>
                                    <InProgressItem inProgress={item} key={key} />
                                )}
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

InProgressContent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    inProgress: PropTypes.array,
    fetchInProgressList: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired
};

export default InProgressContent;
