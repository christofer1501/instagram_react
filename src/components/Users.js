import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
      <User 
        src="http://buben.fm/img/artist/256/25486.png"
        alt="man" 
        name="ben_light"/>
      <div className="users__block">
        <User
          src="http://buben.fm/img/artist/256/25486.png"
          alt="man"
          name="ben_light"
          min />
        <User
          src="http://buben.fm/img/artist/256/25486.png"
          alt="man"
          name="ben_light"
          min />
        <User
          src="http://buben.fm/img/artist/256/25486.png"
          alt="man"
          name="ben_light"
          min />
        <User
          src="http://buben.fm/img/artist/256/25486.png"
          alt="man"
          name="ben_light"
          min />
      </div>
    </div>
  )
}