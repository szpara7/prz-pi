import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import IdeaContent from '../components/IdeaContent/IdeaContent.jsx';
import { fetchIdeaList } from '../actions/ideaActions.js';

const mapStateToProps = (state) => {
    return {
        isLoading: state.idea.isLoading,
        ideas: state.idea.ideas
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIdeaList: () => dispatch(fetchIdeaList())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (IdeaContent));