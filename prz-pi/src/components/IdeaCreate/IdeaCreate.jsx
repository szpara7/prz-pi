import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './IdeaCreate.css';

class IdeaCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        };

        this.toggleForm = this.toggleForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleForm() {
        if (this.props.isCreateIdeaBoxOpen) {
            this.props.create_idea_box_hide();

            this.setState({
                title: '',
                description: ''
            });           
        }
        else {
            this.props.create_idea_box_show();
            window.scrollTo(0, 56);

            this.setState({
                title: '',
                description: ''
            });
        } 
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const idea = {
            title: this.state.title,
            description: this.state.description,
            modelStatus: 1,
            likes: 0,
            dislikes: 0
        };     

        this.props.createIdea(idea);
    }


    render() {
        if (!this.props.isCreateIdeaBoxOpen) {
            return (
                <div onClick={this.toggleForm} className="d-flex float-left btn btn-success rounded-0 p-lg-2 p-1 idea-create">
                    <div className="justify-content-around">
                        <div>
                            CREATE
                        </div>
                        <div className="bg-primary d-inline-flex p-2 justify-content-around rounded-circle">
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div ref={e => this.box = e} className="h-100 idea-create-form bg-secondary float-lg-left p-3 col-sm-12 col-lg-3">
                    <div className="justify-content-around">
                        <form onSubmit={this.handleSubmit}>
                            <h2>CREATE IDEA</h2>
                            <div className="form-group">
                                <h4 htmlFor="title">Title</h4>
                                <input type="text" name="title" className="form-control" onInput={this.handleInput} value={this.state.title} required />
                            </div>
                            <div className="form-group">
                                <h4 htmlFor="description">Description</h4>
                                <input type="text" name="description" className="form-control" onInput={this.handleInput} value={this.state.description} required />
                            </div>
                            <div className="btn-group-lg">
                                <button type="button" className="btn btn-warning rounded-0 col-6" onClick={this.toggleForm}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
                                <button type="submit" className="btn btn-success rounded-0 col-6"><i className="fas fa-plus"></i> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
}

IdeaCreate.propTypes = {
    isCreateIdeaBoxOpen: PropTypes.bool.isRequired,
    create_idea_box_show: PropTypes.func.isRequired,
    create_idea_box_hide: PropTypes.func.isRequired,
    createIdea: PropTypes.func.isRequired
};

export default IdeaCreate;
