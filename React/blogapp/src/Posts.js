import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const postList = data.map((item) => new Post(item.id, item.title, item.body));
        this.setState({ posts: postList });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true, error });
        alert('Error loading posts: ' + error.message);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An unexpected error occurred in Posts component: ' + error.toString());
    console.error('Error component boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error loading posts. Please try again later.</h2>;
    }

    return (
      <div className="posts-container">
        <h2>Blog Posts List</h2>
        {this.state.posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          this.state.posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.id}. {post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;
