import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    state = {}
    render() {
        return (<div>
            <h2>{this.props.post.title}</h2>
            <p>{this.props.post.message}</p>
            <button className="btn btn-primary mr-2" onClick={() => this.props.dispatch({type: 'EDIT_POST', id: this.props.post.id})}>Edit</button>
            <button className="btn btn-danger" onClick={() =>this.props.dispatch({type: 'DELETE_POST', id: this.props.post.id})}>Delete</button>
        </div>);
    }
}

export default connect()(Post);