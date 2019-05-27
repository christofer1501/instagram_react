import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User 
          src="http://buben.fm/img/artist/256/25486.png"
          alt="man" 
          name="ben_light" min/>
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some acc
        </div>
        <div className="post__descr">
          some info about post
        </div>
      </div>
    )
  }
}