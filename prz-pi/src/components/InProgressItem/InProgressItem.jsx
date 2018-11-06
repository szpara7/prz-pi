import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './InProgressItem.css';
import RatingBox from '../RatingBox/RatingBox.jsx';
import { updateInProgress, deleteInProgress, update_inProgress_box_show, moveTo } from '../../actions/inProgressActions.js';

class InProgressItem extends Component {
    constructor(props) {
        super(props);

        this.deleteInProgress = this.deleteInProgress.bind(this);
        this.update_inProgress_box_show = this.update_inProgress_box_show.bind(this);
        this.backToTodo = this.backToTodo.bind(this);
        this.moveToDone = this.moveToDone.bind(this);
    }

    deleteInProgress(e) {
        this.props.deleteInProgress(this.props.inProgress.id);
    }

    update_inProgress_box_show() {
        this.props.update_inProgress_box_show(this.props.inProgress);
    }

    backToTodo() {
        this.props.moveTo(this.props.inProgress, 2); //status dla todo
    }

    moveToDone() {
        let inProgress = Object.assign({}, this.props.inProgress);
        inProgress.endDate = new Date();

        this.props.moveTo(inProgress, 4) //status dla done
    }

    render() {   

        return (
            <div className="col-sm-12 col-md-6 mt-4" >
                <div className="item p-2">
                    <div className="clearfix">
                        <h4 className="float-left">{this.props.inProgress.title}</h4>
                        <div className="p-2 float-right dot-action dropleft">
                            <i className="fas fa-ellipsis-v fa-2x" data-toggle="dropdown"></i>
                            <ul className="dropdown-menu dropdown-menu border-0 rounded-0">
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.backToTodo}>BACK TO TODO</a></li>
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.moveToDone}>MOVE TO DONE</a></li>
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.update_inProgress_box_show}>EDIT</a></li>
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.deleteinProgress}>DELETE</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around text-justify">
                        <p>
                            {this.props.inProgress.description}
                        </p>
                    </div>
                    <div>
                        <div>
                            {this.props.users.find(t => t.id == this.props.inProgress.userId).fullName}
                        </div>
                        <div className="d-flex justify-content-end">
                            <RatingBox likes={this.props.inProgress.likes} unlikes={this.props.inProgress.dislikes} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

InProgressItem.propTypes = {
    updateInProgress: PropTypes.func.isRequired,
    deleteInProgress: PropTypes.func.isRequired,
    update_inProgress_box_show: PropTypes.func.isRequired,
    moveTo: PropTypes.func.isRequired,
    inProgress: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        dislikes: PropTypes.number.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired
    }),
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        fullName: PropTypes.string
    }))
};

const mapStateToProps = (state)=> {
    return {
        users: state.user.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateInProgress: (oldInProgress, newInProgress) => dispatch(updateInProgress(oldInProgress, newInProgress)),
        deleteInProgress: (id) => dispatch(deleteInProgress(id)),
        update_inProgress_box_show: (inProgress) => dispatch(update_inProgress_box_show(inProgress)),
        moveTo: (inProgress, modelStatus) => dispatch(moveTo(inProgress, modelStatus))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InProgressItem));