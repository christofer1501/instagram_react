import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Post = ({ src, alt }) => (
  <div className="post">
    <User 
      src="http://buben.fm/img/artist/256/25486.png"
      alt="man" 
      name="ben_light" 
      min
    />
    <img src={ src } alt={ alt } />
    <div className="post__name">
      some acc
    </div>
    <div className="post__descr">
      some info about post
    </div>
  </div>
);

export default Post;

Post.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Post.defaultProps = {
  src: 'https://www.automaxindiana.com/templates/10567/images/770x450.gif',
  alt: 'Здесь должно быть фото поста',
};