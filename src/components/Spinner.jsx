import React from 'react';
import spinner from '../spinner.gif';

const Spinner = () => {
  return (
    //react fragment
    <> 
      <img src={spinner} alt="loading..."></img>
    </>
  )
}

export default Spinner;