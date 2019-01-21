import React, { Component } from 'react';

class AddUserComponent extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            username: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        })
    }

    submitForm = () => {
        this.props.onAddUser(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name, username} = this.state;
        return (
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" name="name" value={name} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" type="text" name="username" value={username} onChange={this.handleChange}/>
                </div>
                <input type="button" className="btn btn-success" value="Add new user" onClick={this.submitForm}/>
            </form>
        );
    }
}

export default AddUserComponent;