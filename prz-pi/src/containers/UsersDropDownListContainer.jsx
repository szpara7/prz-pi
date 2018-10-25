import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserDropDownList from '../components/UsersDropDownList/UserDropDownList';

const mapStateToProps = (state) => {
    return {
        users: state.user.users
    };
}

export default withRouter(connect(mapStateToProps, null)(UserDropDownList));