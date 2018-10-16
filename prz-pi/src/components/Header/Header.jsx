import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.set_expression(e.target.value);
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
                            <input className="form-control mr-sm-2" onChange={this.handleChange} type="search" placeholder="Search" aria-label="Wyszukaj" />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {
    set_expression: PropTypes.func.isRequired
};
