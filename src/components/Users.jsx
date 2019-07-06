import React, { Component } from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
  InstaService = new InstaService();
  state = {
    users: [],
    error: false,
  };

  componentDidMount() {
    this.InstaService.getAllUsers()
    .then(this.onUsersLoaded)
    .catch(this.onError)
  };

  onUsersLoaded = (users) => {
    this.setState({
      users,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
    });
  };

  render() {
    const {error, users} = this.state;
    if (error) {
      return <ErrorMessage/>
    };

    return (
      <div className="right">
        <User 
          src="http://buben.fm/img/artist/256/25486.png"
          alt="man" 
          name="ben_light"
        />
        <div className="users__block">
          {
            users.map(({ name, altname, photo }) => (
              <User 
                src={ photo }
                alt={ altname }
                name={ name } 
                min
              />
            ))
          }
        </div>
      </div>
    )
  };
};