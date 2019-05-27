import React from 'react';
import img from '../error.png';

const ErrorMessage = () => {
  return (
    //react fragment
    <> 
      <img src={img} alt="error"></img>
    </>
  )
}

export default ErrorMessage;