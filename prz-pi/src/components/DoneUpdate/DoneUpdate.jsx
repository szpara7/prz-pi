import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DoneUpdate.css';
import UsersDropDownListContainer from '../../containers/UsersDropDownListContainer';

class DoneUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            isSubmited: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    static getDerivedStateFromProps(props, state) {        
        if (props.isUpdateDoneBoxOpen && !state.isSubmited && 
            (state.title === '' && state.description === '')) {
            return {
                title: props.done.title,
                description: props.done.description
            };
        }
        else if(state.isSubmited) {

            return { 
                isSubmited: false,
                title: '',
                description: ''
            };
        }
        return null;
    }

    closeForm(e) {
        e.preventDefault();
        this.props.update_done_box_hide();

        this.setState({
            title: '',
            description: '',
        });
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const newDone = {
            id: this.props.done.id,
            title: this.state.title,
            description: this.state.description,
            modelStatus: 4,
            likes: this.props.done.likes,
            dislikes: this.props.done.dislikes,
            userId: this.props.done.userId,
            startDate: this.props.done.startDate,
            endDate: this.props.done.endDate
        };

        this.setState({
            isSubmited: true
        });        

        this.props.updateDone(this.props.done, newDone);
    }

    render() {

        if (this.props.isUpdateDoneBoxOpen) {
            return (
                <div className="h-100 done-update-form bg-secondary float-lg-left p-3 col-sm-12 col-lg-3">
                    <div className="justify-content-around">
                        <form onSubmit={this.handleSubmit}>
                            <h2>UPDATE DONE</h2>
                            <div className="form-group">
                                <h4 htmlFor={this.state.title}>Title</h4>
                                <input type="text" name="title" className="form-control" onChange={this.handleInput} value={this.state.title} required />
                            </div>
                            <div className="form-group">
                                <h4 htmlFor={this.state.description}>Description</h4>
                                <input type="text" name="description" className="form-control" onChange={this.handleInput} value={this.state.description} required />
                            </div>                           
                            <div className="btn-group-lg">
                                <button type="button" className="btn btn-warning rounded-0 col-6" onClick={this.closeForm}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
                                <button type="submit" className="btn btn-success rounded-0 col-6"><i className="fas fa-plus"></i> Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }
}


DoneUpdate.propTypes = {
    isUpdateDoneBoxOpen: PropTypes.bool.isRequired,
    update_done_box_hide: PropTypes.func.isRequired,
    updateDone: PropTypes.func.isRequired
};

export default DoneUpdate;
