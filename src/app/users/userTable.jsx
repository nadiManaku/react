import React, { Component } from 'react';

class UserTableComponent extends Component {
    state = {}
    render() {
        return (<div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.length > 0 ? (
                        this.props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button onClick={() => this.props.onEditUser(user)} className="btn btn-primary mr-2">Edit</button>
                                    <button onClick={() => this.props.onDeleteUser(user.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) :
                        (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>);
    }
}

export default UserTableComponent;