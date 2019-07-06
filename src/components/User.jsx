import React from 'react';
import PropTypes from 'prop-types';

const User = ({ src, alt, name, min }) => (
  <a href="#" className={ min ? "user min" : "user" }>
    <img  src={ src } alt={ alt } />
    <div>{ name }</div>
  </a>
);

export default User;

User.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  min: PropTypes.bool,
};

User.defaultProps = {
  src: 'https://kaarygar.com/images/profile/no-user.jpg',
  alt: 'Изображение пользователя',
  min: false,
};