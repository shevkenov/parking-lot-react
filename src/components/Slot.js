import React from 'react';

import classes from './Slot.module.css';

const Slot = ({children, handleClick, isTaken, plate}) => {
  return (
    <div className={`${classes.slot} ${isTaken && classes.busy}`} onClick={() => handleClick(plate)}>{children}</div>
  )
}

export default Slot