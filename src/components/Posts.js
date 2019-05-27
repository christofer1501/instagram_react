import React, {Component} from 'react';
import User from './User';
import Post from './Post';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Posts extends Component {
  InstaService = new InstaService(); //без this.state тк class fields кот только выйдет в es10
  state = {
    posts: [],
    error: false,
  }

  //у любого компонента есть жизненный цикл lifecycle hooks: появление mount, обновление, удаление, ошибка внутри комп 
  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.InstaService.getAllPosts() //получили промис
    .then(this.onPostsLoaded)
    .catch(this.onError)
  }

  onPostsLoaded = (posts) => {
    this.setState({
      // posts: posts, //старый способ
      // error: false,
      posts, //es6 способ short object notation
      error: false,
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
    })
  }

renderItems(arr) {
  return arr.map((item) => {
    const {name, altname, photo, src, alt, descr, id} = item;
    return (
      <div key={id} className="post">
        <User 
          src={photo}
          alt={altname}
          name={name} min/>
        <img src={src} alt={alt}></img>
        <div className="post__name">
          {name}
        </div>
        <div className="post__descr">
          {descr}
        </div>
      </div>
    )
  })
}

  render() {
    const {error, posts} = this.state;
    if (error) {
      return <ErrorMessage/>
    }

    const items = this.renderItems(posts);

    return (
      <div className="left">
        {/* <Post alt="nature" src="https://st.depositphotos.com/1005145/2341/i/450/depositphotos_23418410-stock-photo-pink-flowers-in-the-mountains.jpg" />
        <Post alt="nature" src="https://cdn131.picsart.com/296194633135201.jpg?c256x256" />       */}
        {items}
      </div>
    )
  }
}