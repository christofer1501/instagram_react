import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
  InstaService = new InstaService(); //без this.state тк class fields кот только выйдет в es10
  state = {
    users: [],
    error: false,
  }

  //у любого компонента есть жизненный цикл lifecycle hooks: появление mount, обновление, удаление, ошибка внутри комп 
  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this.InstaService.getAllUsers() //получили промис
    .then(this.onUsersLoaded)
    .catch(this.onError)
  }

  onUsersLoaded = (users) => {
    this.setState({
      // posts: posts, //старый способ
      // error: false,
      users, //es6 способ short object notation
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
      const {name, altname, photo} = item;
      return (
        <User 
          src={photo}
          alt={altname}
          name={name} min/>
      )
    })
  }

  render() {
    const {error, users} = this.state;
    if (error) {
      return <ErrorMessage/>
    }

    const items = this.renderItems(users);

    return (
      <div className="right">
        <User 
          src="http://buben.fm/img/artist/256/25486.png"
          alt="man" 
          name="ben_light"/>
        <div className="users__block">
          {items}
        </div>
      </div>
    )
  }
}