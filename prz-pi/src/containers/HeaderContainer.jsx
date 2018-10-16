import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header/Header';
import { set_expresion } from '../actions/searchActions';

const mapDispatchToProps = (dispatch) => {
    return {
        set_expression: (expression) => dispatch(set_expresion(expression))
    };
}


export default withRouter(connect(null, mapDispatchToProps)(Header));
