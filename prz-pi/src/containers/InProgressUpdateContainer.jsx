import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InProgressUpdate from '../components/InProgressUpdate/InProgressUpdate.jsx';
import { updateInProgress, update_inProgress_box_hide } from '../actions/inProgressActions';

const mapDispatchToProps = (dispatch) => {
    return {
        updateInProgress: (oldInProgress, newinProgress) => dispatch(updateInProgress(oldInProgress, newinProgress)),
        update_inProgress_box_hide: () => dispatch(update_inProgress_box_hide()),
    };
};

const mapStateToProps = (state) => {
    return {
        inProgress: state.inProgress.inProgressToUpdate,
        isUpdateInProgressBoxOpen: state.inProgress.isUpdateInProgressBoxOpen
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InProgressUpdate));