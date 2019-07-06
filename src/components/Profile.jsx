import React from 'react';
import User from './User';
import Pallete from './Pallete';

const Profile = () => (
  <div className="container profile">
    <User
      src="https://pbs.twimg.com/profile_images/2654273615/26f23912924bb6ee9fb46d23b30f2509.jpeg"
      alt="man"
      name="some_coolman"
    />
    <Pallete/>
  </div>
);

export default Profile;