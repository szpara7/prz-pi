import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';
import { fetchIdeasBySearchFilter, fetchIdeaList } from '../../actions/ideaActions.js';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchExpression: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchExpression: e.target.value
        });
        if(e.target.value !== ''){
            this.props.search(e.target.value);
        }
        else {
            this.props.allIdeas();
        }
        
    }

    render() {
        const style = { "textDecoration": "none" };
        return (
            <div className="header-border shadow-lg">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">AgileBoard</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-lg-5">
                            <li className="nav-item mr-4 mb-1 mb-lg-0">
                                <NavLink to='/idea' style={style} className="nav-link btn-outline-success bg-dark">Idea</NavLink>
                            </li>
                            <li className="nav-item mr-4 mb-1 mb-lg-0">
                                <NavLink to='/todo' style={style} className="nav-link btn-outline-success bg-dark">Todo</NavLink>
                            </li>
                            <li className="nav-item mr-4 mb-1 mb-lg-0">
                                <NavLink to='/inProgress' style={style} className="nav-link btn-outline-success bg-dark">In Progress</NavLink>
                            </li>
                            <li className="nav-item mr-4 mb-1 mb-lg-0">
                                <NavLink to='/done' style={style} className="nav-link btn-outline-success bg-dark">Done</NavLink>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" onChange={this.handleChange} value={this.state.searchExpression} type="search" placeholder="Search" aria-label="Wyszukaj" />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        search: text => {
             dispatch(fetchIdeasBySearchFilter(text));
            },
        allIdeas: () => { 
            dispatch(fetchIdeaList());
        }
    };
}

export default connect(null, mapDispatchToProps)(Header);