import React from 'react';
import User from './User';
import Pallete from './Pallete';

const Profile = () => (
  <div className="container profile">
    <User
      src="https://pbs.twimg.com/profile_images/1189975869978300416/HBZhNk27_400x400.jpg"
      alt="Кристина Фролова"
      name="_chrisohara_"
    />
    <Pallete/>
  </div>
);

export default Profile;