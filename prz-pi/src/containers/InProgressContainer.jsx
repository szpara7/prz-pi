import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import InProgressContent from '../components/InProgressContent/InProgressContent.jsx';
import { fetchInProgressList } from '../actions/inProgressActions.js';
import { fetch_users } from '../actions/userActions.js';

const mapStateToProps = (state) => {
    return {
        isLoading: state.inProgress.isLoading,
        inProgress: state.inProgress.inProgress,
        searchExpression: state.search.expression,
        users: state.user.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInProgressList: () => dispatch(fetchInProgressList()),
        fetchUsers: () => dispatch(fetch_users())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (InProgressContent));