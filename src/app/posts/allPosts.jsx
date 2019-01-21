import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post';
import EditPostComponent from './editComponent'

class AllPostsComponent extends Component {
    state = {}
    render() {
        return (<div className="post-container">
            <h1 className="post_heading">All Posts</h1>
            {this.props.posts.map((post) =>
                (
                    <div key={post.id}>
                        {post.editing ? <EditPostComponent key={post.id} post={post} /> : <Post key={post.id} post={post} />}
                    </div>
                ))
            }
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPostsComponent);