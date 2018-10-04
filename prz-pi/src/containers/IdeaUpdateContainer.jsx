import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import IdeaUpdate from '../components/IdeaUpdate/IdeaUpdate';
import { updateIdea, update_idea_box_hide } from '../actions/ideaActions';

const mapDispatchToProps = (dispatch) => {
    return {
        updateIdea: (oldIdea, newIdea) => dispatch(updateIdea(oldIdea, newIdea)),
        update_idea_box_hide: () => dispatch(update_idea_box_hide()),
    };
};

const mapStateToProps = (state) => {
    return {
        idea: state.idea.ideaToUpdate,
        isUpdateIdeaBoxOpen: state.idea.isUpdateIdeaBoxOpen
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IdeaUpdate));