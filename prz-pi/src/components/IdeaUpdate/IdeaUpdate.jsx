import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {polyfill} from 'react-lifecycles-compat';
import './IdeaUpdate.css';

class IdeaUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    closeForm() {
        this.setState({
            title: '',
            description: ''
        });

        this.props.update_idea_box_hide();
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const newIdea = {
            id: this.props.idea.id,
            title: this.state.title,
            description: this.state.description,
            modelStatus: 1,
            likes: this.props.idea.likes,
            dislikes: this.props.idea.dislikes
        };

        this.props.updateIdea(this.props.idea, newIdea);
    }

    static getDerivedStateFromProps(props, state) {

        if(state.title !== props.idea.title && state.description !== props.idea.description)
        {
            if(props.idea.title !== undefined && props.idea.description !== undefined) {
                return {
                    title: props.idea.title,
                    description: props.idea.description
                };
            }
        }       

        return null;
    }

    render() {
        
        if (this.props.isUpdateIdeaBoxOpen) {           

            return (
                <div className="h-100 idea-update-form bg-secondary float-lg-left p-3 col-sm-12 col-lg-3">
                    <div className="justify-content-around">
                        <form onSubmit={this.handleSubmit}>
                            <h2>UPDATE IDEA</h2>
                            <div className="form-group">
                                <h4 htmlFor="title">Title</h4>
                                <input type="text" name="title" className="form-control" onChange={this.handleInput} value={this.state.title} required />
                            </div>
                            <div className="form-group">
                                <h4 htmlFor="description">Description</h4>
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


IdeaUpdate.propTypes = {
    isUpdateIdeaBoxOpen: PropTypes.bool.isRequired,
    update_idea_box_hide: PropTypes.func.isRequired,
    updateIdea: PropTypes.func.isRequired
};

export default IdeaUpdate;
