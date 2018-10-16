import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import IdeaContent from '../components/IdeaContent/IdeaContent.jsx';
import { fetchIdeaList } from '../actions/ideaActions.js';
import { fetch_users } from '../actions/userActions.js';

const mapStateToProps = (state) => {
    return {
        isLoading: state.idea.isLoading,
        ideas: state.idea.ideas,
        searchExpression: state.search.expression
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIdeaList: () => dispatch(fetchIdeaList()),
        fetchUsers: () => dispatch(fetch_users())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (IdeaContent));