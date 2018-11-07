import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DoneContent from '../components/DoneContent/DoneContent.jsx';
import { fetchDoneList } from '../actions/doneActions.js';
import { fetch_users } from '../actions/userActions.js';

const mapStateToProps = (state) => {
    return {
        isLoading: state.done.isLoading,
        done: state.done.done,
        searchExpression: state.search.expression,
        users: state.user.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDoneList: () => dispatch(fetchDoneList()),
        fetchUsers: () => dispatch(fetch_users())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (DoneContent));