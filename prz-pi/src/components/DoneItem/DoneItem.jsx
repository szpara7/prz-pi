import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './DoneItem.css';
import RatingBox from '../RatingBox/RatingBox.jsx';
import { updateDone, deleteDone, update_done_box_show, backToInProgress } from '../../actions/doneActions.js';

class DoneItem extends Component {
    constructor(props) {
        super(props);

        this.deleteDone = this.deleteDone.bind(this);
        this.update_done_box_show = this.update_done_box_show.bind(this);
        this.backToInProgress = this.backToInProgress.bind(this);
    }

    deleteDone(e) {
        this.props.deleteDone(this.props.done.id);
    }

    update_done_box_show() {
        this.props.update_done_box_show(this.props.done);
    }

    backToInProgress() {
        this.props.backToInProgress(this.props.done, 3); //status dla todo
    }
    

    render() {   

        return (
            <div className="col-sm-12 col-md-6 mt-4" >
                <div className="item p-2">
                    <div className="clearfix">
                        <h4 className="float-left">{this.props.done.title}</h4>
                        <div className="p-2 float-right dot-action dropleft">
                            <i className="fas fa-ellipsis-v fa-2x" data-toggle="dropdown"></i>
                            <ul className="dropdown-menu dropdown-menu border-0 rounded-0">
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.backToInProgress}>BACK TO IN PROGRESS</a></li>
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.update_done_box_show}>EDIT</a></li>
                                <li><a className="btn btn-outline-dark border-0 w-100 rounded-0" onClick={this.deleteDone}>DELETE</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around text-justify">
                        <p>
                            {this.props.done.description}
                        </p>
                    </div>
                    <div>
                        <div>
                            <p><b>Assigne to: </b>{this.props.users.find(t => t.id == this.props.done.userId).fullName}</p>
                            <p><b>Start date: </b>{this.props.done.startDate}</p>
                            <p><b>End date: </b>{this.props.done.endDate}</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <RatingBox likes={this.props.done.likes} unlikes={this.props.done.dislikes} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DoneItem.propTypes = {
    updateDone: PropTypes.func.isRequired,
    deleteDone: PropTypes.func.isRequired,
    update_done_box_show: PropTypes.func.isRequired,
    backToInProgress: PropTypes.func.isRequired,
    done: PropTypes.shape({
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
        fullName: PropTypes.string.isRequired
    }))
};

const mapStateToProps = (state)=> {
    return {
        users: state.user.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDone: (oldDone, newDone) => dispatch(updateDone(oldDone, newDone)),
        deleteDone: (id) => dispatch(deleteDone(id)),
        update_done_box_show: (done) => dispatch(update_done_box_show(done)),
        backToInProgress: (done, modelStatus) => dispatch(backToInProgress(done, modelStatus))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DoneItem));