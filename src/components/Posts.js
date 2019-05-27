import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post alt="nature" src="https://st.depositphotos.com/1005145/2341/i/450/depositphotos_23418410-stock-photo-pink-flowers-in-the-mountains.jpg" />
        <Post alt="nature" src="https://cdn131.picsart.com/296194633135201.jpg?c256x256" />      
      </div>
    )
  }
}