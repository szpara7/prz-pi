import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import LoadingModal from '../LoadingModal/LoadingModal.jsx';
import './DoneContent.css';
import DoneItem from './../DoneItem/DoneItem.jsx';
import DoneUpdateContainer from '../../containers/DoneUpdateContainer.jsx';

class DoneContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDoneList();
        this.props.fetchUsers();
    }

    render() {
        const show = !this.props.isLoading;
        return (
            <div>
                <LoadingModal isLoading={this.props.isLoading} />
                {show &&
                    <React.Fragment>
                        <DoneUpdateContainer />
                        <div className="container">
                            <div className="row container-border justify-content-between">
                                {this.props.done.filter(t => t.title.toUpperCase()
                                    .includes(this.props.searchExpression.toUpperCase())).map((item, key) =>
                                        <DoneItem done={item} key={key} />
                                    )}
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

DoneContent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    done: PropTypes.array,
    fetchDoneList: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    searchExpression: PropTypes.string.isRequired
};

export default DoneContent;
