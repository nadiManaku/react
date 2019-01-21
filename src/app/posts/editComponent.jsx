import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditPostComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data  = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    state = {}
    render() {
        return (
            <form className="form" action="" onSubmit={this.handleEdit}>
                <input type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} />
                <textarea name="" id="" cols="30" rows="10" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message}></textarea>
                <button>Update</button>
            </form>);
    }
}

export default connect()(EditPostComponent);