import React from 'react';

import classes from './Button.module.css';

const Button = ({handleClick}) => {
  return (
    <button className={classes} onClick={handleClick}>Park</button>
  )
}

export default Button