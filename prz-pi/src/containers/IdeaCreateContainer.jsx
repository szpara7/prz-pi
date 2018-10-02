import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createIdea, create_idea_box_hide, create_idea_box_show } from '../actions/ideaActions.js';
import IdeaCreate from '../components/IdeaCreate/IdeaCreate.jsx';



const mapDispatchToProps = (dispatch) => {
    return {
        createIdea: (idea) => dispatch(createIdea(idea)),
        create_idea_box_hide: () => dispatch(create_idea_box_hide()),
        create_idea_box_show: () => dispatch(create_idea_box_show())
    };
}

const mapStateToProps = (state) => {
    return {
        isCreateIdeaBoxOpen: state.idea.isCreateIdeaBoxOpen
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IdeaCreate));