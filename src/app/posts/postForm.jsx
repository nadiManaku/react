import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostFormComponent extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;

        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }

        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
        console.log(data)
    }
    state = {}
    render() {
        return (<div className="post-container">
            <h1 className="post_heading">Create Post</h1>
            <form className="form" action="" onSubmit={this.handleSubmit}>
                <input type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" />
                <textarea name="" id="" cols="30" rows="10" ref={(input) => this.getMessage = input} placeholder="Enter Post Message" ></textarea>
                <button>Post</button>
            </form>
        </div>);
    }
}

export default connect()(PostFormComponent);