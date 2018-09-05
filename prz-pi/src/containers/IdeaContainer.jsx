import { withRouter } from 'react-router-dom';
import { connect} from 'react-redux';

import IdeaContent from '../components/IdeaContent/IdeaContent.jsx';
import { fetchIdeaList } from '../actions/ideaActions.js';

const mapStateToProps = (state) => {
    return {
        ideas: state.idea.ideas,
        isLoading: state.idea.isLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIdeaList: () => dispatch(fetchIdeaList())
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IdeaContent));