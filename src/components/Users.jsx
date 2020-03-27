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
    const { error, users } = this.state;
    if (error) {
      return <ErrorMessage/>
    };

    return (
      <div className="right">
        <User 
          src="https://pbs.twimg.com/profile_images/1189975869978300416/HBZhNk27_400x400.jpg"
          alt="Кристина Фролова"
          name="_chrisohara_"
        />
        <div className="users__block">
          {
            users.map(({ alt, name, altname, photo }) => (
              <User 
                key={ alt }
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