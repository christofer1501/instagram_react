import React, { Component } from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false,
  };

  componentDidMount() {
    this.InstaService.getAllPosts()
    .then(this.onPostsLoaded)
    .catch(this.onError)
  };

  onPostsLoaded = (posts) => {
    this.setState({
      posts, 
      error: false,
    })
  };

  onError = (err) => {
    this.setState({
      error: true,
    })
  };

  render() {
    const { error, posts } = this.state;
    if (error) {
      return <ErrorMessage/>
    };

    return (
      <div className="left">
        {
          posts.map((post) => {
            const {
              name,
              altname,
              photo,
              src,
              alt,
              descr,
              id } = post;
            return (
              <div key={ id } className="post">
                <User 
                  src={ photo }
                  alt={ altname }
                  name={ name }
                  min
                />
                <img src={ src } alt={ alt } />
                <div className="post__name">
                  { name }
                </div>
                <div className="post__descr">
                  { descr }
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }
};