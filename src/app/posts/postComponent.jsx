import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from '../reducer/postReducer';


import './postComponent.css';

import AllPostsComponent from './allPosts';
import PostFormComponent from './postForm';



const store = createStore(postReducer);

class PostComponent extends Component {

    state = {}
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                <PostFormComponent></PostFormComponent>
                <AllPostsComponent></AllPostsComponent>
                </Provider>
            </React.Fragment>
        );
    }
}

export default PostComponent;