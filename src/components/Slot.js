import React from 'react';

import classes from './Slot.module.css';

const Slot = ({children, handleClick}) => {
  return (
    <div className={`${classes.slot} ${classes.busy}`} onClick={handleClick}>{children}</div>
  )
}

export default Slot