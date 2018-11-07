import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import DoneUpdate from '../components/DoneUpdate/DoneUpdate.jsx';
import { updateDone, update_done_box_hide } from '../actions/doneActions';

const mapDispatchToProps = (dispatch) => {
    return {
        updateDone: (oldDone, newDone) => dispatch(updateDone(oldDone, newDone)),
        update_done_box_hide: () => dispatch(update_done_box_hide()),
    };
};

const mapStateToProps = (state) => {
    return {
        done: state.done.doneToUpdate,
        isUpdateDoneBoxOpen: state.done.isUpdateDoneBoxOpen
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DoneUpdate));