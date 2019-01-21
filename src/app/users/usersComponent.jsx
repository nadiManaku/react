import React, { Component } from 'react';
import UserTableComponent from './userTable';
import AddUserComponent from './addUser';
import EditUserComponent from './editUser';

class UsersComponent extends Component {

    state = {
        userData: [
            { id: 1, name: 'Tania', username: 'floppydiskette' },
            { id: 2, name: 'Craig', username: 'siliconeidolon' },
            { id: 3, name: 'Ben', username: 'benisphere' },
        ],
        user: {
            name: '',
            username: ''
        },
        edit: false
    }

    removeUser = (id) => {
        const { userData } = this.state;
        this.setState({
            userData: userData.filter(user => {
                return user.id !== id
            })
        })
    }

    handleSubmit = (data) => {
        data.id = this.state.userData.length + 1;
        this.setState({
            userData: [...this.state.userData, data]
        })
        
    }

    editUser = (data) => {
        this.setState({
            edit: true,
            user: data
        })
    }

    onUpdateUser = (data) => {

        var list = this.state.userData.filter(u => u.id !== data.id);
        this.setState({
            userData: [...list, data],
            edit: false
        })
        
    }

    render() {
        return (
            <div className="container">
                <h1>CRUD App with Hooks</h1>
                <div className="row">
                    <div className="col-md-6">
                        {this.state.edit ? (
                            <div>
                                <h2>Edit user</h2>
                                <EditUserComponent  user={this.state.user} updateUser={this.onUpdateUser}></EditUserComponent>
                            </div>

                        ) :
                            (
                                <div>
                                    <h2>Add user</h2>
                                    <AddUserComponent onAddUser={this.handleSubmit}></AddUserComponent>
                                </div>

                            )}


                    </div>
                    <div className="col-md-6">
                        <h2>View users</h2>
                        <UserTableComponent users={this.state.userData} onDeleteUser={this.removeUser} onEditUser={this.editUser}></UserTableComponent>
                    </div>
                </div>
            </div>);
    }
}

export default UsersComponent;