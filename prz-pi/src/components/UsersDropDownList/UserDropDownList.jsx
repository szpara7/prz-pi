import React, { Component } from 'react';

class UserDropDownList extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
             <select className="form-control" name="userId" value={this.props.userId} onChange={this.handleChange} required={true}>
                <option value=''></option>
                {this.props.users.map((user) =>
                    <option value={user.id} key={user.id}>{user.fullName}</option>
                )}
            </select>
        );
    }
}

export default UserDropDownList;