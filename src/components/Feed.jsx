import React from 'react';
import Posts from './Posts';
import Users from './Users';

const Feed = () => (
  <div className="container feed">
    <Posts/>
    <Users/>
  </div>
)

export default Feed;